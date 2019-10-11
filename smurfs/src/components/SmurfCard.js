import React from "react";

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

// useStyles
const useStyles = makeStyles({
    card: {
        minWidth: 275,
        margin: `20px`,
        display: `flex`,
    },
    media: {
        height: 0,
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
        <Card className={classes.card} id={props.id}>
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
            <CardContent className={classes.image}>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
            </CardContent>
        </Card>
    );
}

export default SmurfCard;