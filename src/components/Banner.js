import React from 'react'

export const Banner = () => {
  return (
		<section class='banner container'>
			<div class='banner_info'>
				<h1 class='banner_text banner_text--title'>Hi. This is Lorem.</h1>
				<p class='banner_text banner_text--content'>
					Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de
					texto.
				</p>
			</div>
			<div class='banner_action'>
				<button class='btn btn--blue'>
					<p class='btn_text'>Ok let's go</p>
					<i class='fas fa-arrow-circle-right btn_icon'></i>
				</button>
				<button class='btn btn--white'>
					<p class='btn_text'>More info</p>
					<i class='fas fa-question-circle btn_icon'></i>
				</button>
			</div>
		</section>
  );
}
