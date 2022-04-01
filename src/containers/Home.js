import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Navbar from '../components/Navbar';
import Header from './Header';

function Home() {
	return (
		<>
			<Header page='home' />
			<PageWrapper></PageWrapper>
		</>
	);
}

export default Home;
