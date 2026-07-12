import * as React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import MenuOfViewDetail from "./MenuOfViewDetail";
import { amber, darkblue } from "../../colors/color";

export default function ContactDetailMenu({ contact, anchorEl, setAnchorEl }) {
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;

  const open = Boolean(anchorEl);
  const isDark = useSelector((state) => state.theme.isDark);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        // variant='outlined'
        aria-expanded={open}
        onClick={handleClick}
        style={{
          // background: amber,
          // color: "white",
          borderRadius: "8px",
        }}
        sx={{
          color: isDark ? "#7AA2FF" : amber,
          padding: { xs: 0, md: "5px 16px" },
          "&:hover": {
            background: isDark ? darkblue : "rgba(16, 185, 129, 0.1)",
          },
        }}
        className="cursor-pointer rounded-md text-blue-700 absolute"
      >
        مشاهده جزئیات
      </Button>

      <MenuOfViewDetail
        anchorEl={anchorEl}
        buttonId={buttonId}
        contact={contact}
        handleClose={handleClose}
        isDark={isDark}
        menuId={menuId}
        open={open}
      />
    </div>
  );
}
