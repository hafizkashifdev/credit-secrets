import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Checkbox, IconButton, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@mui/styles';
import { Circle, Visibility, VisibilityOff, Email, Error } from "@mui/icons-material";
import authlogoImg from "../../../assects/images/logo.png";
import dashboardImg from '../../../assects/images/tracking=img.png';
import './sign-in.scss';

const useStyles = makeStyles({
  logo: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
});

const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    setTimeout(() => {
      if (values.email === 'admin@123.com' && values.password === '801@2523') {
        // Successful login, navigate to the dashboard
        console.log('Login successful');
        navigate('/dashboard'); // Navigate to the dashboard
      } else {
        // Password doesn't match, show error message
        setError(true);
      }
      resetForm();
      setSubmitting(false);
    }, 400);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Grid container spacing={2}>
      {/* Logo */}
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', mt: 15, pl: 10, pr: 10, mb: 15 }}>
        <img src={dashboardImg} alt="Signup" width={"100%"} style={{ padding: '30px' }} />
      </Grid>

      {/* Signin Form Grid */}
      <Grid item xs={6} sm={6} sx={{ backgroundColor: '#E1FEFF' }}>
        <Grid item xs={12} sx={{ pl: 20, mt: 5 }}>
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
            email: "",
            password: "",
            rememberMe: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form>
              <Grid container spacing={2} sx={{ pl: 20, pr: 20, mt: 4, pb: 44 }}>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '3rem',
                      color: '#000000',
                      cursor: 'pointer',
                    }}
                  >
                    Sign in
                  </Typography>
                </Grid>

                {error && (
                  <Grid item xs={12}>
                    <Typography variant="body2" color="error" sx={{ display: "flex", alignItems: "center" }}>
                      <Error sx={{ fontSize: "1rem", marginRight: "4px" }} />
                      Invalid email or password
                    </Typography>
                  </Grid>
                )}

                {/* Email */}
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Email:</Typography>
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
                    InputProps={{
                      endAdornment: (
                        <IconButton disabled>
                          <Email />
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>

                {/* Password */}
                <Grid item xs={12}>
                  <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Password:</Typography>
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
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
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={togglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>

                {/* Remember Me & Forgot Password */}
                <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                  <Grid item xs={6} container alignItems="center">
                    <Field
                      as={Checkbox}
                      id="rememberMe"
                      name="rememberMe"
                      color="primary"
                    />
                    <label htmlFor="rememberMe" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Remember me
                    </label>
                  </Grid>
                  <Grid item xs={6} container justifyContent="flex-end">
                    <Link to="/sign-in" replace={true} variant="body2" color="textSecondary" sx={{ color: '#F0CF42', cursor: 'pointer' }}>
                      Forgot Password?
                    </Link>
                  </Grid>
                </Grid>

                {/* Sign In Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    fullWidth
                    sx={{
                      color: '#FFFFFF',
                      backgroundColor: '#29A743',
                      textTransform: 'capitalize',
                      fontFamily: "Poppins, sans-serif",
                      "&:hover": {
                        backgroundColor: "#000000",
                      },
                    }}
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </Button>
                </Grid>

                {/* Divider */}
                <Grid item xs={12}>
                  <Divider />
                </Grid>

                {/* Not a member? Signup */}
                <Grid item xs={12}>
                  <Typography variant="body2" align="start">
                    Not a member? <Link to="/sign-up" replace={true}><span style={{ color: 'black', cursor: 'pointer' ,fontWeight:600}}>Signup for an account now.</span></Link>
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

export default SignIn;
