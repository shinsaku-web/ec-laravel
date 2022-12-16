import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        id: null,
        name: null,
    },
    reducers: {
        login: (state, { payload }) => {
            // ここでログイン処理をする
            state = payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
