import React from 'react';

export const LargeHeading = ({ text }) => {
	return <h1 className='text-L font-Light'>{text}</h1>;
};

export const MediumHeading = ({ text }) => {
	return <h2 className='text-M font-Light'>{text}</h2>;
};

export const SmallHeading = ({ text }) => {
	return <h3 className='text-S font-Medium'>{text}</h3>;
};

export const XSmallHeading = ({ text }) => {
	return <h4 className='text-XS font-Medium'>{text}</h4>;
};

export const Paragraph = ({ text }) => {
	return <p className='text-BodyM font-Light'>{text}</p>;
};
