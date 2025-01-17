import { Dispatch } from "react";

import React from "react";
import { AuthAction } from "./AuthProvider";

interface TasksContextType {
    user: string;
    dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<TasksContextType>({} as TasksContextType);
export default AuthContext;
