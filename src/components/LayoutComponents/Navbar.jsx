import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import routes from "../../router/routes";
import { UserContext } from "../../context/UserContext";

export default function Navbar() {
  const [slug, setSlug] = useState();

  const handleChange = (e) => {
    setSlug(e.target.value);
  }

  const navigate = useNavigate();

  const { user, signOut } = useContext(UserContext);

  const handleLogout = async () => {
    await navigate('/');
    signOut();
  }

  return (
    <div className="navbar bg-nav-gray shadow-sm">
      <div className="flex-1">
        <Link to={routes.home} className="btn btn-ghost text-3xl font-electro">Reactor</Link>

        {(!user && (
          <>
            <Link to={routes.register} className="btn btn-ghost ">Register</Link>
            <Link to={routes.login} className="btn btn-ghost ">Login</Link>
          </>
        )) || (
            <li onClick={handleLogout}>
              <p>Logout </p>
            </li>
          )}
      </div>
      <div className="flex gap-2">
        <input type="text" className="input input-bordered w-24 md:w-auto" onChange={handleChange} />
        <Link className="btn btn-square" to={`/search/${slug}`}>
          <FaSearch />
        </Link>
      </div>
    </div>
  )
}