import axios from 'axios';
import {
  Field,
  Form,
  withFormik
} from 'formik';
import React from 'react';
import * as Yup from 'yup';

function Registration( {values, errors, touched} ) {
  const {username, password} = values;
  return (
    <Form>
      <label>Username</label>
      <Field name='username' value={username} />
      {touched.username && errors.username && <h3>{errors.username}</h3>}
      <label>Password</label>
      <Field name='password' type='password' value={password} />
      {touched.password && errors.password && <h3>{errors.password}</h3>}
      <button type='Submit'>Submit</button>
    </Form>
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
  handleSubmit    : ( values ) => {
    console.log( values );
    axios.post( 'http://localhost:5000/api/register', values )
         .then( res => console.log( res.data ) )
         .catch( err => console.log( err ) );
  }
} )( Registration );