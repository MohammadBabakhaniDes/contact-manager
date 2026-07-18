import { Box, MenuItem, TextField } from "@mui/material";
import styles from "./css/Input.module.css";

const Input = ({
  touched,
  error,
  label,
  formik,
  name,
  select,
  menuOfSelect,
  ml,
  edit = false
}) => {
  // select and menuOfSelect dar sourati ke mikhaim input az noee select bashad.

  if (select === true) {
    return (
      <Box sx={{ mx: { xs: 4, sm: edit ? 5 : 17, md: 0 } }}>
        {" "}
        <TextField
          fullWidth
          select
          {...formik}
          error={Boolean(touched && error)}
          helperText={error && touched ? error : null}
          label={label}
          sx={{
            "& .MuiInputBase-input": { height: 2, fontSize: { xs: "13px", sm: "14px", md: "16px" } },
            ml: ml, // 9vw
            "& .MuiInputBase-input": {
              minHeight: "7px !important",
              paddingBottom: 1.6,
              display: "flex",
              alignItems: "center",
            },
            "& .MuiOutlinedInput-input": { height: "7px !important" },
            "& .MuiInputLabel-root": {
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
            },
            "& .MuiFormHelperText-root": {
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
            },
          }}
          color="success"
        >
          <MenuItem value={""}>None</MenuItem>
          {menuOfSelect.map((men) => (
            <MenuItem value={men.id}>{men.name}</MenuItem>
          ))}
        </TextField>
      </Box>
    );
  }

  return (
    <Box sx={{ mx: { xs: 4, sm: edit ? 5 : 17, md: 0 } }}>
      <TextField
        fullWidth
        {...formik}
        error={Boolean(touched && error)}
        helperText={error && touched ? error : null}
        label={label}
        sx={{
          "& .MuiInputBase-input": { height: 2, fontSize: { xs: "13px", sm: "14px", md: "16px" } },
          "& .MuiInputLabel-root": {
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
          },
          "& .MuiFormHelperText-root": {
            fontSize: { xs: "10px", sm: "11px", md: "12px" },
          },
          ml: ml,
        }}
        color="success"
      />
    </Box>
  );
};

export default Input;
