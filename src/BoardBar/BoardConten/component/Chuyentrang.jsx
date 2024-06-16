import { CPagination, CPaginationItem } from "@coreui/react";
import { Box } from "@mui/material";

function Chuyentrang() {
  return (
    <Box
      sx={{
        paddingTop: 2,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <CPagination aria-label="Page navigation example">
        <CPaginationItem aria-label="Previous" disabled>
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        <CPaginationItem active>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>
        <CPaginationItem>3</CPaginationItem>
        <CPaginationItem aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </Box>
  );
}

export default Chuyentrang;
