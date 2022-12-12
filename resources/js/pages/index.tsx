import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const IndexPage = () => {
    return (
        <div>
            <Container className="p-4">
                <h1>ECサイトトップ</h1>
                <p>ログインしていれば商品一覧ページ。</p>
                <p>未ログインであれば未ログイン用のページを表示</p>
                <Link to={"/owner"}>オーナー</Link>
                <div></div>
                <Link to={"/cart"}>ユーザー</Link>
            </Container>
        </div>
    );
};