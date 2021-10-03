import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateListClock } from "../store/listClock/listClockAction";
import { IItemListClock } from "../store/listClock/listClockReducer";
import { RootState } from "../store/reducer";
import { ITimezone } from "../store/timezoneReducer";
import style from './dropdown.module.css'

interface IPropsDropdown {
  list: Array<ITimezone>,
  name: string,
  id: string,
  isOpen: boolean,
}

export const Dropdown = ({ list, name, id, isOpen }: IPropsDropdown) => {
  const listClock = useSelector<RootState, Array<IItemListClock>>(state => state.listClock);
  const timeZone = useSelector<RootState, Array<ITimezone>>(state => state.timezone.data);
  const dispatch = useDispatch();
  function onChange(e: React.MouseEvent<HTMLButtonElement | HTMLLIElement>) {
    const zone = timeZone.filter(item => item.name === e.currentTarget.textContent)[0];
    dispatch(updateListClock(listClock.map(item => item.id === id ? { name: e.currentTarget.textContent, id: id, timeZone: Number(zone.timezone), isOpen: !isOpen } : item)))
  }
  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={e => onChange(e)} id={id}>
        {name}</button>

      {
        isOpen &&
        <ul className={style.list}>
          {list.map((item, index) => (
            <li
              key={index}
              onClick={e => onChange(e)}
              id={item.name + id}
            >
              {item.name}</li>
          ))}
        </ul>

      }
    </div>
  );
}