
export interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
    }

export default class TodoClient {
    async getAll(): Promise<Todo[]> {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        return this.handleRequest<Todo[]>(response);
    }

    async add(todo: Todo): Promise<Todo> {
        const options: RequestInit = {
            method: "POST",
            body: JSON.stringify(todo),
            headers: { "Content-Type": "application/json" }
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", options);
        return this.handleRequest<Todo>(response);
    }

    private async handleRequest<T>(response: Response) {
        if (response.status >= 400) {
            throw new Error(response.statusText || `Request failed with code ${response.status}`);
        }

        return await response.json() as T;
    }
}