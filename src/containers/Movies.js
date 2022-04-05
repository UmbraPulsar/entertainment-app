import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import Listings from './Listings';
import Inventory from '../data.json';
import Searchbar from '../components/Searchbar';
function Movies() {
	const [data, setData] = useState(Inventory);
	const [filterTerm, setFilterTerm] = useState('');

	return (
		<div className='lg:grid lg:grid-cols-[96px_minmax(900px,_1fr)] text-PureWhite bg-DarkBlue'>
			<Header page='movies' />
			<PageWrapper>
				<Searchbar filterMethod={setFilterTerm} />
				<Listings
					data={data.filter(
						(listing) => listing.category.toLowerCase() == 'movie',
					)}
					filter={filterTerm}
					header='Movies'
				/>
			</PageWrapper>
		</div>
	);
}

export default Movies;
