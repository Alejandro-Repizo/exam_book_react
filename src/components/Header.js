import React from 'react';
import { Nav } from './Nav';

export const Header = () => {
	return (
		<header className='container'>
			<div className='header_icon'>
				<h1 className='header_text'>myLorem</h1>

				<div id='btnNav' className='header_icon--responsive'>
					<i className='fas fa-bars'></i>
				</div>
			</div>

			<Nav />
		</header>
	);
};
