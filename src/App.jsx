import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListings from "./pages/JobListings";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/PritectedRoutes";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import PublicRoute from "./routes/PublicRoutes";
import CandidateDashboard from "./pages/CandidateDashboard";

const App = () => {
  const [decodedToken, setDecodedToken] = useState(null);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setDecodedToken(decoded);
      setUserRole(decoded.role);
    }
  }, []); // 👈 Run only once on initial load

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<JobListings />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="recruiterDash" element={<RecruiterDashboard />}></Route>
          <Route path="candidateDash" element={<CandidateDashboard />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
