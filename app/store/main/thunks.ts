import { Dispatch } from 'react';
import { ActionCreator, Action } from 'redux'
import { batch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

import { ActionP, RootReducerType } from '../index';
import { SetMainData, SetErrorData, SetAuthData, setDialogOpened, SetAdditionalData } from './actions';

import { action_types } from './reducer';
import { AuthData, MainData } from './types';

import { combineLocal, removeLocal } from '../../../helpers/localStorage';
// import { additionalData, MainData } from './data';

import config from '../../../config.json';

type GetState = () => RootReducerType

export function setNumber(number: string) {
	return async (dispatch: Dispatch<action_types>) => {
		try {
			await fetch(`${config.api_url}/tradeon-portfolio/external/auth`, {
				method: 'POST',
				// mode: 'no-cors',
				// cache: 'no-cache',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ phone: number })
			})
			dispatch(SetAuthData({ number }))
		} catch (err) {
			dispatch(SetErrorData(err))
		}
	}
}

export function getInitData(data: AuthData) {
	return async (dispatch: Dispatch<action_types>) => { //getState: GetState
		try {
			// const main = MainData, additional = additionalData

			const resp = await fetch(`${config.api_url}/tradeon-portfolio/external/portfolio/summary`, {
				method: 'GET',
				// mode: 'no-cors',
				cache: 'no-cache',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': data.token
				},
			})
			const main = await resp.json()

			const resp2 = await fetch(`${config.api_url}/tradeon-portfolio/external/portfolio/report`, {
				method: 'GET',
				// mode: 'no-cors',
				cache: 'no-cache',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': data.token
				},
			})
			const d = await resp2.json()
			const additional = { plainAccountInfoData: d.plainAccountInfoData, dividends: d.corporate_actions.detailed, tickers: d.account_at_end.account.positions_from_ts.ps.pos, history: d.trades.detailed }

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
