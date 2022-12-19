import { Navbar, Container, Nav, Stack, NavDropdown } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

export const NavUser = () => {
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
    );
};
