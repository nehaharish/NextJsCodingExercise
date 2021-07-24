import {Chip,DialogContent,DialogContentText} from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    chip: {
      margin: theme.spacing(0.5),
    },
}))


export default function DialogBox(props){
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
      onClose(selectedValue);
    }
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">{selectedValue.title.english}</DialogTitle>
        <DialogContent >
            <DialogContentText ><b> Episodes:</b> {selectedValue.id}</DialogContentText>
            <DialogContentText ><b>Description:</b> {selectedValue.description}</DialogContentText>
            <DialogContentText  ><b>Genres: </b>
            {selectedValue.genres.map((tile) => (
            <Chip key="tile"
            className={classes.chip}
            label={tile}
          />
            ))}
            </DialogContentText>
            </DialogContent>
        
      </Dialog>
    )
  }