import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#39f !important",

          // Đặt màu nền cho header
          color: "white !important", // Đặt màu chữ cho header
          fontSize: "20px",
          fontWeight: "bold",
          marginLeft: "10px",
        },
      },
    },
  },
});
