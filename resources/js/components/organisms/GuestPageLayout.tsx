import { ReactNode } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

interface Props {
    children: ReactNode;
}

/**
 *
 * ログインしていない（ゲスト用）ページ
 */
/** */
export const GuestPageLayout = ({ children }: Props) => {
    return (
        <div>
            <Navbar className="p-4" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto pe-4">
                            <Stack direction="horizontal" gap={4}>
                                <Link to="/login">
                                    <span>
                                        <BiUser />
                                    </span>
                                    <span>ログイン</span>
                                </Link>

                                <Link to="/register">会員登録</Link>
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="py-4">{children}</Container>
        </div>
    );
};
