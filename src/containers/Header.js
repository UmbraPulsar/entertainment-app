import React from 'react';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
function Header({ page }) {
	return (
		<header className='bg-DarkBlue'>
			<Navbar active={page} />
			<Searchbar />
		</header>
	);
}

export default Header;
