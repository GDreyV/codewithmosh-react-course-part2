import { useInfiniteQuery } from "@tanstack/react-query";

export interface Post {
id: number;
title: string;
body: string;
userId: number;
}

export interface IQuery {
    pageSize: number;
    userId?: number
}

export default function usePostsInfinite(query: IQuery) {
    
    const fetchPosts = ({ pageParam = 1 }) => {
        const queryParam = new URLSearchParams();
        queryParam.append("_start", ((pageParam - 1) * query.pageSize).toString());
        queryParam.append("_limit", query.pageSize.toString());
        if (query.userId) {
            queryParam.append("userId", query.userId.toString());
        }
        return fetch(`https://jsonplaceholder.typicode.com/posts?${queryParam.toString()}`)
            .then<Post[]>(response => response.json());
    }

    const { data: posts, error, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<Post[], Error>({
        queryKey: [ "posts", query ],
        queryFn: fetchPosts,
        keepPreviousData: true,
        getNextPageParam: (last, all) => {
            return last.length > 0 ? all.length + 1 : void 0;
        }
    })

    return { posts, error, isLoading, fetchNextPage, isFetchingNextPage };
}