import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";

export const App = () => {
	const route = window.location.pathname;

	if (route === "/about") return <AboutPage />;
	else return <HomePage />;
};
