import { useContext } from "react";
import TasksContext from "./TaskContext";

const useTasks = () => useContext(TasksContext);
export default useTasks;
