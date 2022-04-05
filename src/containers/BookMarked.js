import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from './Header';
import Listings from './Listings';
import Inventory from '../data.json';
import Searchbar from '../components/Searchbar';
function BookMarked() {
	const [data, setData] = useState(Inventory);
	const [filterTerm, setFilterTerm] = useState('');
	return (
		<div className='lg:grid lg:grid-cols-[96px_minmax(900px,_1fr)] text-PureWhite bg-DarkBlue'>
			<Header page='bookmark' />
			<PageWrapper>
				<Searchbar filterMethod={setFilterTerm} />
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
		</div>
	);
}

export default BookMarked;
