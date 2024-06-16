import Box from "@mui/material/Box";
// import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(STT, Tenphong, Phonguutien, Date, Tacvu) {
  return { STT, Tenphong, Phonguutien, Date, Tacvu };
}

const rows = [createData("")];

function BoardTable() {
  return (
    <>
      <Box
        sx={{
          paddingTop: 2,
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            minWidth: 700,
            backgroundColor: "#f2f2f2",
            borderRadius: "13px",
          }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow sx={{}}>
                <StyledTableCell>STT</StyledTableCell>

                <StyledTableCell align="right">Tên phòng</StyledTableCell>
                <StyledTableCell align="right">Phòng ưu tiên</StyledTableCell>
                <StyledTableCell align="right">Ngày tạo</StyledTableCell>
                <StyledTableCell align="right">Tác vụ</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default BoardTable;
