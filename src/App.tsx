import './App.css';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import AuthProvider from './state-management/AuthProvider';
import HomePage from './state-management/HomePage';
import LoginStatus from './state-management/LoginStatus';
import NavBar from './state-management/NavBar';
import TasksProvider from './state-management/TasksProvider';

function App() {
  return (
    <>
      <TasksProvider>
        <AuthProvider>
          <NavBar />
          <HomePage />
        </AuthProvider>
      </TasksProvider>


      <LoginStatus />

      <hr/>
      <TodoForm />
      <TodoList />
    </>

  );
}

export default App;
