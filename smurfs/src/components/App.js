import React, { Component } from "react";
import "./App.css";

// import components
import SmurfContainer from "./SmurfContainer";
import FormikAddSmurfForm from "./AddSmurfForm";

//connect
import { connect } from "react-redux";

function App() {

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <FormikAddSmurfForm />
        <SmurfContainer />
      </div>
    );
}

const mapStateToPros = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToPros, {})(App);


