import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import Listings from './Listings';
import Inventory from '../data.json';
function Movies() {
	const [data, setData] = useState(Inventory);
	const [filterTerm, setFilterTerm] = useState('');
	console.log(Inventory);
	return (
		<>
			<Header page='movies' filterMethod={setFilterTerm} />
			<PageWrapper>
				<Listings
					data={data.filter(
						(listing) => listing.category.toLowerCase() == 'movie',
					)}
					filter={filterTerm}
				/>
			</PageWrapper>
		</>
	);
}

export default Movies;
