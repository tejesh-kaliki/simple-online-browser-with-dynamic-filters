import { Search, Bell, Moon } from "tabler-icons-react";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import ProfileImage from "./images/profile-image.png";

function Header() {
  return (
    <Navbar
      expand="lg"
      color="light"
      fixed="top"
      className="border p-2 rounded-3 mt-3 mx-3"
    >
      <NavbarBrand className="d-flex" href="#">
        <Search size={28} className="d-inline-block me-2" />
        Search
      </NavbarBrand>
      <Nav className="ms-auto">
        <NavItem>
          <NavLink href="#">
            <Moon size={24} className="d-inline-block aling-top" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Bell size={24} className="d-inline-block aling-top" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <img
              width={32}
              height={32}
              src={ProfileImage}
              className="rounded-circle"
            />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
