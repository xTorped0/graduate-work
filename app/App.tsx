import React from 'react'
import { Provider } from 'react-redux'
import Footer from './modules/Footer'
import Main from './modules/Main'
import Menu from './modules/Menu'

import store from './store'

export default function App() {
	return (
		<Provider store={store}>
			<header>
				<Menu />
			</header>
			<section>
				<Main />
			</section>
			<footer>
				<Footer />
			</footer>
		</Provider>
	)
}
