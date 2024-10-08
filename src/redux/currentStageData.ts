import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Epic, ofType } from "redux-observable";
import { take, tap } from "rxjs";
import { OverrideItemData } from "../hook/useItem";
import { StoreState } from "./store";

export const STAGE_PREFIX = "STAGE";

export type StageData = {
  id: string;
  isDefault?: boolean;
  attrs: OverrideItemData<any>;
  className: string;
  children?: StageData[];
  prev?: StageData;
  next?: StageData;
};

export const stageDataEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(stageDataAction.addItem.type),
    take(1),
    tap((action$) => console.log("")),
  );

export const stageDataEntity = createEntityAdapter<StageData>();

export const stageDataSlice = createSlice({
  name: STAGE_PREFIX,
  initialState: stageDataEntity.setAll(stageDataEntity.getInitialState(), []),
  reducers: {
    addItem(state, action) {
      if (Array.isArray(action.payload)) {
        stageDataEntity.addMany(state, action.payload);
        return;
      }
      stageDataEntity.addOne(state, action.payload);
    },
    updateItem(state, action: PayloadAction<StageData | StageData[]>) {
      if (Array.isArray(action.payload)) {
        stageDataEntity.updateMany(
          state,
          action.payload.map((item) => ({
            id: item.id,
            changes: item.attrs,
          })),
        );
        return;
      }
      stageDataEntity.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
    },
    removeItem(state, action) {
      if (Array.isArray(action.payload)) {
        stageDataEntity.removeMany(state, action.payload);
        return;
      }
      stageDataEntity.removeOne(state, action.payload.id);
    },
    clearItems(state, action) {
      stageDataEntity.removeAll(state);
    },
  },
});

const stageDataReducer = stageDataSlice.reducer;

export const stageDataSelector = stageDataEntity.getSelectors(
  (state: StoreState) => state.currentStageData,
);
export const stageDataAction = stageDataSlice.actions;
export default stageDataReducer;
