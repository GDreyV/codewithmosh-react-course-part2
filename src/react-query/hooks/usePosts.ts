import { useQuery } from "@tanstack/react-query";

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

export default function usePosts() {
    const fetchPosts = () => fetch("https://jsonplaceholder.typicode.com/posts")
        .then<Post[]>(response => response.json());

    const { data: posts, error, isLoading } = useQuery<Post[], Error>({
        queryKey: ["posts"],
        queryFn: fetchPosts
    })

    return { posts, error, isLoading };
}