import React from 'react';
import { SearchIcon } from './Icons';

function Searchbar({ filterMethod }) {
	return (
		<div className='flex px-4 mt-6'>
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
