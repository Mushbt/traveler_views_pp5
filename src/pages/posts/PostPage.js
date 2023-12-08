import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment"

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: post }, { data: comments }] = await Promise.all([
                    axiosReq.get(`/posts/${id}`),
                    axiosReq.get(`/comments/?post=${id}`),
                ]);
                setPost({ results: [post] });
                console.log(comments);
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Container>
            <Row>
                <Col className="py-2 p-0 p-lg-2" lg={4}>
                    <Container className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}>Like, feed, add</Container>

                    <Container className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}>Popular users</Container>

                    <Container className={`${appStyles.Content} ${appStyles.CollapsedColumn} mb-3`}>Country</Container>
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
                            comments.results.map((comment) => (
                                <Comment key={comment.id} {...comment} setPost={setPost} setComments={setComments} />
                            ))
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