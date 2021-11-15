
import "./main-page.scss";
import { Component } from "react";
import MainHeader from "../../components/main-header/main-header";
import MainFooter from "../../components/main-footer/main-footer";
import QuickLinks from "../../components/quick-links/quick-links";
import GithubInfo from "../../components/github-info/github-info";
import QuickProjectView from "../../components/quick-project-view/quick-project-view";
import QuickBio from "../../components/quick-bio/quick-bio";

export default class MainPage extends Component {
	render() {
		return (
			<div className="main-page dark-theme">
				<MainHeader/>
				<div className="container">
					{/* <div className="row full-page-row">
						<div className="col-4 col-t-4">
							<GithubInfo/>
							<QuickLinks/>
						</div>
						<div className="col-8 col-t-8">
							<QuickProjectView/>
							<QuickBio/>
						</div>
					</div> */}
				</div>
				<MainFooter/>
			</div>
		);
	}
}
