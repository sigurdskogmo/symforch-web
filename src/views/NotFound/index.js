import React from 'react';

// MUI
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Img from '../../components/Img';
import notfound from '../../assets/notfound.svg';
import { NavLink } from 'react-router-dom';


// Copyright
//import Copyright from '../../components/Copyright';
//import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      height: 'auto',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    img: {
        maxWidth: '100%'
    },
  }));

const NotFound = () => {
    const classes = useStyles();
    document.title = "404 NOT FOUND";
    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    NOT FOUND
                                </Typography>
                                <br />
                                <Img source={notfound} className={classes.img}/>
                                <br />
                                <Typography component="p" variant="body1">
                                    Siden du leter etter finnes ikke... gå til <NavLink to='/'>forsiden</NavLink>!<br /><br />
                                    Om du mener dette er en feil, kontakt styret. E-post addresse finner du på
                                    <NavLink to='/om'> symforch.no/om</NavLink>.
                                </Typography>

                            </Paper>
                        </Grid>
                    </Grid>
                    {/* <Box pt={4}>
                        <Copyright />
                    </Box> */}
                </Container>
            </main>
        </div>
    );
};

export default NotFound;