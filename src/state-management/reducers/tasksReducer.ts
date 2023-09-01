export interface ITask {
    id: number;
    title: string;
}

export type TaskAction = IAddTaskAction | IDeleteTaskAction;

interface IAddTaskAction {
    type: "ADD";
    task: ITask;
}

interface IDeleteTaskAction {
    type: "DELETE";
    task: ITask;

}

const tasksReducer = (state: ITask[], action: TaskAction): ITask[] => {
    switch (action.type) {
        case "ADD":
            return [...state, action.task];
        case "DELETE":
            return state.filter(t => t !== action.task)
    }
    return state;
}

export default tasksReducer;
