import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ee1d23', // The same color that the logo has
            contrastText: '#000000'

        },
        secondary: {
            main: '#ffffff',
            contrastText: '#000000'
        },
        background: {
            default: '#f6f7f9',
            paper: '#ffffff'
        },
        action: {
            hover: 'rgba(255, 255, 255, 0.08)',
            selcected: 'rgba(255, 255, 255, 0.16)'
        }
    },
    status: {
        danger: 'red',
    }
});

export const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
          main: '#ee1d23',
          contrastText: '#ffffff'
      },
      secondary: {
          main : '#444444',
          contrastText: '"ffffff"'
      },
      action: {
          hover: 'rgba(255, 255, 255, 0.08)',
          selcected: 'rgba(255, 255, 255, 0.16)'
      }
    },
  });

export default theme;