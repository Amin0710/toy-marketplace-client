import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GameCard from "./GameCard";

const ShopByCategory = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5001/games")
			.then((response) => response.json())
			.then((data) => setGames(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	const categories = games.map((game) => {
		return game.category;
	});

	//Function to get top 3 repeat form any array
	function getTop3(array) {
		const countMap = array.reduce((map, item) => {
			map[item] = (map[item] || 0) + 1;
			return map;
		}, {});

		const sortedCounts = Object.entries(countMap).sort((a, b) => b[1] - a[1]);

		const top3 = sortedCounts.slice(0, 3).map(([item]) => item);

		return top3;
	}

	const top3categories = getTop3(categories);
	let top3SubCategories = [];

	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-2xl font-bold mb-4 text-purple-700 bg-gray-300 rounded-lg p-4">
				Shop by category
			</h1>
			<h2 className="text-sm font-bold mb-4 text-white rounded-lg p-4">
				Please note that this is just the best list, and there are many more
				board games available in each category and sub-category.
			</h2>

			<Tabs>
				<TabList className="flex justify-around mb-4">
					{top3categories.map((category, index) => {
						return <Tab key={index}>{category}</Tab>;
					})}
				</TabList>
				{top3categories.map((category, index) => {
					{
						const gamesOfThisCategory = games.filter((game) => {
							return game.category === category;
						});
						const subCategories = gamesOfThisCategory.map((game) => {
							return game.sub_category;
						});
						top3SubCategories = getTop3(subCategories);
					}
					return (
						<TabPanel key={index}>
							<Tabs>
								<TabList>
									{top3SubCategories.map((sub_category, index) => {
										return <Tab key={index}>{sub_category}</Tab>;
									})}
								</TabList>
								{top3SubCategories.map((sub_category, index) => {
									return (
										<TabPanel key={index}>
											<div className="flex flex-wrap">
												{games
													.filter((game) => {
														return (
															game.category === category &&
															game.sub_category === sub_category
														);
													})
													.map((game) => {
														return (
															<div
																key={game._id}
																className="w-full lg:w-1/3 px-4 my-4 flex justify-center">
																<GameCard game={game}></GameCard>
															</div>
														);
													})}
											</div>
										</TabPanel>
									);
								})}
							</Tabs>
						</TabPanel>
					);
				})}
			</Tabs>
		</div>
	);
};

export default ShopByCategory;
