import React from 'react';
import { CategoryIcon } from './Icons';
import BookMarkButton from './BookmarkButton';
function RegularCard({
	title = 'Title',
	year = 'Year',
	category = 'Movie',
	rating = 'PG',
	bookmarked,
}) {
	return (
		<div className='rounded-lg'>
			<div
				style={{
					backgroundImage: `url("/thumbnails/${title
						.replace(/\s/g, '-')
						.replace(/'/g, '')
						.replace(/’/g, '')
						.replace(/:/g, '')
						.replace(/II/g, '2')}/regular/small.jpg")`,
				}}
				className={`
			shrink-0
			relative
            w-40
            h-28
			p-2
            bg-center 
            bg-no-repeat 
            bg-cover 
            rounded-lg
            `}>
				<BookMarkButton bookmarked={bookmarked} />
			</div>
			<div className='mt-2 text-white/50'>
				<div className='flex items-center text-[12px] uppercase'>
					<p className='font-Light '>{year}</p>
					<i className='mx-1.5 w-[3px] h-[3px] bg-white/50 rounded-full'></i>
					<CategoryIcon category={category} />
					<p className='flex items-center ml-1.5 font-Light'>
						{category}
					</p>
					<i className='mx-1.5 w-[3px] h-[3px] bg-white/50 rounded-full'></i>
					<p className='font-Light'>{rating}</p>
				</div>
				<h5 className='mt-1 font-Light text-[14px] text-PureWhite'>
					{title}
				</h5>
			</div>
		</div>
	);
}

export default RegularCard;
