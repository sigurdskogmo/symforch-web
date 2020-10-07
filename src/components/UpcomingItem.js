import React from "react";
import Typography from '@material-ui/core/Typography';


const UpcomingItem = (props) => {
    return (
        <div>
            <Typography component="p" variant="h5">
                {props.title}
            </Typography>
            <Typography component="p" variant="body1" style={props.canceled ? {textDecoration: "line-through"} : {}}>
                <b>Når: </b>{props.date}<br />
                <b>Hvor: </b>{props.location}
            </Typography>
            <br />
        </div>
    )
}

export default UpcomingItem