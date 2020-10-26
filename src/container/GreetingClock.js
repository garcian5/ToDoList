import React, { Component, createRef } from "react";
import { timeOfDay, hrOfDay } from "../scripts/timeOfDay";
import ProgressReportModel from "./ProgressReportModel";

class GreetingClock extends Component {
	constructor() {
		super();
		this.state = {
			time: hrOfDay(),
			day: timeOfDay(),
			interval: "",
			show: false
		}

		// bind these methods
		this.modalShow = this.modalShow.bind(this);
		this.modalHide = this.modalHide.bind(this);

		this.wrapper = createRef();
	}

	/**
	 * A method that updates style of the header
	 * */
	timeStyle() {
		let cLstStyles = {
			backgroundColor: "rgba(186, 152, 3, 0.32)",
			color: "#E53131",
			margin: "0 auto",
			height: 400,
			width: 400,
			borderRadius: "50%",
			border: "none",
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
	componentDidMount = () => this.setState({interval: setInterval(() => this.updateTime(), 1000)})	
	/**
	 * this method will clear the data from the set interval we called during mount.
	 * to ensure there are no memory leaks.
	 * */
	componentWillUnmount = () => clearInterval(this.state.interval)

	/**
	 * These methods handles the states in which the modal box should be shown or hidden
	 * */
	modalShow = () => this.setState({ show: true });	
	modalHide = () => this.setState({ show: false });	

	render() {
		return (
			<div ref={this.wrapper}>
				<div className="outer-btn-circle">
					<button title="Click for Progress Report"
						onClick={this.modalShow} className="greeting-btn" style={this.timeStyle()}>
						<div className="greeting-header">
							<p className="greeting">Good {this.state.day} {this.props.username}!</p>
							<p>It is currently {this.state.time} where you are.</p>
							<p>Here is your To Do List.</p>
						</div>
					</button>
					<ProgressReportModel
						show={this.state.show}
						onHide={this.modalHide}
						tod={this.state.day}
						hod={this.state.time}
						tasks={this.props.tasks}
					/>
				</div>
			</div>
		)
	}
}

export default GreetingClock