import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';
import React from 'react';

const Cover = (context) => {
	const { config: { covers }} = context;

	return (
		values(map(covers, (cover, index) =>
			<div
				key={ index }
				className="cover"
				style={ { left: `${ cover.left }px` } }
			>
				<div className="tire">
					<div className="innerTire"/>
				</div>
			</div>)));
};

export default Cover;
