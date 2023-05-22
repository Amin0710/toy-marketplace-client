import { useEffect, useState } from "react";

const Gallery = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetch("/fansfeedback.json")
			.then((response) => response.json())
			.then((data) => setImages(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-2xl font-bold mb-4 text-purple-700 bg-white rounded-lg p-4">
				Boredom Busters Gallery
			</h1>
			<div className="grid grid-cols-3 gap-4 text-center mb-10">
				{images
					.filter((img) => img.type === "img-bust")
					.map((image, index) => (
						<div key={index} className="relative aspect-w-1 aspect-h-1">
							<img
								src={image.src}
								alt={index + 1}
								className="object-cover rounded"
							/>
						</div>
					))}
			</div>
			<h1 className="text-xl font-bold mb-4 text-purple-700 bg-white rounded-lg p-2">
				Fans Fun Videos
			</h1>
			<div className="grid grid-cols-3 mb-10">
				{images
					.filter((video) => video.type === "video")
					.map((video, index) => (
						<div
							key={index}
							className="relative aspect-w-1 aspect-h-1 flex justify-center">
							<video
								// src={video.src}
								className="object-cover rounded"
								autoPlay
								loop
								muted
							/>
						</div>
					))}
			</div>
			<h1 className="text-xl font-bold mb-4 text-purple-700 bg-white rounded-lg p-2">
				Fans Gallery
			</h1>
			<div className="grid grid-cols-3 gap-4 text-center">
				{images
					.filter((img) => img.type === "img")
					.map((image, index) => (
						<div key={index} className="relative aspect-w-1 aspect-h-1">
							<img
								src={image.src}
								alt={index + 1}
								className="object-cover rounded"
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default Gallery;
