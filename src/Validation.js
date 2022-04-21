import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./App.css";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import React, { useState } from "react";
import ReportIcon from "@mui/icons-material/Report";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function App() {
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ma, setMa] = useState(false);
  const [sl, setSl] = useState(false);
  const [Na, setNa] = useState(false);
  const [Sc, setSc] = useState(false);
  const [length, setLength] = useState(false);

  //Condition to satify all mention criteria
  const check = (e) => {
    if (/[A-Z]/.test(e.target.value) || !/[A-Z]/.test(e.target.value)) {
      if (/[A-Z]/.test(e.target.value)) {
        setMa(true);
      } else {
        setMa(false);
      }
    }
    if (/[a-z]/.test(e.target.value) || !/[a-z]/.test(e.target.value)) {
      if (/[a-z]/.test(e.target.value)) {
        setSl(true);
      } else {
        setSl(false);
      }
    }
    if (/[/[0-9]/.test(e.target.value) || !/[0-9]/.test(e.target.value)) {
      if (/[0-9]/.test(e.target.value)) {
        setNa(true);
      } else {
        setNa(false);
      }
    }
    if (
      /[!@#$%^&*()_+\-={};':"|,.<>?]/.test(e.target.value) ||
      !/[!@#$%^&*()_+\-={};':"|,.<>?]/.test(e.target.value)
    ) {
      if (/[!@#$%^&*()_+\-={};':"|,.<>?]/.test(e.target.value)) {
        setSc(true);
      } else {
        setSc(false);
      }
    }

    if (e.target.value.length >= 8 || !(e.target.value.length >= 8)) {
      if (e.target.value.length >= 8) {
        setLength(true);
      } else {
        setLength(false);
      }
    }

    if (e.target.value.length >= 8) {
      setLength(true);
    }
    setnewPassword(e.target.value);
    console.log(e.target.value);
    console.log(newPassword);
  };
  const check1 = (e) => {
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
  };

  const [change, setChange] = useState(true);

  const loginAgainHandler = () => {
    setChange(true);
    setMa(false);
    setSl(false);
    setNa(false);
    setSc(false);
    setLength(false);
  };

  const handleChange = () => {
    if (newPassword === "" || newPassword === null || newPassword === " ") {
      alert("Password Field Can't Be Blank!!");
    } else {
      if (newPassword !== confirmPassword) {
        alert("Password did not match !");
      } else {
        if (ma && sl && Na && Sc && length) {
          alert("Login Sucessfully !");
          setChange(false);
        } else {
          alert("Password Should Satisfy All Mentioned Criteria");
        }
      }
    }
  };

  // if (newPassword === "" || confirmPassword === "") {
  //   alert("Password did not match !");
  // } else {
  //   alert("Login Sucessfully !");

  // }

  return (
    <>
      <Box component="form" id="login-form">
        {change ? (
          <Grid container justifyContent="center">
            <Grid
              item
              lg={12}
              sm={6}
              sx={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
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
                  sm={3}
                  mt={10}
                  sx={{
                    backgroundColor: "whitesmoke",
                    borderTop: "4px solid royalblue",
                    borderRadius: "4px",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      margin: "1em 0",
                    }}
                  >
                    <div style={{ padding: "0 1em" }}>
                      <EditIcon color="primary" />
                      <b>Change Default Password</b>
                    </div>
                    <Typography variant="h9" sx={{ padding: "0 1em" }}>
                      <b>Welcome,Alok Sahoo</b>
                      <Button variant="outlined" size="small" color="warning">
                        <LogoutIcon /> LOGOUT
                      </Button>
                    </Typography>
                  </Typography>
                  <hr />
                  <Grid container lg={12} sm={2}>
                    <Grid item xs={6} spacing={6}>
                      <Box m={3}>
                        <TextField
                          label="Password"
                          variant="outlined"
                          type="password"
                          name="password"
                          id="password"
                          margin="normal"
                          fullWidth
                        />
                        <TextField
                          autoComplete="newpassword"
                          label="New Password"
                          variant="outlined"
                          type="password"
                          name="newpassword"
                          required
                          id="newpassword"
                          margin="normal"
                          fullWidth
                          onChange={(e) => check(e)}
                        />

                        <TextField
                          label=" Confirm New Password"
                          variant="outlined"
                          type="password"
                          name="confirmnewpassword"
                          id="confirmnewpassword"
                          margin="normal"
                          fullWidth
                          onChange={(e) => check1(e)}
                        />

                        <Button
                          variant="contained"
                          size="medium"
                          color="success"
                          endIcon={<ChangeCircleIcon />}
                          fullWidth
                          mt="2"
                          type="submit"
                          margin="normal"
                          onClick={handleChange}
                        >
                          Change
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={3} sm={1}>
                      <Box
                        sx={{
                          width: 300,
                          height: 300,
                          backgroundColor: "#b3e0f2",
                          "&:hover": {
                            backgroundColor: "primary.info",
                            opacity: [0.9, 0.8, 0.7],
                          },
                          mb: 3,
                          ml: 4,
                        }}
                      >
                        <Typography variant="h5">
                          <ReportIcon fontSize="medium" color="primary" />
                          New Password
                        </Typography>

                        <hr />
                        {ma ? (
                          <p>
                            <CheckCircleIcon style={{ color: "green" }} />
                            Must Have Atleast one Capital Letter
                          </p>
                        ) : (
                          <p>
                            <CancelIcon style={{ color: "red" }} />
                            Must Have Atleast one Capital Letter
                          </p>
                        )}
                        {sl ? (
                          <p>
                            <CheckCircleIcon style={{ color: "green" }} />
                            Must Have Atleast one Small Letter
                          </p>
                        ) : (
                          <p>
                            <CancelIcon style={{ color: "red" }} />
                            Must Have Atleast one Small Letter
                          </p>
                        )}
                        {Na ? (
                          <p>
                            <CheckCircleIcon style={{ color: "green" }} />
                            Must Have Atleast one Number
                          </p>
                        ) : (
                          <p>
                            <CancelIcon style={{ color: "red" }} />
                            Must Have Atleast one number
                          </p>
                        )}
                        {Sc ? (
                          <p>
                            <CheckCircleIcon style={{ color: "green" }} />
                            Must Have Atleast one Special Letter
                          </p>
                        ) : (
                          <p>
                            <CancelIcon style={{ color: "red" }} />
                            Must Have Atleast one Special Letter
                          </p>
                        )}
                        {length ? (
                          <p>
                            <CheckCircleIcon style={{ color: "green" }} />
                            Should be minimum 8 character
                          </p>
                        ) : (
                          <p>
                            <CancelIcon style={{ color: "red" }} />
                            Should be minimum 8 character
                          </p>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
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
                          <Button
                            variant="contained"
                            sx={{ ml: 37, mt: 5 }}
                            onClick={loginAgainHandler}
                          >
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
        )}
      </Box>
    </>
  );
}
