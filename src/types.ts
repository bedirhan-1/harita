enum Arcgis {
  NatGeo_World_Map = "https://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer",
  World_Imagery = "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
  World_Physical_Map = "https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer",
  World_Shaded_Relief = "https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer",
  World_Street_Map = "https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer",
  World_Terrain_Base = "https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer",
  World_Topo_Map = "https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer",
  World_Japanese_Map = "https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",
  Normal = "",
  Offline_World_Map = "http://127.0.0.1:8000/images/{z}/{x}/{y}.png",
}

enum Frame {
  NatGeo_World_Map = "NatGeo_World_Map",
  world_Imagery = "world_Imagery",
  world_Physical_Map = "world_Physical_Map",
  world_Shaded_Relief = "world_Shaded_Relief",
  world_Street_Map = "world_Street_Map",
  world_Terrain_Base = "world_Terrain_Base",
  world_Topo_Map = "world_Topo_Map",
  world_Japanese_Map = "world_Japanese_Map",
  Normal = "Normal",
  Offline_World_Map = "Offline_World_Map",
}

export { Arcgis, Frame };
