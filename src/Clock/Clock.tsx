import React from "react";
import { useSelector } from "react-redux";
import { AnalogClock } from "../AnalogClock/AnalogClock";
import { DigitalClock } from "../DigitalClock/DigitalClock";
import { Dropdown } from "../Dropdown/Dropdown";
import { RootState } from "../store/reducer";
import { TimezoneState } from "../store/timezone/timezoneReducer";
import style from './clock.module.css';

interface IClockProps {
  date:{
    milSec: number,
    sec: number,
    minutes: number,
    hours: number,
  },
  timeZone: number,
  name: string,
  id: string,
  dropdownIsOpen: boolean,
}

export const Clock = ({date, timeZone, name, id, dropdownIsOpen}: IClockProps) =>{
  const zone = useSelector<RootState, TimezoneState>(state => state.timezone);
  return (
    <div className={style.container}>
      <AnalogClock date={date} timeZone={timeZone}/>
      <DigitalClock date={date} timeZone={timeZone}/>
      <Dropdown list={zone.data} name={name} id = {id} isOpen = {dropdownIsOpen}/>
    </div>
  );
}