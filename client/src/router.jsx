import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import AddEdit from './pages/AddEdit'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar/>,
        loader: ()=> {
            if (!localStorage.access_token) {
                // return redirect('/login')
            }
            return null
        },
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'add-activity',
                element: <AddEdit/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>,
        loader: ()=> {
            if(localStorage.access_token){
                return redirect('/')
            }
            return null
        }
    },
    {
        path: '/register',
        element: <Register/>
    }
])

export default router