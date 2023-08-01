import React from 'react';
import { map, range } from '@laufire/utils/collection';

const Windows = (context) => {
	const { config: { windowCount, windowLeft }} = context;

	return <div>
		<div className="frontWindow"/>
		<div className="backWindow"/>
		{map(range(1, windowCount), (count, i) =>
			<div
				key={ i }
				className="window"
				style={ { left: `${ windowLeft * count }%` } }
			/>)}
	</div>;
};

export default Windows;
