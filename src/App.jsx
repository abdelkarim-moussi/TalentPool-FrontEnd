import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListings from "./pages/JobListings";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="joblistings" element={<JobListings />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
