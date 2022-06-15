import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input } from 'antd';
import Dialog from '../../helpers/Dialog';

import { RootReducerType } from '../store';
import { setDialogOpened } from '../store/main/actions';

import '../styles/auth.scss'
import { getInitData, setNumber } from '../store/main/thunks';

export default function Auth() {
	const { isDialogOpen, auth } = useSelector((state: RootReducerType) => state.main) || {}
	const [inputs, setInputs] = useState({ number: '', token: '' })
	const { number, token } = inputs

	const dispatch = useDispatch()

	const onClose = () => { dispatch(setDialogOpened(false)) } //

	const onChange = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setInputs({ ...inputs, [input]: value })
	}

	const onAuth = () => {
		if(auth?.number) {
			// @ts-ignore
			dispatch(getInitData(inputs))
			setInputs({ number: '', token: '' })
		} else {
			// @ts-ignore
			dispatch(setNumber(inputs.number))
		}
	}

	return (
		<Dialog visible={isDialogOpen} onClose={onClose}>
			<div className="auth">
				<div className="auth__instruction">
					<p>
						Не знаете, як авторизуватися?
						Для того, щоб дістати свій токен потрібно звернутися до
						&nbsp;
						<a href="http://t.me/MergeTradeBot" target="_blank" rel="noreferrer">телеграм боту</a>
						&nbsp;
						та слідувати інструкціям
					</p>
				</div>
				<div className="auth__form">
					<div className="auth__container">
						<div className="auth__header">
							Авторизація
						</div>
						<div className="auth__content">
							<form>
								<div className="auth__placeholder">
									Номер
								</div>
								<Input
									className="auth__input"
									onChange={onChange('number')}
									value={number}
								/>
								{ auth?.number ? (
									<>
										<div className="auth__placeholder">
											Токен
										</div>
										<Input
											className="auth__input"
											onChange={onChange('token')}
											value={token}
										/>
									</>
								)
									: ''}
							</form>
						</div>
					</div>
					<div className="auth__footer">
						<span> Авторизувати </span>
						<button
							type="button"
							onClick={onAuth}
							className={`${(auth?.number ? number && token : number) ? 'active' : ''}`}
						>
							&gt;
						</button>
					</div>
				</div>
			</div>
		</Dialog>
	)
}
