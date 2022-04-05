import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Movies from './containers/Movies';
import TvSeries from './containers/TvSeries';
import BookMarked from './containers/BookMarked';
import './styles/index.css';
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='Login' element={<Login />} />
				<Route path='Sign-Up' element={<SignUp />} />
				<Route path='Movies' element={<Movies />} />
				<Route path='Tv-Series' element={<TvSeries />} />
				<Route path='Bookmarked' element={<BookMarked />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
