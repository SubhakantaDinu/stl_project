import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
// import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./App.css";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
// import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
// import Autocomplete from "@mui/material/Autocomplete";
// import React, { useState } from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";



export default function App() {
  const handleSubmit = (e) => {
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    console.log(actualData);
  };



  return (
    <>
      <Box component="form" onSubmit={handleSubmit} id="login-form">
        <Grid
          item
          lg={12}
          sm={6}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
            backgroundRepeat: "no-repeat",
            maxHeight: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          style={{ minHeight: "100vh" }}
        >
          <Grid container justifyContent="center">
            <Grid
              item
              lg={8}
              sm={4}
              mt={10}
              sx={{ backgroundColor: "whitesmoke" }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, mb: 2, mt: 2 }}
              >
                <EditIcon color="primary" /> <b>Change Default Password</b>
                <Typography variant="h9" sx={{ flexGrow: 1, mb: 2, ml: 30 }}>
                  <b>Welcome,Alok Sahoo</b>
                  <Button variant="outlined" size="small" color="warning">
                    <LogoutIcon /> LOGOUT
                  </Button>
                </Typography>
              </Typography>
              <Grid lg={6} sm={2}>
                <card sx={{ maxHeight: "100%", maxWidth: "80%" }}>
                  <Box m={3}>
                    <Card
                      sx={{
                        height: "400px",                   
                        width: "800px",
                        ml: "90px",
                        mr: "90px",
                      }}
                    >
                      <Container sx={{ flexGrow: 5 }}>
                        <hr />

                        <CheckCircleIcon
                          style={{
                            fontSize: "80px",
                            color: "green",
                            marginTop: "40px",
                            marginLeft: "310px", 
                          }}             
                        />
                        <Typography variant="h4" sx={{ ml: 12 }}>
                          <b>Password Changed Successfully</b>
                        </Typography>
                        <Typography variant="h6" sx={{ ml: 12 }}>
                          Please login again using new password...
                        </Typography>
                        <Button variant="contained" sx={{ ml: 37, mt: 5 }}>
                          Login Again
                        </Button>
                      </Container>
                    </Card>
                  </Box>
                </card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box/>
      </Box>
    </>
  );
}
