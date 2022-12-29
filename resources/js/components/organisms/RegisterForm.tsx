import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { USER_TYPE } from "../../constants/userTypes";
import { useRegister } from "../../hooks/useRegister";

interface Props {
    userType: USER_TYPE;
}

export const RegisterForm = ({ userType }: Props) => {
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
        handleRegister,
    } = useRegister(userType);
    return (
        <Form
            style={{
                border: "1px solid #ddd",
                padding: "24px",
                borderRadius: "8px",
            }}
            onSubmit={(e) => handleRegister(e)}
        >
            {error && (
                <Alert style={{ fontWeight: "bold" }} variant="danger">
                    Something is Wrong !
                </Alert>
            )}
            <Form.Group className="mb-3" controlId="formBasicName">
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

            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={inputPassword2}
                    onChange={(e) => setInputPassword2(e.currentTarget.value)}
                />
            </Form.Group>
            {/* forgot password入れる? */}
            <div className="d-grid pt-2">
                <Button variant="primary" type="submit">
                    登録する
                </Button>
            </div>
        </Form>
    );
};
