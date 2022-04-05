import React from 'react';
import RegularCard from '../components/RegularCard';

function Listings({ data, filter, header }) {
	return (
		<div className='px-6 md:px-8'>
			<h2 className='my-6 font-Light text-[20px] md:text-L text-PureWhite'>
				{header}
			</h2>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-min gap-[15px] md:gap-[28px] lg:gap-[40px] col'>
				{data
					.filter((listing) =>
						listing.title.toLowerCase().includes(filter),
					)
					.map((title, index) => {
						return (
							<RegularCard
								key={index}
								title={title.title}
								year={title.year}
								category={title.category}
								rating={title.rating}
								bookmarked={title.isBookmarked}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default Listings;
