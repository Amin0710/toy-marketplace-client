import { useLoaderData } from "react-router-dom";
import AllGameCard from "./AllGameCard";

const AllGames = () => {
	const AllGames = useLoaderData();
	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-2xl font-bold mb-4 text-purple-700 bg-gray-300 rounded-lg p-4">
				Boredom Buster&#39;s Gallery
			</h1>
			<div className="flex flex-wrap -mx-4">
				{AllGames.map((game) => {
					return (
						<div
							key={game.id}
							className="w-full lg:w-1/4 px-4 my-4 flex justify-center">
							<AllGameCard game={game}></AllGameCard>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AllGames;
