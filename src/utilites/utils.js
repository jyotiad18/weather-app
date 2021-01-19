import hail from '../images/Hail.png';
import heavyCloud from '../images/HeavyCloud.png';
import heavyRain from '../images/HeavyRain.png';
import lightCloud from '../images/LightCloud.png';
import lightRain from '../images/LightRain.png';
import shower from '../images/Shower.png';
import sleet from '../images/Sleet.png';
import snow from '../images/Snow.png';
import thunderstorm from '../images/Thunderstorm.png';
import clear from '../images/Clear.png';


export const getWeatherPicture = (abbreviation) => {
	switch (abbreviation) {
		case 'sn':
			return snow;
		case 'sl':
			return sleet; 
		case 'h':
			return hail;
		case 't':
			return thunderstorm;
		case 'hr':
			return heavyRain;
		case 'lr':
			return lightRain;
		case 's':
			return shower;
		case 'hc':
			return heavyCloud;
		case 'lc':
			return lightCloud;	
		case 'c':
			return clear;	
		default:
			return null;
	}
}

export const UnitConverter = (value, cToF = true) => {
    let res =  cToF ?  (9/5 * value + 32 ) : value;
    return parseInt(res);
}

export const DateFormater = (dateString) => {
    let date = new Date(dateString);
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let string = days[date.getDay()]+', '+date.getUTCDate()+' '+months[date.getMonth()];
    return string;
}
