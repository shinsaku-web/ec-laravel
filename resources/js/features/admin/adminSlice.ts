import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        id: null,
        name: null,
    },
    reducers: {
        adminAuth: (state, { payload }) => {
            state.id = payload.id;
            state.name = payload.name;
        },
    },
});

// Action creators are generated for each case reducer function
export const { adminAuth } = adminSlice.actions;

export default adminSlice.reducer;
