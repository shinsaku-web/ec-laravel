import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiClient } from "../apis/ApiClient";
import { login } from "../features/user/userSlice";
import { User } from "../types/user";

/**
 * ログイン処理
 * グローバルstateが空ならユーザー取得。
 */
/** */
export const useAuth = () => {
    const user = useSelector((state: { user: User }) => state.user);
    const dispatch = useDispatch();
    console.log("rendered");
    useEffect(() => {
        if (user.id === null) {
            (async () => {
                const {
                    data: { id, name },
                } = await ApiClient.get("/api/user");

                dispatch(login({ id, name }));
            })();
        }
    }, [user]);

    return user;
};
