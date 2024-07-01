
import './App.css';
import NetworkActivity from './components/NetworkActivity';

function App() {
  return (
    <div className="App">
      <NetworkActivity/>
    </div>
  );
}

export default App;









// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Checkbox,
//   FormControlLabel,
//   Grid,
// } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import TuneIcon from "@mui/icons-material/Tune";
// import ReplayIcon from "@mui/icons-material/Replay";

// const App = () => {
//   return (
//     <div
//       style={{ backgroundColor: "#282c34", color: "#ffffff", height: "100vh" }}
//     >
//       <AppBar position="static" style={{ backgroundColor: "#21252b" }}>
//         <Toolbar variant="dense">
//           <Button style={{ color: "#ffffff" }}>▾</Button>
//           <Typography
//             variant="h6"
//             color="inherit"
//             component="div"
//             style={{ flexGrow: 1 }}
//           >
//             Elements
//           </Typography>
//           <Typography variant="h6" color="inherit" component="div">
//             Console
//           </Typography>
//           <Typography variant="h6" color="inherit" component="div">
//             Network
//           </Typography>
//           <Typography variant="h6" color="inherit" component="div">
//             Sources
//           </Typography>
//           <Typography variant="h6" color="inherit" component="div">
//             Performance
//           </Typography>
//           <Typography variant="h6" color="inherit" component="div">
//             Memory
//           </Typography>
//           <Typography variant="h6" color="inherit" component="div">
//             Application
//           </Typography>
//           <Typography variant="h6" color="inherit" component="div">
//             Lighthouse
//           </Typography>
//           <MoreVertIcon style={{ color: "#ffffff" }} />
//         </Toolbar>
//       </AppBar>

//       <Toolbar
//         variant="dense"
//         style={{ backgroundColor: "#21252b", borderBottom: "1px solid #444" }}
//       >
//         <IconButton style={{ color: "#ffffff" }}>
//           <ReplayIcon />
//         </IconButton>
//         <Button style={{ color: "#ffffff", backgroundColor: "black" }}>
//           ▾
//         </Button>
//         <Button style={{ color: "#ffffff" }}>All</Button>
//         <Button style={{ color: "#ffffff" }}>Fetch/XHR</Button>
//         <Button style={{ color: "#ffffff" }}>Doc</Button>
//         <Button style={{ color: "#ffffff" }}>CSS</Button>
//         <Button style={{ color: "#ffffff" }}>JS</Button>
//         <Button style={{ color: "#ffffff" }}>Font</Button>
//         <Button style={{ color: "#ffffff" }}>Img</Button>
//         <Button style={{ color: "#ffffff" }}>Media</Button>
//         <Button style={{ color: "#ffffff" }}>Manifest</Button>
//         <Button style={{ color: "#ffffff" }}>WS</Button>
//         <Button style={{ color: "#ffffff" }}>Wasm</Button>
//         <Button style={{ color: "#ffffff" }}>Other</Button>
//         <FormControlLabel
//           control={<Checkbox style={{ color: "#ffffff" }} />}
//           label="3rd-party requests"
//           style={{ marginLeft: "auto" }}
//         />
//         <IconButton style={{ color: "#ffffff" }}>
//           <TuneIcon />
//         </IconButton>
//       </Toolbar>

//       <div style={{ padding: "20px", textAlign: "center" }}>
//         <Typography variant="h6" color="inherit" component="div">
//           Recording network activity...
//         </Typography>
//         <Typography variant="body1" color="inherit" component="div">
//           Perform a request or hit <strong>⌘ R</strong> to record the reload.
//         </Typography>
//         <Button style={{ color: "#ffffff" }}>Learn more</Button>
//       </div>
//     </div>
//   );
// };

// export default App;






















