import * as Yup from "yup";
import { Lock } from "@mui/icons-material";
import {
  Typography,
  Container,
  Avatar,
  TextField,
  Button,
  Paper,
  styled,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";

import React, { useContext, useState } from "react";
import loginService from "./service";
import { SnackbarContext } from "../providers/SnackbarProvider";

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

/**
 * A Basid login form that askes the username and Password for Authentication
 * @returns Login Form
 */

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { snackBar } = useContext(SnackbarContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Schema to vallidate the username and password
  const LoginFormSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginFormSchema,
    onSubmit: async (values: { username: string; password: string }) => {
      setIsLoading(true);
      try {
        const response = await loginService({ data: values });

        if (response.username) {
          setIsLoading(false);
          dispatch(login(response)); // dispatch the authenticated login token to save it in the LocalStorage
          snackBar({ message: 'Login Success' }); // Shows the SnackBar with success message
          navigate("/products");
        }
      } catch (err: any) {
        setIsLoading(false);
        snackBar({ message: err.response.data.message });
        throw err;
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper>
        <StyledAvatar>
          <Lock />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <StyledForm onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            required
            {...formik.getFieldProps("username")}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="password"
            label="Password"
            type="password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            Sign In
          </StyledButton>
        </StyledForm>
      </StyledPaper>
    </Container>
  );
};

export default Login;
