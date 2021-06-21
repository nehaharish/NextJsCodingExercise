import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar,ListSubheader, Button,Box} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
    marginTop:50,
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

    return (
    <div className={classes.root}>
      <GridList spacing={20} cellHeight={180}   >
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <p className={classes.para} component="div">Welcome to Anime page</p>
        </GridListTile>
        {props.media.map((tile) => (
          <GridListTile style={{width:250}} key={tile.coverImage.large}>
            <img src={tile.coverImage.large} alt={tile.title.english} />
            <GridListTileBar
              title={tile.title.english}></GridListTileBar>
          </GridListTile>
        ))}
      </GridList>
    </div>
    )

}