import { useLoaderData } from "react-router-dom";
import useTitle from "../../Shared/Hooks/useTitle";

const GamePage = () => {
	useTitle("Game Page");

	const game = useLoaderData();

	return (
		<div className="flex items-center justify-center my-10 ">
			<div className="container hero lg:py-20 bg-gray-200 rounded">
				<div className="hero-content flex-col lg:flex-row-reverse ">
					<img
						src={game.picture_url}
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">{game.game_name}</h1>
						<p className="py-2 text-purple-700">
							Seller Name: {game.seller_name}
						</p>
						<p className="py-2 text-purple-700">
							Seller Email: {game.seller_email}
						</p>
						<p className="py-2 text-purple-700">Price: ${game.price}</p>
						<p className="py-2 text-purple-700">Rating: {game.rating}</p>
						<p className="py-2 text-purple-700">
							Available Quantity: {game.available_quantity}
						</p>
						<label htmlFor="my-modal-4" className="btn btn-primary">
							Detail description
						</label>

						{/* Modal */}
						<input type="checkbox" id="my-modal-4" className="modal-toggle" />
						<label htmlFor="my-modal-4" className="modal cursor-pointer">
							<label className="modal-box relative" htmlFor="">
								<h3 className="text-lg font-bold">{game.game_name}</h3>
								<p className="py-4">{game.detail_description}</p>
							</label>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GamePage;
