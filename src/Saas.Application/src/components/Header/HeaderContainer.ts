"use client";
import { Box, styled } from "@mui/material";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.primary.main,
  height: "50px",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.secondary.main,
}));

const IconContainer = styled(Box)({
  padding: "10px",
  "& svg": {
    height: "30px",
  },
  "&:hover": {
    cursor: "pointer",
  },
});

const TitleContainer = styled(Box)({
  margin: "auto",
});

export { HeaderContainer, IconContainer, TitleContainer };
