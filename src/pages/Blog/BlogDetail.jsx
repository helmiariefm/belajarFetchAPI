import React, { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
	const params = useParams();

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?apikey=bab772c5/${params.imdbID}`)
			.then((response) => response.json())
			.then((data) => setData(data));
	}, [params]);

	return (
		<div style={{ padding: "80px" }}>
			{!data && (
				<div style={{ display: "flex", flexDirection: "column" }}>
					<AiOutlineLoading3Quarters />
					<span>Loading...</span>
				</div>
			)}
			{data && (
				<div key={data.imdbID}>
					<h1>{data.Title}</h1>
					<p>{data.Plot}</p>
				</div>
			)}
		</div>
	);
};

export default BlogDetail;
