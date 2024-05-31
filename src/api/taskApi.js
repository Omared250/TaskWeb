import { modalAlert } from "../helpers/modalAlert";
import api from "./api";


export const getUncompletedTasks = async (userId) => {
    try {
        const { data } = await api.get('/tasks/uncompleted', { params: {userId: userId} });
        return data.tasks;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const getCompletedTasks = async (userId) => {
    try {
        const { data } = await api.get('/tasks/completed', { params: {userId: userId} });
        return data.tasks;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const createNewTask = async (task, user) => {
    try {
        const createdTask = {...task, userId: user.uid};
        const { data } = await api.post('/tasks/createTask', createdTask);
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const updateTask = async (task) => {
    console.log(task);
    try {
        const { data } = await api.put(`/tasks/updateTask/${task.id}`, task);
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const deleteCurrentTask = async (id) => {
    try {
        const { data } = await api.delete(`/tasks/deleteTask/${id}`);
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const completeTask = async (id, callback) => {
    try {
        const { data } = await api.patch(`/tasks/${id}/complete`);
        if (callback) {
            setTimeout(() => {
                // Dispatch an action to mark the task as completed from the state 
                callback(id);
                modalAlert.fire({
                    icon: "success",
                    title: "1 task completed 🎊",
                    position: "bottom-start",
                    width: "18em",
                    background: "#d2ebf9"
                });
            }, 300);
        }
        return data;
    } catch (err) {
        console.error(err);
        throw err; 
    }
};

export const reactivateCompletedTask = async (id) => {
    try {
        const { data } = await api.patch(`/tasks/${id}/retake`);
        return data;
    } catch (err) {
        console.error(err);
        throw err; 
    }
};