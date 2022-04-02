import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import TrendingSlider from './TrendingSlider';

function Home() {
	return (
		<>
			<Header page='home' />
			<PageWrapper>
				<TrendingSlider />
			</PageWrapper>
		</>
	);
}

export default Home;
