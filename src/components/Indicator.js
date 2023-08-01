import React from 'react';
import { map, values } from '@laufire/utils/collection';

const Indicator = (context) => {
	const { config: { indicators }} = context;

	return (
		values(map(indicators, (indicator, index) =>
			<div
				key={ index }
				className="indicator"
				style={ { top: `${ indicator.top }%` } }
			/>)));
};

export default Indicator;
