import React from 'react';

// MUI
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Components
import Img from '../../components/Img';
import festkonsert_banner from '../../assets/festkonsert_banner.jpg';

// Copyright
//import Box from '@material-ui/core/Box';
//import Copyright from '../../components/Copyright';

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
    fixedHeight: {
      height: 240,
    },
    img: {
        maxWidth: '100%'
    },
    canceled: {
        textDecoration: 'line-through'
    }
  }));

const ConcertView = () => {
    document.title = "Konserter";
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <div>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={8}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Førstkommende konsert
                                </Typography>
                                <Typography component="p" variant="h5">
                                    Festkonsert
                                </Typography>
                                <Img source={festkonsert_banner} className={classes.img}/>
                                <Typography component="p" variant="body1">
                                    <b>Når: </b>6. oktober kl. 20:00<br />
                                    <b>Hvor: </b>Storsalen, Studentersamfundet<br />
                                    <b>Hva: </b>
                                    1910 startet en gruppe studenter og musikere i Trondheim sitt eget musikalorkester. 
                                    I løpet av tiden vokste vi, og ble fort et fullt symfoniorkester som har funnet 
                                    sitt hjem i Storsalen. I år blir vi hele 110år! 
                                    Dette må selvfølgelig feires slik vi liker best: med en staselig festkonsert.<br /><br />
                                    
                                    Vi presenterer et variert program, med alt fra norsk folkemusikk til latin-amerikanske rytmer.<br /><br />
                                    
                                    Vi håper du vil bli med å feire oss! Dette er en konsert du ikke vil gå glipp av.<br /><br />
                                    Se <a href='https://www.facebook.com/events/326619568414900'>event</a> på Facebook.<br />
                                    <i>Biletter finner du <a href='https://samfundet.no/arrangement/2586-festkonsert-med-studentersamfundets-symfoniorkester-110'>her</a>.</i>
                                </Typography>             
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Kommende konserter
                                </Typography>
                                <br />
                                <Typography component="p" variant="h5">
                                    Festkonsert
                                </Typography>
                                <Typography component="p" variant="body1">
                                    <b>Når: </b>6. oktober<br />
                                    <b>Hvor: </b>Storsalen, Studentersamfundet
                                </Typography>
                                <br />
                                <Typography component="p" variant="h5">
                                    Samfundsmøte (AVLYST)
                                </Typography>
                                <Typography component="p" variant="body1" className={classes.canceled}>
                                    <b>Når: </b>7. november<br />
                                    <b>Hvor: </b>Storsalen, Studentersamfundet
                                </Typography>
                                <br />
                                <Typography component="p" variant="h5">
                                    Konsert i Frimurerlogen
                                </Typography>
                                <Typography component="p" variant="body1">
                                    <b>Når: </b>22. november<br />
                                    <b>Hvor: </b>Storsalen, Frimurerlogen
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Tidligere konserter
                                </Typography>
                                <Typography component="p" variant="body1">
                                    Legges inn snart
                                </Typography>               
                            </Paper>
                        </Grid>
                    </Grid>
                    {/* <Box pt={4}>
                        <Copyright />
                    </Box> */}
                </Container>
                </div>
            </main>
        </div>   
    );
};

export default ConcertView;