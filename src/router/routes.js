import About from 'D:/works/top/react-fund-course/src/pages/About'
import Posts from 'D:/works/top/react-fund-course/src/pages/Posts'
import PostIdPage from 'D:/works/top/react-fund-course/src/pages/PostIdPage'
import Login from '../pages/Login'
export const priveteRoutes =[
    {path: '/about', component: <About/>, exact: true },
    {path: '/posts', component: <Posts/>, exact: true },
    {path: '/posts/:id', component: <PostIdPage/>, exact: true },
]
export const publicRoutes =[
    {path: '/login', component: <Login/>, exact: true },
] 