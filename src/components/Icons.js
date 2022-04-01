import BookMarkEmptyImage from '../assets/Icons/icon-bookmark-empty.svg';
import BookMarkFullImage from '../assets/Icons/icon-bookmark-full.svg';
import CategoryMovieImage from '../assets/Icons/icon-category-movie.svg';
import CategoryTvImage from '../assets/Icons/icon-category-tv.svg';
import NavBookmarkImage from '../assets/Icons/icon-nav-bookmark.svg';
import NavHomeImage from '../assets/Icons/icon-nav-home.svg';
import NavMoviesImage from '../assets/Icons/icon-nav-movies.svg';
import NavTvImage from '../assets/Icons/icon-nav-tv-series.svg';
import PlayImage from '../assets/Icons/icon-play.svg';
import SearchImage from '../assets/Icons/icon-search.svg';
import ProfileImage from '../assets/Icons/image-avatar.png';
import Logo from '../assets/Icons/logo.svg';

export const BookmarkIcon = ({ filled }) => {
	return (
		<i>
			{filled ? (
				<img src={BookMarkFullImage} alt='' />
			) : (
				<img src={BookMarkEmptyImage} alt='' />
			)}
		</i>
	);
};
export const CategoryIcon = ({ category }) => {
	return (
		<i>
			{category === 'Movie' ? (
				<img src={CategoryMovieImage} alt='' />
			) : (
				<img src={CategoryTvImage} alt='' />
			)}
		</i>
	);
};

export const NavIcon = ({ icon, active }) => {
	return (
		<i className='flex max-w-4'>
			{icon === 'bookmark' ? (
				<img
					className={
						active == 'bookmark'
							? 'invert grayscale brightness-0'
							: null
					}
					src={NavBookmarkImage}
					alt=''
				/>
			) : null}
			{icon === 'home' ? (
				<img
					className={
						active == 'home'
							? 'invert grayscale brightness-0'
							: null
					}
					src={NavHomeImage}
					alt=''
				/>
			) : null}
			{icon === 'movies' ? (
				<img
					className={
						active == 'movies'
							? 'invert grayscale brightness-0'
							: null
					}
					src={NavMoviesImage}
					alt=''
				/>
			) : null}
			{icon === 'tv' ? (
				<img
					className={
						active == 'tv' ? 'invert grayscale brightness-0' : null
					}
					src={NavTvImage}
					alt=''
				/>
			) : null}
		</i>
	);
};

export const PlayIcon = () => {
	return (
		<i>
			<img src={PlayImage} alt='' />
		</i>
	);
};

export const SearchIcon = () => {
	return (
		<i>
			<img src={SearchImage} alt='' />
		</i>
	);
};

export const LogoIcon = () => {
	return (
		<i>
			<img src={Logo} alt='' />
		</i>
	);
};

export const ProfileIcon = () => {
	return (
		<i>
			<img
				className='max-h-8 max-w-8 border rounded-full'
				src={ProfileImage}
				alt=''
			/>
		</i>
	);
};
