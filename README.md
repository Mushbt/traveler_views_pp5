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
  - [Front-End](#front-end)
  - [Back-End API](#back-end-api)
  - [Features](#features)
  - [Future features / improvements](#future-features--improvements)
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

1. As a user, I can view a navbar from every page, so that I can navigate easily between pages.
2. As a user, I can navigate through pages quickly, so that I can view content seamlessly without page refresh.

#### Authentication

3. As a user, I can create a new account, so that I can access all the features for signed up users.
4. As a user, I can sign in to the app, so that I can access functionality for logged in users.
5. As a user, I can tell if I am logged in or not, so that I can log in if I need to.
6. As a user, I can maintain my logged-in status until I choose to log out, so that my user experience is not compromised.
8. As a user, I can view user's avatars, so that I can easily identify users of the application.
34. As a user, I can change the password to my account, so that I can keep my profile secure.

### Epic 2

### Adding & Liking Posts

9. As a logged in user I can create posts so that I can share my images with the world!
10. As a user, I can view the details of a single post, so that I can learn more about it.
11. As a logged in user, I can like a post, so that I can show my support for the posts that interest me.

### Epic 3

#### The Profile Page

24. As a user I can view other users profiles so that I can see their posts and learn more about them.
25. As a user I can see a list of the most followed profiles so that I can see which profiles are popular.
26. As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them.
27. As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed.
28. As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them.
29. As a logged in user I can edit my profile so that I can change my profile picture and bio.
30. As a logged in user I can update my username and password so that I can change my display name and keep my profile secure.
33. As a user, I can delete my account if I decide to no longer use the app.

### Epic 4

#### The Post Page

17. As a user I can view the posts page so that I can read the comments about the post.
18. As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created.
19. As a logged in user I can add comments to a post so that I can share my thoughts about the post.
20. As a user I can see how long ago a comment was made so that I know how old a comment is.
21. As a user I can read comments on posts so that I can read what other users think about the posts.
22. As an owner of a comment I can delete my comment so that I can control removal of my comment from the application.
23. As an owner of a comment I can edit my comment so that I can fix or update my existing comment.

### Epic 5

#### The Posts page

12. As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content.
13. As a user, I can search for posts with a country tag, so that I can find the posts for a specific country I am most interested in.
14. As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most.
15. As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about.
16. As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page".

### General

31. As the site owner, I want full responsiveness for my site, so that users can seamlessly utilize it across various devices.
32. As a user, I can see feedback messages, so that I know whether there have been updates to my comments, profile, or posts.

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
- [Git](https://git-scm.com/) Was used for version control within VSCode to push the code to GitHub
- [GitHub](https://github.com/) Was used as a remote repository to store project code
- [Gitpod](https://gitpod.io) Was used to host a virtual workspace
- [Heroku](https://heroku.com) was used to deploy the project into live environment
- Validation:
  - [WC3 Validator](https://validator.w3.org/) Was used to validate the HTML
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) Was used to validate the CSS
  - [ESLint](https://eslint.org/) used to validate JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) Was Used to validate performance, accessibility, best practice and SEO of the site

##### Back to [top](#table-of-contents)

## Front-End

### React

React is a JavaScript library that prioritizes a declarative, efficient, and adaptable approach to building user interfaces. Its main objective is to enhance the clarity of interface logic and state management throughout the development process. This is achieved by organizing the UI into a set of autonomous and reusable components. ([source](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/)).

I used React for developing this app for several reasons:
- Speed - Implementing React results in a notable improvement in page loading speed, reducing wait times and positively impacting user experience and satisfaction.
- Flexibility - React's modular structure enhances code maintainability and flexibility compared to other front-end frameworks.
- React Bootstrap - A superb choice for enhancing user experience, React Bootstrap is employed for styling and responsiveness. It provides pre-built React components designed with accessibility in mind—a crucial aspect in front-end application development.
- Widely Adopted in Social Networking and Media Applications - React stands as the go-to library for developing applications in the social networking and media content domains. It is extensively utilized by major platforms such as Meta (formerly Facebook), Instagram, Netflix, Airbnb, and more.
- Component Reusability - React promotes the reusability of components, eliminating the need to rewrite code for similar features, contributing to a more efficient and streamlined development process.

There were various components created and reused across this application.

- `<Asset />` - A versatile and reusable component that dynamically presents various versions based on the props provided:
  - Loading GIF (Spinner): Displayed when content is in the process of loading.
  - Image: Renders an image with specified src and alt attributes.
  - Paragraph: Presents a paragraph containing a specific message.

- `<Avatar />` - A reusable component designed for rendering profile images in the user interface. By accepting various props, it enables customization of the image source and size, adjusting dimensions based on the component's rendering context. Instances of use include the <NavBar /> component, the Post page, or the Profile page.

`<DropdownMenu />` - This versatile component is employed to display a dropdown menu, offering users the ability to edit or delete their posts or comments. Additionally, it facilitates actions like profile editing and password modification.

- `<Alert />` - This versatile component is designed to present informative feedback messages to users following actions such as comment editing/deletion, post deletion, and updates to profile information or passwords. It enhances user experience by delivering contextual alerts.

- `<SecondaryNavBar />` - A reusable component featuring three icons—enabling users to add a post, view liked posts, or explore posts from profiles they follow. This component is seamlessly integrated across multiple pages within the application, ensuring consistent accessibility.

- `<NavBar />`- A versatile component with dynamic content based on the user's login status. If the user is logged in, it showcases an <Avatar /> which is intended to show the User they are logged in. If the avatar is clicked, a <DropdownMenu /> with the options to logout or to be redirected to the Users own profile. For users who are not logged in, it presents icon links to sign up or log in instead of the avatar. This component seamlessly integrates across every page within the application.

- `<NotFound />` - A dedicated component designed for presenting a visually appealing 404 error graphic message along with a return-to-menu button. This component is triggered when a user enters a URL that does not correspond to any existing content within the application.

- `<PopularProfiles />` - A versatile component designed for showcasing the top three most followed profiles within the application. This reusable component includes elements such as the user's avatar, name, and a follow/unfollow button. The <PopularProfiles /> component is seamlessly integrated throughout the entire app, complementing the user experience alongside components like <SecondaryNavBar />.


## Back-End API

### Django REST Framework
The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found
[here](https://github.com/Mushbt/drf_api_pp5)

##### Back to [top](#table-of-contents)

## Features

### Landing page
Initially, I contemplated incorporating a conventional landing page, presenting users with information about the site and requiring them to sign up or log in for further exploration. However, upon careful consideration, I opted against this approach. The decision was driven by a desire to allow users to freely explore the site, peruse its content, and then make a choice on whether to sign up.
- The landing page serves as the initial destination for anyone entering the site. Users who have not signed up or logged in experience a view-only interaction during their visit. 
- Users have the ability to explore various user profiles and posts on the site; however, interaction with them is restricted for those who haven't signed up or logged in. Additionally, engagement with the Secondary Navbar is not accessible to this user group. (Further details provided in the Second Navigation Bar section below)

### Logo and Navigation Bar
- The logo and navigation bar are consistently present across all pages.
- Navbar has two variants:
  - Users who are not logged in will see the Home, Sign up & Log in Icons.
  - Logged-in users will see the Home Icon and their user Avatar. The Avatar has a small arrow next to it which implies to the user it can be clicked. This will toggle a drop down menu which gives the user the options to navigate to their profile or log out.
- The navigation bar is fully responsive, transforming into a hamburger menu on smaller screen sizes for seamless user interaction.
- User stories Covered: 1, 5 & 31

<details><summary>See featured screenshots</summary>

</details>
### Second Navigation Bar
- 

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