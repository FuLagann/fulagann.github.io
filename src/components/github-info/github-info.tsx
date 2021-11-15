
import "./github-info.scss";
import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {}
interface IState {
	languages : { [ name : string ] : number };
	totalBytes : number;
}

interface RepoRes {
	visibility : string;
	private : boolean;
	size : string;
	name : string;
}
interface LangRes {
	[ key : string] : number;
}

export default class GithubInfo extends Component<IProps, IState> {
	constructor(props : any) {
		super(props);
		
		this.state = {
			languages: {},
			totalBytes: 0
		};
	}
	
	componentDidMount() {
		fetch("https://api.github.com/users/FuLagann/repos").then(async (repoRes : any) => {
			const repos : RepoRes[] = await repoRes.json();
			let languages : { [ name : string ] : number } = {};
			let total : number = 0;
			let langRes : Response;
			
			for(let i = 0; i < repos.length; ++i) {
				if(repos[i].private == true || repos[i].visibility != "public") {
					continue;
				}
				
				langRes = await fetch(`https://api.github.com/repos/FuLagann/${repos[i].name}/languages`);
				const lang : LangRes = await langRes.json();
				
				for(let langStr in lang) {
					if(!(langStr in languages)) {
						languages[langStr] = lang[langStr];
					}
					else {
						languages[langStr] += lang[langStr];
					}
					total += lang[langStr];
				}
			}
			
			this.setState({
				languages: languages,
				totalBytes: total
			});
		});
	}
	
	mapLang() : { name : string, bytes : number }[] {
		let map : { name : string, bytes : number }[] = [];
		
		for(let lang in this.state.languages) {
			map.push({ name: lang, bytes: this.state.languages[lang] });
		}
		
		map.sort((a : { name : string, bytes : number }, b : { name : string, bytes : number }) => {
			const aPerc : number = a.bytes / this.state.totalBytes;
			const bPerc : number = b.bytes / this.state.totalBytes;
			
			return bPerc - aPerc;
		})
		
		return map;
	}
	
	render() {
		return (
			<div className="github-info">
				<img src="https://avatars.githubusercontent.com/u/37953532?s=400&u=5ddb324f7d13b0fecbde5dc7d54d235c364e1d40&v=4" className="profile-image"/>
				<p className="name-and-handle">
					<a href="https://github.com/FuLagann">
						Paul G.B.
						<span className="handle">@FuLagann</span>
					</a>
				</p>
				<ul className="languages">
					{this.mapLang().map((val : { name : string, bytes : number }) => {
						const perc : number = Number(
							(100.0 * Math.max(0.0, Math.min(1.0, val.bytes / this.state.totalBytes))).toFixed(2)
						);
						
						return (
							<li className="lang">
								{val.name}
								<span className="handle">({perc}%)</span>
							</li>
						);
					})}
				</ul>
				<div className="clear-both"></div>
			</div>
		);
	}
}
