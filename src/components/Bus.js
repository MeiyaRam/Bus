import { React } from 'react';
import '../App.scss';

const Bus = (context) =>
	<div className="bus">
		<div className="frontwindow"/>
		<div className="backwindow"/>
		<div className="mirror">
			<div className="mirrorGlass"/>
		</div>
		<div className="top1"/>
		<div className="top2"/>
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
