import React from 'react';
import { Grid, TextField, Button, Typography ,Divider} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import authlogoImg from "../../../assects/images/logo.png";
import { Circle } from "@mui/icons-material";

import dashboardImg from '../../../assects/images/tracking=img.png';

const useStyles = makeStyles({
  logo: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
});

const SignUp = () => {
  const classes = useStyles();

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });

 // Handle form submission
const handleSubmit = (values, { setSubmitting, resetForm }) => {
  setSubmitting(true);
  setTimeout(() => {
    console.log(values);
    resetForm();
    setSubmitting(false);
  }, 400);
};


  return (
    <Grid container spacing={2}>
      {/* Logo */}
      <Grid item xs={6}  sx={{display:'flex',justifyContent:'center',mt:15,pl:10,pr:10,mb:15}}>
        <img src={dashboardImg} alt="Signup" width={"100%"} style={{padding:'30px'}}/>
      </Grid>

      {/* Signup Form Grid */}
      <Grid item xs={6} sm={6} sx={{ backgroundColor: '#E1FEFF',pb:39,pt:5 }}>
        <Grid item xs={12} sx={{ pl: 20, mt: 5,}}>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.2rem",
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
              color: "#000000",
              "@media (max-width: 600px)": {
                width: '100%',
              },
            }}
          >
            <img
              src={authlogoImg}
              alt="Logo"
              style={{ marginRight: "8px", width: "60px", height: "60px" }}
            />
            Credit Repair Ai&nbsp;
            <span style={{ fontSize: "6px", color: "#D22126" }}>
              <Circle sx={{ fontSize: "inherit", mt: 1.2 }} />
            </span>
          </Typography>
        </Grid>

        <Formik
  initialValues={{
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit} 
>

          {({ touched, errors }) => (
            <Form>
              <Grid container spacing={2} sx={{ pl: 20,pr:20,mt:5 }}>
                <Grid xs={12} sx={{ p: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "2rem",
                      color: "#D22126",
                    }}
                  >
                    Sign Up
                  </Typography>
                </Grid>
                {/* First Name */}
                <Grid item md={6} xs={12}>
                  <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif",
                      fontSize: "1rem",}}>First Name:</Typography>
                  <Field
                    name="firstName"
                    as={TextField}
                    fullWidth
                    error={touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: "white",
                      },
                      "& .Mui-focused": {
                        color: "black",
                      },
                    }}
                  />
                </Grid>

                {/* Last Name */}
                <Grid item md={6} xs={12}>
                  <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif",
                      fontSize: "1rem",}}>Last Name:</Typography>
                  <Field
                    name="lastName"
                    as={TextField}
                    fullWidth
                    error={touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: "white",
                      },
                      "& .Mui-focused": {
                        color: "black",
                      },
                    }}
                  />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif",
                      fontSize: "1rem",}}>Email:</Typography>
                  <Field
                    name="email"
                    as={TextField}
                    fullWidth
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: "white",
                      },
                      "& .Mui-focused": {
                        color: "black",
                      },
                    }}
                  />
                </Grid>

                {/* Password */}
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif",
                      fontSize: "1rem",}}>Password:</Typography>
                  <Field
                    name="password"
                    type="password"
                    as={TextField}
                    fullWidth
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: "white",
                      },
                      "& .Mui-focused": {
                        color: "black",
                      },
                    }}
                  />
                </Grid>

               
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      color: '#FFFFFF',
                      backgroundColor: '#29A743',
                      textTransform: 'capitalize',
                    }}
                  >
                    Sign Up
                  </Button>
                </Grid>

                {/* Divider */}
                <Grid item xs={12} sx={{mt:1}}>
                  <Divider />
                </Grid>

                {/* Already have an account? Sign in */}
                <Grid item xs={12}>
  <Typography variant="body2" align="start">
    Already have an account?{' '}
    <Link
      to="/sign-in" // Replace "/signin" with the appropriate URL for your sign-in page
      style={{
        textDecoration: 'underline',
        cursor: 'pointer',
        color: 'blue',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '1rem'
      }}
    >
      Sign in
    </Link>
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
