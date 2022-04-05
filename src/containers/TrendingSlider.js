import React from 'react';
import TrendingCard from '../components/TrendingTitleCard';

function TrendingSlider({ data }) {
	return (
		<div className='mt-6 px-6 md:px-8 max-w-full'>
			<h2 className='font-Light text-[20px] md:text-L'>Trending</h2>
			<div className='flex gap-4 overflow-x-auto overscroll-contain mt-4'>
				{data.map((title, index) => {
					if (title.isTrending)
						return (
							<TrendingCard
								key={index}
								title={title.title}
								year={title.year}
								category={title.category}
								rating={title.rating}
								trending={title.isTrending}
								bookmarked={title.isBookmarked}
							/>
						);
				})}
			</div>
		</div>
	);
}

export default TrendingSlider;
