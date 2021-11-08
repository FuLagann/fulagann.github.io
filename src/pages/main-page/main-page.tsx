
import "./main-page.scss";
import { Component } from "react";
import Navbar from "../../components/navbar/navbar";
import GithubInfo from "../../components/github-info/github-info";

export default class MainPage extends Component {
	render() {
		return (
			<div className="main-page">
				<Navbar/>
				<div className="container">
					<div className="row full-page-row">
						<div className="col-4 col-t-4">
							<GithubInfo/>
							Sidebar content
						</div>
						<div className="col-8 col-t-8">
							Main content
						</div>
					</div>
				</div>
			</div>
		);
	}
}
