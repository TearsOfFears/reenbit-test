import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />
		},
		{
			path: "details/:characterId",
			element: <Details />,
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
