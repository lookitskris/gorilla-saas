"use client";
import { Box, styled } from "@mui/material";

interface SidebarContainerProps {
  isOpened?: boolean;
}

const SidebarContainer = styled(Box)<SidebarContainerProps>(
  ({ theme, isOpened }) => ({
    background: theme.palette.primary.main,
    borderRight: "2px solid var(--Pale-Sky-100, #edeef1)",
    width: isOpened ? "140px" : "280px",
    transition: "width 0.5s",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  })
);

const SideBarHeader = styled(Box)(({ theme }: { theme: any }) => ({
  display: "flex",
  background: theme.palette.primary.main,
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "10px",
  "& > *:not(:first-child)": {
    marginRight: "20px",
  },
}));

const Spacer = styled(Box)({
  flexGrow: 1,
});

export { SidebarContainer, SideBarHeader, Spacer };
