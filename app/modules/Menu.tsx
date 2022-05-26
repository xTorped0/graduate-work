import React from 'react'
import '../styles/menu.scss'

export default function Menu() {
	const { authorized = false } = {}
	return (
		<nav className="menu">
			{
				authorized
					? <Authorized />
					: <Unauthorized />
			}
		</nav>
	)
}

function Unauthorized() {
	return (
		<menu>
			<ul className="menu-active">
				Головна
			</ul>
			<ul>
				Зарееструватися
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
