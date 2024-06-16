import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Appbar from "./Menu";
import Boardbar from "./BoardBar";

function App() {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: "100vh", backgroundColor: "#dfe6e9" }}
      >
        <Box
          px={3.5}
          sx={{
            width: "%",
            height: "64px",
            backgroundColor: "white",
            display: "flex",

            justifyItems: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Appbar />
        </Box>
        <Boardbar />
      </Container>
    </>
  );
}

export default App;
