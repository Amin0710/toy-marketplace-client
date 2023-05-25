import { FaRegEdit } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const MyGameCard = ({ game, deleteGame, editID }) => {
	return (
		<tr>
			<td className="text-center">
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img src={game.picture_url} alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div>
						<div className="font-bold">{game.game_name}</div>
						<div className="text-sm opacity-50">{game.sub_category}</div>
					</div>
				</div>
			</td>
			<td className="text-center px-0 whitespace-normal w-1/2">
				{game.detail_description}
			</td>
			<td className="text-center px-0">{game.available_quantity}</td>
			<td className="text-center px-0">${game.price}</td>
			<th className="text-center px-0">
				<button>
					<label
						htmlFor="my-modal-5"
						className="btn"
						onClick={() => editID(game._id)}>
						<FaRegEdit></FaRegEdit>
					</label>
				</button>
			</th>
			<th className="text-center px-0">
				<button className="btn" onClick={() => deleteGame(game._id)}>
					<FontAwesomeIcon icon={faTrashCan} />
				</button>
			</th>
		</tr>
	);
};

export default MyGameCard;
