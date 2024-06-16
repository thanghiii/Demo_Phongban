import { CButton, CContainer, CFormInput, CNavbarBrand } from "@coreui/react";
import Box from "@mui/material/Box";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import Typography from "@mui/material/Typography";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

function Tenphongban() {
  return (
    <>
      <Box>
        <Box>
          <CContainer 
            style={{
              backgroundColor: "rgb(50, 31, 219)",
              borderRadius: "3px",
              height: "42px",
            }}
            fluid
          >
            <CNavbarBrand href="#">
              <div
                style={{
                  color: "white",
                  justifyContent: "center",
                  lineHeight: "42px",
                  fontSize: "28px",
                }}
              >
                Quản lý phòng ban
              </div>
            </CNavbarBrand>
          </CContainer>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #E5E5E5",
          height: "155px",
          marginTop: "25px",
          borderRadius: "7px",
        }}
      >
        <Box sx={{ boxSizing: "border-box", margin: "15px", gap: 2 }}>
          <Typography
            variant="span"
            gutterBottom={false}
            style={{
              fontSize: "17px",
            }}
          >
            Tên phòng ban
          </Typography>
          <div style={{ width: "350px", marginTop: "12px" }}>
            <CFormInput
              type="text"
              size=""
              placeholder="Nhập tên phòng ban..."
              aria-label="lg input example"
            />
          </div>
        </Box>
        <Box
          sx={{
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            gap: 1,
            paddingLeft: "650px",
          }}
        >
          <Box>
            <button
              style={{
                color: "white",
                borderRadius: "5px",
                whiteSpace: "nowrap",
                height: "36px",
                border: "0px solid",
                backgroundColor: "rgb(50, 31, 219)",
              }}
            >
              <SearchSharpIcon />
              Tìm kiếm
            </button>
          </Box>

          <CButton color="secondary" variant="outline">
            <FilterAltOffIcon /> Bỏ lọc
          </CButton>
        </Box>
      </Box>
    </>
  );
}

export default Tenphongban;
