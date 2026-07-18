import { Box, Button } from "@mui/material";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomForm = ({
  formik,
  inputs = [],
  selects = [],
  ml,
  edit = false,
  mt = 55,
}) => {
  const navigate = useNavigate();
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <form style={{ marginTop: mt }} onSubmit={formik.handleSubmit}>
      {inputs.map((input) => (
        <Input
          edit={edit}
          ml={{ xs: 0, md: ml }}
          touched={formik.touched[input.valueOfFormikName]}
          error={formik.errors[input.valueOfFormikName]}
          formik={{ ...formik.getFieldProps(input.valueOfFormikName) }}
          label={input.label}
        />
      ))}
      {selects.map((select) => (
        <Input
          edit={edit}
          ml={{ xs: 0, md: ml }}
          select={true}
          menuOfSelect={select.menuOfSelect}
          touched={formik.touched[select.valueOfFormikName]}
          error={formik.errors[select.valueOfFormikName]}
          formik={{ ...formik.getFieldProps(select.valueOfFormikName) }}
          label={select.label}
        />
      ))}

      <Box
        sx={{
          mx: { xs: 4, sm: edit ? 5 : 17, md: 0 },
          mt: 0,
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{
            ml: { xs: 0, sm: 0, md: edit ? 0 : "9vw" },
            my: 3,
            p: { xs: "6px 14px", sm: "7px 15px", md: "7px 17px" },
            fontSize: { xs: 12, sm: 13, md: 15 },
          }}
        >
          {edit ? "ویرایش مخاطب" : "ساخت مخاطب"}
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{
            my: 3,
            ml: { xs: 2, md: 3 },
            color: isDark ? "black" : "white",
            p: { xs: "6px 10px", sm: "7px 12px", md: "7px 16px" },
            fontSize: { xs: 12, sm: 13, md: 15 },
          }}
          onClick={() => {
            navigate("/");
            formik.values = formik.initialValues;
          }}
        >
          انصراف
        </Button>
      </Box>
    </form>
  );
};

export default CustomForm;

// import { Button } from "@mui/material";
// import Input from "./Input";
// import { useNavigate } from "react-router-dom";
// import { amber, red } from "../colors/color";

// const CustomForm = ({ formik, inputs = [], selects = [], ml }) => {
//   const navigate = useNavigate();

//   return (
//     <form style={{ marginTop: 55 }} onSubmit={formik.handleSubmit}>
//       {inputs.map((input) => (
//         <Input
//           ml={ml}
//           touched={formik.touched[input.valueOfFormikName]}
//           error={formik.errors[input.valueOfFormikName]}
//           formik={{ ...formik.getFieldProps(input.valueOfFormikName) }}
//           label={input.label}
//         />
//       ))}
//       {selects.map((select) => (
//         <Input
//           ml={ml}
//           select={true}
//           menuOfSelect={select.menuOfSelect}
//           touched={formik.touched[select.valueOfFormikName]}
//           error={formik.errors[select.valueOfFormikName]}
//           formik={{ ...formik.getFieldProps(select.valueOfFormikName) }}
//           label={select.label}
//         />
//       ))}

//       <Button
//         type="submit"
//         variant="contained"
//         sx={{
//           ml: { xs: 5, md: 17 },
//           my: 3,
//           p: "8px 15px",
//           fontSize: 15,
//           background: amber,
//         }}
//       >
//         ساخت مخاطب
//       </Button>
//       <Button
//         variant="contained"
//         sx={{ my: 3, ml: { xs: 2, md: 3 }, background: red }}
//         onClick={() => {
//           navigate("/");
//           formik.values = formik.initialValues;
//         }}
//       >
//         انصراف
//       </Button>
//     </form>
//   );
// };

// export default CustomForm;
