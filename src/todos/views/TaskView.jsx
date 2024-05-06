import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import { AddOutlined } from "@mui/icons-material";
import { useTasksStore } from "../../hooks/useTasksStore";
import { useUiStore } from "../../hooks";
import { validateForm } from "../../helpers/validateForm";
import { modalAlert } from "../../helpers/modalAlert";
import { Task } from "../components/Task";
import { TaskSortOptions } from "../components/TaskSortOptions";

export const TaskView = () => {
  // Extracting tasks state and methods from hook
  const { isTaskModalOpen, closeTaskModal, openTaskModal } = useUiStore();

  // Use the useTaskStore hook instead of local state
  const { tasks, createTask, editTask, removeTask, sortUncompletedTasks } = useTasksStore();

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
    setDateTime(task.dateTime);
    setPriority(task.priority);
    setCurrentTaskId(task.id);
    setIsEditMode(true);
    openTaskModal();
  };

  const saveTask = (e) => {
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

    // Add the new task to the task state
    if (isEditMode) {
      editTask({ id: currentTaskId, title, description, dateTime, priority });
      setIsEditMode(false);
      setCurrentTaskId(null);
    } else {
      createTask({ title, description, dateTime, priority, isCompleted: false, completedDate: null });
    }

    closeTaskModal();

    // Reset form values
    resetTaskValues();
  };

  const openTask = () => {
    openTaskModal();
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    removeTask(taskId);
  };

  return (
    <div className="task-view">
      <div className="task_sort__options">
        <h1>Tasks</h1>
        <TaskSortOptions onSort={sortUncompletedTasks} />
      </div>
      <Task tasks={tasks.uncompletedTasks} onDelete={deleteTask} onEdit={ handleEditTask }/>
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
              <option value="" selected disabled>
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