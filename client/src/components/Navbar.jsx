import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={isAuthenticated ? "/wishes" : "/"}>
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              {/* //esto se puede user en la pagina perfil, recordar importar user de useAuth() */}
              Bienvenido {user.username}
            </li>
            <li>
              <Link to={"/wishes"}>Wishes</Link>
            </li>
            <li>
              <Link to={"/mywishes"}>My Wishes</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/add-wish"}>Add Wish</Link>
            </li>
            <li>
              <Link to={"/"} onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
