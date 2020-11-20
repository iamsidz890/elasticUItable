import React, { useState, useEffect } from "react";
import Loading from "./Loading.js";
import { EuiBasicTable } from "@elastic/eui";

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
			render: (MachineName) => <p>{MachineName}</p>,

			header: false,
			truncateText: false,
			enlarge: true,
			fullWidth: true,
		},
		{
			field: "FirstNumber",
			name: "First No.",
			render: (FirstNumber) => <p>{FirstNumber} </p>,
		},
		{
			field: "Number",
			name: "Number",
			render: (Number) => <p>{Number} </p>,
		},
		{
			field: "Problem",
			name: "Problem",
			render: (Problem) => <p>{Problem} </p>,
		},
		{
			field: "Plant",
			name: "Plant",
			render: (Plant) => <p>{Plant} </p>,
		},
		{
			field: "Type",
			name: "Type",
			render: (Type) => <p>{Type} </p>,
		},
		{
			field: "Location",
			name: "Location",
			render: (Location) => <p>{Location} </p>,
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
