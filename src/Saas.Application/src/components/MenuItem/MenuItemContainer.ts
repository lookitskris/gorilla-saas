"use client";
import { Box, styled } from "@mui/material";

interface MenuItemContainerProps {
  depth: number;
}

const MenuItemContainer = styled(Box)<MenuItemContainerProps>(
  ({ theme, depth }) => ({
    display: "flex",
    flexDirection: "row",
    fontSize: "20px",
    margin: "10px",
    alignItems: "center",
    justifyContent: "space-between",
    "& svg": {
      height: "30px",
      marginRight: "10px",
    },
    "&:hover": {
      backgroundColor: "orange",
      color: "black",
      opacity: 0.5,
      cursor: "pointer",
    },
    ".menu-item": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: `${depth}rem`,
    },
    "&.selected": {
      borderRadius: "5px",
      backgroundColor: "blue",
      color: "black",
    },
  })
);

export default MenuItemContainer;
