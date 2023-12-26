import { Route, Routes } from 'react-router-dom'

import  Home  from '../pages/Home/index.jsx'
import  Movies  from '../pages/Movies/index.jsx'
import  Series  from '../pages/Series/index.jsx'
import DefaultLayout from '../layout/DefaultLayout'

function Router () {
    return (
        <Routes>
            <Route element = { <DefaultLayout /> }>
                <Route path="/" element = { <Home /> }/>
                <Route path="/filmes" element = { <Movies /> }/>
                <Route path="/series" element = { <Series /> }/>
            </Route>    
        </Routes>
    )
}

export default Router