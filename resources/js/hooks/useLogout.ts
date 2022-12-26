import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { USER_TYPE } from "../constants/userTypes";
import { adminAuth } from "../features/admin/adminSlice";
import { ownerAuth } from "../features/owner/ownerSlice";
import { userAuth } from "../features/user/userSlice";

export const useLogout = (userType: USER_TYPE) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        if (!confirm("ログアウトしますか？")) {
            return;
        }
        const { status } = await ApiClient.post(`/api/${userType}/logout`);
        if (status === 200) {
            switch (userType) {
                case "user":
                    dispatch(userAuth({ id: null, name: null }));
                    navigate("/");
                    break;
                case "owner":
                    dispatch(ownerAuth({ id: null, name: null }));
                    navigate("/");
                    break;
                case "admin":
                    dispatch(adminAuth({ id: null, name: null }));
                    navigate("/");
                    break;

                default:
                    navigate("/");
                    break;
            }
        }
    };
    return { handleLogout };
};
