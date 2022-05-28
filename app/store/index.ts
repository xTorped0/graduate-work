import { createStore, applyMiddleware, combineReducers, Action } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import mainReducer from './main/reducer'

const appReducer = combineReducers({
	main: mainReducer
})

const store = createStore(
	appReducer,
	composeWithDevTools(applyMiddleware(thunkMiddleware)) // (!) Only needed in 'development'
)

const { dispatch } = store;


//// EXPORT
type RootReducerType = ReturnType<typeof appReducer>
type AppDispatch = typeof store.dispatch

export interface ActionP<A, P> extends Action<A> {
	readonly payload: P;
}

export function createActionP<T extends string, P>(type: T, payload: P): ActionP<T, P> {
	return { type, payload };
}

export default store
export {
	dispatch,
	//
	RootReducerType,
	AppDispatch
};
