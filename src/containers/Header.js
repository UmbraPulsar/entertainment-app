import React from 'react';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
function Header({ page, filterMethod }) {
	return (
		<header className='bg-DarkBlue'>
			<Navbar active={page} />
			<Searchbar filterMethod={filterMethod} />
		</header>
	);
}

export default Header;
