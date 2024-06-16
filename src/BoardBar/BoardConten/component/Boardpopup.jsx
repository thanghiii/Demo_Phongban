import {
  CButton,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { Box } from "@mui/material";
import React, { useState } from "react";

function Boardpopup() {
  const [data, setData] = useState("");
  const [visibleXL, setVisibleXL] = useState(false);
  const [input, setInput] = useState("");

  const handleClose = () => {
    setVisibleXL(false);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSave = () => {
    if (input.trim()) {
      setData(input.trim());
      setInput("");
      setVisibleXL(false);
    }
  };

  return (
    <>
      <CButton color="primary" onClick={() => setVisibleXL(!visibleXL)}>
        Tạo mới
      </CButton>
      <Box>
        <CModal // Popup
          fullscreen="xl"
          visible={visibleXL}
          onClose={handleClose}
          aria-labelledby="FullscreenExample5"
        >
          <CModalHeader
            style={{
              backgroundColor: "blue",
            }}
          >
            <CModalTitle
              style={{
                color: "white",
              }}
              id="FullscreenExample5"
            >
              Tạo phòng ban
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Tên phòng ban
                <span
                  style={{
                    color: "red",
                    marginLeft: 4,
                    marginTop: 8,
                  }}
                >
                  *
                </span>
              </Box>
              <Box>
                <CFormInput
                  onChange={handleChange}
                  value={input} // Thêm giá trị value
                  style={{
                    marginTop: 12,
                    marginBottom: 12,
                  }}
                  type="text"
                  size=""
                  placeholder=""
                  aria-label="lg input example"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Phòng ưu tiên
              <span
                style={{
                  color: "red",
                  marginLeft: 4,
                  marginTop: 8,
                }}
              >
                *
              </span>
            </Box>
            <Box>
              <CFormInput
                style={{
                  marginTop: 12,
                  marginBottom: 12,
                }}
                type="text"
                size=""
                placeholder=""
                aria-label="lg input example"
              />
            </Box>
            <hr></hr>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CButton
                onClick={handleClose}
                style={{}}
                color="secondary"
                variant="outline"
              >
                Hủy
              </CButton>
              <CButton
                onClick={handleSave}
                style={{
                  marginLeft: 10,
                }}
                color="primary"
              >
                Lưu
              </CButton>
            </Box>
          </CModalBody>
        </CModal>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3> K in dữ kiệu ra được bảng đâu: </h3>
          <p>{data}</p>
        </Box>
      </Box>
    </>
  );
}

export default Boardpopup;
