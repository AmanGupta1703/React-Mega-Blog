import { useEffect, useState } from "react";

// Third-party imports
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

// Service imports
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

// Component imports
import { Header, Footer } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="flex min-h-screen flex-wrap content-between bg-gray-500">
      <div className="block w-full">
        <Header />
        <main>{/* <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
