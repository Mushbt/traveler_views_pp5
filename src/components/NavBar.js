import React from 'react';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import logo from '../assets/tv_logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleLogOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // Handle error
    }
  };

  const LoggedInNavBar = () => (
    <NavDropdown title={<Avatar src={currentUser?.profile_image} height={40} />} id="nav-dropdown">
      <NavDropdown.Item>
        <NavLink to={`/profiles/${currentUser?.profile_id}`}>Profile</NavLink>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <NavLink to="/" onClick={handleLogOut}>Log out</NavLink>
      </NavDropdown.Item>
    </NavDropdown>
  );

  const LoggedOutNavBar = () => (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
        <i className="fa-solid fa-user-plus"></i>Sign up
      </NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/login">
        <i className="fa-solid fa-right-to-bracket"></i>Log in
      </NavLink>
    </>
  );

  return (
    <Navbar className={`${styles.NavBar}`} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.LogoContainer}>
            <img src={logo} alt="TravelerViews logo" className={styles.Logo} />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink exact className={`${styles.NavLink}`} activeClassName={styles.Active} to="/">
              <i className="fa-solid fa-house"></i>Home
            </NavLink>
            {currentUser ? <LoggedInNavBar /> : <LoggedOutNavBar />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
