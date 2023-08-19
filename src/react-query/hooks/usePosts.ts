import { useQuery } from "@tanstack/react-query";

export interface Post {
id: number;
title: string;
body: string;
userId: number;
}

export interface IQuery {
    page: number;
    pageSize: number;
    userId?: number
}

export default function usePosts(query: IQuery) {
    const queryParam = new URLSearchParams();
    queryParam.append("_start", ((query.page - 1) * query.pageSize).toString());
    queryParam.append("_limit", query.pageSize.toString());
    if (query.userId) {
        queryParam.append("userId", query.userId.toString());
    }
    const fetchPosts = () => fetch(`https://jsonplaceholder.typicode.com/posts?${queryParam.toString()}`)
        .then<Post[]>(response => response.json());

    const { data: posts, error, isLoading } = useQuery<Post[], Error>({
        queryKey: [ "posts", query ],
        queryFn: fetchPosts,
        keepPreviousData: true
    })

    return { posts, error, isLoading };
}