import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

const BoardItem = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemText>
                    {props.title}
                </ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem className={classes.nested}>
                            <ListItemText>
                                <b>Hvem:</b> {props.who}
                            </ListItemText> 
                        </ListItem>
                        <ListItem className={classes.nested}>
                            <ListItemText>
                            <b>E-post:</b> <a href={`mailto:${props.email}`}>{props.email}</a>
                            </ListItemText> 
                    </ListItem>
                </List>
            </Collapse>
        </div>
    )
}

export default BoardItem;