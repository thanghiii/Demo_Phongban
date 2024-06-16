import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { Button, Divider, ListItemIcon, Menu } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Logout from "@mui/icons-material/Logout";
import { Settings } from "@mui/icons-material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import React from "react";

function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button-profile"
        aria-controls={open ? "basic-menu-Profile" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/441001121_1105536020547790_2276817581306710481_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGeYnVvae0WOcP3KN1Ge3kXRHYocHSBJLJEdihwdIEksksTIZMuQy8YAzY-b0WjWX_pH5XoDL70G_clod2tRDvP&_nc_ohc=c6cbDLu08qMQ7kNvgFYiEn8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHdzH9buOg1xDO10cU07q6oKCnZr5zg9WAffkOoDix3wQ&oe=668F76B4"
        />
      </Button>

      <Menu
        id="basic-menu-Profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button-profile",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Profile;
