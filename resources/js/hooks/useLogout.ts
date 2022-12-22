import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { USER_TYPE } from "../constants/userTypes";
import { login } from "../features/user/userSlice";

export const useLogout = (userType: USER_TYPE) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        if (!confirm("ログアウトしますか？")) {
            return;
        }
        const { status } = await ApiClient.post(`/api/${userType}/logout`);
        if (status === 200) {
            dispatch(login({ id: null, name: null }));
            navigate("/");
        }
    };
    return { handleLogout };
};
