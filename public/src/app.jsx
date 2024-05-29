import React from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/account/index.jsx'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />}>
					<Route index element={<Login/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
