import { Container, Nav, Navbar, NavDropdown, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { useLogout } from "../../hooks/useLogout";

export const NavAdmin = () => {
    const { handleLogout } = useLogout("admin");

    return (
        <Navbar className="p-4" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto pe-4">
                        <Stack direction="horizontal" gap={4}>
                            <Link to="/admin/owners-list">オーナー一覧</Link>

                            <Link to="/admin/create-owner">オーナー登録</Link>

                            <Link to="/admin/delete-owner">オーナー削除</Link>

                            <NavDropdown
                                title={<BiUser />}
                                id="basic-nav-dropdown"
                                className="pe-4"
                            >
                                <NavDropdown.Item
                                    onClick={() => console.log("click")}
                                >
                                    ユーザー設定
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogout}>
                                    ログアウト
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
