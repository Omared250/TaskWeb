

import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpene: false
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpene = true;
        },

        onCloseDateModal: ( state ) => {
            state.isDateModalOpene = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { increment } = uiSlice.actions;