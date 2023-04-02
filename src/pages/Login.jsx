import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate, Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import LoadingButton from "@mui/lab/LoadingButton";

export default function Login() {
  const navigate = useNavigate();

  const loginSchema = object({
    email: string().email().required(),
    password: string()
      .required()
      .min(8)
      .max(20)
      .matches(/\d+/, "password must be containe at least one number")
      .matches(/[a-z]/, "password must be containe at least one lowercase")
      .matches(/[A-Z]/, "password must be containe at least one uppercase")
      .matches(
        /[!,?{}<>%$#^&*+-.]+/,
        "password must be containe at least one special character"
      ),
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            actions.setSubmitting(false);
            //navigate
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                value={values?.email || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values?.password || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </LoadingButton>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link to={"/register"} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
