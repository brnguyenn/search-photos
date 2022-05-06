import { AppBar, Container, Stack, Typography } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <main>
    <Stack spacing={4}>
      <header>
        <AppBar
          position="static"
          sx={{
            alignItems: "center",
            backgroundColor: lightGreen["900"],
            paddingY: 2,
          }}
        >
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </AppBar>
      </header>
      <Container sx={{ alignSelf: "center" }}>{children}</Container>
    </Stack>
  </main>
);

export default Layout;
