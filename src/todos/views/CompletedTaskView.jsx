import { Box } from "@mui/material";
import { useTasksStore } from "../../hooks/useTasksStore";
import { TaskAltOutlined } from "@mui/icons-material";
import { TaskSortOptions } from "../components/TaskSortOptions";
import { CompletedTasksOptions } from "../CompletedTasksOptions";

export const CompletedTaskView = () => {
  // Get Task access from state
  const { tasks, sortCompletedTasks } = useTasksStore();

  return (
    <Box className="task-view">
      <div className="task_sort__options">
        <h1>Completed Tasks</h1>
        <TaskSortOptions onSort={sortCompletedTasks} />
      </div>
      <table className="table_tasks__completed">
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Completed By</th>
            <th>Task Options</th>
          </tr>
        </thead>
        <tbody>
          {tasks.completedTasks.map((task) => (
            <tr key={task.id} className="task_completed">
              <td className="first_column_task__completed">
                <TaskAltOutlined color="success" />
                <span>{task.title}</span>
              </td>
              <td> {task.priority}</td>
              <td>{task.completedDate}</td>
              <td><CompletedTasksOptions onTaskId={task.id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};