import { Outlet } from "react-router";
import Navbar from "../LayoutComponents/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}