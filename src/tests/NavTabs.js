import React, { useEffect, useState } from "react";
import { Persons } from "./ObjectDB";
import './tabs.css'

export function TabButton({ tab, activeTab, onClick, children }) {
	return (
		<button
			className={activeTab === tab ? "active-tab" : "inactive-tab"}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default function NavTabs() {
	const [activeTab, setActiveTab] = useState("tab1");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};
	const [myDB, setMyDB] = useState(
		JSON.parse(localStorage.getItem("myDB")) || []
	);

	// this block runs the code inside every time the variable it binds to is updated.
	useEffect(() => {
		localStorage.setItem("myDB", JSON.stringify(myDB)); // this code runs every time the myDB variable changed or updated
	}, [myDB]); // watch myDB changes

	return (
		<div>
			<div className="tab-buttons">
				<TabButton tab='tab1' activeTab={activeTab} onClick={() => handleTabClick("tab1")}>Tab 1</TabButton>
				<TabButton  tab='tab2' activeTab={activeTab} onClick={() => handleTabClick("tab2")}>Tab 2</TabButton>
				<TabButton  tab='tab3' activeTab={activeTab} onClick={() => handleTabClick("tab3")}>Tab 3</TabButton>
			</div>
			<div className="tab-content">
				{activeTab === "tab1" && <Persons state={[myDB, setMyDB]} />}
				{activeTab === "tab2" && (
					<div>
						Content for Tab 2 <Persons state={[myDB, setMyDB]} />
					</div>
				)}
				{activeTab === "tab3" && <div>Content for Tab 3</div>}
			</div>
		</div>
	);
}
