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
        console.log(task.id);
        // const { data } = await api.post('/tasks/createTask', task);
        // return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};