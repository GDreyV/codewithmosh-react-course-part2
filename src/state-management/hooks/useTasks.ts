import { useContext } from "react";
import TasksContext from "../contexts/taskContext";

export default function useTasks() {
    return useContext(TasksContext);
}
