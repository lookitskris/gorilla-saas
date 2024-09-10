"use client";

import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { InteractionStatus } from "@azure/msal-browser";
import { useEffect, useState, ReactElement } from "react";
import SignOutButton from "./SignOutButton";

const SignInSignOutButton = () => {
  const { inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [result, setResult] = useState<ReactElement | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      setResult(<SignOutButton />);
    } else if (inProgress !== InteractionStatus.HandleRedirect) {
      console.log("returning sign in button");
      setResult(<SignInButton />);
    } else {
      console.log("returning SignInSignOutButton of null");
      setResult(null);
    }
  }, [isAuthenticated, inProgress]);

  return result;
};

export default SignInSignOutButton;
