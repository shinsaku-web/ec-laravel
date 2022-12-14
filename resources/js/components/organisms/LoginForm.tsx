import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLogin } from "../../hooks/useLogin";

export const LoginForm = () => {
    const {
        inputEmail,
        inputPassword,
        error,
        setInputEmail,
        setInputPassword,
        handleLogin,
    } = useLogin();
    return (
        <Form
            style={{
                border: "1px solid #ddd",
                padding: "24px",
                borderRadius: "4px",
            }}
            onSubmit={(e) => handleLogin(e)}
        >
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
