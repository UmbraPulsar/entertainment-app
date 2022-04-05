import React from 'react';
import { CategoryIcon, PlayIcon } from './Icons';
import BookMarkButton from './BookmarkButton';
function TrendingCard({
	title = 'Title',
	year = 'Year',
	category = 'Movie',
	rating = 'PG',
	bookmarked,
	trending = true,
}) {
	return (
		<div
			style={{
				backgroundImage: `url("./thumbnails/${title
					.toLowerCase()
					.replace(/\s/g, '-')
					.replace(/'/g, '')
					.replace(/’/g, '')
					.replace(/:/g, '')
					.replace(/ii/g, '2')}/${
					trending ? 'trending' : 'regular'
				}/small.jpg")`,
			}}
			className={`
			group
			relative
            w-60
            h-32
			md:w-[29.375rem]
			md:h-[14.375rem]
			p-2
            bg-center 
            bg-no-repeat 
            bg-cover 
            rounded-lg
			shrink-0
            `}>
			<BookMarkButton filled={bookmarked} />
			<div className='flex justify-center items-center absolute left-0 top-0 w-full h-full bg-black/50 invisible pointer-events-none group-hover:visible group-hover:pointer-events-auto group-hover:cursor-pointer'>
				<div className='flex justify-between items-center p-[9px] w-[117px] h-[48px] bg-white/25 rounded-[28px]'>
					<PlayIcon />
					<span className='font-light'>Play</span>
				</div>
			</div>
			<div className='absolute bottom-4 left-4 group-hover:invisible group-hover:pointer-events-none'>
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
				<h5 className='font-Light text-Mbody md:text-S text-PureWhite'>
					{title}
				</h5>
			</div>
		</div>
	);
}

export default TrendingCard;
