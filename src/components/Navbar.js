import React from 'react';
import { NavLink } from 'react-router-dom';

import { LogoIcon, NavIcon, ProfileIcon } from '../components/Icons';

function Navbar({ active }) {
	return (
		<nav className='flex lg:flex-col lg:items-center justify-between lg:justify-start p-6 md:p-8 lg:p-0 lg:py-[2rem] lg:ml-[1.5rem] lg:mt-[1.5rem] lg:min-h-[900px] bg-SemiDarkBlue lg:rounded-[20px] '>
			<LogoIcon />
			<ul className='flex lg:flex-col lg:mt-[5rem] justify-around items-center list-none '>
				<li className='mx-3 lg:mt-[2.5rem]'>
					<NavLink to='/'>
						<NavIcon active={active} icon='home' />
					</NavLink>
				</li>
				<li className='mx-3 lg:mt-[2.5rem]'>
					<NavLink to='/Movies'>
						<NavIcon active={active} icon='movies' />
					</NavLink>
				</li>
				<li className='mx-3 lg:mt-[2.5rem]'>
					<NavLink to='/Tv-Series'>
						<NavIcon active={active} icon='tv' />
					</NavLink>
				</li>
				<li className='mx-3 lg:mt-[2.5rem]'>
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
