import { Box } from "@mui/material";
import { useTasksStore } from "../../hooks/useTasksStore";
import { TaskAltOutlined } from "@mui/icons-material";
import { TaskSortOptions } from "../components/TaskSortOptions";
import { CompletedTasksOptions } from "../components/CompletedTasksOptions";
import { deleteCurrentTask, getCompletedTasks, reactivateCompletedTask } from "../../api/taskApi";
import { useEffect, useState } from "react";

export const CompletedTaskView = () => {
  // Tasks state
  const [completedTasks, setCompletedTasks] = useState([]);

  // Get Task access from state
  const { tasks, sortCompletedTasks, reactiveTask } = useTasksStore();

  const handleCompletedTaskOptions = (option, taskId) => {
    if (option === "Retake Task") {
      reactivateCompletedTask(taskId);
      setCompletedTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    }
    if (option === "Delete Task") {
      deleteCurrentTask(taskId);
      setCompletedTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    }
  };

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const tasks = await getCompletedTasks();
        setCompletedTasks(tasks);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCompletedTasks();
  }, []);

  return (
    <Box className="task-view">
      <div className="task_sort__options">
        <h1 style={{ fontSize: "40px" }}>Completed Tasks</h1>
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
          {completedTasks.map((task) => (
            <tr key={task.id} className="task_completed">
              <td className="first_column_task__completed">
                <TaskAltOutlined color="success" />
                <span>{task.title}</span>
              </td>
              <td> {task.priority}</td>
              <td>{task.completedDate}</td>
              <td>
                <CompletedTasksOptions onTaskId={task.id} onHandleOptions={handleCompletedTaskOptions} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
