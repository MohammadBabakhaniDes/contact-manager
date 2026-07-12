import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SearchContact } from "./Contact/SearchContact";
import { ContactsSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import ThemeActionButton from "../Theme/SwitchTheme";
import { amber, darkblue } from "../colors/color";

const Navbar = () => {
  const path = useSelector((state) => state.contacts.path);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark" ? true : false;

  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        height: 70,
        backgroundColor: isDark ? darkblue : amber,
      }}
    >
      <Grid
        container
        sx={{
          width: {
            xs: "94vw",
            lg: "1250px",
          },
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid xs={path ? 0 : 8} md={6.3} lg={7.3}>
          <Box sx={{ display: { xs: path ? "none" : "flex", md: "flex" } }}>
            <ContactsSharp sx={{ mt: {xs: 3, md: 2.5}, mr: 1.5, fontSize: {xs: "15px", md: "23px"} }} />
            <Typography variant="h6" sx={{fontSize: {xs: "13px", md: "18px"}, mt: {xs: 2.5, md: 2}}} color="text.primary">
              وب اپلیکیشن مدیریت مخاطبین
            </Typography>
          </Box>
        </Grid>
        {path ? (
          <Grid
            xs={10.1}
            md={4.7}
            lg={4.2}
            sx={{ mt: 1, display: "flex", flexDirection: "row" }}
          >
            <SearchContact />
          </Grid>
        ) : null}

        <Grid
          xs={1.9}
          md={1}
          lg={0.5}
          sx={{ mt: { xs: 0.5, md: 1 }, display: "flex", flexDirection: "row" }}
        >
          <ThemeActionButton />
        </Grid>
      </Grid>
    </Box>
  );
  // } else {
  //     return(
  //         <>
  //         </>
  //     )
  // }
};

export default Navbar;

// import { Box, Typography, useTheme } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
// import { SearchContact } from "./Contact/SearchContact";
// import { ContactsSharp } from '@mui/icons-material';
// import { useSelector } from "react-redux";
// import ThemeActionButton from "../Theme/SwitchTheme";
// import { amber, darkblue } from "../colors/color";

// const Navbar = () => {
//     const path = useSelector(state => state.contacts.path);
//     const theme = useTheme();
//     const isDark = theme.palette.mode === "dark" ? true : false;

//     return (
//         <Box sx={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px", height: { xs: path ? 140 : 80, md: 80 }, backgroundColor: isDark ? darkblue : amber }}>
//             <Grid container sx={{
//                 width: {
//                     xs: "80vw",
//                     lg: "1250px"
//                 }, mx: "auto"
//             }}>
//                 <Grid xs={12} md={6}>
//                     <Box display={"flex"}>
//                         <ContactsSharp sx={{ mt: 2.5, mr: 1.5 }} />
//                         <Typography variant="h6" color="text.primary" mt={2}>وب اپلیکیشن مدیریت مخاطبین</Typography>
//                     </Box>
//                 </Grid>
//                 {
//                     path ? (
//                         <Grid xs={12} md={6} sx={{ mt: { xs: 3, md: 1 }, display: "flex", flexDirection: 'row' }}>
//                             <SearchContact />
//                             <ThemeActionButton />
//                         </Grid>
//                     ) : null
//                 }
//             </Grid>
//         </Box>
//     )
//     // } else {
//     //     return(
//     //         <>
//     //         </>
//     //     )
//     // }
// }

// export default Navbar;
