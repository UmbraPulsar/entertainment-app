import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Navbar from '../components/Navbar';
function Home() {
	return (
		<>
			<Navbar active='home' />
			<PageWrapper></PageWrapper>
		</>
	);
}

export default Home;
