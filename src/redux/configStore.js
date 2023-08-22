import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import layoutSlice from './ducks/layoutSlice'
import { watcherSaga } from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  layout: layoutSlice,
})

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
})

sagaMiddleware.run(watcherSaga)

export default store
