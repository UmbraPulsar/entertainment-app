import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import TrendingSlider from './TrendingSlider';
import Inventory from '../data.json';
import Recommends from './Recommends';

function Home() {
	const [data, setData] = useState(Inventory);
	return (
		<>
			<Header page='home' />
			<PageWrapper>
				<TrendingSlider data={data} />
				<Recommends data={data} />
			</PageWrapper>
		</>
	);
}

export default Home;
