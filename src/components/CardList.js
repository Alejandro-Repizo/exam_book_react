import React from 'react';

import { CardItem } from './CardItem';

export const CardList = () => {
	const items = [
		{
			image: '',
		},

		{
			image: '',
		},

		{
			image: '',
		},
	];

	return (
		<section className='cards container'>
			{items.map((item, index) => (
				<CardItem key={item.image + index} {...item} />
			))}
		</section>
	);
};
