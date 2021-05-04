import { WeatherState, WeatherAction, WeatherDataList, GET_WEATHER, SET_LOADING, SET_ERROR, GET_WEATHER_LIST, WeatherStateList, City } from '../types';

const initialState: WeatherState={
    list: null,
    loading:false,
    error:'',
    city:null,
    cnt: null,
    code: null,
    message: ''
}

export default (state=initialState, action:WeatherAction): WeatherState=>{
    switch(action.type){
       

        case GET_WEATHER_LIST:
            return{
                ...state,
                list: action.payload.list,
                city: action.payload.city,
                loading:false,
                error:'',
            }
        

        case SET_LOADING:
        return {
            ...state, 
            loading:true
        }

        case SET_ERROR:{
            return{
                ...state,
                error: action.payload,
                loading:false
            }
        }

        default:{
            return state;
        }
    }
}