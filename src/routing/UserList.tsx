import { Link, Outlet, useParams } from "react-router-dom";

const UserList = () => {
  const params = useParams();
  const users = [
    { id: 1, name: 'Mosh' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Alice' },
  ];
  const currentUser = params.id ? parseInt(params.id) : void 0;

  return (
    <>
      <ul className="list-group">
        {users.map((user) => (
          <li className={`list-group-item ${user.id === currentUser && "active"}`} key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
