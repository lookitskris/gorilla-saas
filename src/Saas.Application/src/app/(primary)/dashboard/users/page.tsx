import Container from "@/src/components/Container";
import SignOutButton from "@/src/components/Masl/SignOutButton";
import UserAvatar from "@/src/components/Masl/UserAvatar";
import { Typography } from "@mui/material";
import type { NextPage } from "next";

const Users: NextPage = () => {
  return (
    <Container title="Users">
      <Typography component="h2" fontSize="20px" fontWeight="600">
        Users
      </Typography>
      <Typography component="p" fontSize="14px">
        Here are some details about your user account
      </Typography>
      <UserAvatar showInfo={true} />
      <SignOutButton />
    </Container>
  );
};

export default Users;
