"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import HttpsIcon from "@mui/icons-material/Https";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import { useFormik } from "formik";
import * as yup from "yup";

import CustomTextField from "../components/CustomTextField";

const validationSchema = yup.object({
  emailAddress: yup
    .string("Enter your email address")
    .email("Enter a valid email address")
    .required("Email address is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be a minimum of 8 characters long")
    .required("Password is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    emailAddress: "",
    password: "",
  });

  const router = useRouter();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      emailAddress: user?.emailAddress,
      password: user.password,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setErrorMessage("");
      setUser(values);
      // simulate login
      const { emailAddress, password } = values;
      if (emailAddress === "test@gmail.com" && password === "test1234") {
        notifySuccess({ message: "Login successful" });
        router.push("/members");
      } else {
        setErrorMessage("Invalid username or password.");
      }
    },
  });

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      style={{ width: "100%", backgroundColor: "transparent" }}
    >
      <Stack spacing={1}>
        {/* {Boolean(errorMessage) && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errorMessage}
          </Alert>
        )} */}

        {/* <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">Email: test@gmail.com</Typography>
          <Typography variant="body2">Password: test1234</Typography>
        </Alert> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CustomTextField
            id="emailAddress"
            name="emailAddress"
            label="Username/Email"
            placeholder="Username/Email"
            type="email"
            required
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            formikRef={formik}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="start"
                >
                  <AlternateEmailIcon />
                </IconButton>
              </InputAdornment>
            }
            minWidth={420}
          />

          <CustomTextField
            id="password"
            name="password"
            label="Password"
            placeholder="Password"
            required
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            formikRef={formik}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="start"
                >
                  <HttpsIcon />
                </IconButton>
              </InputAdornment>
            }
            minWidth={420}
          />

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            paddingY={1}
          >
            <Link
              fontWeight="500"
              underline="hover"
              href="/session/reset-password"
            >
              Forgot password?
            </Link>
          </Box>

          <Button
            color="primary"
            variant="contained"
            type="submit"
            sx={{
              width: "200px",
              height: "46px",
              position: "relative",
              borderRadius: "34px",
              textTransform: "none",
            }}
            // disabled={!formik.isValid || !formik.dirty}
          >
            Login
            {formik.isSubmitting && (
              <CircularProgress
                size={20}
                color="primary"
                sx={{
                  position: "absolute",
                  right: 10,
                }}
              />
            )}
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default LoginForm;
