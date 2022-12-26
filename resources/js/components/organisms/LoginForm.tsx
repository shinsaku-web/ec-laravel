import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { USER_TYPE } from "../../constants/userTypes";
import { useLogin } from "../../hooks/useLogin";

interface Props {
    userType: USER_TYPE;
}

export const LoginForm = ({ userType }: Props) => {
    const {
        inputEmail,
        inputPassword,
        error,
        setInputEmail,
        setInputPassword,
        handleLogin,
    } = useLogin(userType);
    return (
        <Form
            style={{
                border: "1px solid #ddd",
                padding: "24px",
                borderRadius: "8px",
            }}
            onSubmit={(e) => handleLogin(e)}
        >
            {error && (
                <Alert style={{ fontWeight: "bold" }} variant="danger">
                    Something is Wrong !
                </Alert>
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
            <div className="d-grid pt-2">
                <Button variant="primary" type="submit">
                    ログイン
                </Button>
            </div>
        </Form>
    );
};
