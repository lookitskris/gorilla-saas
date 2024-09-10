"use client";

import { handleLogin } from "@/src/config/masl/msal";
import { Button } from "@mui/material";

export const SignInButton = ({ text = "Login" }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={() => handleLogin("redirect")}
    >
      {text}
    </Button>
  );
};
