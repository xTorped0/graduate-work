import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { RootReducerType } from '../store'

import { setDialogOpened } from '../store/main/actions'
import { logOut } from '../store/main/thunks'
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
		<div className="menu__unauthorized">
			<ul>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'menu-active' : '')} to="/main"> Головна </NavLink>
				</li>
			</ul>
			<button type="button" onClick={onClick}> Авторизуватися </button>
		</div>
	)
}

function Authorized() {
	const dispatch = useDispatch()

	const onLogOut = () => {
		// @ts-ignore
		dispatch(logOut())
	}

	return (
		<div className="menu__authorized">
			<ul>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'menu-active' : '')} to="/main"> Головна </NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'menu-active' : '')} to="/user"> Користувач </NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'menu-active' : '')} to="/stats"> Статистика </NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'menu-active' : '')} to="/history"> Історія </NavLink>
				</li>
			</ul>
			<button
				className="menu__leave"
				type="button"
				onClick={onLogOut}
			>
				Вийти
			</button>
		</div>
	)
}

