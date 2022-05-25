import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const appReducer = () => combineReducers({

})

const store = createStore(
	appReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware)) // (!) Only needed in 'development'
)

const { dispatch } = store;


//// EXPORT
type RootReducerType = ReturnType<typeof appReducer>
type AppDispatch = typeof store.dispatch

export default store
export {
	dispatch,
	//
	RootReducerType,
	AppDispatch
};
