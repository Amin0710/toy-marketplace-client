import Gallery from "../Gallery/Gallery";
import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<ShopByCategory></ShopByCategory>
			<Gallery></Gallery>
		</div>
	);
};

export default Home;
