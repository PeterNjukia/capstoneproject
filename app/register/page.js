import React from "react";

import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { Button, Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import RegisterForm from "../forms/RegisterForm";

function Register() {
  return (
    <Grid container item xs={12}>
      <Container sx={{ height: "100vh", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",

            // minHeight: "100vh",
          }}
        >
          <Card
            sx={{
              width: 500,
              height: 400,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RegisterForm />
          </Card>
        </Box>
      </Container>
    </Grid>
  );
}

export default Register;
