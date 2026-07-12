import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ContactDetailMenu from "./ContactDetailMenu";

const ContactData = ({ contact, anchorEl, setAnchorEl }) => {
  const isDark = useSelector((state) => state.theme.isDark);
  const groups = useSelector((state) => state.groups.items);
  console.log(groups);

  return (
    <>
      <Typography p={1.1} sx={{ pl: { xs: 13, md: 0 } }} pt={0} variant="body1">
        <Typography
          sx={{ fontSize: { xs: "13px", sm: "15px", md: "17px" } }}
          fontWeight={700}
        >
          {contact.fullname}
        </Typography>
      </Typography>

      <Typography
        p={1.1}
        sx={{
          pl: { xs: 13, md: 0 },
          fontSize: { xs: "11px", sm: "12px", md: "13px" },
        }}
        variant="body1"
        // fontSize={12}
        fontWeight={500}
      >
        {contact.mobile}
      </Typography>

      {/* <Typography p={1.1} sx={{pl:{xs: 14, md: 0}}} variant="body1" fontWeight={"bold"} display="flex">
        {contact.job}
      </Typography> */}

      <Typography
        p={1.1}
        sx={{ pl: { xs: 13, md: 0 } }}
        pb={0}
        variant="body1"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Typography
          variant="body1"
          fontSize={12}
          fontWeight={400}
          sx={{ fontSize: { xs: "11px", sm: "12px", md: "13px" } }}
        >
          {groups[groups.findIndex((group) => group.id === contact.group)].name}
        </Typography>
        <div dir="ltr">
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: isDark ? "#B8C0D9" : "#374151",
              display: { xs: "none", md: "block" },
            }}
            fontWeight="bold"
          >
            {contact.email}
          </Typography>
        </div>
      </Typography>
      <hr
        className={`mt-2 border-b ${
          isDark ? "border-[#3f51b5]" : "border-[#10b981]"
        } opacity-[0.2]`}
      />

      <Typography
        pr={1.1}
        pt={0.5}
        variant="body1"
        display="flex"
        justifyContent={"space-between"}
      >
        <Typography
          variant="body1"
          sx={{ pt: "7px", fontSize: { xs: "11px", md: "" } }}
          fontSize={12}
        >
          {contact.job}
        </Typography>
        <ContactDetailMenu
          contact={contact}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
        />
      </Typography>
    </>
  );
};

export default ContactData;

// import { CardContent, Divider, Typography } from "@mui/material"
// import { grey } from "@mui/material/colors";
// import { useSelector } from "react-redux"

// const ContactData = ({contact}) => {
//     const isDark = useSelector(state => state.theme.isDark);

//     return (
//         <CardContent sx={{ border: "1px solid transparent", backgroundColor: isDark ? grey[900] : "#fff", borderRadius: 2, mt: 2 }}>
//             <Typography p={1.4} pt={0} variant="body1" display="flex" noWrap>
//                 <Typography>نام و نام خانوادگی: &nbsp; </Typography>
//                 <Typography fontWeight="bold">
//                     {contact.fullname}
//                 </Typography>
//             </Typography>
//             <Divider />
//             <Typography p={1.4} variant="body1" fontWeight={"bold"} display="flex">
//                 <Typography fontWeight={"normal"}>شماره موبایل : &nbsp; </Typography> {contact.mobile}
//             </Typography>
//             <Divider />
//             <Typography p={1.4} pb={0} variant="body1" display="flex" flexWrap="wrap" noWrap>
//                 <Typography>آدرس ایمیل : &nbsp; </Typography>
//                 <div dir='ltr'>
//                     <Typography fontWeight="bold"
//                     //sx={{ wordBreak: "break-all" }}
//                     >
//                         {contact.email}
//                     </Typography>
//                 </div>
//             </Typography>
//         </CardContent>
//     )
// }

// export default ContactData;
