import axios from 'axios';
import {
  Field,
  Form,
  withFormik
} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import {Link} from 'react-router-dom'

function Registration( {values, errors, touched,match} ) {
  const {username, password} = values;
  return (
    <>
    <Form>
      <label>Username</label>
      <Field name='username' value={username} />
      {touched.username && errors.username && <h3>{errors.username}</h3>}
      <label>Password</label>
      <Field name='password' type='password' value={password} />
      {touched.password && errors.password && <h3>{errors.password}</h3>}
      <button type='Submit'>Submit</button>
    </Form>
      {match.path === "/" && <p>{`Don't have an account, Click `}<Link to='/register'>{`Here`}</Link>{` to Register!`}</p>}
      {match.path === "/register" && <p>{`Have an account?  Click `}<Link to='/'>{`Here`}</Link>{` to Login!`}</p>}
      </>
  );
}

export default withFormik( {
  mapPropsToValues: ( {username, password} ) => ({
    username: username || '',
    password: password || ''
  }),
  validationSchema: Yup.object()
                       .shape( {
                         username: Yup.string()
                                      .min( 6, 'Username must be at least 6 characters' )
                                      .max( 20, 'Username cannot be over 20 characters' )
                                      .required( 'Username is Required' ),
                         password: Yup.string()
                                      .min( 6, 'Password must be at least 6 characters' )
                                      .max( 20, 'Password cannot be over 20 characters' )
                                      .required( 'Username is Required' )
                       } ),
  handleSubmit    : ( values, formikBag ) => {
    console.log(formikBag);
    axios.post( `http://localhost:5000/api${formikBag.props.url}`, values )
         .then( res => {
           console.log(res);
           formikBag.props.login( res.data.token )
           formikBag.props.history.push('/recipes');
         })
         .catch( err => console.log( err.response.data ) );
  }
} )( Registration );