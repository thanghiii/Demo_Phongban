import { Box } from "@mui/material";
import BoardConten from "./BoardConten";


function Boardbar() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "calc(100% - 66px)",
          borderTop: "1px solid #b2bec3",
          boxShadow: "1px 1px 1px 4px #dfe6e9",
          backgroundColor: "white",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <BoardConten />
      </Box>
    </>
  );
}

export default Boardbar;
