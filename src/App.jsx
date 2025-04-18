import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListings from "./pages/JobListings";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RecruiterDashboard from "./components/RecruiterDashboard";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  const [decodedToken, setDecodedToken] = useState("");
  const [userRole, setUserRole] = useState("");

  if (sessionStorage.getItem("token")) {
    setDecodedToken(jwtDecode(sessionStorage.getItem("token")));
    setUserRole(decodedToken.role);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="joblistings" element={<JobListings />}></Route>

          <Route
            path="login"
            element={
              <AuthProvider>
                <Login />
              </AuthProvider>
            }
          ></Route>

          <Route
            path="register"
            element={
              <AuthProvider>
                {<Register />}
              </AuthProvider>
            }
          ></Route>
          <Route path="dashboard" element={<RecruiterDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
