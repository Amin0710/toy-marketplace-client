import fourOfour from "../../assets/404.jpg";

const ErrorPage = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div>
				<h1 className="text-5xl font-bold">Oops!</h1>
				<h1 className="text-red-500">আন্তাজে লিখলে এমনই হবে</h1>
				<p>
					Don&apos;t put random things in the URL bar. It&apos;s not good for
					your health. just click buttons and it will take you to places.
				</p>
				<img src={fourOfour} alt="" className="rounded" />
			</div>
		</div>
	);
};

export default ErrorPage;
