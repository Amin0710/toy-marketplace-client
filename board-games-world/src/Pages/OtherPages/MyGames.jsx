import { useContext, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import MyGameCard from "./MyGameCard";

const MyGames = () => {
	const { user } = useContext(AuthContext);
	const allGames = useLoaderData();
	const myGames = allGames.filter((game) => game.seller_email === user.email);
	const [searchTerm, setSearchTerm] = useState(""); // State for the search input
	const [currentPage, setCurrentPage] = useState(1);
	const gamesPerPage = 20;
	const beforeSearchPage = useRef(1);

	// Filter the games based on the search input
	const filteredGames = myGames.filter((game) =>
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
				{user.displayName}&#39;s Games
			</h1>
			<div className="my-4">
				<input
					type="text"
					placeholder="Search..."
					value={searchTerm}
					onChange={handleSearchTermChange}
					className="w-full p-2 border border-gray-400 rounded"
				/>
			</div>

			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							<th>Game Name</th>
							<th className="text-center px-0">Detail description</th>
							<th className="text-center px-0">Quantity</th>
							<th className="text-center px-0">Price</th>
							<th className="text-center px-0">Edit</th>
							<th className="text-center px-0">Delete</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{currentGames.map((game) => (
							<MyGameCard key={game._id} game={game}></MyGameCard>
						))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>Game Name</th>
							<th className="text-center px-0">Detail description</th>
							<th className="text-center px-0">Quantity</th>
							<th className="text-center px-0">Price</th>
							<th className="text-center px-0">Edit</th>
							<th className="text-center px-0">Delete</th>
						</tr>
					</tfoot>
				</table>
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

export default MyGames;
