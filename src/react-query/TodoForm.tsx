import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { Todo } from './hooks/useTodos';
import axios from 'axios';

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
      .then(res => res.data),
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(
        ["todos"],
        todos => [savedTodo, ...(todos || [])]);
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

  return (
    <form className="row mb-3" onSubmit={submitHandler}>
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
