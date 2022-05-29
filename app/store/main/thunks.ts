import { Dispatch } from 'react';
import { ActionCreator, Action } from 'redux'
import { batch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { ActionP, RootReducerType } from '../index';
import { SetMainData, SetErrorData, SetAuthData, setDialogOpened } from './actions';

import { action_types } from './reducer';
import { AuthData } from './types';
import { combineLocal, removeLocal } from '../../../helpers/localStorage';

type GetState = () => RootReducerType

export function getInitData(data: AuthData) {
	return async (dispatch: Dispatch<action_types>) => { //getState: GetState
		try {
			const mainData = {
				openPositionSum: 6,
				posval: 4,
				netAsset: 1,
				moneyInvested: 2,
			}

			batch(() => {
				dispatch(SetMainData(mainData))
				dispatch(SetAuthData(data))
				dispatch(setDialogOpened(false))
			})

			combineLocal({ auth: data, main: mainData })
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
