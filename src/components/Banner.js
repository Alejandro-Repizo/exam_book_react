import React from 'react';

export const Banner = () => (
	<section className='banner container'>
		<div className='banner_info'>
			<h1 className='banner_text banner_text--title'>Hi. This is Lorem.</h1>
			<p className='banner_text banner_text--content'>
				Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
			</p>
		</div>
		<div className='banner_action'>
			<button className='btn btn--blue'>
				<p className='btn_text'>Ok let's go</p>
				<i className='fas fa-arrow-circle-right btn_icon'></i>
			</button>
			<button className='btn btn--white'>
				<p className='btn_text'>More info</p>
				<i className='fas fa-question-circle btn_icon'></i>
			</button>
		</div>
	</section>
);
