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
import tsjaikovskij_banner from '../../assets/tsjaikovskij_banner.png';
import Video from '../../components/Video';

//import Copyright from '../../components/Copyright';
import Sponsors from '../../components/Sponsors';
import UpcomingItem from '../../components/UpcomingItem';

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
        width: '100%',
        maxWidth: '100%',
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
                                    Tsjaikovskijs symfoni nr. 5
                                </Typography>
                                <Img source={tsjaikovskij_banner} alt={'Bannerplakat for Tsjaikovski konsert'} className={classes.img}/>
                                <Typography component="p" variant="body1">
                                    <b>Når: </b>24. november kl. 19:00<br />
                                    <b>Hvor: </b>Storsalen, Studentersamfundet<br />
                                    <b>Hva: </b>
                                    Velkommen til konsert med Studentersamfundets Symfoniorkester 24. november kl 19:00!<br/><br/>
                                    
                                    Denne gangen skal vi spille Tsjaikovskijs 5. symfoni. Symfonien er konstruert etter samme 
                                    modell som Beethovens femte, der temaet går fra kamp til seier, fra mørke til lys.<br/><br/>
                                    
                                    Dette eventyret vil du ikke gå glipp av. Bli med oss da vi fyller storsalen med en av de 
                                    mer berømte symfoniene fra 1800-tallet.<br/><br/>

                                    <strong>Billetter slippes snarest!</strong><br/>
                                    Student / barn: 80kr<br/>
                                    Ordinær: 150kr
                                </Typography>             
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Kommende konserter
                                </Typography>
                                <br />
                                <UpcomingItem 
                                    title={"Samfundsmøte (AVLYST)"}
                                    date={"7. november"}
                                    location={"Storsalen, Studentersamfundet"}
                                    canceled
                                />
                                <UpcomingItem 
                                    title={"Tsjaikovskijs symfoni nr. 5"}
                                    date={"24. november"}
                                    location={"Storsalen, Studentersamfundet"}
                                />
                            </Paper>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Tidligere konserter
                                </Typography>
                                <Typography component="p" variant="h5">
                                    Festkonsert
                                </Typography>
                                <Img source={festkonsert_banner} alt={'Bannerplakat for festkonsert'} className={classes.img}/>
                                <Typography component="p" variant="body1">
                                    <b>Når: </b>6. oktober kl. 20:00<br />
                                    <b>Hvor: </b>Storsalen, Studentersamfundet<br />
                                    <b>Hva: </b>
                                    1910 startet en gruppe studenter og musikere i Trondheim sitt eget musikalorkester. 
                                    I løpet av tiden vokste vi, og ble fort et fullt symfoniorkester som har funnet 
                                    sitt hjem i Storsalen. I 2020 ble vi hele 110år! 
                                    Dette måtte vi selvfølgelig feire slik vi liker best: med en staselig festkonsert.<br /><br />
                                    
                                    Vi presenterte et variert program, med alt fra norsk folkemusikk til latin-amerikanske rytmer.<br /><br />
                                    
                                    <i>Opptak av konserten er lagt ut på <a href='https://youtu.be/OEVUkf47IPA'>YouTube</a>.</i>
                                </Typography>
                                <Video title={"festkonsert_yt_embed"}/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Sponsors />
                </Container>
                </div>
            </main>
        </div>   
    );
};

export default ConcertView;