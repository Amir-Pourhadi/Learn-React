import { useState } from "react";
import { CourseForm } from "./CourseForm";
export const ManageCoursePage = () => {
	const [course, setCourse] = useState({ id: null, slug: "", title: "", authorId: "", category: "" });

	const handleChange = ({ target: { name, value } }) => {
		const updatedCourse = { ...course, [name]: value };
		setCourse(updatedCourse);
	};

	return (
		<>
			<div className="bg-secondary w-25 p-3 m-3 rounded-pill text-center mx-auto">
				<h1>Manage Course</h1>
			</div>
			<CourseForm course={course} handleChange={handleChange} />
		</>
	);
};
