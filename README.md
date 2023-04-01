# React Blog App

## Backlog

- [x] Initialize a new project
  - [x] Use vite
- [ ] Add routing
  - [ ] Add react-router-dom
  - [ ] Add mui
  - [ ] Add home page skeleton
  - [ ] Add layout component with mui navbar with two links (home, about)
    - [ ] Add profile button
      - [ ] Add logout button
  - [ ] Add footer component
  - [ ] Add about page skeleton
- [ ] Add register page
  - [ ] Add form with the following fields
    - [ ] Username
    - [ ] Email
    - [ ] Avatar image
    - [ ] Bio
    - [ ] Password
    - [ ] Confirm Password
  - [ ] Add Submit button that redirects user to home page
  - [ ] Add a link to Login page with a message "Already have an account? Sign in"
- [ ] Add login page
  - [ ] Add form with the following fields
    - [ ] Email
    - [ ] Password
  - [ ] Add Sign In button that redirects user to home page
  - [ ] Add a link to Register page with a message "Don't have an account? Sign up"
- [ ] Add authentication ability with api
  - [ ] Use formik
  - [ ] Use yup
  - [ ] Use axios
  - [ ] Add validation to both register and login forms
  - [ ] Add a [snackbar](https://material-ui.com/components/snackbars/) to show error messages
  - [ ] Add a [snackbar](https://material-ui.com/components/snackbars/) to show success messages
  - [ ] After successful register or login, redirect user to home page
- [ ] Add redux store
  - [ ] Add redux toolkit
  - [ ] Add redux logger
  - [ ] Add redux devtools
  - [ ] Add redux persist
  - [ ] Add auth slice
- [ ] Add authentication custom hook and use it in register and login pages
  - [ ] Add `useAuth` hook
  - [ ] Store user data along with accessToken in redux store
  - [ ] Store loading and error states in redux store
  - [ ] Use `useAuth` hook in register and login pages
  - [ ] Add protected route component
    - [ ] Use protected route component in (home, about) pages
  - [ ] Logout user when user clicks on logout button
- [ ] Implement home page
  - [ ] Add a list of posts
  - [ ] Add post title
  - [ ] Add post summary
  - [ ] Add post author
  - [ ] Add post date
  - [ ] Add post image
  - [ ] Add like button
  - [ ] Add comment button
  - [ ] Add views counter
  - [ ] Add a link to post details page
  - [ ] When user clicks on post card, redirect user to post details page
  - [ ] Add a button to navbar with "Add Post"
- [ ] Implement about page
- [ ] Add post display page
  - [ ] Add post title
  - [ ] Add post image
  - [ ] Add post content
  - [ ] Add post author
    - [ ] Add avatar
    - [ ] Add username
    - [ ] Add post date
  - [ ] Add like button
  - [ ] Add views counter
- [ ] Add comment ability to posts
  - [ ] Add comment button on post details page
  - [ ] Add comment form
  - [ ] List comments
    - [ ] Use [mui list](https://material-ui.com/components/lists/) component
    - [ ] Add comment author
    - [ ] Add username
    - [ ] Add comment date
    - [ ] Add comment content
    - [ ] Add comment avatar
- [ ] Implement logout functionality
  - [ ] Add logout button to navbar
  - [ ] Add logout functionality
  - [ ] Redirect user to login page after logout
