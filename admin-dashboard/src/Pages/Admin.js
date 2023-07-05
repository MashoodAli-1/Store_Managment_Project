import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ResourceInfo from "../components/ResourceInfo";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import CameraIcon from "@mui/icons-material/Camera";
import ResourceForm from "../components/ResourceForm";
import ListSubheader from "@mui/material/ListSubheader";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import LineCharts from "../components/LineCharts";
import DateForm from "../components/DateForm";
// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const navigate = useNavigate();
  const [data, setdata] = React.useState([]);
  // const [select, setSelected] = React.useState({});
  const [resourceData, setResourceData] = React.useState([]);
  const [cameraIp, setCameraIp] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const [count, setCount] = React.useState([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    setTimeout(() => {
      fetchResource();
      console.log("called");
    }, 5000);
    fetchResource();
  }, []);

  const fetchResource = async () => {
    const res = await fetch("http://localhost:4001/getData");
    const { data } = await res.json();
    const uniqueData = data.filter((obj, index, self) => {
      return index === self.findIndex((t) => t.CameraIp === obj.CameraIp);
    });
    console.log(uniqueData);
    setdata(uniqueData);
    // fetchData();
    console.log(data);
  };

  const fetchData = async () => {
    const res = await fetch("http://localhost:4001/cameraIp");
    const { data } = await res.json();
    setdata([...new Set(data)]);
  };

  const fetchResourceData = async (CameraIp) => {
    const res = await fetch(`http://localhost:4001/getData/${CameraIp}`);
    const { data, count } = await res.json();
    setResourceData(data);
    setCount(count);
    console.log(`resource data = ${data[0]}`);
    setTimeout(() => {
      fetchResourceData(CameraIp);
      console.log("Called");
    }, 4000);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              // sx={{
              //   marginRight: "36px",
              //   ...(open && { display: "none" }),
              // }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Ai Video Analytics Project
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/login");
              }}
            >
              SignIn
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/register");
              }}
            >
              SignUp
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              Admin Dashboard
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <div>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <div>
              {data.map((row) => (
                <ListItemButton
                  onClick={() => {
                    console.log(row._id);
                    fetchResourceData(row.CameraIp);
                    setCameraIp(row.CameraIp);
                  }}
                >
                  <ListItemIcon>
                    <CameraIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={row.CameraIp} />
                </ListItemButton>
              ))}
            </div>
          </div>
          <Divider sx={{ my: 1 }} />
          <div>
            <ListSubheader component="div" inset></ListSubheader>
            <ListItemButton
              onClick={() => {
                navigate("/login");
              }}
            >
              <ListItemIcon>
                <LogoutIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}> */}
                <ResourceForm fetchResources={fetchResource} />
                {/* </Paper> */}
              </Grid>
              <Grid item xs={12}>
                {/* <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}> */}
                <DateForm cameraIp={cameraIp} />
                {/* </Paper> */}
              </Grid>
              <Grid item xs={12}>
                {/* <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}> */}
                <LineCharts count={count} />
                {/* <LineChart cameraIp="192.168.1.1" /> */}
                {/* </Paper> */}
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <ResourceInfo resourceData={resourceData} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DashboardContent;
