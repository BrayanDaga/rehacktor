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

  function GuestOptions() {
    return <>
      <li><Link to={routes.register}>Register</Link></li>
      <li><Link to={routes.login}>Login</Link></li>
    </>
  }

  function AuthOptions() {
    return <>
      <li><Link to={routes.profile}>Profile</Link></li>
      <li onClick={handleLogout}><p>Logout</p></li>
    </>
  }

  return (
    <>
      <div className="max-lg:collapse bg-nav-gray shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <Link className="btn btn-ghost text-xl" to={routes.home}>Reactor</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {user ? <AuthOptions /> : <GuestOptions />}
            </ul>
          </div>
          <div className="navbar-end">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={handleChange} />
            <Link className="btn btn-square" to={`/search/${slug}`}>
              <FaSearch />
            </Link>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            {user ? <AuthOptions /> : <GuestOptions />}
          </ul>
        </div>
      </div>
    </>


  )
}