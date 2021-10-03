import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Clock } from './Clock/Clock';
import { updateDate } from './store/date/dateActions';
import { DateState } from './store/date/dateReducer';
import { IItemListClock } from './store/listClock/listClockReducer';
import { RootState } from './store/reducer';
import { timezoneRequestAsync } from './store/timezone/timezoneActions';
import { TimezoneState } from './store/timezoneReducer';
import style from './style.module.css'

export function App() {
  const date = useSelector<RootState, DateState>(state => state.date);
  const listClock = useSelector<RootState, Array<IItemListClock>>(state => state.listClock);
  const {loading, error} = useSelector<RootState,TimezoneState>(state=>state.timezone)
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(timezoneRequestAsync())
  }, [dispatch])
  
  useEffect(()=>{
    const timer = setInterval(()=>{
      const date = new Date();
      dispatch(updateDate({
        milSec: date.getMilliseconds(),
        sec: date.getSeconds(),
        minutes: date.getUTCMinutes(),
        hours: date.getUTCHours(),
      }))
    },50)
    return ()=> {
      clearInterval(timer);
    }
  }, [dispatch])

  return (
    <div className={style.container}>
      {
        error && <div>
          <h1>УПС...</h1>
          {error}
        </div>

      }
      { !loading ?  
        (listClock.map((item)=>(
          <Clock key={item.id} date={date} timeZone={item.timeZone} name={item.name} id={item.id} dropdownIsOpen = {item.isOpen}/>
        ))): 'Loading....'
      }
    </div>
  );
}


