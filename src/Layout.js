import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Trending</Link>
          </li>
          <li>
            <Link to="/chapter">Chapter</Link>
          </li>
          <li>
            <Link to ="/bookdesc">Book Description</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;