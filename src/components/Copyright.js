import React from 'react';

// MUI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://symforch.no">
            symforch
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

  export default Copyright;