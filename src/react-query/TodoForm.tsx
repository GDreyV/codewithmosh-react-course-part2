import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from './hooks/useTodos';
import axios from 'axios';

interface IAddTodoContext {
  previous: Todo[];
}

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo, IAddTodoContext>({
    mutationFn: (todo: Todo) =>
      axios.post<Todo>("https://jsonplaceholder.typicode.com/todosx", todo)
      .then(res => res.data),
    onMutate: (newTodo) => {
      const state = queryClient.getQueryData<Todo[]>(["todos"]);
      queryClient.setQueryData<Todo[]>(
        ["todos"],
        todos => [newTodo, ...(todos || [])]);
      if (ref.current) { // reset form
        ref.current.value = "";
      }
      return { previous: state || [] };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(
        ["todos"],
        todos => todos?.map(t => t === newTodo ? savedTodo : t));
    },
    onError: (error, newTodo, context) => {
      if (context) {
        queryClient.setQueryData<Todo[]>(["todos"], context.previous);
      }
      
    }
  })

  const ref = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (ref.current?.value) {
      addTodo.mutateAsync({
        id: 0,
        title: ref.current.value,
        completed: false,
        userId: 1
      });
    }
  }

  return (<>
    { addTodo.error && <div className="alert alert-danger">{ addTodo.error.message }</div> }
    <form className="row mb-3" onSubmit={submitHandler}>
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button 
          disabled={addTodo.isLoading}
          className="btn btn-primary">{addTodo.isLoading ? "Adding..." : "Add"}</button>
      </div>
    </form>
    </>);
};

export default TodoForm;
