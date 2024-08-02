# Blogging Platform Project

## Description

This project is a blogging platform with various features implemented using React. Below are the requirements and features implemented in this project:

- **Get Blogs**: Users can request blogs on the home page, which fetches 10 blogs from an API. Infinite scroll is implemented to load more blogs as the user scrolls, with sync to ensure seamless loading.

- **Infinite Scroll Message**: When the user reaches the end of the page, a message is displayed indicating that there are no more blogs to load from the server.

- **Blog Details Page**: Clicking on any blog card on the home page navigates the user to the blog details page. Additionally, clicking on the three dots on the card provides options to edit and delete the blog, and clicking on the author's name navigates to the author's profile page.

- **Edit/Delete Options**: Blogs posted by the logged-in user display three dots on their cards, allowing the author to edit or delete them. Only the author can perform these actions.

- **Author Profile Page**: Clicking on the author's name anywhere in the project navigates to their profile page, displaying their information and posted blogs.

- **Most Popular Section**: The home page features a "Most Popular" section fetching data from the API. Clicking on the blogs in this section navigates to their details page.

- **Your Favorites Section**: Displays blogs favorited by the logged-in user. Proper error handling is implemented for different states.

- **Blog Details Page**: Displays detailed information about a single blog fetched from the API. Content is displayed using dangerouslySetInnerHTML when necessary.

- **Interactivity on Blog Details Page**: Users can like, favorite, and comment on blogs. Proper validation and API calls are made for liking and favoriting blogs.

- **Comments Section**: Displays comments on the blog details page. Users can view comments even when not logged in but cannot post comments.

- **Delete Own Comments**: Logged-in users can delete their own comments. API documentation for comment deletion is provided.

- **Navigation Bar**: Features a "Write" button, leading to the create blog page. This page is accessible only via private routes, redirecting users to the login page if not logged in.

- **Create Blog Page**: All fields are required on this page, ensuring complete submission of necessary blog details. Error handling is implemented for incomplete submissions. Upon submission, the user is taken to the details page of the new blog.

- **User Profile Editing**: Logged-in users can edit their avatar and bio on their profile page. Before uploading an avatar, a default image is displayed based on the user's name's first letter.

- **User's Blog Display**: The user's profile page displays all posts by the user.

- **Authentication**: Login and registration functionalities are provided using templates and APIs. Authentication is managed using access and refresh tokens. Proper expiration handling is implemented for both tokens.

- **Navigation Menu**: Displays different options based on the user's login state. When logged in, options include Write, Search, Logout, the user's name, and profile picture. When logged out, options include Write and Login.

- **Search Functionality**: Users can search for blogs using the provided search feature. The search modal opens when clicking the search icon in the navbar, implemented using the usePortal hook.

## Technologies Used

- React
- API integration
- Infinite Scroll
- Private Routes
- Authentication
- Error Handling
- CSS for styling

## Live Site

You can access the live site [here](https://blogify-teal-three.vercel.app/).

## User Login

To log in as a user, please use the following credentials:

- **Email:** swapnoms7d3@gmail.com
- **Password:** 12345678n

## Accessing the Admin Panel

To access the admin panel, you'll need administrative privileges. Please use the following credentials:

- **Username:** admin
- **Password:** 123

### Up Comming

- Edit bio in profile page
- Update profile picture
- Animation while dark mode to light mode
- Edit blog in profile page
- Delete blog in profile page

### Future Plan

- Blog recomendation system where ml model will do it
- Convert blog into audio formate
