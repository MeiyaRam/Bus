import React from 'react';
import { map } from '@laufire/utils/collection';

const Windows = (context) => {
	const { config: { windowLeft, windowImages }} = context;

	return <div>
		<div className="frontWindow"/>
		<div className="backWindow"/>
		{map(windowImages, (img, i) =>
			<div
				key={ i }
				className="window"
				style={ {
					left: `${ windowLeft * (i + 1) }%`,
					backgroundImage: `url(${ img })`,
					backgroundSize: '100%,100%',
					backgroundRepeat: 'no-repeat',
				} }
			/>)}
	</div>;
};

export default Windows;
