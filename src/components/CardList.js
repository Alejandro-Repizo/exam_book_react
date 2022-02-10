import React from 'react';

import { CardItem } from './CardItem';

export const CardList = () => {
	const items = [
		{
			image: './norway.jpg',
		},

		{
			image: './sanFranciscoDesktop.jpg',
		},

		{
			image: './new_york.jpg',
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
