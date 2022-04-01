import React from 'react';
import { NavLink } from 'react-router-dom';

import { LogoIcon, NavIcon, ProfileIcon } from '../components/Icons';

function Navbar({ active }) {
	return (
		<nav className='flex justify-between items-center p-4 bg-SemiDarkBlue'>
			<LogoIcon />
			<ul className='flex justify-around list-none'>
				<li className='mx-3'>
					<NavLink to='/'>
						<NavIcon active={active} icon='home' />
					</NavLink>
				</li>
				<li className='mx-3'>
					<NavLink to='/Movies'>
						<NavIcon active={active} icon='movies' />
					</NavLink>
				</li>
				<li className='mx-3'>
					<NavLink to='/Tv-Series'>
						<NavIcon active={active} icon='tv' />
					</NavLink>
				</li>
				<li className='mx-3'>
					<NavLink to='/Bookmarked'>
						<NavIcon active={active} icon='bookmark' />
					</NavLink>
				</li>
			</ul>
			<ProfileIcon />
		</nav>
	);
}

export default Navbar;
