
import "./github-info.scss";
import { Component } from "react";

export default class GithubInfo extends Component {
	render() {
		return (
			<div className="card github-info">
				<h1 className="card-title">Github Information</h1>
				<p className="image-right">
					Lorem ipsum
				</p>
				<img src="https://avatars.githubusercontent.com/u/37953532?s=400&u=5ddb324f7d13b0fecbde5dc7d54d235c364e1d40&v=4" className="profile-image"/>
			</div>
		);
	}
}
