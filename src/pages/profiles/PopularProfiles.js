import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Asset from '../../components/Asset';
import Profile from "./Profile";

const PopularProfiles = () => {
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    });
    const { popularProfiles } = profileData;
    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    "/profiles/?ordering=-followers_number"
                );
                setProfileData((prevState) => ({
                    ...prevState,
                    popularProfiles: data,
                }));
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [currentUser]);
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