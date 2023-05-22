import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-2xl font-bold mb-4 text-purple-700 bg-white rounded-lg p-4">
				Shop by category
			</h1>
			<h2 className="text-sm font-bold mb-4 text-white rounded-lg p-4">
				Please note that this is just the best list, and there are many more
				board games available in each category and sub-category.
			</h2>

			<Tabs>
				<TabList className="flex justify-around">
					<Tab>Strategy Games</Tab>
					<Tab>Family Games</Tab>
					<Tab>Card, War and Hidden Identity</Tab>
				</TabList>
				<TabPanel>
					<Tabs>
						<TabList>
							<Tab>Worker Placement</Tab>
							<Tab>Area Control</Tab>
							<Tab>Deck Building</Tab>
						</TabList>
						<TabPanel>Game 1: Agricola Game 2: Catan Game 3: Burgundy</TabPanel>
						<TabPanel>Game 1: Risk Game 2: Small World Game 3: Root</TabPanel>
						<TabPanel>
							Game 1: 7 Wonders Game 2: Dominion Game 3: Magic: The Gathering
						</TabPanel>
					</Tabs>
				</TabPanel>
				<TabPanel>
					<Tabs>
						<TabList>
							<Tab>Cooperative</Tab>
							<Tab>Party Games</Tab>
							<Tab>Classic Games</Tab>
						</TabList>
						<TabPanel>
							Game 1: Trivial Pursuit Game 2: Wits End Game 3: 7 Wonders
						</TabPanel>
						<TabPanel>
							Game 1: Poker Game 2: Scrabble Game 3: Pictionary
						</TabPanel>
						<TabPanel>
							Game 1: Werewolf Game 2: Secret Hitler Game 3: Avalon
						</TabPanel>
					</Tabs>
				</TabPanel>
				<TabPanel>
					<Tabs>
						<TabList>
							<Tab>War Games</Tab>
							<Tab>Card games</Tab>
							<Tab>Hidden Identity Games</Tab>
						</TabList>
						<TabPanel>
							Game 1: Pandemic Game 2: Pandemic Legacy: Season 1 Game 3:
							Pandemic: Iberia
						</TabPanel>
						<TabPanel>Game 1: Chess Game 2: Monopoly Game 3: Scrabble</TabPanel>
						<TabPanel>
							Game 1: Robinson Crusoe: Adventures on the Cursed Island Game 2:
							Forbidden Island Game 3: Spirit Island
						</TabPanel>
					</Tabs>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ShopByCategory;
