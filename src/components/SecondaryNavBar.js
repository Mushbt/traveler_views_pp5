import React from 'react';
import { Link } from 'react-router-dom';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import appStyles from '../App.module.css';
import styles from '../styles/SecondaryNavBar.module.css';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const SecondaryNavBar = () => {
  const currentUser = useCurrentUser();

  const renderTooltip = (message) => (
    <Tooltip id="tooltip">{message}</Tooltip>
  );

  return (
    <Container
      className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3 ${styles.FlexDisplay}`}
    >
      {currentUser ? (
        <>
          <Link to="/posts/create">
            <i className="fa-regular fa-plus fa-fw"></i>
            <p className={styles.Link}>Add post</p>
          </Link>
          <Link to="/liked">
            <i className="fa-regular fa-heart fa-fw"></i>
            <p className={styles.Link}>Liked posts</p>
          </Link>
          <Link to="/feed">
            <i className="fa-solid fa-rss fa-fw"></i>
            <p className={styles.Link}>Feed</p>
          </Link>
        </>
      ) : (
        <>
          <OverlayTrigger
            placement="bottom"
            overlay={renderTooltip('Log in to create a post')}
          >
            <div>
              <i className="fa-regular fa-plus fa-fw"></i>
              <p className={styles.Link}>Add post</p>
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={renderTooltip('Log in to access liked photos')}
          >
            <div>
              <i className="fa-regular fa-heart fa-fw"></i>
              <p className={styles.Link}>Liked posts</p>
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={renderTooltip('Log in to access the feed')}
          >
            <div>
              <i className="fa-solid fa-rss fa-fw"></i>
              <p className={styles.Link}>Feed</p>
            </div>
          </OverlayTrigger>
        </>
      )}
    </Container>
  );
};

export default SecondaryNavBar;
