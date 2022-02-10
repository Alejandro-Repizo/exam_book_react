import React from 'react';

export const CardItem = ({ imagen }) => {
	return (
		<div className='card'>
			<picture className='card_img'>
				<img src={imagen} alt='myLoream-imagen' className='card_thumbnail' />
				<p className='card_imgText'>Put somethign here</p>
			</picture>

			<div className='card_info'>
				<p className='card_text--title'>Maybe here ass well I think</p>
				<p className='card_text--content'>
					Phasellus quam turpis, feugiat sit ament in, hendrerit in lectus, Praesent sed
					sempre ament bibedum tristique fringilla.
				</p>
			</div>
		</div>
	);
};
