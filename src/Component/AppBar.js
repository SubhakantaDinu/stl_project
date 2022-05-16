import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ErrorIcon from '@mui/icons-material/Error';
const ResponsiveAppBar = () => {
  return (
    // <AppBar position="static">
    <Container maxWidth="xl"sx={{border: "1px  solid green"}}>
      <Toolbar disableGutters>
        <CameraAltIcon style={{ color: "blue" }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: "none", md: "flex", color: "#040414" } }}
        >
          <b> Photo Attendance</b>
        </Typography>

        <Box sx={{ flexGrow: 4, display: { xs: "flex", md: "flex" } }}>
          <Typography
            variant="h8"
            noWrap
            component="div"
            sx={{
              mr: 2,
              ml: 25,
             
              display: { xs: "none", md: "flex", color: "#040414" },
            }}
          >
           <ErrorIcon style={{ color: "blue" }}/> <b  style={{color:"blue"}}>YOU HAVE &nbsp;</b>  <b  style={{color:"orange"}}>3 ATTEMPTS &nbsp;</b> <b  style={{color:"blue"}}>LEFT</b>
          </Typography>
        </Box>

        <Box >
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ marginLeft:'20' }}
          >
            <b> Hi, Alok Sahoo &nbsp;</b>
            <Button
              variant="outlined"
              style={{ color: "orange", border: "1px solid #deae99" }}
            >
              ↪Logout
            </Button>
          </Typography>
        </Box>
      </Toolbar>
    </Container>
    // </AppBar>
  );
};
export default ResponsiveAppBar;