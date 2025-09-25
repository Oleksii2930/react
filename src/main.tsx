import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import APage from "./pages/APage.tsx"
import BPage from "./pages/BPage.tsx"
import HomePage from "./pages/HomePage.tsx"

const router = createBrowserRouter([
    {
        path:'/', element:<MainLayout/>,
        children:[
            {path:'a', element:<APage/>},
            {path:'b', element:<BPage/>},
            {path:'', element:<HomePage/>}
        ]
    },

    // {path:'/a', element:<div>loyout a</div>},
    // {path:'/b', element:<div>loyout b</div>},
])

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={router}/>);
