import { BookmarkIcon } from './Icons';

const BookMarkButton = ({ bookmarked }) => {
	return (
		<button className='z-20 relative group flex justify-center items-center  h-8 w-8 ml-auto bg-black/50 border-none rounded-full hover:bg-white transition-all'>
			<BookmarkIcon filled={bookmarked} />
		</button>
	);
};

export default BookMarkButton;
