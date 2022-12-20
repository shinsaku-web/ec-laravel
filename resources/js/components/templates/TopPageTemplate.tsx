import { Button, Row, Col } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";
import { GuestPageLayout } from "../organisms/GuestPageLayout";
import { UserPageLayout } from "../organisms/UserPageLayout";

export const TopPageTemplate = () => {
    const { id, name } = useAuth();

    if (id === null) {
        return (
            <GuestPageLayout>
                <div className="p-4">
                    <Row style={{ paddingTop: "120px" }}>
                        <Col xs={6} className={"d-grid px-4"}>
                            <Button
                                style={{ color: "#fff" }}
                                variant="secondary"
                                size="lg"
                                href="/login"
                            >
                                ログインページへ
                            </Button>
                        </Col>
                        <Col xs={6} className={"d-grid px-4"}>
                            <Button
                                style={{ color: "#fff" }}
                                variant="success"
                                size="lg"
                                href="/register"
                            >
                                ユーザー登録
                            </Button>
                        </Col>
                    </Row>
                </div>
            </GuestPageLayout>
        );
    }

    return (
        <UserPageLayout>
            <p>こんにちは、{name}さん</p>
        </UserPageLayout>
    );
};
