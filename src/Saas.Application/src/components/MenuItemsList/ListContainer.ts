import { Box, keyframes, styled } from "@mui/material";

const fadein = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const ListContainer = styled(Box)(({ theme }) => ({
  animation: `${fadein} 1s linear`,
}));

export default ListContainer;
