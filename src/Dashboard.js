import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Grid,Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import profilePhoto from "./Icon/Dinu.jpeg";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const Dashboard = () => {
  const theme = createTheme();
  let navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container spacing={0} columns={24}>
          <Grid item lg={1} xs={1}></Grid>
          <AppBar position="static">
            <Grid item lg={22} xs={22}>
              <Grid container columns={24}>
                <Grid item lg={8} xs={24}>
                  <IconButton
                    sx={{ float: "left", fontWeight: "bold", color: "EDEDF8" }}
                  >
                    <AppRegistrationIcon sx={{ color: "white" }} />
                    <span style={{ color: "white" }}>Total Assesment</span>
                  </IconButton>
                </Grid>
                <Grid item lg={8} xs={24}>
                  <IconButton
                    sx={{ float: "left", fontWeight: "bold", color: "EDEDF8" }}
                  ></IconButton>
                </Grid>
                <Grid item lg={8} xs={24}>
                  <IconButton sx={{ float: "right" }}>
                    <Avatar alt="dinu" src={profilePhoto} style={{ml:10}}/>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </AppBar>
        </Grid>
        <Grid container spacing={2} columns={24}>
          <Grid item lg={1} xs={1}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#04021E" }}
            >
              Dashboard
            </Typography>
          </Grid>
          <Grid item lg={22} xs={22}>
            <Grid container spacing={2} columns={24}>
              <Grid item lg={4} xs={24}></Grid>
              <Grid item lg={16} xs={24}>
              
                <Typography sx={{}}>
            {/* <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/login")}
            >
              Login
            </Button> */}
          </Typography>
              </Grid>
              <Grid item lg={4} xs={24}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;