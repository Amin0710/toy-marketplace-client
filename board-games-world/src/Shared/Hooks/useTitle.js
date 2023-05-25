import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `BB | ${title}`;
	}, [title]);
};

export default useTitle;
