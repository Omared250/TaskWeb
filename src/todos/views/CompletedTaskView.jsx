import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { TaskAltOutlined } from "@mui/icons-material";
import { TaskSortOptions } from "../components/TaskSortOptions";
import { CompletedTasksOptions } from "../components/CompletedTasksOptions";
import { deleteCurrentTask, getCompletedTasks, reactivateCompletedTask } from "../../api/taskApi";
import { format, parseISO } from "date-fns";
import { useSelector } from "react-redux";

export const CompletedTaskView = () => {
  // Tasks state
  const [completedTasks, setCompletedTasks] = useState([]);

  // Curent user 
  const { user } = useSelector( state => state.auth );

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

  const sortByCompletedDate = (a, b) => new Date(a.completedDate) - new Date(b.completedDate);

  const sortByPriority = (a, b) => {
      const priorityLevels = { Low: 1, Medium: 2, High: 3 };
      return priorityLevels[b.priority] - priorityLevels[a.priority];
  };

  const sortCompletedTasks = (option) => {
    let sortedUncompletedTasks;

    if (option === 'Sort by Date') {
        sortedUncompletedTasks = [...completedTasks].sort(sortByCompletedDate);
    } else if (option === 'Sort by Priotity') {
        sortedUncompletedTasks = [...completedTasks].sort(sortByPriority);
    }

    // Updating state with the sorted tasks
    setCompletedTasks(sortedUncompletedTasks);
  };

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try {
        const tasks = await getCompletedTasks(user.uid);
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
              <td>{format(parseISO(task.completedDate), 'dd-MM-yyyy')}</td>
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
