import { AboutPage } from "./AboutPage";
import { Header } from "./common/Header";
import { CoursePage } from "./CoursePage";
import { HomePage } from "./HomePage";

export const App = () => {
	const route = window.location.pathname;

	return (
		<main className="container-fluid">
			<Header />
			{route === "/about" ? <AboutPage /> : route === "/courses" ? <CoursePage /> : <HomePage />}
		</main>
	);
};