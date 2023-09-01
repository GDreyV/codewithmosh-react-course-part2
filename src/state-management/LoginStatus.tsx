import { useReducer, useState } from "react";
import userReducer from "./reducers/authReducer";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(userReducer, "");

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
