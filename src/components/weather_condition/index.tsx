import React from 'react';
import Day from '../../assests/images/svg/Day.svg';
import Cloudy from '../../assests/images/svg/Cloudy.svg';
import Snowy from '../../assests/images/svg/Snowy.svg';
import Lightrain from '../../assests/images/svg/Lightrain.svg';
import Thunder from '../../assests/images/svg/Thunder.svg';

export const getWeatherImage = (weatherDescription: string) => {
  console.log(weatherDescription, '=weatherDescriptionweatherDescription');
  switch (weatherDescription) {
    case 'clear sky':
      return <Day width={400} height={300} />;
    case 'haze':
      return <Cloudy width={400} height={300} />;
    case 'overcast clouds':
      return <Snowy width={400} height={300} />;
    case 'lightrain':
      return <Lightrain width={400} height={300} />;
    case 'moderate rain':
      return <Thunder width={400} height={300} />;
    case 'broken clouds':
      return <Thunder width={400} height={300} />;
    case 'scattered clouds ':
      return <Thunder width={400} height={300} />;
    default:
      // Return a default SVG or null for unknown conditions
      return null;
  }
};
