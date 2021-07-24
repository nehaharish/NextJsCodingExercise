
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:30,
        marginBottom:30

    },
  searchBox: {
    // marginLeft: 10,
    // paddingLeft: 10
  },
}));

export default function SearchBox({parentCallback}){

    const [searchString, setSearchString] = React.useState(undefined) 
    React.useEffect(() => {
        if(searchString === '')
        parentCallback(searchString)
      }, [searchString]);

    const classes = useStyles();

    const updateSearchString = (e) => {
        setSearchString(e.target.value);       
        e.preventDefault();
    }
    return(
        <form className={classes.root} onSubmit={(event) => {event.preventDefault(); return parentCallback(searchString)}}>
            <TextField  value={searchString} onChange={updateSearchString} 
                  className={classes.searchBox} fullWidth 
                  label="Search Anime" id="search-box" type="search"  variant="outlined"/>
        </form>
    )
}