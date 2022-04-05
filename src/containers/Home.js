import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import TrendingSlider from './TrendingSlider';
import Inventory from '../data.json';
import Listings from './Listings';
import Searchbar from '../components/Searchbar';

function Home() {
	const [data, setData] = useState(Inventory);
	const [filterTerm, setFilterTerm] = useState('');

	return (
		<div className='lg:grid lg:grid-cols-[96px_minmax(900px,_1fr)] text-PureWhite bg-DarkBlue'>
			<Header page='home' />
			<PageWrapper>
				<Searchbar filterMethod={setFilterTerm} />
				<TrendingSlider data={data} />
				<Listings
					data={data}
					filter={filterTerm}
					header='Recommended for you'
				/>
			</PageWrapper>
		</div>
	);
}

export default Home;
