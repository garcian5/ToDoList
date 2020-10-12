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
			color: "#E53131",
			margin: "auto",
			height: 300,
			width: 300,
			borderRadius: "50%",
			boxShadow: `0 0 20px 5px rgba(0, 0, 0, 0.15)`,			
		};

		// change background color depending on the times of the day
		if (this.state.day === "afternoon") {			
			cLstStyles.backgroundColor = "rgba(208, 6, 6, 0.32)";
			cLstStyles.color = "#38333F";
		} else if (this.state.day === "night") {
			cLstStyles.backgroundColor = "rgba(6, 1, 24, 0.5)";
			cLstStyles.color = "#F8F8E5";
		}

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
					<p className="greeting">Good {this.state.day}!</p>
					<p>It is currently {this.state.time} where you are.</p>
					<p>Here is your To Do List.</p>
				</div>
			</header>
		)
	}
}

export default Header