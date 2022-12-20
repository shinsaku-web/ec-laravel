import { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";
import { GuestPageLayout } from "../organisms/GuestPageLayout";
import { Loading } from "../organisms/Loading";
import { UserPageLayout } from "../organisms/UserPageLayout";

export const TopPageTemplate = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { id, name } = useAuth();

    useEffect(() => {
        const timerID = setTimeout(() => {
            setIsLoading(false);
        }, 300);
        return () => clearTimeout(timerID);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (id === null) {
        return (
            <GuestPageLayout>
                <div
                    className="p-4"
                    style={{
                        maxWidth: "600px",
                        margin: "auto",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                    }}
                >
                    <Row style={{ padding: "80px 0" }}>
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
