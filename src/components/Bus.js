import { React } from 'react';
import '../App.scss';
import Windows from './Windows';
import Mirror from './Mirror';
import Roof from './Roof';
import Indicator from './Indicator';
import DriverWindow from './DriverWindow';
import Cover from './Cover';

const Bus = (context) =>
	<div className="bus">
		<Windows { ...context }/>
		<Mirror { ...context }/>
		<Roof { ...context }/>
		<Indicator { ...context }/>
		<DriverWindow { ...context }/>
		<Cover { ...context }/>
	</div>;

export default Bus;
