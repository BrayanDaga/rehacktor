import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router";
import routes from "../../router/routes";

export default function ProfilePage() {
  const { user, profile } = useContext(UserContext);

  return (<>
    <main className="h-screen">
      {user && profile && (
        <>
          <article className="mt-10 flex flex-col items-center">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Profile image" className="w-25 h-25 rounded-full" />

            <h2 className="text-2xl font-bold mt-5">
              {profile.first_name}
            </h2>
          </article>
          <section className="grid grid-cols-3 gap-4 px-36">
            <article className="bg-black text-nav-gray rounded-box p-10">
              <h3 className="font-bold">Your data</h3>
              <p>Name: {profile.first_name}</p>
              <p>Email: {profile.email}</p>

              <Link className="btn btn-outline mt-3" to={routes.profile_settings}>Settings</Link>
            </article>
          </section>
        </>
      )}
    </main>
  </>)
}