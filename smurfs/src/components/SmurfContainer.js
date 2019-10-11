// react and redux
import React, { useEffect } from "react";
import { connect } from "react-redux";

// actions
import { fetchSmurfs } from "../actions";

// beer card component
import SmurfCard from "./SmurfCard";

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// useStyles
const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        flewWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        opacity: "0.8",
    },
}));

const SmurfContainer = props => {
    console.log(props);
    console.log(props.smurfs);
    const classes = useStyles();

    useEffect(() => {
        props.fetchSmurfs();
    }, []);
    
    if (props.isFetching) {
        return <h2>Loading smurfs...</h2>;
    }

    
    return (
        <Container>
            <Grid container className={classes.container}>
                {props.error && <p>{props.error}</p>}
                {props.smurfs.map((smurf) => (
                    <SmurfCard key={smurf._id} smurf={smurf}/>
                ))}
            </Grid>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect (
    mapStateToProps,
    { fetchSmurfs }
)(SmurfContainer);