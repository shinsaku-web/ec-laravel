import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../apis/ApiClient";
import { USER_TYPE } from "../constants/userTypes";
import { adminAuth } from "../features/admin/adminSlice";
import { ownerAuth } from "../features/owner/ownerSlice";
import { userAuth } from "../features/user/userSlice";
import { Auth } from "../types/user";

/**
 * ログイン処理
 * グローバルstateが空ならユーザー取得。
 */
/** */
export const useAuth = (userType: USER_TYPE) => {
    const auth = useSelector((state: Auth) => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth[userType].id === null) {
            (async () => {
                try {
                    const {
                        data: { id, name },
                    } = await ApiClient.get(`/api/${userType}`);

                    switch (userType) {
                        case "user":
                            dispatch(userAuth({ id, name }));
                            break;
                        case "owner":
                            dispatch(ownerAuth({ id, name }));
                            break;
                        case "admin":
                            dispatch(adminAuth({ id, name }));
                            break;

                        default:
                            throw new Error("認証に失敗しました。");
                    }
                } catch (error) {
                    console.error(error);
                    switch (userType) {
                        case "user":
                            dispatch(userAuth({ id: null, name: null }));
                            break;
                        case "owner":
                            dispatch(ownerAuth({ id: null, name: null }));
                            break;
                        case "admin":
                            dispatch(adminAuth({ id: null, name: null }));
                            break;

                        default:
                            navigate("/");
                    }
                }
            })();
        }
    }, [auth]);

    return auth;
};
