// import { CButton } from "@coreui/react";
import Box from "@mui/material/Box";
import Boardpopup from "./Boardpopup";
function Taomoi() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 2,
          paddingTop: 3,
        }}
      >
        <Box>
          <div style={{ fontWeight: "600", fontSize: "17px" }}>
            <p>Tổng số bản ghi: 0</p>
          </div>
        </Box>
        <Box>
          <Boardpopup />
        </Box>
      </Box>
    </>
  );
}

export default Taomoi;
