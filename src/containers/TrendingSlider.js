import React from 'react';
import TitleCard from '../components/TitleCard';
import { XSmallHeading } from '../components/Typography';

function TrendingSlider({ data }) {
	return (
		<div className='mt-6'>
			<XSmallHeading text='Trending' />
			<div className='flex gap-4 overflow-x-auto overscroll-contain mt-4'>
				{data.map((title, index) => {
					if (title.isTrending)
						return (
							<TitleCard
								key={index}
								title={title.title}
								year={title.year}
								category={title.category}
								rating={title.rating}
								trneding={title.isTrending}
								bookmarked={title.isBookmarked}
							/>
						);
				})}
			</div>
		</div>
	);
}

export default TrendingSlider;
