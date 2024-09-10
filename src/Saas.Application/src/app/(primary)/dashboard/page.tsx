import withAuth from "@/src/components/Masl/withAuth";
import { Typography } from "@mui/material";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  const adminClaim = process.env.NEXT_PUBLIC_USER_CLAIMS_ADMIN ?? "__admin__";

  return <Typography variant="h3">Home Content Here</Typography>;
};

export default Dashboard;
