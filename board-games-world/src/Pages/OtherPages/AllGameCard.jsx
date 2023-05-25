import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AllGameCard = ({ game }) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			className="card card-compact w-96 bg-gray-300 shadow-xl p-4"
			data-aos="zoom-in-up">
			<figure>
				<img src={game.picture_url} alt="Shoes" className="h-[350px]" />
			</figure>
			<div className="card-body text-purple-700">
				<h2 className="card-title">{game.game_name}</h2>
				<div className="flex flex-col items-start">
					<div className="text">
						{game.seller_name ? `Seller: ${game.seller_name}` : ""}
					</div>
					<div className="text">Sub-category: {game.sub_category}</div>
					<div className="text">Price: ${game.price}</div>
					<div className="text">
						Available Quantity: {game.available_quantity}
					</div>
				</div>
				<div>
					<Link to={`/games/${game._id}`}>
						<button className="btn btn-primary w-full">View Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AllGameCard;
