import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {ImageList, ImageListItem, ImageListItemBar} from '@material-ui/core';
import DialogForAnime from './DialogForAnime';
import Image from 'next/image';



const useStyles = makeStyles((theme) => ({

    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    para:{
        fontWeight: 'bold',
        fontSize: 20
    }
  }
  ));
export default function AnimeList({props}){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("")
  
    const openDialog = (value) => {
      setOpen(true);
      setSelectedValue(value)

    }
    const closeDialog =() => {
      setOpen(false);
    }
    
    return (
    <div className={classes.root}>
     
      <ImageList gap={10} rowHeight={280}  >
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <p className={classes.para} component="div">Welcome to Anime page</p>
        </ImageListItem>
        {props.media.map((tile) => (
          <ImageListItem  style={{width:200}} key={tile.coverImage.large} onClick={() => openDialog(tile)}>
            {/* <Image src={tile.coverImage.large} alt={tile.title.english} width={200}
      height={500} /> */}
      <img src={tile.coverImage.large} alt={tile.title.english} />
            <ImageListItemBar
              title={tile.title.english}></ImageListItemBar>
           </ImageListItem>          
        ))}
      </ImageList>
        {
          selectedValue ?
          <DialogForAnime selectedValue={selectedValue} open={open} onClose={closeDialog}  /> : ""
          } 
    </div>
    )

}