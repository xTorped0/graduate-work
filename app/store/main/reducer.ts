import { Constants } from './constants';
import * as actions from './actions'
import { AuthData, MainData } from './types';

export type InterValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type action_types = ReturnType<InterValueTypes<typeof actions>>

interface State {
	isDialogOpen: boolean;
	auth?: AuthData;
	main?: MainData;
	error?: Error;
}

const initialState: State = {
	isDialogOpen: false
}

export default function reducer(state = initialState, action: action_types): State {
	switch (action.type) {
		case Constants.SET_DIALOG_OPENED:
			return { ...state, isDialogOpen: action.payload }
		case Constants.SET_AUTH_DATA:
			return { ...state, auth: action.payload }
		case Constants.SET_MAIN_DATA:
			return { ...state, main: action.payload }
		case Constants.SET_ERROR:
			return { ...state, error: action.payload }

		default: return state
	}
}
