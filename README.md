# React Blog App

### Following topics are to be covered;

- React, Redux TK and persist, JS, Tailwind, Material-UI, Formik, Yup.

## Project Skeleton

```
Blog App (folder)
|
|---readme.md
├── dist
│    ├── assets
│    ├── favicon.ico
│    └── index.html
├── src
│    ├── store
│    │     ├── store.jsx
│    │
│    ├── features
│    │     ├── authSlice.jsx
│    │     └── postSlice.jsx
│    ├     └── notificationSlice.jsx
│    ├── hooks
│    │     ├── useAuthCall.jsx
│    │     └── usePostCall.jsx
│    ├── components
│    │     ├── Comments.jsx
│    │     ├── DeleteModal.jsx
│    │     ├── Footer.jsx
│    │     ├── Navbar.jsx
│    │     ├── CommentForm.jsx
│    │     ├── Notification.jsx
│    │     ├── PostCard.jsx
│    │     └── PostModal.jsx
│    │
│    ├── pages
│    │     ├── About.jsx
│    │     ├── Home.jsx
│    │     ├── Login.jsx
│    │     ├── Register.jsx
│    │     ├── MyPosts.jsx
│    │     ├── NewPost.jsx
│    │     ├── PostDetail.jsx
│    │     └── Profile.jsx
│    ├── routers
│    │     ├── AppRouter.jsx
│    │     └── PrivateRouter.jsx
│    ├── App.jsx
│    ├── Main.jsx
│
├── package.json
└── vite.config.js
```

## Backlog

- [x] BA-1 Initialize a new project
  - [x] Use vite
- [x] BA-2 Add routing
  - [x] Add react-router-dom
  - [x] Add mui
  - [x] Add home page skeleton
  - [x] Add layout component with mui navbar with two links (home, about)
    - [x] Add profile button
      - [x] Add logout button
  - [x] Add footer component
  - [x] Add about page skeleton
- [x] BA-3 Add register page
  - [x] Add form with the following fields
    - [x] Username
    - [x] Email
    - [x] Avatar image
    - [x] Bio
    - [x] Password
    - [x] Confirm Password
  - [x] Add Submit button that redirects user to home page
  - [x] Add a link to Login page with a message "Already have an account? Sign in"
- [x] BA-4 Add login page
  - [x] Add form with the following fields
    - [x] Email
    - [x] Password
  - [x] Add Sign In button that redirects user to home page
  - [x] Add a link to Register page with a message "Don't have an account? Sign up"
- [x] BA-5 Add authentication ability with api
  - [x] Use formik
  - [x] Use yup
  - [x] Use axios
  - [x] Add validation to both register and login forms
  - [x] Add a [snackbar](https://material-ui.com/components/snackbars/) to show error messages
  - [x] Add a [snackbar](https://material-ui.com/components/snackbars/) to show success messages
  - [x] After successful register or login, redirect user to home page
- [x] BA-6 Add redux store
  - [x] Add redux toolkit
  - [x] Add redux devtools
  - [x] Add redux persist
  - [x] Add auth slice
- [x] BA-7 Add authentication custom hook and use it in register and login pages
  - [x] Add `useAuth` hook
  - [x] Store user data along with accessToken in redux store
  - [x] Store loading and error states in redux store
  - [x] Use `useAuth` hook in register and login pages
  - [x] Add protected route component
    - [x] Use protected route component in (home, about) pages
  - [x] Logout user when user clicks on logout button
- [x] BA-8 Implement home page
  - [x] Add a list of posts
  - [x] Add post title
  - [x] Add post summary
  - [x] Add post author
  - [x] Add post date
  - [x] Add post image
  - [x] Add like button
  - [x] Add comment button
  - [x] Add views counter
  - [x] Add a link to post details page
  - [x] When user clicks on post card, redirect user to post details page
  - [x] Add a button to navbar with "Add Post"
- [ ] BA-9 Implement about page
- [ ] BA-10 Add post display page
  - [ ] Add post title
  - [ ] Add post image
  - [ ] Add post content
  - [ ] Add post author
    - [ ] Add avatar
    - [ ] Add username
    - [ ] Add post date
  - [ ] Add like button
  - [ ] Add views counter
- [ ] BA-11 Add comment ability to posts
  - [ ] Add comment button on post details page
  - [ ] Add comment form
  - [ ] List comments
    - [ ] Use [mui list](https://material-ui.com/components/lists/) component
    - [ ] Add comment author
    - [ ] Add username
    - [ ] Add comment date
    - [ ] Add comment content
    - [ ] Add comment avatar
- [ ] BA-12 Implement logout functionality
  - [ ] Add logout button to navbar
  - [ ] Add logout functionality
  - [ ] Redirect user to login page after logout
