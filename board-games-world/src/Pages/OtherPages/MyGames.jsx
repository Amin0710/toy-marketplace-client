import { useEffect } from "react";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyGameCard from "./MyGameCard";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MyGames = () => {
	const { user } = useContext(AuthContext);
	const [myGames, setMyGames] = useState([]);
	const [editableGame, setEditableGame] = useState({});
	const [accepted, setAccepted] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const gamesPerPage = 20;
	const beforeSearchPage = useRef(1);
	const MySwal = withReactContent(Swal);

	//Update the myGames state with the games that belong to the logged in user
	const [newPrice, setNewPrice] = useState("");
	const [newAvailableQuantity, setNewAvailableQuantity] = useState("");
	const [newDetailDescription, setNewDetailDescription] = useState("");

	const url = `http://localhost:5001/mygames?seller_email=${user?.email}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMyGames(data));
	}, [url]);

	const deleteGame = (id) => {
		MySwal.fire({
			title: "There's no data recovery after deletion.",
			text: "Please press DELETE to confirm.",
			icon: "error",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "DELETE",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5001/games/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							MySwal.fire("Deleted!", "Your file has been deleted.", "success");
							const remainingGames = myGames.filter((game) => game._id !== id);
							setMyGames(remainingGames);
						}
					});
			}
		});
	};

	const editID = (id) => {
		myGames.forEach((game) => {
			if (game._id === id) {
				setEditableGame(game);
				setNewPrice(game.price);
				setNewAvailableQuantity(game.available_quantity);
				setNewDetailDescription(game.detail_description);
			}
		});
	};

	const editGame = () => {
		fetch(`http://localhost:5001/games/${editableGame._id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},

			body: JSON.stringify({
				price: newPrice,
				available_quantity: newAvailableQuantity,
				detail_description: newDetailDescription,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					const remainingGames = myGames.filter(
						(game) => game._id !== editableGame._id
					);
					const updatedGame = myGames.find(
						(game) => game._id === editableGame._id
					);
					updatedGame.price = newPrice;
					updatedGame.available_quantity = newAvailableQuantity;
					updatedGame.detail_description = newDetailDescription;
					const newMyGames = [updatedGame, ...remainingGames];
					setMyGames(newMyGames);
					MySwal.fire(
						"Updated!",
						"Your file has been updated successfully.",
						"success"
					);
				}
			});
	};

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

	const handleAccepted = (event) => {
		setAccepted(event.target.checked);
	};

	const reloadOrNot = () => {
		const price = document.getElementById("price").value;
		const availableQuantity =
			document.getElementById("availableQuantity").value;
		const detailDescription =
			document.getElementById("detailDescription").value;

		console.log("id", price, availableQuantity, detailDescription);
		console.log(
			"ed",
			editableGame.price,
			editableGame.available_quantity,
			editableGame.detail_description
		);

		if (
			price !== editableGame.price ||
			availableQuantity !== editableGame.available_quantity ||
			detailDescription !== editableGame.detail_description
		) {
			window.location.reload();
		}
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
							<MyGameCard
								key={game._id}
								game={game}
								deleteGame={deleteGame}
								editID={editID}></MyGameCard>
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
			{/* modal */}
			<input type="checkbox" id="my-modal-5" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box w-11/12 max-w-5xl">
					<h1 className="text-4xl text-gray-200">
						You are changing: {editableGame.game_name}
					</h1>
					<form>
						<div className="grid grid-cols-2 gap-4">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Price</span>
								</label>
								<input
									type="number"
									placeholder={editableGame.price}
									step="0.1"
									onChange={(e) => setNewPrice(e.target.value)}
									defaultValue={editableGame.price}
									name="price"
									id="price"
									className="input input-bordered bg-gray-200 text-base-100"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Available quantity</span>
								</label>
								<input
									type="number"
									placeholder={editableGame.available_quantity}
									onChange={(e) => setNewAvailableQuantity(e.target.value)}
									defaultValue={editableGame.available_quantity}
									name="availableQuantity"
									id="availableQuantity"
									className="input input-bordered bg-gray-200 text-base-100"
									required
								/>
							</div>
							<div className="form-control col-span-2">
								<label className="label">
									<span className="label-text">Detail description</span>
								</label>
								<textarea
									placeholder={editableGame.detail_description}
									onChange={(e) => setNewDetailDescription(e.target.value)}
									defaultValue={editableGame.detail_description}
									name="detailDescription"
									id="detailDescription"
									className="textarea textarea-bordered bg-gray-200 text-base-100"
									required></textarea>
							</div>
							<div className="flex items-center">
								<input
									type="checkbox"
									name="accept"
									id="acceptCheckbox"
									className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
									onClick={handleAccepted}
								/>
								<label htmlFor="acceptCheckbox" className="ml-2 text-sm mt-2">
									Confirm all the information is correct
								</label>
							</div>
						</div>
						<div className="flex">
							<div className="form-control w-3/4 ">
								<input
									disabled={!accepted}
									className="btn btn-primary"
									type="button"
									value="Update Game"
									onClick={editGame}
								/>
							</div>
							<div className="w-1/4">
								<label
									htmlFor="my-modal-5"
									className="btn w-full"
									onClick={reloadOrNot}>
									Cancel Update
								</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MyGames;
