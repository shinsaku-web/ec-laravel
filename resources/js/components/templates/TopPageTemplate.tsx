import { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CardPrimary } from "../molecules/CardPrimary";
import { GuestPageLayout } from "../organisms/GuestPageLayout";
import { Loading } from "../organisms/Loading";
import { UserPageLayout } from "../organisms/UserPageLayout";

export const TopPageTemplate = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {
        user: { id, name },
    } = useAuth("user");

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
            <GuestPageLayout guestType="user">
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
                    <p>
                        <Link to={"/owner"}>店舗オーナーの方はこちら</Link>
                    </p>
                    <p>
                        <Link to={"/admin"}>管理者の方はこちら</Link>
                    </p>
                </div>
            </GuestPageLayout>
        );
    }

    return (
        <UserPageLayout>
            <p className="mb-4">こんにちは、{name}さん</p>
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <Col key={idx}>
                        <CardPrimary />
                    </Col>
                ))}
            </Row>
        </UserPageLayout>
    );
};
