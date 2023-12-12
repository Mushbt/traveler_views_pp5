import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";
import appStyles from "../../App.module.css";

function CommentEditForm(props) {
    const { id, content, setShowEditForm, setComments } = props;
    const [formContent, setFormContent] = useState(content);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        setFormContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosRes.put(`/comments/${id}/`, {
                content: formContent.trim(),
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id
                        ? {
                            ...comment,
                            content: formContent.trim(),
                            updated_on: "now",
                        }
                        : comment;
                }),
            }));
            setSuccessMessage("Comment updated successfully!");
            setErrorMessage(null);
            setTimeout(() => {
                setSuccessMessage(null);
                setShowEditForm(false);
            }, 5000);
        } catch (err) {
            console.log(err);
            setErrorMessage("Failed to update comment. Please try again.");
            setSuccessMessage(null);
            setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
        }
    };

    return (
        <Form className="mt-2 text-center" onSubmit={handleSubmit}>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form.Group className="pr-1">
                <Form.Control
                    className={styles.Form}
                    as="textarea"
                    value={formContent}
                    onChange={handleChange}
                    rows={2}
                />
            </Form.Group>
            <div className="text-right">
                <Button
                    className={appStyles.button}
                    disabled={!content.trim()}
                    onMouseDown={(e) => e.preventDefault()}
                    type="submit"
                >
                    Update
                </Button>
                <Button
                    className={appStyles.button}
                    onClick={() => setShowEditForm(false)}
                    onMouseDown={(e) => e.preventDefault()}
                    type="button"
                >
                    Cancel
                </Button>
            </div>
        </Form>
    );
}

export default CommentEditForm;
