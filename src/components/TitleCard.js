import React from 'react';

import { BookmarkIcon, CategoryIcon } from './Icons';
import { XSmallHeading } from './Typography';
const BookMarkButton = () => {
	return (
		<button className='flex justify-center items-center  h-8 w-8 ml-auto bg-black/50 border-none rounded-full'>
			<BookmarkIcon />
		</button>
	);
};
function TitleCard({
	title = 'Title',
	year = 'Year',
	imageType,
	category = 'Movie',
	rating = 'PG',
	bookmarked,
	trending,
}) {
	return (
		<div
			style={{
				backgroundImage: `url("/thumbnails/${title}/${
					trending ? 'trending' : 'regular'
				}/small.jpg")`,
			}}
			className={`
			relative
            w-60
            h-32
			p-2
            bg-center 
            bg-no-repeat 
            bg-cover 
            rounded-lg
            `}>
			<BookMarkButton />
			<div className='absolute bottom-4 left-4'>
				<div className='flex items-center text-[12px] uppercase'>
					<p className='font-Light '>{year}</p>
					<i className='mx-2 w-[3px] h-[3px] bg-white/50 rounded-full'></i>
					<CategoryIcon category={category} />
					<p className='flex items-center ml-1.5 font-Light'>
						{category}
					</p>
					<i className='mx-2 w-[3px] h-[3px] bg-white/50 rounded-full'></i>
					<p className='font-Light'>{rating}</p>
				</div>
				<h5 className='font-Light text-Mbody text-PureWhite'>
					{title}
				</h5>
			</div>
		</div>
	);
}

export default TitleCard;
