import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PriceHome from './containers/Price/Price'
import PriceHomeV2 from './containers/PriceV2/PriceV2'
const routes = (
    <Switch>
        <Route path='/' exact component={PriceHome}/>
        <Route path='/v2' exact component={PriceHomeV2}/>
    </Switch>
)

export default routes