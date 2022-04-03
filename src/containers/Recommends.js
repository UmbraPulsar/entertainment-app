import React from 'react';
import RegularCard from '../components/RegularCard';
function Recommends({ data }) {
	return (
		<>
			<h2 className='my-6 font-Light text-[20px] text-PureWhite'>
				Recommended for you
			</h2>
			<div className='grid grid-cols-2 gap-3.5'>
				{data.map((title, index) => {
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
		</>
	);
}

export default Recommends;
