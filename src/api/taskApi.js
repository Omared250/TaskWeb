import api from "./api";


export const getUncompletedTasks = async () => {
    try {
        const { data } = await api.get('/tasks/uncompleted');
        return data.tasks;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const createNewTask = async (task) => {
    try {
        const { data } = await api.post('/tasks/createTask', task);
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const updateTask = async (task) => {
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