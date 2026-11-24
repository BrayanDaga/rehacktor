import { createBrowserRouter } from "react-router";
import routes from "./routes";
import Homepage from "../views/Homepage";
import { getAllGamesLoader, getAllGenres, getFilteredByGenreGames, getSearchedGames } from "./loaders";
import Layout from "../components/layouts/Layout";
import SearchPage from "../views/SearchPage";
import GenrePage from "../views/GenrePage";
import AuthenticationLayout from "../components/layouts/AuthenticationLayout";
import Registerage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";
import ProfilePage from "../views/auth/ProfilePage";
import ProfileSettingsPage from "../views/auth/ProfileSettingsPage";

const router = createBrowserRouter([
  {
    path: routes.home,
    Component: Layout,
    loader: getAllGenres,
    children: [
      {
        path: routes.home,
        Component: Homepage,
        loader: getAllGamesLoader
      },
      {
        path: routes.search,
        Component: SearchPage,
        loader: getSearchedGames
      },
      {
        path: routes.genre,
        Component: GenrePage,
        loader: getFilteredByGenreGames
      }
    ]
  },
  {
    path: 'auth',
    Component: AuthenticationLayout,
    children: [
      {
        path: routes.register,
        Component: Registerage
      },
      {
        path: routes.login,
        Component: LoginPage
      },
      {
        path: routes.profile,
        Component: ProfilePage
      },
      {
        path: routes.profile_settings,
        Component: ProfileSettingsPage
      }
    ]
  }
])

export default router;