import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";

/**
 * ユーザーがログイン済みか判定する
 */
/** */
export const useAuthUser = () => {
    const navigate = useNavigate();

    const user = useSelector((state: { user: User }) => state.user);
    useEffect(() => {
        console.log(user);

        if (user.id === null) {
            navigate("/login");
        }
    }, [user]);

    return user;
};
