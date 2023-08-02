import firstImg from '../images/people1.gif';
import secImg from '../images/people2.gif';
import thirdImg from '../images/people3.gif';
import fourthImg from '../images/people4.gif';

const config = {
	windowCount: 5,
	windowLeft: 15.5,
	roofs: {
		x: { left: '15' },
		y: { left: '60' },
	},
	indicators: {
		x: { top: '52' },
		y: { top: '70' },
	},
	covers: {
		x: { left: '68' },
		y: { left: '310' },
	},
	roadLines: 13,
	lineLeft: 8,
	windowImages: [
		firstImg, secImg, thirdImg, fourthImg,
	],

};

export default config;
