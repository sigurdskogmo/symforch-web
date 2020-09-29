import React from 'react';
import Img from './Img';
import { makeStyles } from '@material-ui/core/styles';
import ntnu_logo from '../assets/ntnu_logo.svg';
import vt_logo from '../assets/vt_logo.svg';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex'
    },
    img: {
        maxWidth: '50%',
        float: 'left',
    },
    center: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '25%',
    }
}));

const Sponsors = () => {
    const classes = useStyles();
    return (
        <div align="center" className={classes.wrapper}>
            <div className={classes.center}>
                <Img source={ntnu_logo} alt={"NTNUs logo"} className={classes.img}/>
                <Img source={vt_logo} alt={"Velferdstingets logo"} className={classes.img}/>
            </div>   
        </div>
    )
}

export default Sponsors;