import React from 'react';
import TitleCard from '../components/TitleCard';
import { XSmallHeading } from '../components/Typography';

function TrendingSlider() {
	return (
		<div className='mt-6'>
			<XSmallHeading text='Trending' />
			<div className='mt-4'>
				<TitleCard title='beyond-earth' trending={true} />
			</div>
		</div>
	);
}

export default TrendingSlider;
