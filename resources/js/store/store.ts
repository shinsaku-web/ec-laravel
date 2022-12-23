import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import ownerReducer from "../features/owner/ownerSlice";
import adminReducer from "../features/admin/adminSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        owner: ownerReducer,
        admin: adminReducer,
    },
});
