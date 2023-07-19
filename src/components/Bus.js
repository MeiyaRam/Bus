import { React } from 'react';
import '../App.scss';

const Bus = (context) =>
	<div className="bus">
		<div className="frontWindow"/>
		<div className="backWindow"/>
		<div className="mirrorHandle">
			<div className="mirror"/>
		</div>
		<div className="topDesign"/>
		<div className="indicator"/>
		<div className="driverWindow">
			<div className="door">
				<div className="doorLock"/>
			</div>
		</div>
		<div className="window"/>
		<div className="Window2"/>
		<div className="cover"><div className="tire"/>
		</div>
	</div>;

export default Bus;
