import React from 'react';
import { map, values } from '@laufire/utils/collection';

const Roof = (context) => {
	const { config: { roofs }} = context;

	return (
		values(map(roofs, (roof, index) =>
			<div
				key={ index }
				className="roof"
				style={ { left: `${ roof.left }%` } }
			/>)));
};

export default Roof;
