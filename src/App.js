import React from 'react';

import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { CardList } from './components/CardList';
import { Information } from './components/Information';
import { Footer } from './components/Footer';

export const App = () => (
	<>
		{/* Header */}
		<Header />

		{/* Banner */}
		<Banner />

		{/* Cards */}
		<CardList />

		{/* Information */}
		<Information />

		{/* Footer */}
		<Footer />
	</>
);
