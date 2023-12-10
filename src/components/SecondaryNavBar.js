import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import appStyles from '../App.module.css';
import styles from '../styles/SecondaryNavBar.module.css';

const SecondaryNavBar = ({ userAuthStatus }) => {
  const handleLogout = () => {};
  const handleLinkClick = (event) => {
    if (!userAuthStatus) {
      event.preventDefault();
    }
  };

  return (
    <Container
      className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3 ${styles.FlexDisplay}`}
    >
      <Link to="/posts/create" onClick={handleLinkClick}>
        <i className="fa-regular fa-plus fa-fw"></i>
        <p className={styles.Link}>Add post</p>
      </Link>
      <Link to="/liked" onClick={handleLinkClick}>
        <i className="fa-regular fa-heart fa-fw"></i>
        <p className={styles.Link}>Liked posts</p>
      </Link>
      <Link to="/feed" onClick={handleLinkClick}>
        <i className="fa-solid fa-rss fa-fw"></i>
        <p className={styles.Link}>Feed</p>
      </Link>

      {userAuthStatus && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </Container>
  );
};

export default SecondaryNavBar;
