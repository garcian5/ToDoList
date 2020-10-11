import React from "react"
import { timeOfDay } from "../scripts/timeOfDay";
import { hrOfDay } from "../scripts/timeOfDay";

class Header extends React.Component {	
	constructor() {
		super();
		this.state = {
			time: hrOfDay(),
			day: timeOfDay()
        }
	}

	/**
	 * A method that updates style of the header
	 * */
	timeStyle() {
		let cLstStyles = {
			backgroundColor: "rgba(186, 152, 3, 0.32)",
			margin: "auto",
			height: 250,
			width: 350,
			borderRadius: "50%"
		};

		// change background color depending on the times of the day
		if (this.state.day === "afternoon") cLstStyles.backgroundColor = "rgba(208, 6, 6, 0.32)";
		else if (this.state.day === "night") cLstStyles.backgroundColor = "rgba(45, 4, 195, 0.32)";

		return cLstStyles;
    }

	/**
	 * A method that updates time
	 * */
	updateTime() {
		this.setState({
			time: hrOfDay(),
			day: timeOfDay()
		});
	}

	/**
	 * ***previously used componentWillMount() and found out that this is soon to be depracated***
	 * this method is a lifecycle method that will be invoked immediately after a component is mounted
	 * this method will only run once
	 * this method will call the updateTime() method and update our time state every 1 second.
	 * */
	componentDidMount() {
		setInterval(() => this.updateTime(), 1000);
    }

	render() {			
		return (
			<header style={this.timeStyle()}>				
				<div className="greeting-header">
					<h1>Good {this.state.day}!</h1>
					<h4>It is currently {this.state.time} where you are.</h4>
					<h4>Here is your To Do List.</h4>
				</div>				
			</header>
		)
	}
}

export default Header