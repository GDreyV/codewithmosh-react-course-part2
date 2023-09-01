import { ReactNode, useReducer } from 'react'
import AuthContext from './authContext';

interface ILoginAction {
    type: "LOGIN";
    user: string;
}

interface ILogoutAction {
    type: "LOGOUT";
}

export type AuthAction = ILoginAction | ILogoutAction;

function authReducer(state: string, action: AuthAction): string {
    switch (action.type) {
        case "LOGIN": return action.user;
        case "LOGOUT":return "";
    }

    return state;
}

interface IProps {
    children: ReactNode
}

const AuthProvider = ({ children }: IProps) => {
    const [user, dispatch] = useReducer(authReducer, "");
    return (
        <AuthContext.Provider value={{ user, dispatch }}>{ children }</AuthContext.Provider>
    )
}

export default AuthProvider
