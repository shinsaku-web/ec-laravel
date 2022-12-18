import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRegister } from "../../hooks/useRegister";

export const RegisterForm = () => {
    const {
        inputName,
        inputEmail,
        inputPassword,
        inputPassword2,
        error,
        setInputName,
        setInputEmail,
        setInputPassword,
        setInputPassword2,
        handleLogin,
    } = useRegister();
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
                <p style={{ color: "red", fontWeight: "bold" }}>
                    Something is Wrong !
                </p>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="name"
                    placeholder="Enter your name"
                    value={inputName}
                    onChange={(e) => setInputName(e.currentTarget.value)}
                />
            </Form.Group>
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password2"
                    placeholder="Confirm Password"
                    value={inputPassword2}
                    onChange={(e) => setInputPassword2(e.currentTarget.value)}
                />
            </Form.Group>
            {/* forgot password入れる? */}
            <div className="d-grid pt-2">
                <Button variant="primary" type="submit">
                    会員登録
                </Button>
            </div>
        </Form>
    );
};
