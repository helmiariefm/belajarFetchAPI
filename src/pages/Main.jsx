import React, { Component } from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import { Routes, Route, Link } from "react-router-dom";
import BlogList from "./Blog/BlogList";
import "../App.css";

export default class Main extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header dark:bg-gray-800 dark:text-white text-gray-800">
					<h1 className="flex">Welcome To Avengers Movies Database 
						<Link to="/blog">
							<AiOutlineArrowRight className="ml-1 mt-1 bg-green-300 text-green-900"/>
						</Link>
					</h1>
				</header>
				<Routes>
					<Route path="/blog" element={<BlogList />} />					
				</Routes>
			</div>
		);
	}
}
