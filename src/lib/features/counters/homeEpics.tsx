import {Epic, ofType} from "redux-observable";
import {Action} from "redux";
import {RootState} from "@/lib/store";
import {interval, map, switchMap, tap} from "rxjs";
import {homeCounterSlice, startHomeIncrement} from "@/lib/features/counters/homeCounters";

const homeEpic: Epic<Action, Action, RootState> = (action$, _state$) => action$.pipe(
  ofType(startHomeIncrement.type),
  switchMap(() => interval(1000).pipe(
    tap(() => console.log("incrementing counter")),
    map(() => homeCounterSlice.actions.increment())
  ))
)

export const homeEpics = [homeEpic]