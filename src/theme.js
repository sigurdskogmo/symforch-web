import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: red,
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