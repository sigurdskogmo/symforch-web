import React from 'react';

// MUI
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';


//Data
import aboutText from '../../data.js';


const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

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
                                    {aboutText.text}
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
                                    <b>Telefon: </b> 123 45 678
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