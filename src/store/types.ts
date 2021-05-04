export const GET_WEATHER='GET_WEATHER';
export const GET_WEATHER_LIST='GET_WEATHER_LIST';
export const SET_LOADING='SET_LOADING';
export const SET_ERROR='SET_ERROR';
export const SET_ALERT='SET_ALERT';


export interface Weather{
    dispcription:string;
    icon:string;
    id:number;
    main:string;


}

export interface WeatherData{
    base:string;
    clouds:{
        all:number;

    };
    code:number;
    coord:{
        lon:number;
        late:number;
    };
    dt:number;
    dt_txt: string;
    id:number;
    main:{
        feels_like:number;
        grnd_level:number;
        humidety:number;
        pressure:number;
        sea_level:number;
        temp:number;
        temp_kf:number;
        temp_max:number;
        temp_min:number;

    };
    pop:number;
    name:string;
    sys:{
        pod:string;
        id:number;
        sunrise:number;
        sunset:number;
        type:number;

    };
    timezone:number;
    visibility:number;
    weather:Weather[];
    wind:{
        speed: number;
        deg:number;

    }
}


export interface City {
    id: number;
    name: string;
    country: string;
    population:number;
    timezone: number;
    sunrize: number;
    sunset: number;
    cord:{
        late: number;
        lon: number;
    }
}




export interface WeatherDataList{
    base:string;
    clouds:{
        all:number;

    };
    code:number;
    coord:{
        lon:number;
        late:number;
    };
    dt:number;
    dt_txt: string;
    id:number;
    main:{
        feels_like:number;
        grnd_level:number;
        humidety:number;
        pressure:number;
        sea_level:number;
        temp:number;
        temp_kf:number;
        temp_max:number;
        temp_min:number;

    };
    pop:number;
    name:string;
    sys:{
        pod:string;
        visibility:number

    };
    timezone:number;
    visibility:number;
    weather:Weather[];
    wind:{
        speed: number;
        deg:number;
        gust:number;

    }
}


export interface WeatherDataa{
    list:   WeatherDataList[] ;
    loading:boolean;
    error:string;
    city:City ;
    cnt: number ;
    code: number ;
    message: string;
   
}

export interface WeatherDataByDate{
    data: Date,
    temp: string;
}

export interface WeatherError{
    code:string;
    message:string
}

export interface WeatherState{
    list:   WeatherDataList[] | null ;
    loading:boolean;
    error:string;
    city:City  |null;
    cnt: number |null;
    code: number |null;
    message: string;
    
}

export interface WeatherStateList{
    list:   WeatherDataList[] |null;
    loading:boolean;
    error:string;
    city:City |null;
    cnt: number |null;
    code: number |null;
    message: string;
    

}



interface GetWeatherAction{
    type: typeof GET_WEATHER_LIST;
    payload: WeatherStateList
}

interface GetWeatherListAction{
    type: typeof GET_WEATHER_LIST;
    payload: WeatherStateList
}


interface SetLoadingAction{
    type: typeof SET_LOADING
    
}

interface SetErrorAction{
    type: typeof SET_ERROR
    payload:string
}

export type WeatherAction= GetWeatherAction| SetLoadingAction| SetErrorAction | GetWeatherListAction

export interface AlertAction{
    type: typeof SET_ALERT
    payload: string
}


export interface AlertState{
    message:string;

}
