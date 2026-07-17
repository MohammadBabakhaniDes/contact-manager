import { Person } from "@mui/icons-material";
import { CardMedia } from "@mui/material";
import { amber, darkblue } from "../../colors/color";

const ContactImage = ({ contact, isDark }) => {
  return (
    <>
      {contact.photo ? (
        <CardMedia
          component="img"
          sx={{
            width: { xs: 105, md: 135 },
            height: { xs: 105, md: 135 },
            objectFit: "fill",
            borderRadius: "50%",
            position: "absolute",
            top: { xs: 4, md: 16 },
            left: { xs: 3, md: 10 },
            margin: {
              xs: "0 auto",
              md: 0,
            },
            boxShadow: "0 8px 25px rgba(0,0,0,.12)",
            border: "4px solid white",
          }}
          image={contact.photo}
          // className="shadow-lg shadow-[#aaa]"
          // style={{borderRadius: 8}}
          alt="Live from space album cover"
        />
      ) : (
        <Person
          sx={{
            color: isDark ? darkblue : amber,
            width: { xs: 105, md: 135 },
            height: { xs: 105, md: 135 },
            objectFit: "fill",
            borderRadius: "50%",
            position: "absolute",
            top: { xs: 4, md: 16 },
            left: { xs: 3, md: 10 },
            margin: {
              xs: "0 auto",
              md: 0,
            },
            boxShadow: "0 8px 25px rgba(0,0,0,.12)",
            border: "4px solid white",
          }}
        />
      )}
    </>
  );
};

export default ContactImage;

// import { CardMedia } from "@mui/material";

// const ContactImage = ({contact}) => {
//     return (
//         <CardMedia
//             component="img"
//             sx={{
//                 width: 180, height: 200, objectFit: "fill", borderRadius: 2, margin: {
//                     xs: "0 auto",
//                     md: 0
//                 }
//             }}
//             image={contact.photo}
//             // style={{borderRadius: 8}}
//             alt="Live from space album cover"
//         />
//     );
// }

// export default ContactImage;
