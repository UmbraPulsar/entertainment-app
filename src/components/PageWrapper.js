import React from 'react';

function PageWrapper({ children }) {
	return (
		<div className='flex flex-col min-h-screen p-6 bg-DarkBlue'>
			{children}
		</div>
	);
}

export default PageWrapper;
