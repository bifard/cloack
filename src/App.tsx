import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnalogClock } from './AnalogClock/AnalogClock';
import { timezoneRequestAsync } from './store/timezone/timezoneActions';


export function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(timezoneRequestAsync())
  })
  return (
    <div>
      <AnalogClock timeZone={10}/>
      <AnalogClock timeZone={10}/>
    </div>
  );
}


