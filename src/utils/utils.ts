import { IItemListClock } from "../store/listClock/listClockReducer";

export function getRadiant(arg:number):number{
  return Math.PI*arg/180
}

export const getTwoNumber = (num:number) => {
  return num > 9 ? num :`0${num}`;
}

export const getRandomString = () => {
  return Math.random().toString(16)
}

export const getListClock = (item:{timezone:string, name:string}, num:number):Array<IItemListClock> => {
  const arr = [];
  for(num > 0; num--;){
    arr.push(
      {
        ...item,
        timeZone: Number(item.timezone),
        id: getRandomString(),
        isOpen: false,
      }
    )
  }
  return arr
}






/* 

({
  ...item,
  timeZone: Number(item.timeZone),
  id: getRandomString(),
  isOpen: false,
}) */