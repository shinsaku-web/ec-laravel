import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiClient } from "../apis/ApiClient";
import { USER_TYPE } from "../constants/userTypes";
import { userAuth } from "../features/user/userSlice";
import { User } from "../types/user";

/**
 * ログイン処理
 * グローバルstateが空ならユーザー取得。
 */
/** */
export const useAuth = (userType: USER_TYPE) => {
    const user = useSelector((state: { user: User }) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user.id === null) {
            (async () => {
                const {
                    data: { id, name },
                } = await ApiClient.get(`/api/${userType}`);

                dispatch(userAuth({ id, name }));
            })();
        }
    }, [user.id]);

    return user;
};
