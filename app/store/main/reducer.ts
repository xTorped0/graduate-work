import { Constants } from './constants';
import * as actions from './actions'
import { AuthData, MainData, AdditionalData } from './types';
import { getLocal } from '../../../helpers/localStorage';

export type InterValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type action_types = ReturnType<InterValueTypes<typeof actions>>

interface State {
	isDialogOpen: boolean;
	auth?: AuthData;
	main?: MainData;
	additional?: AdditionalData;
	error?: Error;
}

const localData = getLocal()

const initialState: State = {
	isDialogOpen: false,
	auth: localData.auth,
	main: localData.main,
	additional: localData.additional
}

export default function reducer(state = initialState, action: action_types): State {
	switch (action.type) {
		case Constants.SET_DIALOG_OPENED:
			return { ...state, isDialogOpen: action.payload }
		case Constants.SET_AUTH_DATA:
			return { ...state, auth: action.payload }
		case Constants.SET_MAIN_DATA:
			return { ...state, main: action.payload }
		case Constants.SET_ADDITIONAL_DATA:
			return { ...state, additional: action.payload }
		case Constants.SET_ERROR:
			return { ...state, error: action.payload }

		default: return state
	}
}
