import React, { useEffect, useState } from "react";

import { Row, Col, Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router";

import Post from "./Post";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import SecondaryNavBar from "../../components/SecondaryNavBar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { fetchMoreData } from "../../utils/utils";
import Comment from "../comments/Comment"
import CommentCreateForm from "../comments/CommentCreateForm";
import PopularProfiles from "../profiles/PopularProfiles";

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    /*
      Handles request for posts and their comments
      Runs code every time the post id in the URL changes
    */
    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: post }, { data: comments }] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                    axiosReq.get(`/comments/?post=${id}`),
                ]);
                setPost({ results: [post] });
                setComments(comments);
                // console.log(comments);
            } catch (err) {
                // console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Container>
            <Row>
                <Col className="py-2 p-0 p-lg-2" lg={4}>

                    <SecondaryNavBar />

                    <PopularProfiles />
                </Col>

                <Col className="py-2 p-0 p-lg-2" lg={8}>
                    <Post {...post.results[0]} setPosts={setPost} postPage />
                    <Container className={appStyles.Content}>
                        {currentUser ? (
                            <CommentCreateForm
                                profile_id={currentUser.profile_id}
                                profileImage={profile_image}
                                post={id}
                                setPost={setPost}
                                setComments={setComments}
                            />
                        ) : comments.results.length ? (
                            "Comments"
                        ) : null}
                        {comments.results.length ? (
                            // InfiniteScroll component handles loading comments as the User scrolls
                            <InfiniteScroll
                                children={comments.results.map((comment) => (
                                    <Comment key={comment.id} {...comment} setPost={setPost} setComments={setComments} />
                                ))}
                                dataLength={comments.results.length}
                                loader={<Asset spinner />}
                                hasMore={!!comments.next}
                                next={() => fetchMoreData(comments, setComments)}
                            />
                        ) : currentUser ? (
                            <span>Be the first one to comment!</span>
                        ) : (
                            <span>No comments</span>
                        )}
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default PostPage;