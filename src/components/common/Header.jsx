import { NavLink } from "react-router-dom";

export const Header = () => {
	const isActive = { color: "orange" };
	return (
		<nav>
			<NavLink exact to="/" activeStyle={isActive}>
				Home
			</NavLink>{" "}
			|{" "}
			<NavLink to="/courses" activeStyle={isActive}>
				Courses
			</NavLink>{" "}
			|{" "}
			<NavLink to="/about" activeStyle={isActive}>
				About Us
			</NavLink>
		</nav>
	);
};
