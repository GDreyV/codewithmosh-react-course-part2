import { useQuery } from "@tanstack/react-query";

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

export default function usePosts(userId?: number) {
    const queryParam = new URLSearchParams();
    if (userId) {
        queryParam.append("userId", userId.toString());
    }
    const fetchPosts = () => fetch(`https://jsonplaceholder.typicode.com/posts?${queryParam.toString()}`)
        .then<Post[]>(response => response.json());

    const { data: posts, error, isLoading } = useQuery<Post[], Error>({
        queryKey: userId
            ? ["users", userId, "posts"]
            : [ "posts" ],
        queryFn: fetchPosts
    })

    return { posts, error, isLoading };
}