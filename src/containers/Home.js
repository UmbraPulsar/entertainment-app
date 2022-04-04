import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import TrendingSlider from './TrendingSlider';
import Inventory from '../data.json';
import Listings from './Listings';

function Home() {
	const [data, setData] = useState(Inventory);
	const [filterTerm, setFilterTerm] = useState('');

	return (
		<>
			<Header page='home' filterMethod={setFilterTerm} />
			<PageWrapper>
				<TrendingSlider data={data} />
				<Listings
					data={data}
					filter={filterTerm}
					header='Recommended for you'
				/>
			</PageWrapper>
		</>
	);
}

export default Home;
