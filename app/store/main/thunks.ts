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
import config from '../../../config';

type GetState = () => RootReducerType

export function setNumber(number: string) {
	return async (dispatch: Dispatch<action_types>) => {
		try {
			// await fetch(`${config.api_url}/tradeon-portfolio/external/auth`, {
			// 	method: 'POST',
			// 	mode: 'no-cors',
			// 	cache: 'no-cache',
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify({ phone: 'number' })
			// })
			dispatch(SetAuthData({ number }))
		} catch (err) {
			dispatch(SetErrorData(err))
		}
	}
}

export function getInitData(data: AuthData) {
	return async (dispatch: Dispatch<action_types>) => { //getState: GetState
		try {
			const main = MainData, additional = additionalData

			//	const mainD = await fetch(`${config.api_url}/tradeon-portfolio/external/portfolio/summary`, {
			// 	method: 'POST',
			// 	mode: 'no-cors',
			// 	cache: 'no-cache',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 		'Authorization': data.token
			// 	},
			// })

			//	const mainD = await fetch(`${config.api_url}/tradeon-portfolio/external/portfolio/additionalData`, {
			// 	method: 'POST',
			// 	mode: 'no-cors',
			// 	cache: 'no-cache',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 		'Authorization': data.token
			// 	},
			// })

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
