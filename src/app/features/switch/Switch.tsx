import React from "react";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./switchSlice";
import { Arcgis } from "../../../types";

export function Switch() {
  const selectedSwitch = useSelector((state: RootState) => state.switch.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label='Switch'
          onClick={() =>
            dispatch(
              change(
                selectedSwitch === Arcgis.World_Imagery
                  ? Arcgis.World_Street_Map
                  : Arcgis.World_Imagery
              )
            )
          }
        />
      </div>
    </div>
  );
}
