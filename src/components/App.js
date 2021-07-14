import { Route } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { Header } from "./common/Header";
import { CoursePage } from "./CoursePage";
import { HomePage } from "./HomePage";

export const App = () => {
	const route = window.location.pathname;

	return (
		<main className="container-fluid">
			<Header />
			<Route path="/" component={HomePage} />
			<Route path="/about" component={AboutPage} />
			<Route path="/courses" component={CoursePage} />
		</main>
	);
};
