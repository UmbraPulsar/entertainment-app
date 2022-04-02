import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import TrendingSlider from './TrendingSlider';
import Inventory from '../data.json';

function Home() {
	const [data, setData] = useState(Inventory);
	console.log(data);
	return (
		<>
			<Header page='home' />
			<PageWrapper>
				<TrendingSlider data={data} />
			</PageWrapper>
		</>
	);
}

export default Home;
