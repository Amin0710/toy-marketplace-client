import { useState } from "react";
import fan1 from "../../../assets/Fans/1.mp4";
import fan2 from "../../../assets/Fans/2.mp4";
import fan3 from "../../../assets/Fans/1.mp4";
import fan4 from "../../../assets/Fans/3.jpg";
import fan5 from "../../../assets/Fans/4.jpg";
import fan6 from "../../../assets/Fans/7.jpeg";
import fan7 from "../../../assets/Fans/5.jpg";
import fan8 from "../../../assets/Fans/8.jpeg";
import fan9 from "../../../assets/Fans/6.jpg";

const images = [
	{
		src: fan1,
		type: "video",
	},
	{
		src: fan2,
		type: "video",
	},
	{
		src: fan3,
		type: "video",
	},
	{
		src: fan4,
		type: "img",
	},
	{
		src: fan5,
		type: "img",
	},
	{
		src: fan6,
		type: "img",
	},
	{
		src: fan7,
		type: "img-bust",
	},
	{
		src: fan8,
		type: "img-bust",
	},
	{
		src: fan9,
		type: "img-bust",
	},
];

const Gallery = () => {
	const [muted, setMuted] = useState(true);
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
						const imgNumber = index + 1;
						const aosAnime =
							imgNumber % 3 === 0
								? "fade-up-left"
								: imgNumber % 3 === 1
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
