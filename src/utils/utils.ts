import { IItemListClock } from "../store/listClock/listClockReducer";
import { ITimeZoneApiDate } from "../store/timezone/timezoneActions";

export function getRadiant(arg: number): number {
  return Math.PI * arg / 180
}

export const getTwoNumber = (num: number) => {
  return num > 9 ? num : `0${num}`;
}

export const getRandomString = () => {
  return Math.random().toString(16)
}

export const getListClock = (item: ITimeZoneApiDate, num: number): Array<IItemListClock> => {
  const arr = [];
  for (num > 0; num--;) {
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

export function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>
    })
}



