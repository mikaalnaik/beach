export type TRawStation = {
  name: string[];
  province: string[];
  latitude: string[];
  longitude: string[];
  elevation: string[];
  climate_identifier: string[];
  wmo_identifier: string[];
  tc_identifier: string[];
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
    day: string;
    month: string;
    year: string;
   };
  maxtemp: {
      _?: string; // number as a string
      $: {
        description: 'Maximum Temperature';
        units: '°C';
        flag?: 'M';
      };
     }[];
  mintemp: [
    { _?:string; $: { description: 'Minimum Temperature'; flag?: 'E' | 'M'; units: '°C' } }
  ];
  meantemp: [
    { _?: string; $: { description: 'Mean Temperature'; flag?: 'M'; units: '°C' } }
  ];
  heatdegdays: [
    { _?: string; $: { description: 'Heating Degree Days'; flag?: 'M'; units: '°C' } }
  ];
  cooldegdays: [
    { _?: string; $: { description: 'Cooling Degree Days'; flag?: 'M'; units: '°C' } }
  ];
  totalrain: [{ _?: string; $: { description: 'Total Rain'; units: 'mm' } }];
  totalsnow: [{ _?: string; $: { description: 'Total Snow'; units: 'cm' } }];
  totalprecipitation: [
    { _?: string; $: { description: 'Total Precipitation'; units: 'mm' } }
  ];
  snowonground: [
    { _?: string; $: { description: 'Snow on Ground'; units: 'cm' } }
  ];
  dirofmaxgust: [
    { _?: string; $: { description: 'Direction of Maximum Gust'; units: '10s Deg' } }
  ];
  speedofmaxgust: [
    { _?: string; $: { description: 'Speed of Maximum Gust'; units: 'km/h' } }
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
