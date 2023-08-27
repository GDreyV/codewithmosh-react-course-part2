import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import TodoClient, { Todo } from "../services/todoClient";

const useTodos = () => {
    const client = new TodoClient();

    const { data: todos, error, isLoading } = useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: () => client.getAll(),
        staleTime: 10_000, // 10 secs
    })

    return { todos, error, isLoading };
}

export default useTodos;