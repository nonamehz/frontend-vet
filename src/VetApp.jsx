import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';

import { Home } from './pages/home/Home';


export const VetApp = () => {

    const currentUser = false;

    const Layout = () => {
        return (
            <div>HOME</div>
        );
    }

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />
        }

        return children;
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: '/',
                    element: <Home />
                }
            ]
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/register',
            element: <Register />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )

}