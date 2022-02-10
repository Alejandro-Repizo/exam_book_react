import React from 'react';

export const Footer = () => {
	const footerItems = ['one', 'two', 'three'];

	return (
		<footer>
			<div class='container footer'>
				{footerItems.map((item) => (
                    <footerItems key={item}/>
				))}

				<div class='footer_copyright'>
					<p>© Untitled. All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};
