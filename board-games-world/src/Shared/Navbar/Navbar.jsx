import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/boredom-busters-board-games-logo.png";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
	const { user, loading, logOut } = useContext(AuthContext);

	const handleMouseOver = () => {
		const userName = document.getElementById("userName");
		userName.classList.remove("invisible");
	};

	const handleMouseOut = () => {
		const userName = document.getElementById("userName");
		userName.classList.add("invisible");
	};

	return (
		<div className="navbar  min-h-[150px] mb-10 flex items-center justify-center bg-[#661AE6]">
			<div className="container">
				<div className="flex-1">
					<div className="flex items-center">
						<Link to="/">
							<img
								src={logo}
								alt=""
								className="rounded w-16 h-16 sm:w-32 sm:h-32  hidden sm:block"
							/>
						</Link>
						<Link to="/" className="btn btn-ghost normal-case text-xl">
							<span className="hidden sm:block">
								Boredom Busters Board Games
							</span>
						</Link>
					</div>
				</div>
				<div className="flex align-middle justify-center">
					<ul className="menu menu-horizontal px-1">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/all_games">All Games</Link>
						</li>
						<li>
							<Link to="/blog">Blogs</Link>
						</li>
					</ul>
					{loading ? (
						<div className="flex justify-center">
							<button
								className="bg-warning text-white px-4 py-2 rounded-md flex items-center"
								disabled>
								<span className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></span>
								Loading...
							</button>
						</div>
					) : (
						!!user || (
							<ul className="menu menu-horizontal px-1">
								<li>
									<Link to="/login">Login</Link>
								</li>
							</ul>
						)
					)}
					{!!user && (
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div
									className="w-10 rounded-full"
									onMouseOver={handleMouseOver}
									onMouseOut={handleMouseOut}>
									<img src={user?.photoURL || user?.displayName} />
								</div>
								<p className="mt-5 invisible" id="userName">
									{user?.displayName}
								</p>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
								<li>
									<Link to="/my_games">My Games</Link>
								</li>
								<li>
									<Link to="/add_game">Add A Game</Link>
								</li>
								<li>
									<button onClick={logOut}>Log Out</button>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
