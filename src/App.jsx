import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListings from "./pages/JobListings";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="joblistings" element={<JobListings />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="sign up" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
