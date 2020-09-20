import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: orange,
    },
    status: {
        danger: 'red',
    }
});

export default theme;