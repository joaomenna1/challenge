import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/sign-up";
import { Urls } from "./pages/app/urls/urls";
import { Dashboard } from "./pages/app/Dashboard/dashboard";

export const router = createBrowserRouter([
   {
        path: '/',
        element: <AppLayout />,
        children: [
          { path: '/', element: <Dashboard />},
          { path: '/urls', element: <Urls />},
          ],
   },
   { 
        path: '/', 
        element: <AuthLayout/>,
        children: [
          { path: '/sign-in', element: <SignIn/>},
          { path: '/sign-up', element: <SignUp/>}
          ],
    },
])

   