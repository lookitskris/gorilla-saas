const CLIENT_ID = "e6f91df6-c63a-4130-8e10-1ecc336299c2";
export const API_SCOPE =
  "https://odegorillazzxe.onmicrosoft.com/e6f91df6-c63a-4130-8e10-1ecc336299c2/api_access";

export const msalConfig = {
  auth: {
    clientId: CLIENT_ID,
    authority:
      "https://odegorillazzxe.b2clogin.com/odegorillazzxe.onmicrosoft.com/B2C_1A_SIGNUP_SIGNIN",
    redirectUri:
      "https://saas-app-ode-gorilla-zzxe.azurewebsites.net/dashboard",
    knownAuthorities: ["odegorillazzxe.b2clogin.com"],
    postLogoutRedirectUri: "/dashboard",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

export default msalConfig;

export const loginRequest = {
  scopes: ["openid", "profile", CLIENT_ID],
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
