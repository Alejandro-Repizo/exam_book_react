import React from 'react';

import { InterestingItem } from './InterestingItem';

export const Interesting = () => {
	const items = [
		{
			image: './pic04.jpg',
		},
		{
			image: './pic05.jpg',
		},
		{
			image: './pic06.jpg',
		},
		{
			image: './pic07.jpg',
		},
	];

	return (
		<div className='info_interesting'>
			<p className='info_text'>Interesting stuff</p>

			<div className='info_grid'>
				{items.map((item, index) => (
					<InterestingItem key={item.image + index} {...item} />
				))}
			</div>

			<button className='btn btn--reverse btn--blue'>
				<p className='btn_text'>More</p>
				<i className='far fa-file-alt btn_icon btn_icon--reverse'></i>
			</button>
		</div>
	);
};
