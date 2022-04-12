import { TRawWeatherDataPoint } from 'types/environment-canada';

export const invalidWeatherDataFromFuture: TRawWeatherDataPoint = {
  $: { day: '20', month: '12', year: '2022' },
  maxtemp: [{ $: { description: 'Maximum Temperature', units: '°C' }}],
  mintemp: [{ $: { description: 'Minimum Temperature', units: '°C' }}],
  meantemp: [{ $: { description: 'Mean Temperature', units: '°C' }}],
  heatdegdays: [{ $: { description: 'Heating Degree Days', units: '°C' }}],
  cooldegdays: [{ $: { description: 'Cooling Degree Days', units: '°C' }}],
  totalrain: [{ $: { description: 'Total Rain', units: 'mm' }}],
  totalsnow: [{ $: { description: 'Total Snow', units: 'cm' }}],
  totalprecipitation: [
    { $: { description: 'Total Precipitation', units: 'mm' }},
  ],
  snowonground: [{ $: { description: 'Snow on Ground', units: 'cm' }}],
  dirofmaxgust: [
    { $: { description: 'Direction of Maximum Gust', units: '10s Deg' }},
  ],
  speedofmaxgust: [
    { $: { description: 'Speed of Maximum Gust', units: 'km/h' }},
  ],
};

export const missingMaxTemp: TRawWeatherDataPoint = {
  $: { day: '8', month: '11', year: '2017' },
  maxtemp: [
    { $: { description: 'Maximum Temperature', flag: 'M', units: '°C' }},
  ],
  mintemp: [
    {
      _: '-1.2',
      $: { description: 'Minimum Temperature', flag: 'E', units: '°C' },
    },
  ],
  meantemp: [
    { $: { description: 'Mean Temperature', flag: 'M', units: '°C' }},
  ],
  heatdegdays: [
    { $: { description: 'Heating Degree Days', flag: 'M', units: '°C' }},
  ],
  cooldegdays: [
    { $: { description: 'Cooling Degree Days', flag: 'M', units: '°C' }},
  ],
  totalrain: [{ _: '0.0', $: { description: 'Total Rain', units: 'mm' }}],
  totalsnow: [{ _: '0.0', $: { description: 'Total Snow', units: 'cm' }}],
  totalprecipitation: [
    { _: '0.0', $: { description: 'Total Precipitation', units: 'mm' }},
  ],
  snowonground: [{ $: { description: 'Snow on Ground', units: 'cm' }}],
  dirofmaxgust: [
    {
      _: '22',
      $: { description: 'Direction of Maximum Gust', units: '10s Deg' },
    },
  ],
  speedofmaxgust: [
    { _: '37', $: { description: 'Speed of Maximum Gust', units: 'km/h' }},
  ],
};

export const missingMinMeanAndMaxTemp: TRawWeatherDataPoint = {
  $: { day: '13', month: '5', year: '2019' },
  maxtemp: [
    { $: { description: 'Maximum Temperature', flag: 'M', units: '°C' }},
  ],
  mintemp: [
    { $: { description: 'Minimum Temperature', flag: 'M', units: '°C' }},
  ],
  meantemp: [
    { $: { description: 'Mean Temperature', flag: 'M', units: '°C' }},
  ],
  heatdegdays: [
    { $: { description: 'Heating Degree Days', flag: 'M', units: '°C' }},
  ],
  cooldegdays: [
    { $: { description: 'Cooling Degree Days', flag: 'M', units: '°C' }},
  ],
  totalrain: [{ _: '7.6', $: { description: 'Total Rain', units: 'mm' }}],
  totalsnow: [{ _: '0.0', $: { description: 'Total Snow', units: 'cm' }}],
  totalprecipitation: [
    { _: '7.6', $: { description: 'Total Precipitation', units: 'mm' }},
  ],
  snowonground: [{ $: { description: 'Snow on Ground', units: 'cm' }}],
  dirofmaxgust: [
    {
      _: '8',
      $: { description: 'Direction of Maximum Gust', units: '10s Deg' },
    },
  ],
  speedofmaxgust: [
    { _: '52', $: { description: 'Speed of Maximum Gust', units: 'km/h' }},
  ],
};
