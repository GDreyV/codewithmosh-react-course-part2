import './App.css';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import AuthProvider from './state-management/auth/AuthProvider';
import Counter from './state-management/counter/Counter';
import HomePage from './state-management/HomePage';
import LoginStatus from './state-management/auth/LoginStatus';
import NavBar from './state-management/NavBar';
import {TasksProvider} from './state-management/tasks';

function App() {
  return (
    <>
      <TasksProvider>
        <AuthProvider>
          <Counter />
          <NavBar />
          <HomePage />
        </AuthProvider>
      </TasksProvider>

      <hr/>
      <LoginStatus />

      <hr/>
      <TodoForm />
      <TodoList />
    </>

  );
}

export default App;
