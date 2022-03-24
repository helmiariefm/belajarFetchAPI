import React, { Component } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

class BlogList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		fetch(`http://www.omdbapi.com/?apikey=bab772c5&s=avengers`)
			.then((response) => response.json())
			.then((data) => this.setState({ data: data }));
	}

	render() {
		const { data } = this.state;

		return (
			<div className="p-7 grid md:grid-cols-4 md:gap-11 dark:bg-gray-800 dark:text-white">
				{!data && (
					<div className="flex space-x-3 items-center justify-center p-10">
						<AiOutlineLoading3Quarters className="animate-spin" />
						<span>Loading...</span>
					</div>
				)}
				{data &&
					data.Search.map((value) => (
						<div className="mb-6 rounded p-6">
							<img alt="gambar" src={value.Poster} className="rounded-t-lg"/>
							<div className="bg-sky-200 dark:bg-gray-900 rounded-b-lg">
							<Link
								className="text-lg font-bold inline-block ml-3"
								to={`/blog/${value.imdbID}`}
							>
								<h1>{value.Title}</h1>
							</Link>
							<p className="ml-3 pb-2">{value.Year}</p>
							</div>
						</div>
					))}
			</div>
		);
	}
}

export default BlogList;
