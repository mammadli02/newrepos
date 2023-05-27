import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import MainRoot from "../pages/MainRoot";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

export const ROUTER=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            // {
            //     path:'/',
            //     element:<cards/>
            // },
            {
                path:'/cards',
                element:<Home/>

            },
            {
                path:'/add',
                element:<Add/>
            },
            {
                path:'/cards/edit/:id',
                element:<Edit/>
            }, {
                path:'/cards/:id',
                element:<Detail/>
            },{
                path:'*',
                element:<NotFound/>
            }
        ]
    }
]