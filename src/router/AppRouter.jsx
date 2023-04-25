import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { Login } from "../auth/Login";
import { Dashboard } from "../pages/Dashboard";
import { Inicio } from "../pages/Inicio";
import { Chat } from "../pages/Chat";



export const Router = () => {  

    const router = createBrowserRouter([
        {
            path: "dashboard",
            element: <Dashboard />,
            children: [
                {
                    path: "inicio",
                    element: <Inicio />,
                },
                {
                    path: "chat",
                    element: <Chat />,
                },

            ]
        },
        {
            path: 'login',
            element: <Login />
        },
        {
            path: '/',
            element: <Navigate to="login" replace={true} />
            
        }
   
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}