import React, { useState, useEffect } from "react";

// Formik
import { Form, Field, withFormik } from "formik";

// Axios
import axios from "axios";

const AddSmurfForm = ({values, status}) => {
    console.log(values);
    const [smurf, setSmurf] = useState([]);
    
    useEffect(() => {
        if (status) {
            setSmurf([...smurf, status]);
        }
    }, [status]);

    return (
        <div className="form-container">
            <Form className="form">
                <Field 
                    className="input"
                    component="input"
                    type="text" 
                    name="name" 
                    label="name" 
                    placeholder="Name"
                />
                <Field 
                    className="input"
                    component="input"
                    type="text" 
                    name="age" 
                    label="age" 
                    placeholder="Age"
                />
                <Field 
                    className="input"
                    component="input"
                    type="text" 
                    name="height" 
                    label="height" 
                    placeholder="Height"
                />
                <button className="form-button">Add Smurf</button>
            </Form>
            {smurf.map(smurf => {
                return (
                    <div>{smurf.name}</div>)
            })}
        </div>

    )
};

const FormikAddSmurfForm = withFormik({
    mapPropsToValues({ name, age, height }) {
        return{
            name: name || '',
            age: age || '',
            height: height || '',
        };
    },
    handleSumbit(values, { setStatus, resetForm }) {
        axios
            .post("https://localhost:333/smurfs")
            .then(res => {
                console.log("formik res", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log("formik submit error", err));
    }

})(AddSmurfForm);
export default FormikAddSmurfForm;

