import React from "react";
import { getTwoNumber } from "../utils/utils";
import style from './style.module.css'

interface IDateProps {
  date:{
    sec: number,
    minutes: number,
    hours: number,
  },
  timeZone: number,
}

export const DigitalClock =({date, timeZone}:IDateProps)=>{
  let {sec, minutes, hours} = date;
  hours += timeZone;
  hours = hours > 23 ? hours - 24 : hours;

  return(
    <div className={style.container}>
      <div>{getTwoNumber(hours)}</div>
      <div>:</div>
      <div>{getTwoNumber(minutes)}</div>
      <div>:</div>
      <div>{getTwoNumber(sec)}</div>
    </div>
  );
}