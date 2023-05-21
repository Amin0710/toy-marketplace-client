import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/boredom-busters-board-games-logo.png";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
	const { signIn } = useContext(AuthContext);

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signIn(name, email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => console.log(error));
	};
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row gap-20">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold mb-5">Login now!</h1>
					<img
						src={logo}
						height="400px"
						width="400px"
						alt=""
						className="rounded hidden sm:block"
					/>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<div className="card-body">
						<form onSubmit={handleLogin}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									name="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="text"
									placeholder="password"
									name="password"
									className="input input-bordered"
								/>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<input
									className="btn btn-primary"
									type="submit"
									value="Login"
								/>
							</div>
						</form>
						<p className="my-4 text-center">
							New to Boredom Busters
							<Link className="text-purple-600 font-bold" to="/signup">
								{" "}
								Sign Up
							</Link>{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
