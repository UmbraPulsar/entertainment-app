import React from 'react';
import Navbar from '../components/Navbar';

function Header({ page }) {
	return (
		<header className='bg-DarkBlue'>
			<Navbar active={page} />
		</header>
	);
}

export default Header;
