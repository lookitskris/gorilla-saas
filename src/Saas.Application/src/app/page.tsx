"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import {
  Grid,
  Button,
  CssBaseline,
  Paper,
  Box,
  Typography,
  Link,
} from "@mui/material";
import SignInSignOutButton from "@/src/components/Masl/SignInSignOutButton";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://armsinnovations.co.uk/">
        Your Co
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Home: NextPage = () => {
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url("/assets/generated_field.jpeg")',

          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome to Saas App
          </Typography>
          <Box sx={{ mt: 1 }}>
            <SignInSignOutButton />

            {isAuthenticated ? (
              <Typography component="h1" variant="h5">
                you are authenticated
              </Typography>
            ) : (
              <Typography component="h1" variant="h5">
                you are unauthorized
              </Typography>
            )}

            <Copyright sx={{ mt: 3 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
