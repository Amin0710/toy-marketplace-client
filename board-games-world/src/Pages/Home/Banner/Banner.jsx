import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetch("/banner.json")
			.then((response) => response.json())
			.then((data) => setImages(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<div className="flex items-center justify-center">
			<div className="container">
				<Carousel>
					{images.map((image, index) => (
						<div key={index}>
							<img
								src={image.image_src}
								alt={image.alt}
								className="rounded"
								style={{ maxHeight: "500px" }}
							/>
							<p className="legend">{image.alt}</p>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);

	// return (
	// 	<div className="container mx-auto py-8">
	// 		<h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
	// 		<div className="grid grid-cols-3 gap-4">
	// 			{images.map((image, index) => (
	// 				<div key={index} className="relative aspect-w-1 aspect-h-1">
	// 					<img
	// 						src={image}
	// 						alt={`Image ${index + 1}`}
	// 						className="object-cover rounded"
	// 					/>
	// 				</div>
	// 			))}
	// 		</div>
	// 	</div>
	// );
};

export default Banner;
