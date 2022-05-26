import React from 'react'
import Footer from './modules/Footer'
import Main from './modules/Main'
import Menu from './modules/Menu'

export default function App() {
	return (
		<>
			<header>
				<Menu />
			</header>
			<section>
				<Main />
			</section>
			<footer>
				<Footer />
			</footer>
		</>
	)
}
