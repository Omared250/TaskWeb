

import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
        isTaskModalOpen: localStorage.getItem('taskModal') === 'true',
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true;
        },

        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false;
        },
        onOpenTaskModal: ( state ) => {
            state.isTaskModalOpen = true;
            localStorage.setItem('taskModal', 'true');
        },

        onCloseTaskModal: ( state, action ) => {
            state.isTaskModalOpen = false;
            localStorage.setItem('taskModal', 'false');
        }
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal, onCloseTaskModal, onOpenTaskModal } = uiSlice.actions;