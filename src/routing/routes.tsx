import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { 
                path: "users",
                element: <UsersPage />,
                children: [
                    { path: ":id", element: <UserDetail /> }
                ]
             },
            
            { path: "contact", element: <ContactPage /> }
        ]
    }
    
]);

export default router;