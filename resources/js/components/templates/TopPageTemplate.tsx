import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/user/userSlice";

export const TopPageTemplate = () => {
    const selector = useSelector((state) => state);
    console.log(selector);

    const dispatch = useDispatch();

    useEffect(() => {
        alert("dispatch実行");
        dispatch(login());
    }, []);

    return (
        <div>
            <h2>トップページです。</h2>
            <p>
                ログイン済みなら商品一覧、未ログインなら「未ログイン」と書いたページでOK
            </p>
            <p>Reduxでログイン管理する</p>
        </div>
    );
};
