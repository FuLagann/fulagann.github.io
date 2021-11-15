
import "./navbar.scss";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<nav className="main-nav">
				<ul className="nav-list">
					<li><Link to="/" className="active">Home</Link></li>
					<li><Link to="/portfolio">Portfolio</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/blog">Blog</Link></li>
				</ul>
			</nav>
		);
	}
}
