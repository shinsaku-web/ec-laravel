import { Button } from "react-bootstrap";

export const ImagePage = () => {
    return (
        <div>
            <p>画像一覧ページ</p>
            <Button href="/owner/images/create" variant="success">
                画像を新規登録する
            </Button>
        </div>
    );
};
