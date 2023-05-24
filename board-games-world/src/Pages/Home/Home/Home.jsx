import Gallery from "../Gallery/Gallery";
import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (from === "/login" || from === "/signup") {
			if (mounted) {
				toast(
					<div className="alert alert-success">
						<div>
							<span>You have successfully logged in!</span>
						</div>
					</div>
				);
			}
		}
	}, [from, mounted]);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={10000}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				toastStyle={{
					backgroundColor: "transparent",
				}}
			/>
			<Banner></Banner>
			<ShopByCategory></ShopByCategory>
			<Gallery></Gallery>
		</div>
	);
};

export default Home;
