import { Reducer } from "redux";
import { TimezoneAction, TIMEZONE_REQUEST, TIMEZONE_REQUEST_ERROR, TIMEZONE_REQUEST_SUCCESS } from "./timezone/timezoneActions";
import { timezoneReducer, TimezoneState} from "./timezone/timezoneReducer";

type RootState = {
  zone: string,
  timezone: TimezoneState ,
}

const initialState: RootState= {
  zone: 'qwe',
  timezone: {
    loading: false,
    error: '',
    data: [{
      'timezone' : '1',
      'name' : 'KRSK'
    }]
  }
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
    default: 
      return state;
  }
}
