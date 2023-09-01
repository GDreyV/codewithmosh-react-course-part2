interface ILoginAction {
    type: "LOGIN";
    user: string;
}

interface ILogoutAction {
    type: "LOGOUT";
}

export type AuthAction = ILoginAction | ILogoutAction;

export default function userReducer(state: string, action: AuthAction): string {
    switch (action.type) {
        case "LOGIN": return action.user;
        case "LOGOUT":return "";
    }

    return state;
}
