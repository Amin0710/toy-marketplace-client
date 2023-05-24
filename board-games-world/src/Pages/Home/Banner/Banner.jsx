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
		<div className="flex items-center justify-center mt-10">
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
};

export default Banner;
