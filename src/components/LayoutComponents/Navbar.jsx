import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import routes from "../../router/routes";

export default function Navbar() {
  const [slug, setSlug] = useState();

  const handleChange = (e) => {
    setSlug(e.target.value);
  }

  return (
    <div className="navbar bg-nav-gray shadow-sm">
      <div className="flex-1">
        <Link to={routes.home} className="btn btn-ghost text-3xl font-electro">Reactor</Link>
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