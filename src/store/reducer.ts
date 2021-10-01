import { Reducer } from "redux";
import { UPDATE_DATE } from "./date/dateActions";
import { dateInitialState, dateReducer, DateState } from "./date/dateReducer";
import { IItemListClock, listClockReducer } from "./listClock/listClockReducer";
import { UPDATE_LIST_CLOCK } from "./listClock/listClockAction";
import { TimezoneAction, TIMEZONE_REQUEST, TIMEZONE_REQUEST_ERROR, TIMEZONE_REQUEST_SUCCESS } from "./timezone/timezoneActions";
import { timezoneReducer, TimezoneState} from "./timezone/timezoneReducer";

export type RootState = {
  timezone: TimezoneState,
  date: DateState,
  listClock: Array<IItemListClock>
}

const initialState: RootState= {
  date: dateInitialState,
  timezone: {
    loading: false,
    error: '',
    data: []
  },
  listClock: [],
}
type MyAction = TimezoneAction;
export const rootReducer: Reducer<RootState, MyAction | any> = (state = initialState, action) => {
  switch(action.type){
    case TIMEZONE_REQUEST:
    case TIMEZONE_REQUEST_ERROR:
    case TIMEZONE_REQUEST_SUCCESS:
      return {
        ...state,
        timezone: timezoneReducer(state.timezone, action),
      }
    case UPDATE_DATE:
      return {
        ...state,
        date: dateReducer(state.date, action),
      }
    case UPDATE_LIST_CLOCK:
      return {
        ...state,
        listClock: listClockReducer(state.listClock, action)
      }
    default: 
      return state;
  }
}
