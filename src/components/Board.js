import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import BoardItem from './BoardItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Board = (props) => {
    const classes = useStyles();
    const boardItems = [];

    for (let member in props.members) {
      console.log(member)
      boardItems.push(<BoardItem title={props.members[member].title} who={props.members[member].who} email={props.members[member].email}/>)
    }

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
          {boardItems}
        </List>
    );
}

export default Board;