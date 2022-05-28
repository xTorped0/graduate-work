import { Dispatch } from 'react';
import { ActionCreator, Action } from 'redux'
import { batch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { ActionP, RootReducerType } from '../index';
import { SetMainData, SetErrorData, SetAuthData, setDialogOpened } from './actions';

import { action_types } from './reducer';
import { AuthData } from './types';

type GetState = () => RootReducerType

export function getInitData(data: AuthData) {
	return async (dispatch: Dispatch<action_types>) => { //getState: GetState
		try {
			batch(() => {
				dispatch(SetMainData({
					openPositionSum: 6,
					posval: 4,
					netAsset: 1,
					moneyInvested: 2,
				}))
				dispatch(SetAuthData(data))
				dispatch(setDialogOpened(false))
			})
		} catch (err) {
			dispatch(SetErrorData(err))
		}
	}
}


export const a = ''
