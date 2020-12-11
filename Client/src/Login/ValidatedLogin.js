import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "./ValidatedStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { useState } from "react";
import Axios from "axios";

import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import Aos from "aos";
import "aos/dist/aos.css";


function ValidatedLogin(props) {
  Aos.init();
  let history = useHistory();

  const ValidatedLoginForm = () => (

    <Formik
      initialValues={{ email: "", password: "", LoginStatus: "" }}
      onSubmit={(values, { setSubmitting, setFieldValue, setErrors }) => {
        Axios.post("http://fall2020-comp307.cs.mcgill.ca:3001/login", {
          username: values.email,
          password: values.password,
        }).then((response) => {
          if (response.data.message) {
            //console.log(response.data.message);
            setFieldValue('LoginStatus', response.data.message);
            props.LoginStatusCallBack(false);
          }
          else {
            //console.log("username is ",response.data.username )
            //history.push("/welcome", { username: response.data.username });
            props.LoginStatusCallBack(true);
            //console.log("here is received data:", response.data);
            props.UserInfoCallBack(response.data[0]);
            //setFieldValue('LoginStatus', response.data);
          }
          //console.log(response);

        });

        setTimeout(() => {
          //console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }

      }

      //********Using Yum for validation********/

      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
      })}
    >
      {props => {

        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <div class="msg">{values.LoginStatus}</div>
            <button type="submit" className="btn btn-md btn-primary btn-center"
              disabled={isSubmitting}>
              Login
          </button>
          </form>
        );
      }}
    </Formik>
  );

  return (
    ValidatedLoginForm()
  )
}

ValidatedLogin.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ValidatedLogin;