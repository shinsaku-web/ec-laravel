import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { ApiClient } from "../../apis/ApiClient";

export const LoginForm = () => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await ApiClient.get("/sanctum/csrf-cookie")
                .then(() => {
                    return ApiClient.post("/api/user/login", {
                        email: inputEmail,
                        password: inputPassword,
                        // email: "test@example.com",
                        // password: "password",
                    });
                })
                .catch((err) => {
                    setError(true);
                    throw err;
                });
            if (data.isAuth) {
                //グローバルにログイン状態をセット
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Form onSubmit={(e) => handleLogin(e)}>
            {error && (
                <p style={{ color: "red", fontWeight: "bold" }}>
                    Something is Wrong !{" "}
                </p>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.currentTarget.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.currentTarget.value)}
                />
            </Form.Group>
            {/* forgot password入れる? */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};
