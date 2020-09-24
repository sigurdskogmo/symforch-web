import React from 'react';

// MUI
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Components
import Copyright from '../../components/Copyright';
import Img from '../../components/Img';
import festkonsert_banner from '../../assets/festkonsert_banner.jpg';

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
    }
  }));

const ConcertView = () => {
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
                                    Kommende konserter
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
                                    <i>Billetter slippes snart.</i>
                                </Typography>             
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Blæææ
                                </Typography>
                                <Typography component="p" variant="body1">
                                    Hehe
                                </Typography>               
                            </Paper>
                        </Grid>
                        <Grid item lg={12}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Mer ting og tang
                                </Typography>
                                <Typography component="p" variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl magna, cursus sit amet turpis eget, lobortis vestibulum sem. Fusce nec enim efficitur, suscipit erat eget, aliquet magna. Duis euismod sollicitudin congue. In hac habitasse platea dictumst. Aliquam dui eros, tempus ac arcu eget, posuere vehicula elit. Donec interdum enim dignissim urna pellentesque feugiat. Mauris id facilisis tellus. Curabitur lobortis tellus diam, a elementum est lobortis venenatis. Etiam bibendum arcu risus, id feugiat leo commodo non. Vivamus sem velit, molestie sodales nunc maximus, pulvinar ultricies tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam convallis id dolor pretium viverra. Suspendisse vel viverra ligula. Cras vulputate, leo ut viverra eleifend, nisi nulla ultricies magna, in congue nisi orci id elit. Integer vitae eros eu arcu vehicula consectetur nec at ligula. Proin ut neque magna.
                                </Typography>               
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
                </div>
            </main>
        </div>   
    );
};

export default ConcertView;