import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import Listings from './Listings';
import Inventory from '../data.json';
import Searchbar from '../components/Searchbar';
function TvSeries() {
	const [data, setData] = useState(Inventory);
	const [filterTerm, setFilterTerm] = useState('');
	return (
		<div className='lg:grid lg:grid-cols-[96px_minmax(900px,_1fr)] text-PureWhite bg-DarkBlue'>
			<Header page='tv' />
			<PageWrapper>
				<Searchbar filterMethod={setFilterTerm} />
				<Listings
					data={data.filter(
						(listing) =>
							listing.category.toLowerCase() == 'tv series',
					)}
					filter={filterTerm}
					header='TV Series'
				/>
			</PageWrapper>
		</div>
	);
}

export default TvSeries;
