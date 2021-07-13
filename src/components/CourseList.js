export const CourseList = ({ courses }) => {
	return (
		<table className="table table-hover">
			<thead>
				<tr>
					<th>Title</th>
					<th>Category</th>
					<th>Slug</th>
				</tr>
			</thead>
			<tbody>
				{courses.map(({ id, title, slug, category }) => (
					<tr key={id}>
						<td>{title}</td>
						<td>{category}</td>
						<td>{slug}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
