export const CourseForm = () => {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="title">Title</label>
				<div className="field">
					<input id="title" type="text" name="title" className="form-control" value="" />
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="author">Author</label>
				<div className="field">
					<select id="author" name="authorId" value="" className="form-control">
						<option value="" />
						<option value="1">Jamshid</option>
						<option value="2">Jafar</option>
					</select>
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="category">Category</label>
				<div className="field">
					<input type="text" id="category" name="category" className="form-control" value="" />
				</div>
			</div>

			<input type="submit" value="Save" className="btn btn-primary" />
		</form>
	);
};
