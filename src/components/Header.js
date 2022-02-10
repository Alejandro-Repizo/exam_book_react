import React, { useState } from 'react';

export const Header = () => {
	const [active, setActive] = useState(false);

	const buttonsName = ['Welcome', 'Dropdown', 'Left Sidebar', 'Right Sidebar', 'No Sidebar'];

	/**
	 * Agrega la clase active
	 * al nav
	 */
	const handleClick = () => {
		setActive(!active);
	};

	/**
	 * Agrega y remueve la clase
	 * nav_item--active de los
	 * elementos del nav
	 * @param {Element} item
	 */
	const handleClickItem = ({ target }) => {
		[...document.querySelectorAll('li.nav_item')].forEach((i) =>
			i.classList.remove('nav_item--active')
		);
		target.classList.add('nav_item--active');
	};

	return (
		<header className='container'>
			<div className='header_icon'>
				<h1 className='header_text'>myLorem</h1>

				<div onClick={handleClick} className='header_icon--responsive'>
					<i className='fas fa-bars'></i>
				</div>
			</div>

			<nav className={active ? 'active' : null}>
				<ul>
					{buttonsName.map((name) => (
						<li className='nav_item' key={name} onClick={handleClickItem}>
							{name}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

