import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        {/* <a onClick={() => setPage("activities")}>Activities</a> */}
        <NavLink to="/">Activities</NavLink>
        {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            {/* <a onClick={() => setPage("register")}>Register</a>
            <a onClick={() => setPage("login")}>Login</a> */}
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
