import React from "react";
import "./App.css";

// import components
import SmurfContainer from "./SmurfContainer";
// import FormikAddSmurfForm from "./AddSmurfForm";
import AddSmurfNormalForm from "./AddSmurfNormalForm";
import Header from "./Header";

//connect
import { connect } from "react-redux";

function App() {

    return (
      <div className="App">
        <Header />
        {/* <FormikAddSmurfForm /> */}
        <AddSmurfNormalForm />
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


