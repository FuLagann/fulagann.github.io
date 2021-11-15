
import "./main-header.scss";
import { Component } from "react";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";

export default class MainHeader extends Component {
	render() {
		return (
			<header className="main-header">
				<div className="banner" role="banner">
					<Link to="/" className="remove-link-decoration">
						Paul's Developer Portfolio
					</Link>
				</div>
				<Navbar/>
			</header>
		);
	}
}
