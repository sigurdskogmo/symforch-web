import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../assets/Logo';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    logo: {
        flexGrow: 1,
        height: 48,
        maxHeight: 64,
    } 
  }));
 
const TopBar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" color='secondary'>
                <Toolbar className={classes.toolbar}>
                    <Logo className={classes.logo}/>
                    <IconButton 
                        edge="end" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu"
                        onClick={() => alert('This page is still in development')}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar;