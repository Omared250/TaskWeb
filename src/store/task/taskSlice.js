import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        completedTasks: [],
        uncompletedTasks: [] 
    },
    reducers: {
        addTask: (state, action) => {
            state.uncompletedTasks.push({ id: uuidv4(), ...action.payload });
        },
        updateTask: (state, action) => {
            const index = state.uncompletedTasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.uncompletedTasks[index] = { ...state.uncompletedTasks[index], ...action.payload };
            }
        },
        deleteTask: (state, action) => {
            
            const indexCompletedTask = state.completedTasks.findIndex(task => task.id === action.payload); 
            const indexUncompletedTask = state.uncompletedTasks.findIndex(task => task.id === action.payload);

            if (indexUncompletedTask !== -1) {
                state.uncompletedTasks = state.uncompletedTasks.filter(task => task.id !== action.payload);
            }
            if (indexCompletedTask !== -1) {
                state.completedTasks = state.completedTasks.filter(task => task.id !== action.payload);
            }
        },
        setSortedUncompletedTasks: (state, action) => {
            state.uncompletedTasks = action.payload;
        },
        setSortedCompletedTasks: (state, action) => {
            state.completedTasks = action.payload;
        },
        taskCompletion: (state, action) => {
            const index = state.uncompletedTasks.findIndex(task => task.id === action.payload);
            if (index !== -1) {
                // Move the task from uncompleted to completed
                const [completedTask] = state.uncompletedTasks.splice(index, 1); // Remove from uncompleted
                completedTask.isCompleted = true;
                completedTask.completedDate = new Date().toLocaleDateString();
                state.completedTasks.push(completedTask); // Add to completed
            }
        },
        retakeTask: (state, action) => {
            const index = state.completedTasks.findIndex(task => task.id === action.payload);
            if (index !== -1) {
                // Move the task from completed to uncompleted
                const [retakenTask] = state.completedTasks.splice(index, 1); // Remove from completed
                delete retakenTask.isCompleted;
                delete retakenTask.completedDate;
                state.uncompletedTasks.push(retakenTask); // Add to uncompleted
            }
        },
    },
});

export const { 
    addTask,
    updateTask,
    deleteTask,
    setSortedUncompletedTasks,
    setSortedCompletedTasks,
    taskCompletion,
    retakeTask
} = taskSlice.actions;