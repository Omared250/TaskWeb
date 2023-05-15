import { createSlice } from '@reduxjs/toolkit';

export const signSlice = createSlice({
    name: 'sign',
    initialState: {
        isModalOpen: false,
        signPage: ''
    },
    reducers: {
        onOpenModal: ( state, { payload } ) => {
            state.isModalOpen = true;
            state.signPage = payload;
        },

        onCloseModal: ( state ) => {
            state.isModalOpen = false;
            state.signPage = '';
        }
    }
});


// Action creators are generated for each case reducer function
export const { onOpenModal, onCloseModal } = signSlice.actions;