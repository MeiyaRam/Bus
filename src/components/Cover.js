import React from 'react';
import '../App.scss';

const Cover = () =>
	<div>
		<div className="cover">
			<div className="tire">
				<div className="innerTire"/>
			</div>
		</div>
		<div className="cover" style={ { left: '66%' } }>
			<div className="tire">
				<div className="innerTire"/>
			</div>
		</div>
	</div>;

export default Cover;
