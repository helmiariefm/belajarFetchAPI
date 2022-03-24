import { useState } from "react";
import Main from "./pages/Main";
import { Routes, Route, Link } from "react-router-dom";
import SecondPage from "./pages/SecondPage";
import BlogList from "./pages/Blog/BlogList";
import BlogDetail from "./pages/Blog/BlogDetail";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={darkMode && "dark"}>
			<div className="bg-gray-800 dark:bg-primary-600 text-white px-8 space-x-8 p-4">
				<Link to="/">Home</Link>
				<Link to="/blog">Blog</Link>				
				<button
					className=" bg-gray-800 text-white dark:bg-primary-600 dark:text-white rounded"
					onClick={handleDarkMode}
				>
					{darkMode ? "Light" : "Dark"} Mode
				</button>
				
			</div>

			<Routes>
				<Route path="/second" element={<SecondPage />} />
				<Route path="/blog/:mal_id" element={<BlogDetail />} />
				<Route path="/blog" element={<BlogList />} />
				<Route path="/" element={<Main />} />
			</Routes>


		</div>
	);
}

export default App;
