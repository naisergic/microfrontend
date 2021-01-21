import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import HomeV2 from './containers/HomeV2/HomeV2'
const routes = (
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/v2' exact component={HomeV2}/>
    </Switch>
)

export default routes