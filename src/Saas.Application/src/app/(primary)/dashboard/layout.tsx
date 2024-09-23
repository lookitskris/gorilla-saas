"use client";
import { Box, styled } from "@mui/material";

const Container = styled(Box)(({ theme }: { theme: any }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  color: "black",
}));

const Content = styled(Box)({
  display: "flex",
  flex: 1,
});

const PageContainer = styled(Box)({
  padding: "20px",
  width: "80vw",
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Content>
        <PageContainer>{children}</PageContainer>
      </Content>
    </Container>
  );
}
