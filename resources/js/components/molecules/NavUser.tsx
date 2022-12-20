import { Navbar, Container, Nav, Stack, NavDropdown } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

export const NavUser = () => {
    const { handleLogout } = useLogout();
    return (
        <Navbar className="p-4" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto pe-4">
                        <Stack direction="horizontal" gap={4}>
                            <Link to="/">商品一覧を見る</Link>

                            <Link to="/cart">カート</Link>

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
