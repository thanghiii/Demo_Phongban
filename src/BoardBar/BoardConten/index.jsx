import Box from "@mui/material/Box";
import Tenphongban from "./component/Tenphongban";
import Taomoi from "./component/Taomoi";
import BoardTable from "./component/BoardTable";
import Chuyentrang from "./component/Chuyentrang";

function BoardConten() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "24px 24px ",
          boxSizing: "border-box",
        }}
      >
        <Tenphongban />
        <Taomoi />
        <BoardTable />
        <Chuyentrang />
      </Box>
    </>
  );
}

export default BoardConten;
