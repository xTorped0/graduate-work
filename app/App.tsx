import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Routes, Route, } from 'react-router-dom';

import Main from './modules/Main'
import User from './modules/User';
import Stats from './modules/Stats';
import History from './modules/History';

import store from './store'

export default function App() {
	return (
		<HashRouter>
			<Provider store={store}>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="main" element={<Main />} />
					<Route path="user" element={<User />} />
					<Route path="stats" element={<Stats />} />
					<Route path="history" element={<History />} />
					<Route
						path="*"
						element={(
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						)}
					/>
				</Routes>
			</Provider>
		</HashRouter>
	)
}
