import React from "react";

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// useStyles
const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const SmurfCard = props => {
    console.log(props);
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.smurf.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {props.smurf.age}
            </Typography>
            <Typography variant="body2" component="p">
                {props.smurf.height}
            </Typography>
            </CardContent>
        </Card>
    );
}

export default SmurfCard;