import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const CusLink = ({
  to,
  children,
  px = "8vw",
  fs = 20,
  fw = "bold",
  icon,
  w = 450,
  bcolor = "#3f51b5",
  color = "#fff",
  m = "0 auto",
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Typography textAlign={"center"}>
        <Button
          onClick={() => {
            navigate(to);
          }}
          className="shadow-md"
          sx={{ width: w, fontSize: fs, margin: m }}
          style={{
            textDecoration: "none",
            backgroundColor: bcolor,
            color: color,
            borderRadius: 8,
            fontWeight: fw,
            padding: `6px ${px} 6px ${px}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",            
          }}
        >
          {children} {icon}
        </Button>
      </Typography>
    </>
  );
};

export default CusLink;
