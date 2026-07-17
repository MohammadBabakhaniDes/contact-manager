import { Menu, MenuItem } from "@mui/material";
import AlertDelete from "../../alerts/confirmDelete";
import { useNavigate } from "react-router-dom";

export default function MenuOfViewDetail({
  menuId,
  buttonId,
  anchorEl,
  contact,
  open,
  handleClose,
  isDark,
}) {
  const navigate = useNavigate();

  return (
    <Menu
      id={menuId}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      slotProps={{
        list: {
          "aria-labelledby": buttonId,
        },
      }}
    >
      <MenuItem
        onClick={() => {
          navigate(`contacts/${contact.id}`);
        }}
      >
        نمایش
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigate(`contacts/edit/${contact.id}`);
        }}
      >
        ویرایش
      </MenuItem>      
      <AlertDelete isDark={isDark} contact={contact} />                                                    
    </Menu>
  );
}




