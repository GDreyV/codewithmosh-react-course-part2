import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import TodoClient, { Todo } from "../services/todoClient";

interface IAddTodoContext {
    previous: Todo[];
  }

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    const client = new TodoClient();
    
    return useMutation<Todo, Error, Todo, IAddTodoContext>({
      mutationFn: (todo: Todo) => client.add(todo),
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