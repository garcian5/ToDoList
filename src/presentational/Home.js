import React from "react";
import { Link, Route } from "react-router-dom";
import CreateUser from './todocomponents/CreateUser';

const Home = () => {
	let btnStyle = {
		backgroundColor: "rgba(186, 152, 3, 0.32)",
		color: "#E53131",
		margin: "0 auto",
		height: 400,
		width: 400,
		borderRadius: "50%",
		border: "none",
		boxShadow: `0 0 20px 5px rgba(0, 0, 0, 0.15)`,
	};
    return (
		<div className="outer-btn-circle home">
			<Link to="/user" style={btnStyle}>
				<div className="greeting-header">
					<p className="home-user-link">Click Me To Get Started!</p>
				</div>
			</Link>
			<Route path="/user" component={CreateUser} />
        </div>
    )
}

export default Home;