import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    credit: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center', 
    },
  }));

const Img = (props) => {
    const classes = useStyles();
    return(
        <div style={{height: props.totalheight}}>
            <img src={props.source} alt={props.alt} className={props.className}/><br />
            <div className={classes.credit}>{props.credit}</div>
        </div>
    );
}

export default Img;