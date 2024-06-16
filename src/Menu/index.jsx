import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Box, Typography } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import Profile from "./Profile";
import { useState } from "react";
import {
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from "@coreui/react";

function Appbar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, paddingY: 1 }}>
        <DensityMediumIcon fontSize="small" />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="span"
            gutterBottom={false}
            style={{
              opacity: 0.5,
              fontSize: "17px",
            }}
          >
            Dashboard
          </Typography>
          <Typography
            variant="span"
            gutterBottom={false}
            style={{ fontSize: "18px" }}
          >
            /
          </Typography>
          <Typography
            color={"rgb(2, 122, 72)"}
            padding={1}
            variant="span"
            gutterBottom={false}
            style={{
              fontSize: "15px",
              backgroundColor: "#CCFFCC",
              borderRadius: "4px",
              display: "inline-block",
              padding: "4px 8px",
            }}
          >
            Department Management
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <NotificationsNoneIcon
          style={{
            opacity: 0.5,
          }}
          onClick={() => setVisible(true)}
        />
        <COffcanvas
          placement="start"
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <COffcanvasTitle>Thông báo</COffcanvasTitle>
            <CCloseButton
              className="text-reset"
              onClick={() => setVisible(false)}
            />
          </COffcanvasHeader>
          <COffcanvasBody>Bạn chưa có thông báo nào</COffcanvasBody>
        </COffcanvas>
        <FormatListBulletedIcon
          style={{
            opacity: 0.5,
          }}
        />
        <MailOutlinedIcon />
        <Profile />
      </Box>
    </>
  );
}

export default Appbar;
