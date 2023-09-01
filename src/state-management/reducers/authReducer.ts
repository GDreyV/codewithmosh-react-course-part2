interface ILoginAction {
    type: "LOGIN";
    user: string;
}

interface ILogoutAction {
    type: "LOGOUT";
}

type Action = ILoginAction | ILogoutAction;

export default function userReducer(state: string, action: Action): string {
    switch (action.type) {
        case "LOGIN": return action.user;
        case "LOGOUT":return "";
    }

    return state;
}
