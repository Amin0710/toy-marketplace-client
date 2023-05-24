import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllGameCard from "./AllGameCard";

const AllGames = () => {
	const allGames = useLoaderData();
	const [searchTerm, setSearchTerm] = useState(""); // State for the search input
	const [currentPage, setCurrentPage] = useState(1);
	const gamesPerPage = 20;
	const beforeSearchPage = useRef(1);

	// Filter the games based on the search input
	const filteredGames = allGames.filter((game) =>
		game.game_name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Pagination
	const indexOfLastGame = currentPage * gamesPerPage;
	const indexOfFirstGame = indexOfLastGame - gamesPerPage;
	const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);
	const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

	const handleSearchTermChange = (e) => {
		console.log(searchTerm);
		if (!searchTerm) {
			beforeSearchPage.current = currentPage;
		}
		setCurrentPage(1);
		const newSearchTerm = e.target.value;
		setSearchTerm(newSearchTerm);
		if (newSearchTerm === "") {
			setCurrentPage(beforeSearchPage.current);
		}
	};

	// Function to change the current page
	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-2xl font-bold mb-4 text-purple-700 bg-gray-300 rounded-lg p-4">
				Boredom Buster&#39;s Games
			</h1>
			<div className="mt-4">
				<input
					type="text"
					placeholder="Search..."
					value={searchTerm}
					onChange={handleSearchTermChange}
					className="w-full p-2 border border-gray-400 rounded"
				/>
			</div>
			<div className="flex flex-wrap mt-4">
				{currentGames.map((game) => (
					<div
						key={game._id}
						className="w-full lg:w-1/4 px-4 my-4 flex justify-center">
						<AllGameCard game={game}></AllGameCard>
					</div>
				))}
			</div>
			<div className="mt-4">
				{Array.from({ length: totalPages }, (_, index) => index + 1).map(
					(page) => (
						<button
							key={page}
							className={`mr-2 px-4 py-2 border border-gray-400 rounded ${
								page === currentPage ? "bg-purple-700 text-white" : ""
							}`}
							onClick={() => handlePageChange(page)}>
							{page}
						</button>
					)
				)}
			</div>
		</div>
	);
};

export default AllGames;
