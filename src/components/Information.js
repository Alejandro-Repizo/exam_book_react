import React from 'react';

import { Article } from './Article';
import { Interesting } from './Interesting';

export const Information = () => (
	<section className='info'>
		<div className='info_container container'>
			<Interesting />
			<Article />
		</div>
	</section>
);
