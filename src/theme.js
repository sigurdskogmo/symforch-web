import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ee1d23', // The same color that the logo has
        },
        secondary: {
            main: '#ffffff',
            contrastText: 'red'
        },
    },
    status: {
        danger: 'red',
    }
});

export default theme;