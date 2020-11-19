import React, { useState, useEffect } from "react";
import Loading from "./Loading.js";
import { EuiBasicTable, EuiLink, EuiHealth } from "@elastic/eui";

function Table() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [store, setStore] = useState([]);

	useEffect(() => {
		fetch(
			"https://uat.4pointx.com:12361/pdm_vibrationanalysis_get_allassettable?shop=Pumps&plant=Plant-1&time=Last%201%20year"
		)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setStore(result);
				},

				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);
	console.log(store);
	const machines = store.map((machine) => {
		// console.log(machine);
		return machine[0];
	});
	// console.log(mac);
	// console.log(machines);

	const columns = [
		{
			name: "Machine Name",
		},
		{
			name: "First No.",
		},
		{
			name: "Number",
		},
		{
			name: "Plant",
		},
		{
			name: "Type",
		},
		{
			name: "Loc",
		},
		{
			name: "Problem",
		},
	];

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return (
			<div>
				<Loading />
			</div>
		);
	} else {
		return <EuiBasicTable items={store} columns={columns} />;
	}
}
export default Table;
