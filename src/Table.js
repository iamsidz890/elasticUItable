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
	// console.log(store);
	// const machines = store.map((machine) => {
	// 	// console.log(machine);
	// 	return machine[0];
	// });
	// console.log(mac);
	// console.log(machines);
	const arr = store.map((item) => {
		return {
			MachineName: item[0],
			FirstNumber: item[1],
			Number: item[2],
			Problem: item[3],
			Plant: item[4],
			Type: item[5],
			Location: item[6],
		};
	});
	const passArr = [...arr];
	console.log(passArr);

	const columns = [
		{
			field: "MachineName",
			name: "Machine Name",
			render: (MachineName) => <span>{MachineName}</span>,

			header: false,
			truncateText: false,
			enlarge: true,
			fullWidth: true,
		},
		{
			field: "FirstNumber",
			name: "First No.",
			render: (FirstNumber) => <span>{FirstNumber} </span>,
		},
		{
			field: "Number",
			name: "Number",
			render: (Number) => <span>{Number} </span>,
		},
		{
			field: "Problem",
			name: "Problem",
			render: (Problem) => <span>{Problem} </span>,
		},
		{
			field: "Plant",
			name: "Plant",
			render: (Plant) => <span>{Plant} </span>,
		},
		{
			field: "Type",
			name: "Type",
			render: (Type) => <span>{Type} </span>,
		},
		{
			field: "Location",
			name: "Location",
			render: (Location) => <span>{Location} </span>,
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
		return (
			<EuiBasicTable
				rowHeader='MachineName'
				items={passArr}
				columns={columns}
			/>
		);
	}
}
export default Table;
