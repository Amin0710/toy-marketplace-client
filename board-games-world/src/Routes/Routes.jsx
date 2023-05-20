import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		childern: [
			{
				path: "/",
				element: <Home></Home>,
			},
		],
	},
]);

export default router;
