import { Redirect, Route, Switch } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { Header } from "./common/Header";
import { CoursePage } from "./CoursePage";
import { HomePage } from "./HomePage";
import { PageNotFound } from "./PageNotFound";

export const App = () => {
	return (
		<main className="container-fluid">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/courses" component={CoursePage} />
				<Redirect from="/myCourses" to="/courses" />
				<Route component={PageNotFound} />
			</Switch>
		</main>
	);
};
