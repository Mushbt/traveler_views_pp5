# TravelerViews <Add image here>

**Developer: Mustafa Habet**

[Deployed link](insert link here)

[Am I responsive image here]

## Table of Contents
  - [About](#about)
  - [Project Goals](#project-goals)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Colors](#colours)
    - [Fonts](#fonts)
    - [Wireframes](#wireframes)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Libraries, frameworks and dependencies](#libraries-frameworks-and-dependencies)
    - [Tools & Programs](#tools--programs)
  - [Features](#features)
  - [Future features](#future-features)
  - [Validation](#validation)
  - [Testing](#testing)
    - [Manual testing of user stories](#manual-testing-of-user-stories)
    - [Performing tests on various devices](#performing-tests-on-various-devices)
    - [Browser compatibility](#browser-compatibility)
  - [Bugs](#bugs)
  - [Config](#config)
  - [Credits](#credits)


## About

TravelerViews is a social platform designed for users to showcase their travel experiences by sharing captivating photos of places and countries they have explored globally. This interactive space allows users not only to appreciate and like each other's photos but also to engage in meaningful conversations through comments. Furthermore, users can establish connections by following each other, unlocking the opportunity to explore and appreciate the photos shared by those they follow. TravelerViews offers a vibrant community where individuals can connect, inspire, and explore the diverse beauty of our world through shared visual narratives.

## Project Goals

The goal of this project was to create a platform that facilitates user interaction through features like commenting on posts and following other users' profiles. The concept behind the portal is to maintain an informal and entertaining atmosphere, encouraging users to engage with one another in dynamic ways.

The essential functionalities include:

- Streamlined and user-friendly navigation across all pages
- User authentication
- User engagement through posts, comments, likes, and followers
- Comprehensive user profiles featuring descriptions and images
- CRUD (Create, Read, Update, Delete) operations for posts, comments, likes, followers, and profile information
- Convenient filtering of posts by title, author, and category
- Filtering posts based on liked content and posts from followed users
- Responsive design for optimal user experience on diverse devices

## User Stories

### Epic 1

#### Navigation

- As a user, I can view a navbar from every page, so that I can navigate easily between pages.
- As a user, I can navigate through pages quickly, so that I can view content seamlessly without page refresh.

#### Authentication

- As a user, I can create a new account, so that I can access all the features for signed up users.
- As a user, I can sign in to the app, so that I can access functionality for logged in users.
- As a user, I can tell if I am logged in or not, so that I can log in if I need to.
- As a user, I can maintain my logged-in status until I choose to log out, so that my user experience is not compromised.
- As a user, I can view user's avatars, so that I can easily identify users of the application.
- As a user, I can change the password to my account, so that I can keep my profile secure.

### Epic 2

### Adding & Liking Posts

- As a logged in user I can create posts so that I can share my images with the world!
- As a user, I can view the details of a single post, so that I can learn more about it.
- As a logged in user, I can like a post, so that I can show my support for the posts that interest me.

### Epic 3

#### The Profile Page

- As a user I can view other users profiles so that I can see their posts and learn more about them.
- As a user I can see a list of the most followed profiles so that I can see which profiles are popular.
- As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them.
- As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed.
- As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them.
- As a logged in user I can edit my profile so that I can change my profile picture and bio.
- As a logged in user I can update my username and password so that I can change my display name and keep my profile secure.
- As a user, I can delete my account if I decide to no longer use the app.

### Epic 4

#### The Post Page

- As a user I can view the posts page so that I can read the comments about the post.
- As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created.
- As a logged in user I can add comments to a post so that I can share my thoughts about the post.
- As a user I can see how long ago a comment was made so that I know how old a comment is.
- As a user I can read comments on posts so that I can read what other users think about the posts.
- As an owner of a comment I can delete my comment so that I can control removal of my comment from the application.
- As an owner of a comment I can edit my comment so that I can fix or update my existing comment.

### Epic 5

#### The Posts page

- As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content.
- As a user, I can search for posts with a country tag, so that I can find the posts for a specific country I am most interested in.
- As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most.
- As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about.
- As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page".

### General

- As the site owner, I want full responsiveness for my site, so that users can seamlessly utilize it across various devices.
- As a user, I can see feedback messages, so that I know whether there have been updates to my comments, profile, or posts.

##### Back to [top](#table-of-contents)

## Design

### Colors

When selecting the color scheme for my latest project, I aimed for something distinctive. In my previous four projects, I opted for a straightforward design with muted colors. However, this time, I chose to embrace adventure! Following online research, I discovered that adventurous color palettes complement travel blog sites, making the decision a clear choice. After a brief Google search for 'Adventurous color combinations,' I settled on 'Teal' and 'Mustard' with subtle black accents. This choice imparted a bold personality to my site, of which I am genuinely proud.

<Add color pallete here>

### Fonts

Google Fonts was implemented on the site. I used Source Code Pro as the primary font and sans-serif as the fallback throughout the entire site. Source Code Pro, renowned for its popularity among coders, offers visual comfort and a broader character width tailored for optimal screen reading.

### Wireframes

<Image here>

<Image here>

<Image here>

##### Back to [top](#table-of-contents)

## Technologies Used

### Languages

- HTML
- CSS
- JavaScript
- React (17.0.2)

### Libraries, Frameworks and dependencies

- [Axios](https://axios-http.com/docs/intro) - Axios, a promise-based HTTP client, was used to facilitate HTTP communication. The rationale behind this choice lies in utilizing axios to seamlessly transmit API requests from the React project to the API, effectively sidestepping any potential CORS errors associated with cookie transmission.
- [JWT](https://jwt.io/) - JWT, or JSON Web Token, serves as a library dedicated to decoding. The reasoning behind its adoption lies in its role of preventing unauthorized users from generating additional network requests to refresh their access token. Additionally, JWT is used to eliminate timestamp information from the browser when the user's token expires or upon logging out.
- [Popper](https://popper.js.org/) - Popper, an external library integrated into React-Bootstrap, finds application in ensuring the stable positioning of dropdown menus across different browsers. The rationale behind its incorporation lies in achieving consistent and reliable dropdown menu positioning.
- [React 17](https://17.reactjs.org/) - JavaScript library for constructing user interfaces.
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) - Bootstrap React version 4.6 was used with React, providing a comprehensive set of UI components, style elements, and responsive design features for the project.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - React Infinite Scroll component was integrated to enable automatic loading of content, such as posts and comments, as users scroll towards the bottom of the page. This implementation eliminates the need for users to navigate to the next or previous page manually.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - React Router, a dynamic routing library, was used to facilitate seamless navigation among different views of various components. This choice was made to control the content displayed to users based on the specific URL they accessed in the browser.

### Tools & Programs

- [Am I Responsive](http://ami.responsivedesign.is/) Was used to create the multi-device mock-up at the top of this README.md file
- [Balsamiq](https://balsamiq.com/) Was used to create the projects wireframes
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) Was used for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) Was used to store static files
- [Coolors](https://coolors.co/?home) Was used to create the color scheme palette
- [Fiverr](https://www.fiverr.com/logo-maker/saved-logos?tab=designs) - Was used to create the site logo
- [Font Awesome](https://fontawesome.com/) - Icons from Font Awesome were used throughout the site
- [Google Fonts](https://fonts.google.com/) - Font used throught out the site
- [GitHub](https://github.com/) Was used as a remote repository to store project code
- [Gitpod](https://gitpod.io) Was used to host a virtual workspace
- [Heroku](https://heroku.com) was used to deploy the project into live environment
- Validation:
  - [WC3 Validator](https://validator.w3.org/) Was used to validate the HTML
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) Was used to validate the CSS
  - [ESLint](https://eslint.org/) used to validate JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) Was Used to validate performance, accessibility, best practice and SEO of the site

##### Back to [top](#table-of-contents)

## Features

### Landing page/Posts page

### Logo and Navigation Bar

### Second Navigation Bar

### Sign up form

### Login form

### Post create/update form

### Posts page

### Post page

### Comments

### Likes

### Profile page

### Profile avatar

### Password change form

### Infinite scroll

### Follow/unfollow

### Popular Users

### Popular Countries

### Search bar

### 404 error page

### Feedback messages

## Future features

##### Back to [top](#table-of-contents)