import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <li><Link to="/joblistings">Jobs</Link></li>
            <li><Link to="/login">login</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
