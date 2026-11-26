import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import routes from "../../router/routes";
import supabase from "../../database/supabase";

export default function ProfileSettingsPage() {
  const { profile, getUser } = useContext(UserContext);
  const { updateProfile } = useContext(UserContext);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFile(() => e.target.files[0]);
  }

  const onSubmit = (data) => {
    updateProfile(data);
    navigate(routes.profile);
  }

  const handleAvatarSubmit = async (e) => {
    e.preventDefault();
    const fileExt = file.name.split('.').pop();
    const fileName = `${profile.id}${Math.random()}.${fileExt}`;
    await supabase.storage.from('avatars').upload(fileName, file);
    await supabase.from('profiles').upsert({ id: profile.id, avatar_url: fileName }).select();

    await getUser();
  }

  useEffect(() => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(() => imageUrl);
    }
  }, [file])

  return (
    <main className="h-screen flex flex-col justify-center items-center  ">
      <form action="" className="p-10 bg-nav-gray w-1/2 mb-3" onSubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder="First Name" className="input input-lg w-full mb-5" {...register("first_name", { required: true })} />
        {errors.first_name && <span className="text-red-500 mb-6">This field is required</span>}

        <input type="text" placeholder="Last Name" className="input input-lg w-full mb-5" {...register("last_name", { required: true })} />
        {errors.last_name && <span className="text-red-500 mb-6">This field is required</span>}

        <input type="text" placeholder="Username" className="input input-lg w-full mb-5" {...register("username", { required: true })} />
        {errors.username && <span className="text-red-500 mb-6">This field is required</span>}

        <button type="submit" className="btn btn-neutral p-5">Update Profile</button>
      </form>
      <form className="p-10 bg-nav-gray w-1/2" onSubmit={handleAvatarSubmit}>
        <input type="file" className="file-input file-input-lg w-full mb-5" onChange={handleChange} />
        <button className="btn btn-neutral p-5">Change Avatar</button>
        <img src={preview} className="w-50" />
      </form>
    </main>
  )
}