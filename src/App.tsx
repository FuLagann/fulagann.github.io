
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/main-page";
import { Component } from 'react';

interface IProps {}
interface IState {
	theme : string;
}

export default class App extends Component<IProps, IState> {
	constructor(props : {} | Readonly<{}>) {
		super(props);
		
		const media : boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;
		
		this.state = {
			theme: media ? "dark" : "light"
		};
		
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (ev) =>{
			this.setState({
				theme: (ev.currentTarget as MediaQueryList).matches ? "dark" : "light"
			})
		});
	}
	
	render() {
		return (
			<BrowserRouter>
				<div className={this.state.theme}>
					<Routes>
						<Route path="/" element={<MainPage/>}/>
						<Route path="/portfolio" element={<MainPage/>}/>
						<Route path="/about" element={<MainPage/>}/>
						<Route path="/blog" element={<MainPage/>}/>
					</Routes>
				</div>
			</BrowserRouter>
		);
	}
}
