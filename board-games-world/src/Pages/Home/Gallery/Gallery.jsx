import { useEffect, useState } from "react";

const Gallery = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetch("/fansfeedback.json")
			.then((response) => response.json())
			.then((data) => setImages(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	const [muted, setMuted] = useState(false);
	const [stopLoop, setStopLoop] = useState(false);

	const handleToggleMute = () => {
		setMuted((prevMuted) => !prevMuted);
	};

	const handleStopLoop = () => {
		setStopLoop(true);
	};

	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-2xl font-bold mb-4 text-purple-700 bg-gray-300 rounded-lg p-4">
				Boredom Buster&#39;s Gallery
			</h1>
			<div
				className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-10"
				data-aos="fade-right">
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
			<h1 className="text-xl font-bold mb-4 text-purple-700 bg-gray-300 rounded-lg p-2">
				Fans Fun Videos
			</h1>
			<div className="flex justify-center gap-4 mb-5">
				<button
					className={`btn  btn-primary ${muted ? "btn-active" : ""}`}
					onClick={handleToggleMute}>
					{muted ? "Unmute Videos" : "Mute Videos"}
				</button>
				<button className="btn btn-primary" onClick={handleStopLoop}>
					Stop Loop
				</button>
			</div>
			<div
				className="grid grid-cols-1 md:grid-cols-3 mb-10"
				data-aos="fade-left">
				{images
					.filter((video) => video.type === "video")
					.map((video, index) => (
						<div
							key={index}
							className="relative aspect-w-1 aspect-h-1 flex justify-center">
							<video
								src={video.src}
								className="object-cover rounded"
								autoPlay
								loop={!stopLoop}
								muted={muted}
							/>
						</div>
					))}
			</div>
			<h1 className="text-xl font-bold mb-4 text-purple-700 bg-gray-300 rounded-lg p-2">
				Fans Gallery
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
				{images
					.filter((img) => img.type === "img")
					.map((image, index) => {
						const aosAnime =
							index % 3 === 0
								? "fade-up-left"
								: index % 3 === 1
								? "fade-up-right"
								: "fade-up";
						return (
							<div key={index} className="relative aspect-w-1 aspect-h-1">
								<img
									src={image.src}
									alt={index + 1}
									className="object-cover rounded"
									data-aos={aosAnime}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Gallery;
