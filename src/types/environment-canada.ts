import { Temporal } from '@js-temporal/polyfill';

export type TRawStation = {
  name: [string];
  province: [string];
  latitude: [string];
  longitude: [string];
  elevation: [string];
  climate_identifier: [string];
  wmo_identifier: [string];
  tc_identifier: [string];
};

export type TStation = {
  name: string;
  province: string;
  latitude: number;
  longitude: number;
  climate_identifier: string;
};

export type TRawWeatherDataPoint = {
  $: {
    day: '28';
    month: '12';
    year: '2017';
   };
  maxtemp: [
    {
      _: '-12.5';
      $: {
        description: 'Maximum Temperature';
        units: '°C';
      };
     }
  ];
  mintemp: [
    { _: '-22.5'; $: { description: 'Minimum Temperature'; units: '°C' } }
  ];
  meantemp: [
    { _: '-17.5'; $: { description: 'Mean Temperature'; units: '°C' } }
  ];
  heatdegdays: [
    { _: '35.5'; $: { description: 'Heating Degree Days'; units: '°C' } }
  ];
  cooldegdays: [
    { _: '0.0'; $: { description: 'Cooling Degree Days'; units: '°C' } }
  ];
  totalrain: [{ _: '0.0'; $: { description: 'Total Rain'; units: 'mm' } }];
  totalsnow: [{ _: '0.0'; $: { description: 'Total Snow'; units: 'cm' } }];
  totalprecipitation: [
    { _: '0.0'; $: { description: 'Total Precipitation'; units: 'mm' } }
  ];
  snowonground: [
    { _: '12'; $: { description: 'Snow on Ground'; units: 'cm' } }
  ];
  dirofmaxgust: [
    { $: { description: 'Direction of Maximum Gust'; units: '10s Deg' } }
  ];
  speedofmaxgust: [
    { _: '<31'; $: { description: 'Speed of Maximum Gust'; units: 'km/h' } }
  ];
};


export type TWeatherPoint = {
  date: string;
  meanTemp: number;
  minTemp: number;
  maxTemp: number;
  totalRain: number;
  station: TStation;
  totalPrecipitation: number;
  speedOfMaxGust: number;
  dirOfMaxGust: string;
};

export type TRawWeatherResponse = {
  climatedata: {
    '$': {
      'xmlns:xsd': 'http://www.w3.org/TR/xmlschema-1/';
      'xsd:schemaLocation': 'http://climate.weather.gc.ca/climate_data/bulkxml/bulkschema.xsd';
    };
    lang: [ 'ENG' ];
    stationinformation: TRawStation[];
    stationdata: TRawWeatherDataPoint[];
  };
};
