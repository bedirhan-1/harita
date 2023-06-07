import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Arcgis } from "../../../types";

export interface CounterState {
  value: Arcgis;
}

const initialState: CounterState = {
  value: Arcgis.NatGeo_World_Map,
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<Arcgis>) => {
      state.value = action.payload;
    },
  },
});

export const { change } = switchSlice.actions;

export default switchSlice.reducer;
