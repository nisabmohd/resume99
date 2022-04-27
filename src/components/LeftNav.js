import React from 'react'
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';



export const LeftNav = (props) => {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div style={{ borderRight: '2px solid rgb(37 37 37)', width: '67px', padding: '15px 0', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', backgroundColor: 'rgb(38,38,38)'}}>
      <div className="logo">
        <p style={{ userSelect: 'none', fontWeight: '700', fontSize: '27px', color: 'white', backgroundColor: "white", borderRadius: '10%', height: '42.75px', width: '44.35px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 'auto' }}><span style={{ fontSize: '11.55px', color: 'black' }}>resume</span><span style={{ color: 'rgb(103,118,237)', marginBottom: '0px', fontSize: '14.25px', marginTop: '-3px' }}>99</span></p>
      </div>
      <div className="tags">
        <div className="userlogo">
          <React.Fragment>
            <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar src={(JSON.parse(localStorage.getItem('user'))).photoURL} sx={{ width: 37, height: 37, marginLeft: '-6px' }}></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => { props.setuser(null); navigate("/"); localStorage.removeItem('user') }}>
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}
