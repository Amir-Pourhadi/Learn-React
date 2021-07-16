import { Redirect, Route, Switch } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { Header } from "./common/Header";
import { CoursePage } from "./CoursePage";
import { HomePage } from "./HomePage";
import { ManageCoursePage } from "./ManageCoursePage";
import { PageNotFound } from "./PageNotFound";

export const App = () => {
	return (
		<main className="container-fluid">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/courses" component={CoursePage} />
				<Route path="/course/:slug" component={ManageCoursePage} />
				<Route path="/course" component={ManageCoursePage} />
				<Redirect from="/myCourses" to="/courses" />
				<Route component={PageNotFound} />
			</Switch>
		</main>
	);
};
