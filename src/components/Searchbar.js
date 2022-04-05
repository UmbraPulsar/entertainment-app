import React from 'react';
import { SearchIcon } from './Icons';

function Searchbar({ filterMethod }) {
	return (
		<div className='flex mt-6 px-6 md:px-8'>
			<SearchIcon />
			<input
				className='
                ml-4
                border-white
                bg-none 
                bg-transparent 
                placeholder:text-white/50 
                focus:placeholder:text-transparent 
                focus:border-b
                outline-none 
                text-PureWhite 
                font-Light
				caret-Red
                '
				type='text'
				placeholder='Search for movies or TV series'
				onChange={(e) => {
					filterMethod(e.target.value);
				}}
			/>
		</div>
	);
}

export default Searchbar;
