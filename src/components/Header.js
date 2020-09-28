import React from "react"
import { timeOfDay } from "../scripts/timeOfDay";
import { hrOfDay } from "../scripts/timeOfDay";

function Header() {
	let tod = timeOfDay();
	let hod = hrOfDay();

	let cLstStyles = {
		backgroundColor: "rgba(186, 152, 3, 0.32)",	
		margin: "auto",
		height: 250,
		width: 350,		
		borderRadius: "50%"
	}

	// change background color depending on the times of the day
	if (tod === "afternoon") cLstStyles.backgroundColor = "rgba(208, 6, 6, 0.32)";
	else if (tod === "night") cLstStyles.backgroundColor = "rgba(45, 4, 195, 0.32)";

	return (
		<header style={cLstStyles}>
			<div className="greeting-header">
				<h1>Good {tod}!</h1>
				<h4>It is currently {hod} where you are.</h4>
				<h4>Here is your To Do List.</h4>
			</div>
		</header>
		)
}

export default Header