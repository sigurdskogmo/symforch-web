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
      height: 400,
    },
  }));


const AboutView = () => {
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
                                    Om orkesteret
                                </Typography>
                                <Typography component="p" variant="body1">
                                Studentersamfundets Symfoniorkester, eller Symforch, er en av de 
                                kunstneriske gjengene ved Studentersamfundet i Trondhjem. Orkesteret 
                                består av omlag 80 studenter fra ulike studier, og organisering og drift 
                                baseres på frivillig arbeid lagt ned av studentene selv. Symforch er et 
                                av landets største studentorkestre, og har eksistert siden 1910. Dirigent 
                                for orkesteret er Gavin David Lee som vi har hatt fast siden 1992!<br /><br />

                                Som studentorkester når Symforch ut til et litt annet publikum enn byens 
                                profesjonelle orkester, og gir studenter så vel som lokalsamfunn et 
                                utfyllende tilbud innenfor klassisk musikk. <br /><br />

                                For våre medlemmer gir orkesteret mulighet til innsikt i organisering, 
                                orkester- og frivillighetskultur, gleden av å øve mot felles mål og å 
                                gjennomføre større prosjekter. Dette er noe som på sikt gagner amatørmiljøet 
                                både her i byen og ellers i landet. Orkesteret er mangfoldig sammensatt, og 
                                består av studenter fra ulike studier. Noen studerer musikk, men de fleste 
                                går alle mulige andre typer studier.<br /><br />

                                Selve driften av orkesteret står et styre på seks medlemmer for, som gjør 
                                sine plikter på frivillig basis. Å ha et verv av denne typen gir en gyllen 
                                organisasjonserfaring og er meget lærerikt.<br /><br />
                                </Typography>
                                          
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Kontakt
                                </Typography>
                                <Typography component="p" variant="body1">
                                    For hendvendelser om oppdrag, forespørsler eller lignende, kontakt oss gjerne på mail eller telefon.<br /><br />
                                    <b>E-post:</b> <a href='mailto:symforch@samfundet.no'>symforch@samfundet.no</a><br />
                                    <b>Telefon:</b> 123 45 678<br />
                                    <b>Facebook:</b> <a href='https://www.facebook.com/symforch'>www.facebook.com/symforch</a><br />
                                    <b>Instagram:</b> <a href='https://www.instagram.com/symforch/'>www.instagram.com/symforch/</a>
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

export default AboutView;