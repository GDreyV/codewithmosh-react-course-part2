import LoginStatus from './auth/LoginStatus';
import useCounterStore from './counter/store';
import { useTasks } from './tasks';

const NavBar = () => {
  const { counter } = useCounterStore();
  const { tasks } = useTasks();
  return (
    <nav className="navbar d-flex justify-content-between">
      <div>
        <span className="badge text-bg-secondary me-1">{ tasks.length }</span>
        <span className="badge text-bg-secondary">{ counter }</span>
      </div>
      
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
