import { Dispatch } from 'react';
import { ActionCreator, Action } from 'redux'
import { batch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { ActionP, RootReducerType } from '../index';
import { SetMainData, SetErrorData, SetAuthData, setDialogOpened, SetAdditionalData } from './actions';

import { action_types } from './reducer';
import { AuthData } from './types';
import { combineLocal, removeLocal } from '../../../helpers/localStorage';
import { additionalData, MainData } from './data';

type GetState = () => RootReducerType

export function getInitData(data: AuthData) {
	return async (dispatch: Dispatch<action_types>) => { //getState: GetState
		try {
			const main = MainData, additional = additionalData

			batch(() => {
				dispatch(SetMainData(main))
				dispatch(SetAdditionalData(additional))
				dispatch(SetAuthData(data))
				dispatch(setDialogOpened(false))
			})

			combineLocal({ auth: data, main, additional })
		} catch (err) {
			dispatch(SetErrorData(err))
		}
	}
}

export function logOut() {
	return async (dispatch: Dispatch<action_types>) => {
		dispatch(SetAuthData(null))
		removeLocal()
	}
}


export const a = ''
