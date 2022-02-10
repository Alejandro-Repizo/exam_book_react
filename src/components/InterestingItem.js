import React from 'react';

export const InterestingItem = ({ image }) => (
	<picture className='info_img'>
		<img src={`/assets/img/${image}`} alt='myLoream-imagen-color' className='info_thumbnail' />
	</picture>
);
