import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, retakeTask, setSortedCompletedTasks, setSortedUncompletedTasks, taskCompletion, updateTask } from '../store/task/taskSlice';
import { modalAlert } from '../helpers/modalAlert';


export const useTasksStore = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    const sortByDate = (a, b) => new Date(a.dateTime) - new Date(b.dateTime);
    const sortByCompletedDate = (a, b) => new Date(a.completedDate) - new Date(b.completedDate);

    const sortByPriority = (a, b) => {
        const priorityLevels = { Low: 1, Medium: 2, High: 3 };
        return priorityLevels[b.priority] - priorityLevels[a.priority];
    };

    const createTask = (task) => {
        dispatch(addTask(task));
    };

    const editTask = (task) => {
        dispatch(updateTask(task));
    };

    const removeTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const sortUncompletedTasks = (option) => {
        let sortedUncompletedTasks;

        if (option === 'Sort by Date') {
            sortedUncompletedTasks = [...tasks.uncompletedTasks].sort(sortByDate);
        } else if (option === 'Sort by Priotity') {
            sortedUncompletedTasks = [...tasks.uncompletedTasks].sort(sortByPriority);
        }

        // Updating redux state with the sorted tasks
        dispatch(setSortedUncompletedTasks(sortedUncompletedTasks));
    };

    const sortCompletedTasks = (option) => {
        let sortedCompletedTasks;

        if (option === 'Sort by Date') {
            sortedCompletedTasks = [...tasks.completedTasks].sort(sortByCompletedDate);
        } else if (option === 'Sort by Priotity') {
            sortedCompletedTasks = [...tasks.completedTasks].sort(sortByPriority);
        }

        // Updating redux state with the sorted tasks
        dispatch(setSortedCompletedTasks(sortedCompletedTasks));
    };

    // Function to mark task as completed
    const toggleTaskCompletion = (taskId) => {
        // Wait for the animation to complete before remove the task from the uncompleted
        setTimeout(() => {
            // Dispatch an action to mark the task as completed from the state 
            dispatch(taskCompletion(taskId));
            modalAlert.fire({
                icon: "success",
                title: "1 task completed 🎊",
                position: "bottom-start",
                width: "18em",
                background: "#d2ebf9"
            });
        }, 1000);
    };

    // Function to retake the task
    const reactiveTask = (taskId) => {
        dispatch(retakeTask(taskId));
    }

    return {
        tasks,
        createTask,
        editTask,
        removeTask,
        sortUncompletedTasks,
        sortCompletedTasks,
        toggleTaskCompletion,
        reactiveTask
    };
}