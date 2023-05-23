import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import AddGames from "../Pages/OtherPages/AddGames";
import AllGames from "../Pages/OtherPages/AllGames";
import Blogs from "../Pages/OtherPages/Blogs";
import MyGames from "../Pages/OtherPages/MyGames";
import Signup from "../Pages/Signup/Signup";

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
				path: "games",
				element: <AllGames></AllGames>,
			},
			{
				path: "blog",
				element: <Blogs></Blogs>,
			},
			{
				path: "my_games",
				element: <MyGames></MyGames>,
			},
			{
				path: "add_game",
				element: <AddGames></AddGames>,
			},
		],
	},
]);

export default router;
