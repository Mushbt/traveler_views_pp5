/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from "react";

import { Button, Col, Container, Image, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";

import PopularProfiles from "./PopularProfiles";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import NoResultsImage from "../../assets/no_results.png"
import Asset from "../../components/Asset";
import { ProfileEditDropdown } from "../../components/DropdownMenu";
import SecondaryNavBar from "../../components/SecondaryNavBar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import styles from "../../styles/ProfilePage.module.css";
import { fetchMoreData } from "../../utils/utils";
import Post from "../posts/Post";


function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams();
    const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const is_owner = currentUser?.username === profile?.owner; // Check if the logged in User is the profile's owner
    const [profilePosts, setProfilePosts] = useState({ results: [] });

    /*
      Makes an API request to fetch user profile and their posts
      Updates profile page data
    */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }, { data: profilePosts }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                    axiosReq.get(`/posts/?owner__profile=${id}`),
                ]);
                setProfileData((prevState) => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] },
                }));

                setProfilePosts(profilePosts);
                setHasLoaded(true);
            } catch (err) {
                // console.log(err);
            }
        };
        fetchData();
    }, [id, setProfileData]);

    /*
      Displays the profile information
    */
    const mainProfile = (
        <>
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    <Image
                        className={styles.ProfileImage}
                        roundedCircle
                        src={profile?.image}
                        alt="Profile Picture"
                    />
                </Col>

                <Col lg={6}>
                    <h3 className="m-3">{profile?.owner}</h3>
                    <Row className="justify-content-center">
                        <Col xs={4} className="my-3">
                            <div>Followers</div>
                            <div>{profile?.followers_number}</div>
                        </Col>
                        <Col xs={4} className="my-3">
                            <div>Following</div>
                            <div>{profile?.following_number}</div>
                        </Col>
                        <Col xs={4} className="my-3">
                            <div>Posts</div>
                            <div>{profile?.posts_number}</div>
                        </Col>
                    </Row>
                </Col>

                <Col lg={3} className="text-lg-right mt-md-3 mt-sm-1">
                    {/* If user is the profile owner dropdownmenu will display */}
                    {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}

                    {/* display follow and unfollow buttons on other user's profile */}
                    {currentUser &&
                        !is_owner &&
                        (profile?.following_id ? (
                            <Button className={`${styles.button}`} onMouseDown={(e) => e.preventDefault()} onClick={() => handleUnfollow(profile)}>
                                unfollow
                            </Button>
                        ) : (
                            <Button className={`${styles.button}`} onMouseDown={(e) => e.preventDefault()} onClick={() => handleFollow(profile)}>
                                follow
                            </Button>
                        ))}
                </Col>
                {profile?.description && <Col className="p-3">{profile?.description}</Col>}
            </Row>
        </>
    );

    /*
      Displays posts belonging to the profile
    */
    const mainProfilePosts = (
        <>
            <hr />
            <p className="text-center">{profile?.owner}&lsquo;s posts</p>
            <hr className={styles.Line} />
            {profilePosts.results.length ? (
                <InfiniteScroll
                    children={profilePosts.results.map((post) => (
                        <Post key={post.id} {...post} setPosts={setProfilePosts} />
                    ))}
                    dataLength={profilePosts.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!profilePosts.next}
                    next={() => fetchMoreData(profilePosts, setProfilePosts)}
                />
            ) : (
                <Asset
                    src={NoResultsImage}
                    message={`${profile?.owner} does not have any posts`}
                />
            )}
        </>
    );

    return (
        <Container>
            <Row>
                <Col className="pt-2 p-0 g-0" lg={4}>
                    <div className={`${appStyles.Content}mb-2`}>
                        <SecondaryNavBar />
                        <PopularProfiles />
                    </div>
                </Col>

                <Col className="py-2 p-0 p-lg-2" lg={8}>

                    <Container className={appStyles.Content}>
                        {hasLoaded ? (
                            <>
                                {mainProfile}
                                {mainProfilePosts}
                            </>
                        ) : (
                            <Asset spinner />
                        )}
                    </Container>

                </Col>
            </Row>
        </Container>

    );
}

export default ProfilePage;