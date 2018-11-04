import './main.css'

import React from 'react'
import ReacDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, browserHistory} from 'react-router'
import { Provider } from 'react-redux'

import reducers from './reducers'
import Layout from './containers/Layout'
import Phones from './containers/Phones'

console.log(`Layout ${Layout}`)
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
console.log(`store ${store}`)
console.log(`browserHistory ${browserHistory}`)


const history = syncHistoryWithStore(browserHistory, store)
console.log(`Phones ${JSON.stringify(Phones)}`)
 
ReacDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Phones} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)