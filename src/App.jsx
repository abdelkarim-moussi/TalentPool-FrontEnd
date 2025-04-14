import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListings from "./pages/JobListings";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RecruiterDashboard from "./components/RecruiterDashboard";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="joblistings" element={<JobListings />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="dashboard" element={<RecruiterDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
