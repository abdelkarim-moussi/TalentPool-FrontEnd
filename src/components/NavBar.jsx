import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <nav className="flex justify-between bg-[#19485F] py-5 px-3 lg:px-5 rounded-lg shadow-lg w-[100vw] max-w-[1000px] mx-auto mt-2">
        <Link to="/" className="text-white font-bold tracking-wider">
          TalentPool
        </Link>
        <ul className="flex items-center text-white">
          <li className="mr-4 text-sm capitalize hover:">
            <Link to="/">Jobs</Link>
          </li>

          {!sessionStorage.getItem("token") && (
            <>
              <li className="mr-4 text-sm capitalize hover:">
                <Link to="/login">login</Link>
              </li>

              <li className="mr-4">
                <Link
                  to="/register"
                  setUser={setUser}
                  className="px-4 py-1 bg-[#D9E0A4] rounded-md text-black text-center transition hover:bg-[#ABB17B] hover:text-white capitalize"
                >
                  register
                </Link>
              </li>
            </>
          )}

          {sessionStorage.getItem("token") && (
            <>
              <li>
                <button onClick={logOut}>logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
