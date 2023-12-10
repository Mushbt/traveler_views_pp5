import React from 'react';
import styles from '../../styles/Profile.module.css';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { Button } from 'react-bootstrap';
import { useSetProfileData } from '../../contexts/ProfileDataContext';

const Profile = (props) => {
  const { profile, imageSize = 40 } = props;
  const { id, following_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div className={`my-3 d-flex align-items-center`}>
      <div>
        <Link to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div>
        <Link to={`/profiles/${id}`}>
          <strong>{owner}</strong>
        </Link>
      </div>

      <div className={`${styles.button} ml-auto`}>
        {currentUser &&
          !is_owner &&
          (following_id ? (
            <Button className={`${styles.button}`} onClick={() => handleUnfollow(profile)}>
              Unfollow
            </Button>
          ) : (
            <Button className={`${styles.button}`} onClick={() => handleFollow(profile)}>
              Follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;