import React from 'react';
import '../App.scss';

const Windows = (context) => {
	const { config: { windowCount, windowLeft }} = context;

	return <div>
		<div className="frontWindow"/>
		<div className="backWindow"/>
		{windowCount.map((window, i) =>
			<div
				key={ i }
				className="window"
				style={ { left: `${ windowLeft * window }%` } }
			/>)}

	</div>;
};

export default Windows;
