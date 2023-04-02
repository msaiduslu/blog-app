import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate, Link } from "react-router-dom";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const loginSchema = object({
    username: string().max(10, "must be below 10 character").required(),
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
    image: string().url("you must be enter valid url").nullable(),
    bio: string(),
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            username: "",
            email: "",
            image: "",
            bio: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            actions.setSubmitting(false);
            //navigate
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                type="text"
                margin="dense"
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={values?.username || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
              <TextField
                margin="dense"
                type="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={values?.email || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                type="url"
                margin="dense"
                fullWidth
                id="image"
                label="Image"
                name="image"
                value={values?.image || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.image && Boolean(errors.image)}
                helperText={touched.image && errors.image}
              />
              <TextField
                type="text"
                margin="dense"
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                value={values?.bio || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.bio && Boolean(errors.bio)}
                helperText={touched.bio && errors.bio}
              />
              <FormControl
                error={touched.password && Boolean(errors.password)}
                margin="dense"
                fullWidth
                variant="outlined"
              >
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={values?.password || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(event) => {
                          event.preventDefault();
                        }}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                {touched.password && errors.password && (
                  <FormHelperText id="password">
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link to={"/login"} variant="body2">
                    {"Do you have already an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Register;
