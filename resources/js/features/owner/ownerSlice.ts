import { createSlice } from "@reduxjs/toolkit";

export const ownerSlice = createSlice({
    name: "owner",
    initialState: {
        id: null,
        name: null,
    },
    reducers: {
        ownerAuth: (state, { payload }) => {
            state.id = payload.id;
            state.name = payload.name;
        },
    },
});

// Action creators are generated for each case reducer function
export const { ownerAuth } = ownerSlice.actions;

export default ownerSlice.reducer;
