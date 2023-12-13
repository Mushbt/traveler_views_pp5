import React from 'react';

import { Container } from 'react-bootstrap';

import Profile from "./Profile";
import appStyles from "../../App.module.css";
import Asset from '../../components/Asset';
import { useProfileData } from "../../contexts/ProfileDataContext";

/*
  Displays first three most followed profiles in the app
*/
const PopularProfiles = () => {
    const { popularProfiles } = useProfileData();
    return (
        <Container className={appStyles.Content}>
            {popularProfiles.results.length ? (
                <>
                    <p>Popular Users</p>
                    {popularProfiles.results.slice(0, 3).map((profile) => (
                        <Profile key={profile.id} profile={profile} />
                    ))}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
};

export default PopularProfiles;