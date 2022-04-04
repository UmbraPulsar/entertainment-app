import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import Listings from './Listings';
import Inventory from '../data.json';

function BookMarked() {
	const [data, setData] = useState(Inventory);
	const [filterTerm, setFilterTerm] = useState('');
	return (
		<>
			<Header page='bookmark' filterMethod={setFilterTerm} />
			<PageWrapper>
				<Listings
					data={data.filter((listing) => {
						if (
							listing.category.toLowerCase() == 'movie' &&
							listing.isBookmarked
						) {
							return listing;
						}
					})}
					filter={filterTerm}
					header='Bookmarked Movies'
				/>
				<Listings
					data={data.filter((listing) => {
						if (
							listing.category.toLowerCase() == 'tv series' &&
							listing.isBookmarked
						) {
							return listing;
						}
					})}
					filter={filterTerm}
					header='Bookmarked Tv-shows'
				/>
			</PageWrapper>
		</>
	);
}

export default BookMarked;
