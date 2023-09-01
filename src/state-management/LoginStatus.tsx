import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  const {user, dispatch} = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <button className="btn btn-outline-secondary" onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </div>
      </>
    );
  return (
    <div>
      <button className="btn btn-primary" onClick={() => dispatch({ type: "LOGIN", user: "andrew" })}>Login</button>
    </div>
  );
};

export default LoginStatus;
