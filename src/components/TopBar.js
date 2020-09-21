// React
import React from 'react';
import { useState, useRef, useEffect } from 'react';

// Assets
import Logo from '../assets/Logo';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

// Material icons
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import InfoIcon from '@material-ui/icons/Info';

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
    } ,
    menuIcons: {
        marginRight: theme.spacing(1),
    }
  }));
 
const TopBar = () => {
    const classes = useStyles();
    
    /** 
     * This part until the return could and probably should
     * be put into a separate component that handles the menu
     * */ 

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

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
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        {
                            open ? <MenuOpenIcon /> : <MenuIcon />
                        }
                    </IconButton>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}><HomeIcon className={classes.menuIcons} color={'primary'}/> Forsiden</MenuItem>
                                    <MenuItem onClick={handleClose}><EventIcon className={classes.menuIcons} color={'primary'}/> Konserter</MenuItem>
                                    <MenuItem onClick={handleClose}><InfoIcon className={classes.menuIcons} color={'primary'}/> Om orkesteret</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar;