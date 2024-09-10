"use client";

import { useEffect } from "react";

import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import UnauthorizedMessage from "@/src/components/Masl/UnauthorizedMessage";
import { initializeMsal, msalInstance } from "./msal";
import Home from "@/src/app/page";

export default function MyMsalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initializeMsal();
  }, []);

  return (
    <MsalProvider instance={msalInstance}>
      <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Home />
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
}
