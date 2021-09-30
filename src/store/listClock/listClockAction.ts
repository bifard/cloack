import { ActionCreator } from "redux";
import { IItemListClock } from "./listClockReducer";

export const UPDATE_LIST_CLOCK = 'UPDATE_LIST_CLOCK';
export type updateListClockAction = {
  type: typeof UPDATE_LIST_CLOCK,
  listClock: Array<IItemListClock>,
}

export const updateListClock: ActionCreator<updateListClockAction> = (listClock) => ({
  type: UPDATE_LIST_CLOCK,
  listClock,
})