/* eslint-disable react/display-name */
import React from "react";

import { Dropdown, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useHistory } from "react-router";

import styles from "../styles/DropdownMenu.module.css";

const DropdownDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));


/*
  Dropdown menu for post owners. They will have the options of editing and deleting posts.
  Calls the handleEdit & handleDelete functions based on destructured props
*/
export const DropdownMenu = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={DropdownDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }} // To ensure position of dropdownmenu is consistent accross browsers
      >
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit post</Tooltip>}>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleEdit}
            aria-label="edit post"
          >
            <i className="fas fa-edit"></i>
          </Dropdown.Item>
        </OverlayTrigger>

        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Delete post</Tooltip>}
        >
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleDelete}
            aria-label="delete post"
          >
            <i className="fas fa-trash-alt" />
          </Dropdown.Item>
        </OverlayTrigger>
      </Dropdown.Menu>
    </Dropdown>
  );
};

/*
  Dropdown menu on the profile page
  displays icons for edit profile & change password
  Makes a request to fetch profile data based on the profile id
*/
export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={DropdownDots} />

      <Dropdown.Menu
        className="d-flex"
        popperConfig={{ strategy: "fixed" }}
      >
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Edit profile</Tooltip>}
        >
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit`)}
            aria-label="edit-profile"
          >
            <i className="fas fa-edit" />
          </Dropdown.Item>
        </OverlayTrigger>

        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Change password</Tooltip>}
        >
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit/password`)}
            aria-label="change-password"
          >
            <i className="fas fa-key" />
          </Dropdown.Item>
        </OverlayTrigger>
      </Dropdown.Menu>
    </Dropdown>
  );
}