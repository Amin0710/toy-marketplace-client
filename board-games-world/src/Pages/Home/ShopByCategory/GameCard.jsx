const GameCard = ({ game }) => {
	return (
		<div className="card card-compact w-96 bg-gray-300 shadow-xl p-4">
			<figure>
				<img src={game.picture_url} alt="Shoes" className="h-[350px]" />
			</figure>
			<div className="card-body text-purple-700">
				<h2 className="card-title">{game.game_name}</h2>
				<div className="card-actions justify-start">
					<div className="text-xl badge badge-outline">
						Price: ${game.price}
					</div>
					<div className="text-xl badge badge-outline">
						Rating: {game.rating}
					</div>
				</div>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">View Details</button>
				</div>
			</div>
		</div>
	);
};

export default GameCard;
