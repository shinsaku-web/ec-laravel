import { Container, Nav, Navbar, NavDropdown, Stack } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { BiUser } from "react-icons/bi";

export const OwnerPageLayout = () => {
    return (
        <div>
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
                                    <NavDropdown.Item href="#action/3.1">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Something
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="py-4">
                <Outlet />
            </Container>
        </div>
    );
};
