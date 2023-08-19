import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
id: number;
title: string;
userId: number;
completed: boolean;
}

const useTodos = () => {
    const fetchTodos = () => axios
    .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.data)

    const { data: todos, error, isLoading } = useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        staleTime: 10_000, // 10 secs
    })

    return { todos, error, isLoading };
}

export default useTodos;