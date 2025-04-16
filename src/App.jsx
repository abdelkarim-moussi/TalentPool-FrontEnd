import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListings from "./pages/JobListings";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RecruiterDashboard from "./components/RecruiterDashboard";
import { jwtDecode } from "jwt-decode";

const App = () => {
  var decodedToken = "";
  var userRole = "";

  if (sessionStorage.getItem("token")) {
    decodedToken = jwtDecode(sessionStorage.getItem("token"));
    userRole = decodedToken.role;
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="joblistings" element={<JobListings />}></Route>
          {!decodedToken && (
            <>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
            </>
          )}
          {userRole === "recruiter" && (
            <Route path="dashboard" element={<RecruiterDashboard />}></Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
