import { ReactNode, useReducer } from 'react'
import tasksReducer from './reducers/tasksReducer';
import TasksContext from './contexts/taskContext';

interface IProps {
    children: ReactNode;
}

const TasksProvider = ({ children }: IProps) => {
    const [ tasks, dispatch ] = useReducer(tasksReducer, []);
    return (
        <TasksContext.Provider value={{tasks, dispatch: dispatch}}>{children}</TasksContext.Provider>
    )
}

export default TasksProvider;
