import { Dispatch, createContext } from "react";
import { ITask, TaskAction } from "./TasksProvider";

interface TasksContextType {
    tasks: ITask[];
    dispatch: Dispatch<TaskAction>;
}

const TasksContext = createContext<TasksContextType>({} as TasksContextType);
export default TasksContext;
