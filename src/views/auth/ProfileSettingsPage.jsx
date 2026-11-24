import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import routes from "../../router/routes";

export default function ProfileSettingsPage() {
  const { updateProfile } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateProfile(data);
    navigate(routes.profile);
  }

  return (
    <main className="h-screen flex justify-center items-center  ">
      <form action="" className="p-10 bg-nav-gray w-1/2" onsubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder="First Name" className="input input-lg w-full mb-5" {...register("first_name", { required: true })} />
        {errors.first_name && <span className="text-red-500 mb-6">This field is required</span>}

        <input type="text" placeholder="Last Name" className="input input-lg w-full mb-5" {...register("last_name", { required: true })} />
        {errors.last_name && <span className="text-red-500 mb-6">This field is required</span>}

        <input type="text" placeholder="Username" className="input input-lg w-full mb-5" {...register("username", { required: true })} />
        {errors.username && <span className="text-red-500 mb-6">This field is required</span>}

        <button type="submit" className="btn btn-neutral p-5">Update Profile</button>
      </form>
    </main>
  )
}