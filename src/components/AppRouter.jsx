import React, { useContext } from "react";
import About from 'D:/works/top/react-fund-course/src/pages/About.jsx'
import Posts from 'D:/works/top/react-fund-course/src/pages/Posts.jsx'
import Error from 'D:/works/top/react-fund-course/src/pages/Error.jsx'
import { BrowserRouter, Route, Routes, Switch, Navigate } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import { priveteRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter =()=>{
    const {isAuth,isLoading} = useContext(AuthContext)

    if(isLoading){
        return <Loader/>
    }
    return(
        isAuth ?

        <Routes>
        {priveteRoutes.map(route =>
            <Route
                    element={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
            />)}

        <Route path="*" element={<Navigate to="/posts"/>} />
    </Routes>
                :
        <Routes>
        {publicRoutes.map(route =>
            <Route
                    element={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
            />)}

        <Route path="*" element={<Navigate to="/login"/>} />
        </Routes>
    );
}
export default AppRouter;