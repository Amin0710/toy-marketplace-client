import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import AddGames from "../Pages/OtherPages/AddGames";
import AllGames from "../Pages/OtherPages/AllGames";
import Blogs from "../Pages/OtherPages/Blogs";
import GamePage from "../Pages/OtherPages/GamePage";
import MyGames from "../Pages/OtherPages/MyGames";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivetRoutes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "signup",
				element: <Signup></Signup>,
			},
			{
				path: "all_games",
				element: <AllGames></AllGames>,
				loader: () => fetch(`/games.json`),
			},
			{
				path: "blog",
				element: <Blogs></Blogs>,
			},
			{
				path: "my_games",
				element: (
					<PrivateRoute>
						<MyGames></MyGames>
					</PrivateRoute>
				),
				loader: () => fetch(`/games.json`),
			},
			{
				path: "add_game",
				element: (
					<PrivateRoute>
						<AddGames></AddGames>,
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "games",
		element: <Main></Main>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/games/:id",
				element: (
					<PrivateRoute>
						<GamePage></GamePage>
					</PrivateRoute>
				),
				errorElement: <ErrorPage />,
				loader: ({ params }) => fetch(`/games.json/${params.id}`),
			},
		],
	},
]);

export default router;
