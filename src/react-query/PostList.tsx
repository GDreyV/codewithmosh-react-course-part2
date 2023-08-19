import { useState } from "react";
import usePosts from "./hooks/usePosts";

const pageSize = 10;

const PostList = () => {
  const [ userId, setUserId ] = useState<number>();
  const [page, setPage] = useState(1);
	const { posts, error, isLoading } = usePosts({
    userId,
    page,
    pageSize
  });

	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>{error.message}</p>;

	return (
		<>
			<select className="form-select mb-3"
        onChange={(e) => setUserId(parseInt(e.target.value))}
        value={userId}>
        <option></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
			<ul className="list-group">
				{posts?.map((post) => (
					<li key={post.id} className="list-group-item">
						{post.title}
					</li>
				))}
			</ul>
      <div className="my-2">
        <button className="btn btn-secondary"
          disabled={page === 1}
          onClick={e => setPage(page - 1)}>Previous</button>
        <span className="mx-2">{ page }</span>
        <button className="btn btn-primary"
          onClick={e => setPage(page + 1)}>Next</button>
      </div>
		</>
	);
};

export default PostList;
