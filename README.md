# W2S Task

## Overview
It is simple application with the basic features like login, logout and listing product details

## Getting Started

### Prerequisites
- **Node.js:** Version 14 or higher
- **npm:** Version 6 or higher

### Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/gopal262000/w2sTask
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd w2sTask
   ```
3. **Install Dependencies:**
   ```bash
   npm install or yarn intall
   ```

## Usage

### Running the Project
Start the development server by running:
```bash
npm start
```
Open `http://localhost:3000` in your browser to view the application.

### Usage Examples
- **Login**
  username: **emilys**
  password: **emilyspass**

  use the above details as the login credentials
- **Products Page**
  You can find the list of products.
  Basic functionality like pagination has been implemented.
  You can view the products review at the end of the each product row.
  By Clicking on the View Reviews button you can see the reviews opened in the Modal.
- **App Bar**
  You can toggle the sidebar by clicking on the menu button in the app bar.
  At the right side of the App Bar, you can view the logged in user profile image.
  By clicking on the Profile Image you can find the minimal profile details and Logout option.


## Project Structure
- **`src/`** - Contains source code for the application.
  - **`components/`** - React components.
  - **`features/`** - Redux global states.
  - **`layouts/`** - Page Layout components.
  - **`pages/`** - Page components.
  - **`providers/`** - Context provider components.
- **`public/`** - Static assets like `index.html` and images.
- **`package.json`** - Project metadata and dependencies.


## Testing
Run tests using:
```bash
npm test
```
To add new tests, follow the existing test structure in the `src/tests/` directory.

## Deployment
1. **Build the Project:**
   ```bash
   npm run build
   ```
2. **Deploy the `build/` Directory to Your Hosting Service**

## Troubleshooting
- **Issue:** `npm start` fails with an error.
  - **Solution:** Ensure all dependencies are installed and environment variables are correctly set.

## Acknowledgements
- **React:** For the core library.
- **Redux:** For state management.
- **Typescript:** For Data Type validation.
- **Mui:** For React component library.
- **FormIk and Yup:** For Form building and validation.
- **Axios** For Api handling.
- **Create React App:** For the initial project setup.

---

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->
