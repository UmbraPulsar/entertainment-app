import React from 'react';
import { CategoryIcon, PlayIcon } from './Icons';
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
			group
			relative
            w-full
            h-28
			md:w-full
			md:h-[8.75rem]
			lg:w-full
			lg:h-[14.125rem]
			p-2
            bg-center 
            bg-no-repeat 
            bg-cover 
            rounded-lg
            `}>
				<div className='flex justify-center items-center absolute left-0 top-0 w-full h-full bg-black/50 invisible pointer-events-none group-hover:visible group-hover:pointer-events-auto group-hover:cursor-pointer'>
					<div className='flex justify-between items-center p-[9px] w-[117px] h-[48px] bg-white/25 rounded-[28px]'>
						<PlayIcon />
						<span className='font-light'>Play</span>
					</div>
				</div>
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
				<h5 className='mt-1 font-Light text-[14px] md:text-XS text-PureWhite'>
					{title}
				</h5>
			</div>
		</div>
	);
}

export default RegularCard;
