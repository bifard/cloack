import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Clock } from './Clock/Clock';
import { updateDate } from './store/date/dateActions';
import { DateState } from './store/date/dateReducer';
import { IItemListClock } from './store/listClock/listClockReducer';
import { RootState } from './store/reducer';
import { timezoneRequestAsync } from './store/timezone/timezoneActions';
import style from './style.module.css'

export function App() {
  const date = useSelector<RootState, DateState>(state => state.date);
  const listClock = useSelector<RootState, Array<IItemListClock>>(state => state.listClock);
  const dispatch = useDispatch();
  useEffect(()=>{
    setTimeout(()=>{
      dispatch(timezoneRequestAsync())
    }, 5000)
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
        listClock.map((item)=>(
          <Clock key={item.id} date={date} timeZone={item.timeZone} name={item.name} id={item.id} dropdownIsOpen = {item.isOpen}/>
        ))
      }
    </div>
  );
}


