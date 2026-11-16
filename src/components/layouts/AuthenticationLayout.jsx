import { Outlet } from "react-router";
import Navbar from "../LayoutComponents/Navbar";

export default function AuthenticationLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}