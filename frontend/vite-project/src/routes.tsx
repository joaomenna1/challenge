import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/sign-up";
import { Urls } from "./pages/app/urls/urls";
import { Dashboard } from "./pages/app/Dashboard/dashboard";
import { NotFound } from "./pages/404";

export const router = createBrowserRouter([
   {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFound/>,
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

   