import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import timeReducer from '../reducers/timeReducer'
import rootSaga from '../sagas/saga'



const configureStore = () => {
const rootReducer = combineReducers({ timeReducer })

const sagaMiddleware = createSagaMiddleware()

const Store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware, createLogger({collapsed:true}))))
sagaMiddleware.run(rootSaga)

return Store
}


export default configureStore;