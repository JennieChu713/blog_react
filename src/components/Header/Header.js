import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../../AuthContexts";
import { setAuthToken } from "../../utils";

// navbar
const HeaderContainer = styled.nav`
  height: 10%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  align-items: center;
  box-sizing: border-box;
  background-color: #666;
`;

const Brand = styled.header`
  font-size: 2rem;
  font-weight: 800;
`;

const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 5rem;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  color: white;

  ${(props) => props.$active && `background: rgba(0,0,0, 0.1);`}
`;

const NavbarList = styled.div`
  display: flex;
  align-items: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  ${NavbarList} {
    margin-left: 1rem;
  }
`;
const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header() {
  const location = useLocation();
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    if (location.pathname !== "/") {
      history.push("/");
    }
  };

  return (
    <HeaderContainer>
      <LeftWrapper>
        <Brand>B!og</Brand>
        <NavbarList>
          <Nav $active={location.pathname === "/"} to="/">
            Home
          </Nav>
          {user && (
            <Nav $active={location.pathname === "/new-post"} to="/new-post">
              Post
            </Nav>
          )}
        </NavbarList>
      </LeftWrapper>
      <RightWrapper>
        <NavbarList>
          <Nav $active={location.pathname === "/register"} to="/register">
            Register
          </Nav>
          {!user && (
            <Nav $active={location.pathname === "/login"} to="/login">
              Login
            </Nav>
          )}
          {user && (
            <Nav onClick={handleLogout} to="/">
              Logout
            </Nav>
          )}
        </NavbarList>
      </RightWrapper>
    </HeaderContainer>
  );
}
