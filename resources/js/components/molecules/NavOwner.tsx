import { Container, Nav, Navbar, NavDropdown, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { useLogout } from "../../hooks/useLogout";

export const NavOwner = () => {
    const { handleLogout } = useLogout("owner");
    const navigate = useNavigate();
    return (
        <Navbar className="p-4" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto pe-4">
                        <Stack direction="horizontal" gap={4}>
                            <Link to="/owner/shops">店舗管理</Link>

                            <Link to="/owner/images">画像管理</Link>

                            <Link to="/owner/products">商品管理</Link>

                            <NavDropdown
                                title={<BiUser />}
                                id="basic-nav-dropdown"
                                className="pe-4"
                            >
                                <NavDropdown.Item
                                    onClick={() => navigate("/owner")}
                                >
                                    オーナー設定
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
