import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Toolbar from "@mui/material/Toolbar";
// import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./App.css";
// import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
// import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect, useState } from "react";
import ReportIcon from '@mui/icons-material/Report';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';


export default function App() {
  
  const [newPassword,setnewPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [ma,setMa]=useState(false);
  const [sl,setSl]=useState(false);
  const [Na,setNa]=useState(false);
  const [Sc,setSc]=useState(false);
  const [length,setLength]=useState(false);

  const handleSubmit = (e) => {
    const data = new FormData(e.currentTarget);
    const actualData = {
      // oldPass: data.get("username"),
      oldPass: data.get("password"),
      newPass: data.get("newpassword"),
      newPassConf: data.get("confirmnewpassword"),
    };

    console.log(actualData);
  };

  const handlePassChange = (e) => {
    if(newPassword == confirmPassword)
    {
    }
  };
  const check=(e)=>{
    if( /[A-Z]/.test(e.target.value)){
      setMa(true)
    }
    if(/[a-z]/.test(e.target.value)){
      setSl(true)
    }
    if(/[0-9]/.test(e.target.value)){
      setNa(true)
    }    
    if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e.target.value)){        
      setSc(true)
    }
    if(e.target.value.length>=8)
    {
      setLength(true)
    }
    setnewPassword(e.target.value);
    console.log(e.target.value);
    console.log(newPassword);
  }
  const check1=(e)=>{
    setConfirmPassword(e.target.value)
    console.log(confirmPassword)
  }
  // const handlePassConfChange = () => {};
  // const [proceed, setProceed] = useState(false);

  const [visible, setVisible] = useState(true);

  const handleChange = () => {
    setVisible(false)
  };

  

  return (
    <>
      <Box component="form"  id="login-form">
        <Grid container justifyContent="center">
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
                lg={9}
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
                        
                        id="newpassword"
                        margin="normal"
                        fullWidth
                        onChange={e=>check(e)}
                      />

                      <TextField
                        label=" Confirm New Password"
                        variant="outlined"
                        type="password"
                        name="confirmnewpassword"
                        id="confirmnewpassword"
                        margin="normal"
                        fullWidth
                        onChange={e=>check1(e)}
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
                  <Grid item xs={6}>
                    <h2>New Password Rules</h2>
                    <Box
                      sx={{
                        width: 300,
                        height: 300,
                        backgroundColor: 'primary.light',
                        '&:hover': {
                          backgroundColor: 'primary.info',
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    >
                      <h1><ReportIcon/>New Password</h1>
                      {
                          ma ? <p><DoneIcon style={{color:"green"}}/>Must Have Atleast one Capital Letter</p> : <p><ClearIcon  style={{color:"red"}}/>Must Have Atleast one Capital Letter</p>
                          
                      }
                      {
                        sl ? <p><DoneIcon/>Must Have Atleast one Small Letter</p> : <p><ClearIcon/>Must Have Atleast one Small Letter</p>
                      }
                      {
                        Na ? <p><DoneIcon/>Must Have Atleast one Number</p> : <p><ClearIcon/>Must Have Atleast one number</p>
                      }
                      {
                        Sc ? <p><DoneIcon/>Must Have Atleast one Special Letter</p> : <p><ClearIcon/>Must Have Atleast one Special Letter</p>
                      }
                      {
                        length ? <p><DoneIcon/>Should be minimum 8 character</p> : <p><ClearIcon/>Should be minimum 8 character</p>
                      }
                      
                      
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
    </>
  );
}
