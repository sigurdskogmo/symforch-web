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

const Board = () => {
    const classes = useStyles();
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <BoardItem title="Formann" who="Andreas Klavenes Berg" email="symforch-formann@samfundet.no"/>
            <BoardItem title="Nestleder" who="Sheikha Al-Nasser" email="symforch-nestleder@samfundet.no"/>
            <BoardItem title="Kasserer" who="Ingrid Sofie Lindberg" email="symforch-kasserer@samfundet.no"/>
            <BoardItem title="Materialforvalter" who="Ragnhild Fluge" email="symforch-material@samfundet.no"/>
            <BoardItem title="Styremedlem" who="Signe Wikeland" email="symforch-styremedlem@samfundet.no"/>
            <BoardItem title="Styremedlem" who="Christine Thoresen" email="symforch-styremedlem@samfundet.no"/>
        </List>
    );
}

export default Board;