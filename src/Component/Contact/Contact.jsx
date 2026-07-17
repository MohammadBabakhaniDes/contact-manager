import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2";
import { useSelector } from "react-redux";
import { liver } from "../../colors/color";
import ContactData from "../HelperContact/ContactData";
import ContactImage from "../HelperContact/ContactImage";
import { useNavigate } from "react-router-dom";

const Contact = ({ contact }) => {
  const isDark = useSelector((state) => state.theme.isDark);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Card
        sx={{
          transition: ".3s",
          "&:hover": {
            background: isDark ? "#464A60" :"#f1f1f1",
            transform: "translateY(-2px)",
            boxShadow: isDark ? "0 10px 30px rgba(0,0,0,.4)":"0 15px 35px rgba(0,0,0,.18)",
          },
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(0,0,0,.08);",
          padding: {xs: "16px 0 5px 15px", md: "16px 0 5px 10px"},
          borderRadius: 3,
          backgroundColor: isDark ? liver : "#fff",
          // border: "1px solid #ddd",
          position: "relative",
          overflow: "visible",
        }}
        onClick={(e) => {
          if (e.target.nodeName === "BUTTON" || e.target.nodeName === "LI" || anchorEl !== null) {
            return;
          } else {            
            
            navigate(`/contacts/${contact.id}`);
          }          
        }}
      >
        <Grid container>
          <Grid xs={12} md={3.2}>
            <ContactImage contact={contact} isDark={isDark} />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={8.8}
            sx={{ display: "flex", flexDirection: "column", pr: 1.9 }}
          >
            <ContactData contact={contact} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
          </Grid>
          {/* <Grid xs={12} sm={2} md={1}>
                    <Buttons contact={contact} />
                </Grid> */}
        </Grid>
      </Card>
    </>
  );
};

export default Contact;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import Grid from '@mui/material/Unstable_Grid2';
// import { useSelector } from 'react-redux';
// import { backgroundcardblue, liver } from '../../colors/color';
// import Buttons from '../HelperContact/Buttons';
// import ContactData from '../HelperContact/ContactData';
// import ContactImage from '../HelperContact/ContactImage';

// const Contact = ({ contact }) => {
//     const isDark = useSelector(state => state.theme.isDark);

//     return (
//         <Card sx={{
//             boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
//             padding: "16px 0 16px 10px",
//             borderRadius: 3,
//             backgroundColor: isDark ? liver : backgroundcardblue,
//             border: "1px solid #ddd"
//         }}>
//             <Grid container>
//                 <Grid xs={12} md={4}>
//                     <ContactImage contact={contact} />
//                 </Grid>
//                 <Grid xs={12} sm={10} md={7} sx={{ display: 'flex', flexDirection: 'column', pr: 1.9 }}>
//                     <ContactData contact={contact} />
//                 </Grid>
//                 <Grid xs={12} sm={2} md={1}>
//                     <Buttons contact={contact} />
//                 </Grid>
//             </Grid>
//         </Card>
//     );
// }

// export default Contact;
