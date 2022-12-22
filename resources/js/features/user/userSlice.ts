import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        id: null,
        name: null,
    },
    reducers: {
        userAuth: (state, { payload }) => {
            state.id = payload.id;
            state.name = payload.name;
        },
    },
});

// Action creators are generated for each case reducer function
export const { userAuth } = userSlice.actions;

export default userSlice.reducer;
