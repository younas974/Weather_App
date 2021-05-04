import {ThunkAction} from 'redux-thunk'
import { RootState } from '../index';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER_LIST, GET_WEATHER, SET_LOADING, SET_ERROR, Weather, WeatherDataList, WeatherStateList } from '../types';


export const getWeather = (): ThunkAction<void, RootState, null , WeatherAction> =>{
    return async dispatch => {
        try{
            const res= await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40`);

            
            if(!res.ok){
                const resData: WeatherError =  await res.json();
               
                throw new Error(resData.message)
            }

            const resData:  WeatherStateList = await res.json();
            dispatch({
                type: GET_WEATHER_LIST, 
                payload: resData
            })
        }
        catch(err){
            dispatch({
                type: SET_ERROR,
                payload: err.message
            })
        }
    }
}


export const setLoading=(): WeatherAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction=> {
    return{
        type: SET_ERROR,
        payload: ''
    }
}