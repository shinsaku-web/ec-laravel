import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface Props {
    email: string;
    password: string;
    onChangeEmail: () => void;
    onChangePassword: () => void;
    onSubmit: () => void;
}

export const LoginForm = ({
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onSubmit,
}: Props) => {
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onChangeEmail}
                />
                <Form.Text className="text-muted">
                    Well never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};
