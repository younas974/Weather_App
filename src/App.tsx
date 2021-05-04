import React, {FC,useEffect} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import {RootState} from './store'
import Search from './components/search'
import Alert from './components/Alert'
import Weather from './components/Weather'
import {setAlert} from './store/actions/alertAction'
import {setError} from './store/actions/weatherAction'
import {getWeather, setLoading } from './store/actions/weatherAction'



const App: FC =()=>{

  const dispatch = useDispatch();
  const weatherDataList = useSelector((state: RootState)=> state.weather.list)
  const loading = useSelector((state: RootState)=> state.weather.loading)
  const error = useSelector((state: RootState)=> state.weather.error)
  const alertMsg = useSelector((state: RootState)=> state.alert.message)

  useEffect(() => {
    dispatch(setLoading())
     dispatch(getWeather())
  },[]);

  return (
    <div className="has-text-centered">
    
      {loading ? <h2 className="is-size-3 py-2">Loading ...</h2> : weatherDataList && <Weather data={weatherDataList} />}
      {alertMsg && <Alert message={alertMsg} onClose={()=>dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={()=> dispatch(setError())}/>}
  
   </div>
  );
}

export default App;
