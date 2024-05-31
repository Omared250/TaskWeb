import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Delete, MoreHoriz, Undo } from "@mui/icons-material";
import { useTasksStore } from "../../hooks/useTasksStore";


const options = ["Retake Task", "Delete Task"];

const ITEM_HEIGHT = 48;

export const CompletedTasksOptions = ({ onTaskId, onHandleOptions }) => {

    const { reactiveTask, removeTask } = useTasksStore();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option) => {
    onHandleOptions(option, onTaskId)
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHoriz fontSize="small" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={() => handleMenuItemClick(option)}
            sx={{fontSize: 'medium'}}
          >
            {option === 'Retake Task' ? <Undo sx={{m: '.3em'}}/> : <Delete sx={{m: '.3em', color: 'red'}}/>}
            <span >{option}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
