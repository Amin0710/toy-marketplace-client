import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllGameCard from "./AllGameCard";

const AllGames = () => {
	const allGames = useLoaderData();
	const [searchTerm, setSearchTerm] = useState(""); // State for the search input

	// Filter the games based on the search input
	const filteredGames = allGames.filter((game) =>
		game.game_name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-2xl font-bold mb-4 text-purple-700 bg-gray-300 rounded-lg p-4">
				Boredom Buster&#39;s Gallery
			</h1>
			<div className="mt-4">
				<input
					type="text"
					placeholder="Search..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-full p-2 border border-gray-400 rounded"
				/>
			</div>
			<div className="flex flex-wrap -mx-4 mt-4">
				{filteredGames.map((game) => (
					<div
						key={game.id}
						className="w-full lg:w-1/4 px-4 my-4 flex justify-center">
						<AllGameCard game={game}></AllGameCard>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllGames;
