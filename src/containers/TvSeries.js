import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import Listings from './Listings';
import Inventory from '../data.json';

function TvSeries() {
	const [data, setData] = useState(Inventory);
	const [filterTerm, setFilterTerm] = useState('');
	return (
		<>
			<Header page='tv' filterMethod={setFilterTerm} />
			<PageWrapper>
				<Listings
					data={data.filter(
						(listing) =>
							listing.category.toLowerCase() == 'tv series',
					)}
					filter={filterTerm}
					header='TV Series'
				/>
			</PageWrapper>
		</>
	);
}

export default TvSeries;
