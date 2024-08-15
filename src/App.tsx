import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import HomeLayout from "./layouts/HomeLayout";
import Products from "./components/Products";
import SnackBarShelfProvider from "./providers/SnackbarProvider";
import ToastShelf from "./components/ToastShelf";
import CurrentUserProvider from "./providers/CurrentUserProvider";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <SnackBarShelfProvider>
      <Router>
        <CurrentUserProvider>
          <Routes>
            {/* HomeLayout and nested routes */}
            <Route path="/" element={<HomeLayout />}>
              <Route path="products" element={<Products />} />
            </Route>

            {/* Login Route */}
            <Route path="/login" element={<Login />} />
            <Route path='*' element={<PageNotFound />}/>
          </Routes>
        </CurrentUserProvider>
      </Router>
      <ToastShelf />
    </SnackBarShelfProvider>
  );
}

export default App;
