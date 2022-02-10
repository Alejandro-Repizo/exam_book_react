import React from 'react';

import { FooterItem } from './FooterItem';

export const Footer = () => {
	const footerItems = [...Array(4)];

	return (
		<footer>
			<div className='container footer'>
				{footerItems.map((item, index) => {
					if (index === 3) {
						return (
							<FooterItem
								key={index}
								render={() => (
									<>
										<p className='footer_text--title'>Contact Us</p>
										<ul className='footer_link'>
											<li className='footer_item--icon'>
												<i className='footer_icon fab fa-twitter'></i>
												<i className='footer_icon fab fa-facebook'></i>
												<i className='footer_icon fab fa-instagram'></i>
												<i className='footer_icon fab fa-dribbble'></i>
												<i className='footer_icon fab fa-pinterest'></i>
											</li>

											<li className='footer_item'>1234 Fictional Road</li>
											<li className='footer_item'>Nashville, TN 00000</li>
											<li className='footer_item'>(800) 555-0000</li>
										</ul>
									</>
								)}
							/>
						);
					}

					return (
						<FooterItem
							key={index}
							render={() => (
								<>
									<p className='footer_text--title'>Random Stuff</p>
									<ul className='footer_link'>
										<li className='footer_item'>
											<a
												target='_blank'
												rel='noreferrer'
												href='https://github.com/Alejandro-Repizo/exam_book_react.git'
											>
												Lorem, ipsum.
											</a>
										</li>
										<li className='footer_item'>
											<a
												target='_blank'
												rel='noreferrer'
												href='https://github.com/Alejandro-Repizo/exam_book_react.git'
											>
												Autem, nobis.
											</a>
										</li>
										<li className='footer_item'>
											<a
												target='_blank'
												rel='noreferrer'
												href='https://github.com/Alejandro-Repizo/exam_book_react.git'
											>
												Cum, odio?
											</a>
										</li>
										<li className='footer_item'>
											<a
												target='_blank'
												rel='noreferrer'
												href='https://github.com/Alejandro-Repizo/exam_book_react.git'
											>
												Minima, soluta?
											</a>
										</li>
										<li className='footer_item'>
											<a
												target='_blank'
												rel='noreferrer'
												href='https://github.com/Alejandro-Repizo/exam_book_react.git'
											>
												Cumque, aliquid.
											</a>
										</li>
									</ul>
								</>
							)}
						/>
					);
				})}

				<div className='footer_copyright'>
					<p>© Untitled. All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};
