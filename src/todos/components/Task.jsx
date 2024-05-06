import { Edit, EventAvailable } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import { getPriorityClassName } from "../../helpers/getPriorityClassName";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTasksStore } from "../../hooks/useTasksStore";

export const Task = ({ tasks, onDelete, onEdit, }) => {

  const { toggleTaskCompletion } = useTasksStore();

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <div>
            <div>
              <Checkbox
                type="checkbox"
                id={task.id}
                name="task"
                value={task.title}
                sx={{padding: 0}}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <label htmlFor={task.id}>{task.title}</label>
            </div>
            <span className="task__description">{task.description}</span>
            <div className="task__date">
              <EventAvailable fontSize="smaller" sx={{ mr: 0.5, ml: 0.5 }} />
              <span>{task.dateTime}</span>
              <span className={`task__priority ${getPriorityClassName(task.priority)}`}>
                {task.priority}
              </span>
            </div>
          </div>
          <div>
            <IconButton
              aria-label="delete"
              color="error"
              sx={{ mb: "-0.5rem" }}
              onClick={() => onDelete(task.id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="edit"
              color="primary"
              sx={{ mb: "-0.5rem" }}
              onClick={() => onEdit(task)}
            >
              <Edit />
            </IconButton>
          </div>
        </div>
      ))}
    </>
  );
};