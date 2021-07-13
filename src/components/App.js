import { AboutPage } from "./AboutPage";
import { Header } from "./common/Header";
import { HomePage } from "./HomePage";

export const App = () => {
	const route = window.location.pathname;

	return (
		<>
			<Header />
			{route === "/about" ? <AboutPage /> : <HomePage />}
		</>
	);
};
