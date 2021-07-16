import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";
import { CourseList } from "./CourseList";

export const CoursePage = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		getCourses().then((_courses) => setCourses(_courses));
	}, []);

	return (
		<main>
			<div className="bg-secondary w-25 p-3 m-3 rounded-pill text-center mx-auto">
				<h1>Course Page</h1>
			</div>
			<Link to="/course" className="btn btn-primary rounded-3">
				Add a Course
			</Link>
			<CourseList courses={courses} />
		</main>
	);
};
