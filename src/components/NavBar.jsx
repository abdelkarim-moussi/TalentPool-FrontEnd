import PrimaryButton from "./PrimaryButton";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between bg-[#19485F] py-5 px-3 lg:px-5 rounded-lg shadow-lg w-[100vw] max-w-[1000px] mx-auto mt-2">
        <Link to="/" className="text-white font-bold tracking-wider">
          TalentPool
        </Link>
        <ul className="flex items-center text-white">
          <li className="mr-4 text-sm capitalize hover:">
            <Link to="/JobListings">Jobs</Link>
          </li>
          <li className="mr-4">
            <Link to="/login" className="px-3 py-0.5 bg-[#D9E0A4] rounded-md text-black text-center transition hover:bg-[#ABB17B] hover:text-white">login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
