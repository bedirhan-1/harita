import { Viewer } from "resium";
import ImageryLayers from "./ImageryLayers";
import { Arcgis } from "../types";

const Map = () => {
  return (
    <Viewer
      full
      timeline={false}
      animation={false}
      baseLayerPicker={false}
      homeButton={true}
      geocoder={false}
      navigationHelpButton={false}
      sceneModePicker={true}
      fullscreenButton={true}
      infoBox={false}
      navigationInstructionsInitiallyVisible={false}
      creditContainer={document.createElement("div")}
    >
      <ImageryLayers selected={Arcgis.World_Imagery} />
    </Viewer>
  );
};

export default Map;
