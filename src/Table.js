import React, { useState, useEffect } from "react";
import Loading from "./Loading.js";

function Table() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(
			"https://uat.4pointx.com:12361/pdm_vibrationanalysis_get_allassettable?shop=Pumps&plant=Plant-1&time=Last%201%20year"
		)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},

				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);
	console.log(items);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return (
			<div>
				<Loading />
			</div>
		);
	} else {
		return <ul>{items[0]}</ul>;
	}
}
export default Table;
