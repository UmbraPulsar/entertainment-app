import { BookmarkIcon } from './Icons';

const BookMarkButton = ({ bookmarked }) => {
	return (
		<button className='flex justify-center items-center  h-8 w-8 ml-auto bg-black/50 border-none rounded-full'>
			<BookmarkIcon filled={bookmarked} />
		</button>
	);
};

export default BookMarkButton;
