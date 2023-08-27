import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";

interface IAddTodoContext {
    previous: Todo[];
  }

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, IAddTodoContext>({
      mutationFn: (todo: Todo) =>
        axios.post<Todo>("https://jsonplaceholder.typicode.com/todosx", todo)
        .then(res => res.data),
      onMutate: (newTodo) => {
        const state = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS);
        queryClient.setQueryData<Todo[]>(
          CACHE_KEY_TODOS,
          (todos = []) => [newTodo, ...todos]);

        onAdd();
        return { previous: state || [] };
      },
      onSuccess: (savedTodo, newTodo) => {
        queryClient.setQueryData<Todo[]>(
          CACHE_KEY_TODOS,
          todos => todos?.map(t => t === newTodo ? savedTodo : t));
      },
      onError: (error, newTodo, context) => {
        if (context) {
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previous);
        }
      }
    });
}

export default useAddTodo;