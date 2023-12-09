import React from 'react';
import { Container } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import Asset from '../../components/Asset';
import Profile from "./Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";

const PopularProfiles = () => {
    const { popularProfiles } = useProfileData();
    return (
        <Container className={appStyles.Content}>
            {popularProfiles.results.length ? (
                <>
                    <p>Popular Users</p>
                    {popularProfiles.results.map((profile) => (
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