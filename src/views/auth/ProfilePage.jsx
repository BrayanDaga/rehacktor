import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router";
import routes from "../../router/routes";
import supabase from "../../database/supabase";

export default function ProfilePage() {
  const { user, profile } = useContext(UserContext);
  const [avatarUrl, setAvatarUrl] = useState();

  const download_avatar = async () => {
    if (profile) {
      const { data, error } = await supabase.storage.from('avatars').download(profile.avatar_url);
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    }
  }

  useEffect(() => {
    download_avatar();
  }, [profile])


  return (<>
    <main className="h-screen">
      {user && profile && (
        <>
          <article className="mt-10 flex flex-col items-center">
            <img src={avatarUrl ?? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Profile image" className="w-25 h-25 aspect-square shrink-0 rounded-full object-cover" />

            <h2 className="text-2xl font-bold mt-5">
              {profile.first_name}
            </h2>
          </article>
          <section className="grid grid-cols-1 justify-items-center gap-4 px-4 sm:px-6 md:px-12 lg:px-36">
            <article className="w-full md:w-1/3 bg-black text-nav-gray rounded-box p-6 sm:p-10">
              <h3 className="font-bold">Your data</h3>
              <p>Name: {profile.first_name}</p>
              <p>Email: {user.email}</p>

              <Link className="btn btn-outline mt-3" to={routes.profile_settings}>Settings</Link>
            </article>
          </section>
        </>
      )}
    </main>
  </>)
}