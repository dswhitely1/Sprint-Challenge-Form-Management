import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

function Registration( {values}) {
  const {username, password} = values;
  return(
    <Form>
      <label>Username</label>
    <Field name='username' value={username} />
    <label>Password</label>
      <Field name='password' type='password' value={password} />
  </Form>
  )
}



export default withFormik({
  mapPropsToValues: ({username, password}) => ({
    username: username || '',
    password: password || ''
  }),
  handleSubmit: (values) => {
    console.log(values);
  }
})(Registration);