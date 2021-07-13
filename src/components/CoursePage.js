import { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";

export const CoursePage = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		getCourses().then((_courses) => setCourses(_courses));
	}, []);

	return (
		<main>
			<div className="bg-secondary w-25 p-3 m-3 rounded-pill text-center">
				<h1>Course Page</h1>
			</div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Title</th>
						<th>Category</th>
						<th>Slug</th>
					</tr>
				</thead>
				<tbody>
					{courses.map(({ id, title, slug, authorId, category }) => (
						<tr key={id}>
							<td>{title}</td>
							<td>{category}</td>
							<td>{slug}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
};
