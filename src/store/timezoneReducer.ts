import { Reducer } from "redux"
import { TimezoneAction, TIMEZONE_REQUEST, TIMEZONE_REQUEST_ERROR, TIMEZONE_REQUEST_SUCCESS } from "./timezone/timezoneActions"


export interface ITimezone {
  timezone: string,
  name: string,
}

export type TimezoneState = {
  loading: boolean,
  error: string,
  data: Array<ITimezone>,
}

const timezoneInitialDtate = {
  loading: false,
  error: '',
  data: [{
    'timezone': '1',
    'name': 'KRSK'
  }]
}
export const timezoneReducer: Reducer<TimezoneState, TimezoneAction> = (state = timezoneInitialDtate , action) => {
  switch (action.type) {
    case TIMEZONE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case TIMEZONE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case TIMEZONE_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}