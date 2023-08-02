import { map, range } from '@laufire/utils/collection';
import React from 'react';

const Road = (context) => {
	const { config: { roadLines, lineLeft }} = context;

	return (
		<div className="road">
			{ map(range(0, roadLines), (line, i) =>
				<div
					key={ i }
					className="roadLines"
					style={ { left: `${ line * lineLeft }%` } }
				/>)}
		</div>);
};

export default Road;
