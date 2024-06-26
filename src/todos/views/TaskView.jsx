import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import { AddOutlined } from "@mui/icons-material";
import { useUiStore } from "../../hooks";
import { validateForm } from "../../helpers/validateForm";
import { modalAlert } from "../../helpers/modalAlert";
import { Task } from "../components/Task";
import { TaskSortOptions } from "../components/TaskSortOptions";
import { completeTask, createNewTask, deleteCurrentTask, getUncompletedTasks, updateTask } from "../../api/taskApi";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { format, parseISO } from "date-fns";
import { useSelector } from "react-redux";

export const TaskView = () => {
  // Tasks state
  const [uncompletedTasks, setUncompletedTasks] = useState([]);

  const { user } = useSelector( state => state.auth );

  // Extracting tasks state and methods from hook
  const { isTaskModalOpen, closeTaskModal, openTaskModal } = useUiStore();

  // States to update task
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  // State variables to store form values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [priority, setPriority] = useState("");

  // Function to Reset form values
  const resetTaskValues = () => {
    setTitle("");
    setDescription("");
    setDateTime("");
    setPriority("");
  };

  const cancelTask = () => {
    closeTaskModal();

    // Reset form values
    resetTaskValues();
  };

  const handleEditTask = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setDateTime(format(parseISO(task.dateTime), 'yyyy-MM-dd'));
    setPriority(task.priority);
    setCurrentTaskId(task.id);
    setIsEditMode(true);
    openTaskModal();
  };

  const saveTask = async (e) => {
    e.preventDefault();

    const { isValid, message } = validateForm(
      title,
      description,
      dateTime,
      priority
    );

    if (!isValid) {
      modalAlert.fire({
        icon: "warning",
        title: "Something is Wrong 🤔",
        text: message,
      });
      return;
    }

    const newTask = {id: uuidv4(), title, description, dateTime, priority, isCompleted: false, completedDate: null };

    // Add the new task to the task state
    if (isEditMode) {
      const updatedTask = { id: currentTaskId, title, description, dateTime, priority };
      updateTask(updatedTask);
      setUncompletedTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
      setIsEditMode(false);
      setCurrentTaskId(null);
    } else {
      createNewTask(newTask, user);
      setUncompletedTasks(prevTasks => [...prevTasks, newTask]);
    };

    closeTaskModal();

    // Reset form values
    resetTaskValues();
  };

  const openTask = () => {
    openTaskModal();
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    deleteCurrentTask(taskId);
    setUncompletedTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleTaskCompletion = (taskId) => {
    completeTask(taskId, (completedTaskId) => {
      setUncompletedTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== completedTaskId)
      );
    });
  };

  const sortByDate = (a, b) => new Date(a.dateTime) - new Date(b.dateTime);

  const sortByPriority = (a, b) => {
      const priorityLevels = { Low: 1, Medium: 2, High: 3 };
      return priorityLevels[b.priority] - priorityLevels[a.priority];
  };

  const sortUncompletedTasks = (option) => {
    let sortedUncompletedTasks;

    if (option === 'Sort by Date') {
        sortedUncompletedTasks = [...uncompletedTasks].sort(sortByDate);
    } else if (option === 'Sort by Priotity') {
        sortedUncompletedTasks = [...uncompletedTasks].sort(sortByPriority);
    }

    // Updating state with the sorted tasks
    setUncompletedTasks(sortedUncompletedTasks);
  };

  useEffect(() => {
    const fetchUncompletedTasks = async () => {
      try {
        const tasks = await getUncompletedTasks(user.uid);
        setUncompletedTasks(tasks);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUncompletedTasks();
  }, [])
  
  return (
    <div className="task-view">
      <div className="task_sort__options">
        <h1 style={{fontSize: '40px'}}>Tasks</h1>
        <TaskSortOptions onSort={sortUncompletedTasks} />
      </div>
      <Task tasks={uncompletedTasks} onDelete={deleteTask} onEdit={ handleEditTask } onCompleteTask={handleTaskCompletion}/>
      <form className={isTaskModalOpen ? "task-form" : "toggle"}>
        <input
          type="text"
          placeholder="Task Title"
          className="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="task-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Divider sx={{ mt: 1 }} />
        <div className="task-form__date-priority">
          <div>
            <input
              type="date"
              className="task-form__datetime"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
            />
            <select
              name="priority"
              id="priority-dropdown"
              className="task-form__dropdown"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="" disabled>
                Priority
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="task-form__actions">
            <button
              type="button"
              onClick={cancelTask}
              className="task-form__btn"
            >
              Cancel
            </button>
            <button type="submit" onClick={saveTask} className="task-form__btn">
              { isEditMode ? 'Update' : 'Save' }
            </button>
          </div>
        </div>
      </form>
      <button
        type="button"
        onClick={openTask}
        className={isTaskModalOpen ? "toggle" : "addTask"}
      >
        <AddOutlined />
        <span style={{ marginLeft: "0.5rem" }}>Add new Task</span>
      </button>
    </div>
  );
};