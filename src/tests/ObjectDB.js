import React, { useState, useEffect } from "react";
import { STYLE_SPACER, SpacerContainer } from "./TestsNav";

export function Persons({ state }) {
	const [myDB, setMyDB] = state;

	class Person {
		constructor(name, age, bday) {
			this.name = name;
			this.age = age;
			this.bday = bday;
		}
	}
    
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [bday, setBday] = useState("");

	const add = () => {
		if (name && age && bday) {
			setMyDB([...myDB, new Person(name, age, bday)]);
			setName("");
			setAge("");
			setBday("");
		}
	};

	const deleteItem = (id) => {
		setMyDB(myDB.filter((item, index) => index !== id));
	};

	const exportData = () => {
		const dataStr = JSON.stringify(myDB, null, 2);
		const dataUri =
			"data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
		const exportFileDefaultName = "myDB.json";
		const linkElement = document.createElement("a");
		linkElement.setAttribute("href", dataUri);
		linkElement.setAttribute("download", exportFileDefaultName);
		document.body.appendChild(linkElement);
		linkElement.click();
		document.body.removeChild(linkElement);
	};

	const importData = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = (event) => {
			const importedData = JSON.parse(event.target.result);
			setMyDB(importedData);
		};
		reader.readAsText(file);
	};

	return (
		<div style={STYLE_SPACER}>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				type="text"
				placeholder="Enter Name"
				tabIndex="0"
			/>
			<input
				value={age}
				onChange={(e) => setAge(e.target.value)}
				type="number"
				placeholder="Enter Age"
				tabIndex="0"
			/>
			<input
				value={bday}
				onChange={(e) => setBday(e.target.value)}
				type="date"
				placeholder="Enter Birthday"
				tabIndex="0"
			/>
			<button onClick={add}>Add</button>
			<div style={{ alignSelf: "end" }}>
				<button onClick={exportData}>Export</button>
				<input type="file" accept=".json" onChange={importData} />
			</div>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Birthday</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{myDB.map((value, index) => (
						<tr key={index}>
							<td>{value.name}</td>
							<td>{value.age}</td>
							<td>{value.bday}</td>
							<td>
								<button onClick={() => deleteItem(index)} tabIndex="-1">
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default function ObjectDB() {
	const [myDB, setMyDB] = useState(
		JSON.parse(localStorage.getItem("myDB")) || []
	);

	// this block runs the code inside every time the variable it binds to is updated.
	useEffect(() => {
		localStorage.setItem("myDB", JSON.stringify(myDB)); // this code runs every time the myDB variable changed or updated
	}, [myDB]); // watch myDB changes

	return (
		<SpacerContainer>
			<Persons state={[myDB, setMyDB]} />
			<Persons state={[myDB, setMyDB]} />
		</SpacerContainer>
	);
}
