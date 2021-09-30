import { ActionCreator } from "redux";
import { DateState } from "./dateReducer";

export const UPDATE_DATE = 'UPDATE_DATE';
export type updateDateAction = {
  type: typeof UPDATE_DATE,
  date: DateState,
}

export const updateDate: ActionCreator<updateDateAction> = (date:DateState) => ({
  type: UPDATE_DATE,
  date,
})