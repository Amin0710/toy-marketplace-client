import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PublicOnlyRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="flex flex-col items-center justify-center">
				<div className="container my-5 py-5">
					<div className="flex flex-col items-center">
						<progress className="progress w-56 bg-red-500 mb-4"></progress>
						<progress className="progress w-56 bg-blue-500 mb-4"></progress>
						<progress className="progress w-56 bg-white mb-4"></progress>
						<progress className="progress w-56 bg-black mb-4"></progress>
						<progress className="progress w-56 bg-green-500 mb-4"></progress>
						<progress className="progress w-56 bg-yellow-500 mb-4"></progress>
					</div>
				</div>
			</div>
		);
	}

	if (!user) {
		return children;
	}

	return (
		<div>
			<Navigate to="/" state={{ from: location }} replace></Navigate>
			<div className="toast toast-top toast-end">
				<div className="alert alert-success">
					<div>
						<span>You are a logged in User.</span>
					</div>
				</div>
				<div className="alert alert-info">
					<div>
						<span>Log out first before you use the login/signup page.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PublicOnlyRoutes;
