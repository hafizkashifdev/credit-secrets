import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Checkbox, IconButton, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@mui/styles';
import { Circle, Visibility, VisibilityOff, Email, Error } from "@mui/icons-material";
import fauthlogoImg from "../../../assects/images/logo.png";
import rDashboardImg from '../../../assects/images/heroimg.png';

const useStyles = makeStyles({
  logo: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
});

const ForgotPassword = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  
 

  return (
    <Grid container spacing={2}>
      {/* Logo */}
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', mt: 15, pl: 10, pr: 10, mb: 15 }}>
        <img src={rDashboardImg} alt="Signup" width={"100%"} style={{ padding: '30px' }} />
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
              src={fauthlogoImg}
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
        //   onSubmit={handleSubmit}
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
                  Forgot Password
                  </Typography>
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
  <Typography
    variant="h6"
    style={{
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1rem',
      color: '#000000',
      fontWeight:600,
    }}
  >
    Enter your registered email address
  </Typography>
</Grid>



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
                        <IconButton >
                          <Email />
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>

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
                   Reset Password
                  </Button>
                </Grid>

                {/* Not a member? Signup */}
                <Grid item xs={12}>
                  <Typography variant="body2" align="start">
                    Not a member? <Link to="/sign-up" replace={true}><span style={{ color: '#F38B98', cursor: 'pointer' }}>Signup for an account now.</span></Link>
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

export default ForgotPassword

