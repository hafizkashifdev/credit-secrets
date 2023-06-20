import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import dashboardImg from '../../../assects/images/business_presentation_dashboard_project_graph_icon_192856.svg';

const SignUp = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Grid container spacing={2}>
      {/* Image Grid */}
      <Grid item xs={12} sm={6}>
        {/* Add your image component or placeholder */}
        <img src={dashboardImg} alt="Signup" />
      </Grid>

      {/* Signup Form Grid */}
      <Grid item xs={12} sm={6}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <Grid container spacing={2}>
                {/* First Name */}
                <Grid item xs={12}>
                  <Field
                    name="firstName"
                    as={TextField}
                    label="First Name"
                    fullWidth
                    error={touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>

                {/* Last Name */}
                <Grid item xs={12}>
                  <Field
                    name="lastName"
                    as={TextField}
                    label="Last Name"
                    fullWidth
                    error={touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                  <Field
                    name="email"
                    as={TextField}
                    label="Email"
                    fullWidth
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Grid>

                {/* Password */}
                <Grid item xs={12}>
                  <Field
                    name="password"
                    type="password"
                    as={TextField}
                    label="Password"
                    fullWidth
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                  />
                </Grid>

                {/* Signup Button */}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Sign Up
                  </Button>
                </Grid>

                {/* Already have an account? Sign in */}
                <Grid item xs={12}>
                  <Typography variant="body2" align="center">
                    Already have an account? Sign in
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default SignUp;
