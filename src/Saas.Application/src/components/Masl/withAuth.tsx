import { useMsal } from "@azure/msal-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextPage } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (Component: NextPage) {
  const AuthenticatedComponent: NextPage = (props) => {
    const { accounts } = useMsal();
    const router = useRouter();

    useEffect(() => {
      if (accounts.length === 0) {
        router.push("/");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accounts]);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
}
