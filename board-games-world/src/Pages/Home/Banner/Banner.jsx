import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import catan from "../../../assets/Banner/catan.jpg";
import chess from "../../../assets/Banner/chess.jpg";
import monopoly from "../../../assets/Banner/monopoly.jpg";
import risk from "../../../assets/Banner/risk.jpg";
import snake from "../../../assets/Banner/snake.jpg";
import solitaria from "../../../assets/Banner/something.jpg";
import burgundy from "../../../assets/Banner/burgundy.jpg";
import wonders from "../../../assets/Banner/7wonders.jpg";
import ludo from "../../../assets/Banner/ludo.jpg";
import pandamic from "../../../assets/Banner/pandamic.jpg";
import poker from "../../../assets/Banner/poker.jpg";
import root from "../../../assets/Banner/root.jpg";

const images = [
	{
		image_src: catan,
		alt: "CATAN",
	},
	{
		image_src: chess,
		alt: "CHESS",
	},
	{
		image_src: monopoly,
		alt: "MONOPOLY",
	},
	{
		image_src: risk,
		alt: "RISK",
	},
	{
		image_src: snake,
		alt: "SNAKE",
	},
	{
		image_src: solitaria,
		alt: "CONCORDIA SOLITARIA",
	},
	{
		image_src: burgundy,
		alt: "CASTLES OF BURGUNDY",
	},
	{
		image_src: wonders,
		alt: "7 WONDERS",
	},
	{
		image_src: ludo,
		alt: "LUDO",
	},
	{
		image_src: pandamic,
		alt: "PANDAMIC",
	},
	{
		image_src: poker,
		alt: "POKER",
	},
	{
		image_src: root,
		alt: "ROOT",
	},
];
const Banner = () => {
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
