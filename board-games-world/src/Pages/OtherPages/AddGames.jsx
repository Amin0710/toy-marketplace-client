import { useContext, useState } from "react";
import imgIcon from "../../assets/add-camera-icon.png";
import { AuthContext } from "../../Providers/AuthProvider";

const AddGames = () => {
	const [photoURL, setPhotoURL] = useState("");
	const [previewURL, setPreviewURL] = useState("");
	const { user } = useContext(AuthContext);
	const [accepted, setAccepted] = useState(false);
	const [error, setError] = useState("");

	const handlePreview = () => {
		setPreviewURL(photoURL);
	};

	const handleAddGame = (event) => {
		event.preventDefault();
		const form = event.target;
		const gameName = form.gameName.value;
		const sellerName = form.sellerName.value;
		const category = form.category.value;
		const email = form.email.value;
		const subCategory = form.subCategory.value;
		const price = form.price.value;
		const availableQuantity = form.availableQuantity.value;
		const rating = form.rating.value;
		const detailDescription = form.detailDescription.value;
		const photo = form.photo.value;

		const newGame = {
			game_name: gameName,
			category: category,
			sub_category: subCategory,
			picture_url: photo,
			seller_name: sellerName,
			seller_email: email,
			price: price,
			rating: rating,
			available_quantity: availableQuantity,
			detail_description: detailDescription,
		};

		setError("");

		if (rating < 1 || rating > 5) {
			setError("Rating must be between 1 and 5");
			return;
		} else if (price < 10 || price > 200) {
			setError("Price must be between $10 and $200");
			return;
		} else if (availableQuantity < 1) {
			setError("Quantity must be at least 1");
			return;
		}

		fetch("http://localhost:5001/games", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newGame),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					alert("service book successfully");
				}
			});
	};

	const handleAccepted = (event) => {
		setAccepted(event.target.checked);
	};

	return (
		<div className="hero min-h-screen bg-gray-200 m-0">
			<div className="hero-content flex-col lg:flex-row gap-20">
				<div className="card shadow-2xl bg-base-100 text-center lg:text-left">
					<div className="card-body bg-gray-200 m-5">
						<h1 className="text-5xl font-bold mb-5 text-base-100 ">
							Add A Game
						</h1>
						<div className="form-control">
							<label className="label">
								<span className="label-text text-xl text-base-100">
									Photo URL
								</span>
							</label>
							<input
								type="url"
								placeholder="http://www.example.com/"
								name="photo"
								value={photoURL}
								onChange={(e) => setPhotoURL(e.target.value)}
								className="input input-bordered text-gray-200 bg-base-100"
								required
							/>
							<input
								disabled={!photoURL}
								className="btn btn-primary"
								type="button"
								value="Preview"
								onClick={handlePreview}
							/>
						</div>
						<img
							src={previewURL || imgIcon}
							alt=""
							className="rounded w-full h-full object-cover"
						/>
					</div>
				</div>
				<div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
					<div className="card-body">
						<form onSubmit={handleAddGame}>
							<div className="grid grid-cols-2 gap-4">
								<div className="form-control">
									<label className="label">
										<span className="label-text">Game Name</span>
									</label>
									<input
										type="text"
										placeholder="Game Name"
										name="gameName"
										className="input input-bordered bg-gray-200 text-base-100"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Seller Name</span>
									</label>
									<input
										type="text"
										placeholder={user.displayName || "Seller Name"}
										value={user.displayName || ""}
										name="sellerName"
										className="input input-bordered bg-gray-200 text-base-100"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Category</span>
									</label>
									<input
										type="text"
										placeholder="Category"
										name="category"
										className="input input-bordered bg-gray-200 text-base-100"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Seller Email</span>
									</label>
									<input
										type="text"
										placeholder={user.email || "email"}
										value={user.email || ""}
										name="email"
										className="input input-bordered bg-gray-200 text-base-100"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Sub-category</span>
									</label>
									<input
										type="text"
										placeholder="Sub category"
										name="subCategory"
										className="input input-bordered bg-gray-200 text-base-100"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Price</span>
									</label>
									<input
										type="number"
										placeholder="Price"
										step="0.1"
										name="price"
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
										placeholder="Available quantity"
										name="availableQuantity"
										className="input input-bordered bg-gray-200 text-base-100"
										required
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Rating</span>
									</label>
									<input
										type="number"
										step="0.1"
										placeholder="Rating"
										name="rating"
										className="input input-bordered bg-gray-200 text-base-100"
										required
									/>
								</div>
								<div className="form-control col-span-2">
									<label className="label">
										<span className="label-text">Detail description</span>
									</label>
									<textarea
										placeholder="Detail description"
										name="detailDescription"
										className="textarea textarea-bordered bg-gray-200 text-base-100"
										required></textarea>
								</div>
								<div className="form-control col-span-2">
									<label className="label">
										<span className="label-text">Photo URL</span>
									</label>
									<input
										type="url"
										placeholder="http://www.example.com/"
										name="photo"
										value={photoURL}
										onChange={(e) => setPhotoURL(e.target.value)}
										className="input input-bordered bg-gray-200 text-base-100"
										required
									/>
								</div>
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
							<div className="form-control mt-6">
								<input
									disabled={!accepted}
									className="btn btn-primary"
									type="submit"
									value="Add"
								/>
							</div>
						</form>
					</div>
					<p className="text-red-700 text-center">{error}</p>
				</div>
			</div>
		</div>
	);
};

export default AddGames;
