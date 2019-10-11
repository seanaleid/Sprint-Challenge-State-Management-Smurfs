import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { postSmurf } from "../actions";


export const AddSmurfNormalForm = props => {
    console.log(props);
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    });
    
    const submitHandler = e => {
        e.preventDefault();
        props.postSmurf(smurf);
        document.getElementById("input-name").reset();
    };

    const inputHandler = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value });
    };

    return (
        <div className="form-container">
            <form className="form" id="input-name">
                <input 
                    type="text" 
                    name="name" 
                    label="name" 
                    placeholder="Name"
                    value={props.name}
                    onChange={inputHandler}
                    className="input"
                />
                <input 
                    type="text" 
                    name="age" 
                    label="age" 
                    placeholder="Age"
                    value={props.age}
                    onChange={inputHandler}
                    className="input"
                />
                <input 
                    type="text" 
                    name="height" 
                    label="height" 
                    placeholder="Height"
                    value={props.height}
                    onChange={inputHandler}
                    className="input"
                />
                <button className="form-button" onClick={submitHandler}>Add Smurf</button>
            </form>
        </div>

    )
};

const mapStateToProps = state => {
    return {
        state: state,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { postSmurf }
)(AddSmurfNormalForm);
