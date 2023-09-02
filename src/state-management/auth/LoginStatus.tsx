import useAuthStore from "./store";


const LoginStatus = () => {
  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <button className="btn btn-outline-secondary" onClick={() => logout()}>Logout</button>
        </div>
      </>
    );
  return (
    <div>
      <button className="btn btn-primary" onClick={() => login("andrew")}>Login</button>
    </div>
  );
};

export default LoginStatus;
