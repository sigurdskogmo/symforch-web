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

// Assets
import Logo from '../../assets/Logo';

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
    logo: {
        maxWidth: '100%',
        width: 362,
        marginLeft: 'auto',
        marginRight: 'auto'

    },
    fixedHeight: {
      height: 400,
    },
  }));


const AboutView = () => {
    document.title = "Om";
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
                                    <b>Telefon:</b> 941 95 440 (Andreas Klavenes Berg)<br />
                                    <b>Facebook:</b> <a href='https://www.facebook.com/symforch'>www.facebook.com/symforch</a><br />
                                    <b>Instagram:</b> <a href='https://www.instagram.com/symforch'>www.instagram.com/symforch</a><br /><br />
                                    <b>Adresse:</b><br />
                                    Studentersamfundets Symfoniorkester<br />
                                    Studentersamfundet i Trondhjem<br />
                                    Elgesetergate 1<br />
                                    7030 TRONDHEIM<br />
                                </Typography>
                                <br />
                                <Logo className={classes.logo} version={'original'}/>               
                            </Paper>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Styret
                                </Typography>
                                <Typography component="p" variant="body1">
                                    <Grid container spacing={3}>
                                        <Grid item lg={4}>
                                            <b>Tittel</b><br />
                                            Formann<br />
                                            Nestleder<br />
                                            Kasserer<br />
                                            Materialforvalter<br />
                                            Styremedlem<br />
                                            Styremedlem<br />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <b>Navn</b><br />
                                            Andreas Klavenes Berg<br />
                                            Sheikha Al-Nasser<br />
                                            Ingrid Sofie Lindberg<br />
                                            Ragnhild Fluge<br />
                                            Signe Wikeland<br />
                                            Christine Thoresen<br />
                                        </Grid>
                                        <Grid item lg={4}>
                                            <b>E-post</b><br />
                                            <a href='mailto:symforch-formann@samfundet.no'>symforch-formann@samfundet.no</a><br />
                                            <a href='mailto:symforch-nestleder@samfundet.no'>symforch-nestleder@samfundet.no</a><br />
                                            <a href='mailto:symforch-kasserer@samfundet.no'>symforch-kasserer@samfundet.no</a><br />
                                            <a href='mailto:symforch-material@samfundet.no'>symforch-material@samfundet.no</a><br />
                                            <a href='mailto:symforch-styremedlem@samfundet.no'>symforch-styremedlem@samfundet.no</a><br />
                                            <a href='mailto:symforch-styremedlem@samfundet.no'>symforch-styremedlem@samfundet.no</a><br />
                                        </Grid>
                                    </Grid>
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