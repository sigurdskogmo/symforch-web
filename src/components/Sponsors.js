import React from 'react';
import Img from './Img';
import { makeStyles } from '@material-ui/core/styles';
import ntnu_logo from '../assets/ntnu_logo.svg';
import vt_logo from '../assets/vt_logo.svg';

import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
    },
    img: {
        maxWidth: '75px',
        margin: theme.spacing(1)
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(4)
    },
    items: {
        justifyContent: 'center'
    }
}));

const Sponsors = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Grid container className={classes.items}>
                            <Img source={ntnu_logo} alt={"NTNUs logo"} className={classes.img}/>
                            <Img source={vt_logo} alt={"Velferdstingets logo"} className={classes.img}/>
                        </Grid>
                       
                    </Grid>
                </Grid>

            {/* <div className={classes.center}>
                
            </div>    */}
        </div>
    )
}

export default Sponsors;