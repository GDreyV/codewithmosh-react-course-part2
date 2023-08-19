import { useState } from "react";
import usePosts from "./hooks/usePosts";
import usePostsInfinite from "./hooks/usePostsInifinite";
import React from "react";

const pageSize = 10;

const PostList = () => {
  const [ userId, setUserId ] = useState<number>();
	const { posts, error, isLoading, fetchNextPage, isFetchingNextPage } = usePostsInfinite({
    userId,
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
				{posts?.pages.map((page, ix) => <React.Fragment key={ix}>
          {page.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>))}
        </React.Fragment> 
        )}
			</ul>
      <div className="my-2">
        <button className="btn btn-secondary"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? <>Loading&hellip;</> : "Load more" }
          </button>
      </div>
		</>
	);
};

export default PostList;
