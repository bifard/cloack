import { Reducer } from "redux";
import { updateDateAction, UPDATE_DATE } from "./dateActions";

export type DateState = {
  milSec : number,
  sec: number,
  minutes: number,
  hours: number,
};
export const dateInitialState = {
  milSec: new Date().getMilliseconds(),
  sec: new Date().getSeconds(),
  minutes: new Date().getMinutes(),
  hours: new Date().getUTCHours(),
}

export const dateReducer: Reducer<DateState,updateDateAction> = (state = dateInitialState, action) => {
  switch(action.type){
    case UPDATE_DATE:
      return {
        ...state,
        milSec: action.date.milSec,
        sec: action.date.sec,
        minutes: action.date.minutes,
        hours: action.date.hours,
      }
    default:
      return state;
  }
}