import { ActionP, createActionP } from '../index';
import { Constants } from './constants'
import { AuthData, MainData, AdditionalData } from './types';

type SetDialogOpenedType = ActionP<typeof Constants.SET_DIALOG_OPENED, boolean>
export function setDialogOpened(isOpen: boolean): SetDialogOpenedType {
	return createActionP(Constants.SET_DIALOG_OPENED, isOpen)
}

type SetAuthDataType = ActionP<typeof Constants.SET_AUTH_DATA, AuthData>
export function SetAuthData(data: AuthData): SetAuthDataType {
	return createActionP(Constants.SET_AUTH_DATA, data)
}

type SetMainDataType = ActionP<typeof Constants.SET_MAIN_DATA, MainData>
export function SetMainData(data: MainData): SetMainDataType {
	return createActionP(Constants.SET_MAIN_DATA, data)
}

type SetAdditionalDataType = ActionP<typeof Constants.SET_ADDITIONAL_DATA, AdditionalData>
export function SetAdditionalData(data: AdditionalData): SetAdditionalDataType {
	return createActionP(Constants.SET_ADDITIONAL_DATA, data)
}

type SetErrorType = ActionP<typeof Constants.SET_ERROR, Error>
export function SetErrorData(err: Error): SetErrorType {
	return createActionP(Constants.SET_ERROR, err)
}
