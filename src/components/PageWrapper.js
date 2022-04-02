import React from 'react';

function PageWrapper({ children }) {
	return (
		<div className='flex flex-col min-h-screen px-6 text-PureWhite  bg-DarkBlue'>
			{children}
		</div>
	);
}

export default PageWrapper;
