import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px ",
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Grid container lg={12} md={8} sm={4}>
        <AppBar position="dynamic" backgroundColor ="black">
          <Toolbar>
            <Grid item lg={3} md={6} xs={12} >
              <Typography variant="h5"  sx={{ flexGrow: 1,float:'left' ,marginLeft:'-20px'}}>
                <AppRegistrationIcon sx={{fontSize:'25px',float:'left'}} />
                <span style={{fontSize:'28px',fontWeight:'bolder'}}>TOTAL</span>
              <span style={{fontSize:'16px',fontWeight:'bolder',}}>Assesment</span>
              </Typography>
            </Grid>
            <Grid item lg={8}></Grid>
            <Grid item lg={1} md={4} sm={1}>
              <Typography sx={{float: 'right',marginLeft:'1000px'}}>
              <Button
                sx={{ mb: 1 }}
                variant="contained"
                size="small"
                color="warning"
                onClick={handleOpen}
                startIcon={<HelpCenterRoundedIcon />}
              >
                FAQ
              </Button>
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Grid container lg={12} spacing={2}>
              <Grid item lg={11} sm={2}>
                <Typography variant="h6">
                  <HelpIcon fontSize="small" />
                  <b>Frequently Asked Questions</b>
                </Typography>
              </Grid>
              <Grid item lg={1}>
                <CloseIcon fontsize="large" onClick={handleClose} />
              </Grid>
            </Grid>

            <hr />
            <Typography sx={{ mt: 2, ml: 5 }}>
              <b>
                Below , We answer some most frequently asked questions on our
                platform.
              </b>
            </Typography>

            <Grid item lg={12} md={6} sm={4} mt={5}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>
                    <b>What is Computer Based Examination ?</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    It is an online mode of exam. In this mode, students have to
                    appear for the examination through the computer. Students
                    can view only one question at a time on their computer
                    screen. They can view the next questions after clicking the
                    Next Question button.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>
                    {" "}
                    <b>What are CBT (Computer Based Test) types ?</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    There are mostly two types i.e. Multiple Choice (single
                    /multiple responses) and Subjective type test. In MCQ type
                    test, students have to appear for the examination through
                    the computer. Students can view only one question at a time
                    on their computer screen. They can view the next questions
                    after clicking the Next Question button.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>
                      What are the advantages of online exam over offline exam ?
                    </b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Examines can easily track the number of attempted questions
                    and can change their answer or mark any question for review
                    later.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>
                      What are the pre-requisite for TOTAL Assesment platform ?
                    </b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul>
                      <li>
                        Candidates need to take the assessment either through a
                        Desktop PC or Laptop.
                      </li>
                      <li>
                        Desktop/Laptop: Operating System : Windows 7, 8, 10.
                      </li>
                      <li>
                        Desktop configuration - RAM : Minimum 4GB of RAM
                        Processor : Intel Core i3 or above, HDD : Minimum 20 MB
                        of free space.
                      </li>
                      <li>
                        Mobile phone or tablets in case laptop is not available.
                        The smaller screen size is not recommended.
                      </li>
                      <li>
                        Internet connectivity: Minimum 2 Mbps uninterrupted
                        internet speed is desirable for online test but for
                        offline mode, you need internet pre and post test to
                        fetch and sync to the server respectively.
                      </li>
                      <li>
                        Safe Exam Browser Installation ensures safety and
                        security level of browser at 100%.
                      </li>
                      <li>
                        Supports all types of browsers – Chrome, Firefox, (with
                        appropriate version levels).
                      </li>
                      <li>
                        Webcam-Integrated Webcam or Webcam is mandatory for the
                        assessment.
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>
                    <b>I am not allowed to start the test while logging in?</b>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Check for Internet Connectivity. Please check your exam
                    Schedule for your respective subjects in Email or Admit card
                    to ensure you are Logging in to correct batch time. If
                    problem still persists, please call technical support team
                    at the helpline numbers.
                  </Typography>
                </AccordionDetails>
              </Accordion>
             
            </Grid>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
 }