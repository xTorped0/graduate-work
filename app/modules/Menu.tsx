import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducerType } from '../store'

import { setDialogOpened } from '../store/main/actions'
import '../styles/menu.scss'

export default function Menu() {
	const { auth, error } = useSelector((state: RootReducerType) => state.main)
	return (
		<nav className="menu">
			{
				auth && !error
					? <Authorized />
					: <Unauthorized />
			}
		</nav>
	)
}

function Unauthorized() {
	const dispatch = useDispatch()

	const onClick = () => {
		dispatch(setDialogOpened(true))
	}
	return (
		<menu>
			<ul className="menu-active">
				Головна
			</ul>
			<ul onClick={onClick}>
				Авторизуватися
			</ul>
		</menu>
	)
}

function Authorized() {
	return (
		<>
			<menu>
				<ul>
					Головна
				</ul>
				<ul>
					Користувач
				</ul>
				<ul>
					Статистика
				</ul>
				<ul>
					Історія
				</ul>
			</menu>

			<button
				className="menu__leave"
				type="button"
			>
				Вийти
			</button>
		</>
	)
}
