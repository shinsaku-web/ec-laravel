import { Navbar, Container, Nav, Stack } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

export const NavOwnerGuest = () => {
    return (
        <Navbar className="p-4" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto pe-4">
                        <Stack direction="horizontal" gap={4}>
                            <Link to="/owner/login">
                                <span>
                                    <BiUser />
                                </span>
                                <span style={{ paddingLeft: "4px" }}>
                                    ログイン
                                </span>
                            </Link>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
