import {Route, Routes} from "react-router-dom";
import HomePage from "../../pages/home-page.tsx";
import RegisterForm from "../../features/register-form/RegistrationForm.tsx";
import LoginForm from "../../features/login-form/LoginForm.tsx";
import ErrorPage from "../../pages/error-page.tsx";




const pagesData = [
    {
        path: "",
        title: "home",
        element: <HomePage/>,

    },
    {
        path: "/register",
        title: "Registration",
        element: <RegisterForm/>
    },
    {
        path: "/login",
        title: "Login",
        element: <LoginForm/>
    },
    {
        path: "*",
        element: <ErrorPage/>,
        title: "error"
    },
];

const AppRouter = () => {
    const pageRoutes = pagesData.map(({path, title, element}) => {
        return (
            <Route key={title} path={`/${path}`} element={element}/>
        )
    });

    return <Routes> {pageRoutes} </Routes>
};
export default AppRouter;