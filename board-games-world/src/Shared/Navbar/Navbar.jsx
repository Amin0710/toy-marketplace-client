import { Link } from "react-router-dom";
import logo from "../../assets/boredom-busters-board-games-logo.png";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					<img
						src={logo}
						height="40px"
						width="40px"
						alt=""
						className="rounded"
					/>
					<span className="hidden sm:block">Boredom Busters Board Games</span>
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">All Toys</Link>
					</li>
					<li>
						<Link to="/">Blogs</Link>
					</li>
				</ul>
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<Link to="/">My Toys</Link>
						</li>
						<li>
							<Link to="/">Add A Toy</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
