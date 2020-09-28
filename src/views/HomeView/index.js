import React from 'react';
import { NavLink } from 'react-router-dom';

// MUI
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Components
import Copyright from '../../components/Copyright';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

// Material icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import InfoIcon from '@material-ui/icons/Info';
import Slideshow from '../../components/Slideshow';

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
    
    menuButton: {
        verticalAlign: 'middle',
        color: '#ee1d23'
    },
    logo: {
        flexGrow: 1,
        height: 48,
        maxHeight: 64,
    } ,
    menuIcons: {
        marginRight: theme.spacing(1),
    },
    menuLinks: {
        color: '#000000'
    },
    fixedHeight: {
        height: 400,
    },
  }));

const HomeView = () => {
    document.title = "Studentersamfundets Symfoniorkester";
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
                                    Velkommen til Studentersamfundets Symfoniorkester!             
                                </Typography>
                                <Typography component="p" variant="body1">
                                    Studentersamfundets Symfoniorkester, også kalt Symforch, ble 
                                    stiftet i 1910 og er et av landets største og eldste studentorkestre. 
                                    Orkesteret er en del av Studentersamfundets Orkester, også kjent som 
                                    Musikerlåfte'. Hver tirsdag samles de omlag 80 medlemmene til øvelse i 
                                    Storsalen med Gavin David Lee som dirigent. Symforch har flere 
                                    opptredener per år, alt fra helaftens konserter til kortere 
                                    spilleoppdrag. Orkesteret behersker flere stilarter, og tilbyr konserter 
                                    med allsidig og publikumsvennlig repertoar. Med jevne mellomrom 
                                    gjennomføres samarbeidskonserter med kor og/eller solister.
                                </Typography>
                                          
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Navigasjon
                                </Typography>
                                <Typography component="p" variant="body1">
                                    Bruk menyknappen <MenuIcon className={classes.menuButton}/> øverst til høyre for å navigere siden<br />
                                    <MenuList id="menu-list-grow">
                                        <NavLink to={'/'} className={classes.menuLinks}>
                                            <MenuItem>
                                                <HomeIcon className={classes.menuIcons} color={'primary'}/>
                                                Forsiden
                                            </MenuItem>
                                        </NavLink>
                                        <NavLink to={'/konserter'} className={classes.menuLinks}>
                                            <MenuItem>
                                                <EventIcon className={classes.menuIcons} color={'primary'}/>
                                                Konserter
                                            </MenuItem>
                                        </NavLink>
                                        <NavLink to={'/om'} className={classes.menuLinks}>
                                            <MenuItem>
                                                <InfoIcon className={classes.menuIcons} color={'primary'}/>
                                                Om orkesteret
                                            </MenuItem>
                                        </NavLink>
                                    </MenuList> 
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Galleri
                                </Typography>
                                <Slideshow />
                            </Paper>
                        </Grid>
                        <Grid item lg={12} md={12} xs={12}>
                            <Paper className={classes.paper}>
                                <Typography component="p" variant="h4">
                                    Medlemskap
                                </Typography>
                                <Typography component="p" variant="body1">
                                    For å bli medlem av Studentersamfundets Symfoniorkester kreves det at 
                                    du behersker et instrument som passer inn i en klassisk orkesterbesetning. 
                                    Alle medlemmer må stille med egne instrumenter da orkesteret ikke har noen 
                                    til utlån, med unntak av slagverkutstyr. Det kreves også at man er 
                                    medlem av Studentersamfundet. <br /><br />

                                    Opptak av nye medlemmer skjer primært i begynnelsen av høst- og vårsemestrene, i 
                                    august og januar. Første uke i høstsemesteret pleier orkesteret å holde en åpen 
                                    øvelse der alle som er interesserte kan møte. Her får man en smakebit på noe av 
                                    høstens repertoar, hvordan øvelsene foregår og det sosiale miljøet.<br /><br />

                                    Påmelding til opptak kan skje enten på den åpne øvelsen eller ved å sende en mail 
                                    til styret. Alle som melder interesse blir kalt inn til et intervju der vi 
                                    kartlegger motivasjonen til å begynne i orkesteret og informerer om hvilke 
                                    dugnadsplikter som et medlemskap innebærer. Alle som spiller et blåseinstrument 
                                    må i tillegg gjennom et kort prøvespill. <br /><br />

                                    Siden noen instrumentgrupper har begrensede plasser er det ikke sikkert man kommer 
                                    inn selv om man oppnår alle kvalifikasjoner. Vi tar likevel inn folk til intervju 
                                    og prøvespill fordi du kan havne på vente-/vikarliste og bli kontaktet hvis det skulle 
                                    åpne seg en plass. I tillegg trenger orkesteret utvidet besetning til noen prosjekter 
                                    der det kan være aktuelt å kontakte folk på vikarlisten. <br /><br />
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

export default HomeView;