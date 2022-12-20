import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { login } from "../features/user/userSlice";

export const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        // TODO:ログアウトしますか?のアラートで条件分岐
        const { status } = await ApiClient.post("/api/user/logout");
        if (status === 200) {
            dispatch(login({ id: null, name: null }));
            navigate("/");
        }
    };
    return { handleLogout };
};
