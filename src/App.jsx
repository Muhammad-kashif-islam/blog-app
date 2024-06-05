import { useState, useEffect } from "react";

import "./App.css";
import { useDispatch } from "react-redux";
import authServie from "./appwirte/auth";
import { login, logout } from "./store/authSliceStore";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index";
function App() {
  //state
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  //use effect check if the usr is login if then show post otherwise login message
  useEffect(() => {
    const userData = authServie
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex content-between flex-wrap bg-gray-500">
      <div className="w-full block">
        {/* header  */}
        <Header />

        {/* main content  */}
        <main>
          <Outlet />
        </main>

        {/* footer  */}
        <Footer />
      </div>
    </div>
  ) : null;
}
export default App;
