import { useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";

const TodoForm = () => {
	const ref = useRef<HTMLInputElement>(null);

	const addTodo = useAddTodo(() => {
		if (ref.current) {
			ref.current.value = "";
		}
	});

	function submitHandler(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (ref.current?.value) {
			addTodo.mutateAsync({
				id: 0,
				title: ref.current.value,
				completed: false,
				userId: 1,
			});
		}
	}

	return (
		<>
			{addTodo.error && (
				<div className="alert alert-danger">
					{addTodo.error.message}
				</div>
			)}
			<form className="row mb-3" onSubmit={submitHandler}>
				<div className="col">
					<input ref={ref} type="text" className="form-control" />
				</div>
				<div className="col">
					<button
						disabled={addTodo.isLoading}
						className="btn btn-primary"
					>
						{addTodo.isLoading ? "Adding..." : "Add"}
					</button>
				</div>
			</form>
		</>
	);
};

export default TodoForm;
