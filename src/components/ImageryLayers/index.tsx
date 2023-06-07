import {
  ArcGisMapServerImageryProvider,
  TileMapServiceImageryProvider,
  UrlTemplateImageryProvider,
} from "cesium";
import { ImageryLayer as Layer } from "resium";
import { Arcgis } from "../../types";

interface ImageryLayersProps {
  selected: Arcgis;
}

const ImageryLayers = ({ selected }: ImageryLayersProps) => {
  const imageryProviderMap: { [key in Arcgis]: any } = {
    [Arcgis.World_Terrain_Base]: ArcGisMapServerImageryProvider,
    [Arcgis.World_Japanese_Map]: UrlTemplateImageryProvider,
    [Arcgis.World_Imagery]: ArcGisMapServerImageryProvider,
    [Arcgis.World_Shaded_Relief]: ArcGisMapServerImageryProvider,
    [Arcgis.World_Street_Map]: ArcGisMapServerImageryProvider,
    [Arcgis.World_Topo_Map]: ArcGisMapServerImageryProvider,
    [Arcgis.NatGeo_World_Map]: ArcGisMapServerImageryProvider,
    [Arcgis.World_Physical_Map]: ArcGisMapServerImageryProvider,
    [Arcgis.Normal]: null,
    [Arcgis.Offline_World_Map]: TileMapServiceImageryProvider,
  };

  const ImageryLayerComponent = (
    <Layer
      imageryProvider={new imageryProviderMap[selected]({ url: selected })}
    />
  );

  return <div>{ImageryLayerComponent}</div>;
};

export default ImageryLayers;
