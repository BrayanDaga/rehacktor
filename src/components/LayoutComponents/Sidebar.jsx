import { Link } from "react-router";

export default function Sidebar({ genres }) {
  return (
    <>
      <nav className="h-screen bg-nav-gray">
        <u className="px-5">
          {genres.map((genre) => (
            <li key={genre.id} className="mb-2">
              <Link to={`/genre/${genre.slug}`}>{genre.name}</Link>
            </li>
          ))}
        </u>
      </nav>
    </>
  );
}