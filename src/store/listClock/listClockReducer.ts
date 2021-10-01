import { Reducer } from "react";
import { getRandomString } from "../../utils/utils";
import { updateListClockAction, UPDATE_LIST_CLOCK } from "./listClockAction";

export interface IItemListClock {
  name: string,
  id: string,
  timeZone: number,
  isOpen: boolean,
}

export const ISListClock: Array<IItemListClock> = [
  {
    name:'Красноярск',
    id: getRandomString(),
    timeZone: +3,
    isOpen: false,
  },
  {
    id: getRandomString(),
    timeZone: +10,
    name: "Владивосток",
    isOpen: false,
  },
]

export const listClockReducer: Reducer<Array<IItemListClock>, updateListClockAction> = (state, action) => {
  switch(action.type){
    case UPDATE_LIST_CLOCK:
      return [
        ...action.listClock
      ]
    default:
      return state;
  }
}