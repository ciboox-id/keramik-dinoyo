(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "layout": "absolute",
 "minHeight": 20,
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_2746E6CE_3686_81F9_41BB_AA2E9D5F2258",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "borderSize": 0,
 "paddingLeft": 0,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_camera"
},
{
 "thumbnailUrl": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "6 c produksi",
 "id": "panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_A2CF500E_B0E1_A0F1_41DF_A6EE5B11FEF8",
  "this.overlay_44AD5960_5440_A42B_41C4_B7AEBCEA1A75"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3C80753A_26BB_3484_41B8_177295BC75A0",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Dennis ",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3C846538_26BB_3484_41AA_68AFF769FB66"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.03,
  "pitch": 0
 },
 "id": "camera_44943A6E_550E_4A94_41C9_BEA66A4E4491"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.85,
  "pitch": 0
 },
 "id": "camera_47958CF3_550E_4F8C_41CC_276DCBE424A5"
},
{
 "thumbnailUrl": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "6 a ismo",
 "id": "panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54",
   "backwardYaw": 23.85,
   "yaw": -76.08,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54",
   "backwardYaw": 23.85,
   "yaw": -76.08,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_661D4D27_71E1_9CA6_41C2_478B750AF521",
  "this.overlay_67FF0B37_71E2_84A7_41DB_73DADB6AC4A5"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.04,
  "pitch": 0
 },
 "id": "camera_45B6487A_550E_577C_41C6_6461D9F8D13E"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3C96C84A_2684_FC85_4182_3AC4857BE185",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Menuju Jalan Soekarno Hatta",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3C95E849_2684_FC87_41BB_AD0D5ACA2A30"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.83,
  "pitch": 0
 },
 "id": "camera_4450A9D5_550E_49B4_41C9_3ADDE7BCFBC9"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3983DA7E_2787_3D7C_41B9_3C0FACCE9650",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri SN",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3987CA7C_2787_3D7C_41B2_89372BB4ADDF"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_A2DD9FEA_B0E1_BF31_41DB_12BCEB9C504F",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Tempat Produksi",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A2D99FE9_B0E1_BF33_41D1_29CBE81DA41D"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_28728747_269B_348C_41AA_7151E4E17167_camera"
},
{
 "thumbnailUrl": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Gerbang Logo",
 "id": "panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "backwardYaw": -129.18,
   "yaw": 10.85,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_69B000F0_71E1_85BA_418B_D74F81A0B66C"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.19,
  "pitch": 0
 },
 "id": "camera_44AB9AF2_550E_4B8C_41A4_CBD5CBA4A1D8"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -61.67,
  "pitch": 0
 },
 "id": "camera_4569E7F1_550E_598C_41CE_FC879FA482B6"
},
{
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_24E4ACAA_3681_81B8_41B7_0E225B711BF3.mp3",
  "oggUrl": "media/audio_24E4ACAA_3681_81B8_41B7_0E225B711BF3.ogg"
 },
 "data": {
  "label": "dinoyo_indo"
 },
 "class": "MediaAudio",
 "id": "audio_24E4ACAA_3681_81B8_41B7_0E225B711BF3",
 "autoplay": true
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1)",
   "media": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2)",
   "media": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 3)",
   "media": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 3, 0)",
   "media": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_camera"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 103.92,
  "pitch": 0
 },
 "id": "camera_44846A99_550E_4BBF_41C2_799501C4AE7E"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.02,
  "pitch": 0
 },
 "id": "camera_47767CB9_550E_4FFF_41CF_1296203EE2A6"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3F3E5B36_268B_3C8D_41C2_1FE84134A53A",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Menuju Jalan Tlogomas",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3F024B34_268B_3C8D_41B7_B4019F24E180"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "opacity": 0.4,
 "fontFamily": "Arial",
 "children": [
  {
   "class": "MenuItem",
   "label": "Gerbang Utama Keramik",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "Gerbang Logo",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "3 rute b",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "4 pusat",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "5 gang",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "6 a ismo dalam",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "6 a ismo",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "class": "MenuItem",
   "label": "6 b keramik samsul dalam",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "class": "MenuItem",
   "label": "6 b keramik samsul",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "class": "MenuItem",
   "label": "6 c produksi",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "class": "MenuItem",
   "label": "6",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "class": "MenuItem",
   "label": "7 gang a",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "class": "MenuItem",
   "label": "7 gang",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "class": "MenuItem",
   "label": "galeri CJDW",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "class": "MenuItem",
   "label": "galeri dennis a dalam",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "class": "MenuItem",
   "label": "galeri dennis a",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "class": "MenuItem",
   "label": "galeri dennis b",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "class": "MenuItem",
   "label": "galeri family",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "class": "MenuItem",
   "label": "Galeri Firman",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "class": "MenuItem",
   "label": "Galeri Istana Jaya",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "class": "MenuItem",
   "label": "galeri kamel",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "class": "MenuItem",
   "label": "galeri la rich",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "class": "MenuItem",
   "label": "galeri ragiel",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "class": "MenuItem",
   "label": "galeri riyati",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "class": "MenuItem",
   "label": "galeri SN produksi",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "class": "MenuItem",
   "label": "galeri SN",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "class": "MenuItem",
   "label": "galeri suharto",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "class": "MenuItem",
   "label": "galeri yans",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "label": "Media",
 "id": "Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "class": "Menu",
 "rollOverOpacity": 0.8,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.74,
  "pitch": 0
 },
 "id": "camera_47518C80_550E_4F8C_41D1_80AE0EF22023"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.85,
  "pitch": 0
 },
 "id": "camera_459D9812_550E_568C_41CC_41E422C4B141"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.59,
  "pitch": 0
 },
 "id": "camera_44DB2B1B_550E_4ABC_41BC_D136D1AD0AFD"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.69,
  "pitch": 0
 },
 "id": "camera_4574D7CF_550E_5994_41D2_672DCC43048D"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "media": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "media": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3)",
   "media": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4)",
   "media": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 5)",
   "media": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 5, 6)",
   "media": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 6, 7)",
   "media": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 7, 8)",
   "media": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 8, 9)",
   "media": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 9, 10)",
   "media": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 10, 11)",
   "media": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 11, 12)",
   "media": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 12, 13)",
   "media": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 13, 14)",
   "media": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 14, 15)",
   "media": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 15, 16)",
   "media": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 16, 17)",
   "media": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 17, 18)",
   "media": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 18, 19)",
   "media": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 19, 20)",
   "media": "this.panorama_28728747_269B_348C_41AA_7151E4E17167",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728747_269B_348C_41AA_7151E4E17167_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 20, 21)",
   "media": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 21, 22)",
   "media": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 22, 23)",
   "media": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 23, 24)",
   "media": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 24, 25)",
   "media": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 25, 26)",
   "media": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 26, 27)",
   "media": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 27, 0)",
   "media": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70_camera"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.21,
  "pitch": 0
 },
 "id": "camera_45A5989A_550E_57BC_417F_F03F50CB228D"
},
{
 "thumbnailUrl": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "4 pusat",
 "id": "panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "backwardYaw": 1.26,
   "yaw": -91.31,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93",
   "backwardYaw": 97.57,
   "yaw": -78.17,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4",
   "backwardYaw": -176.98,
   "yaw": 94.11,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "backwardYaw": 164.59,
   "yaw": -4.45,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_7C69C965_6FE2_84DA_41D2_B940D674BFF8",
  "this.overlay_7BB399E4_6FE3_87DA_41C8_C37AF42B0677",
  "this.overlay_7C5B2D6E_6FE2_9CA6_41BA_3F9E0E05596A",
  "this.overlay_6612583E_7021_84A9_4194_926E39A9F0E5",
  "this.overlay_35FC4693_268B_1584_41BE_6217E662A3DE",
  "this.overlay_3280D2FB_268B_0D84_41C3_08312B24A7DB",
  "this.overlay_32BAD1CB_2685_0F9B_41B3_45EAD24EC7FD"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.68,
  "pitch": 0
 },
 "id": "camera_4440D9F3_550E_498C_41D1_A1A2F3C2F00D"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.85,
  "pitch": 0
 },
 "id": "camera_441FC93C_550E_56F5_41CF_D376598B5FDC"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_28728747_269B_348C_41AA_7151E4E17167",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728747_269B_348C_41AA_7151E4E17167_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
   "media": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.85,
  "pitch": 0
 },
 "id": "camera_45D5F8BA_550E_57FC_41C7_C8D6DC18C6DA"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_camera"
},
{
 "thumbnailUrl": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "3 rute b",
 "id": "panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725",
   "backwardYaw": 10.85,
   "yaw": -129.18,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5",
   "backwardYaw": -102.17,
   "yaw": -10.15,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690",
   "backwardYaw": 172.86,
   "yaw": -1.47,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_28728747_269B_348C_41AA_7151E4E17167",
   "backwardYaw": -143,
   "yaw": -16.55,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "backwardYaw": -91.31,
   "yaw": 1.26,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "backwardYaw": -91.31,
   "yaw": -129.18,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6AF70800_71E2_845A_41C2_6ADFAC424230",
  "this.overlay_6A43E310_71E1_847A_4170_BCD465B15A42",
  "this.overlay_A234FE58_B0E3_A111_41CD_8DCF940DBA35",
  "this.overlay_37B4C697_268D_F58C_41A4_11AB0EB920AB",
  "this.overlay_34A8C7B1_268D_7384_41B6_CB628F033A74",
  "this.overlay_37B40803_268C_FC8B_41C1_91958A8B2DA6"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3C6792D1_2685_0D87_41B4_08B530887757",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Gerbang Utama",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3C6B82CF_2685_0D9B_41C1_B42E3137B1C8"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2871FF57_269B_348B_418E_603251F2CF70_camera"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3BBE10A3_268D_0D84_414A_F14D55577F28",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri La Rich",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3BBA00A2_268D_0D84_41AA_752DDD745BA2"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_29F08508_269B_1484_41A3_A58EB64459F5_camera"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_38EE95EC_2685_179D_41A1_9DB17F8B333E",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Ragiel",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_38F2A5EB_2685_179B_41C2_CCB71613AC30"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri ragiel",
 "id": "panorama_287247BC_269B_13FC_41C2_F31A2986EDF4",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
   "backwardYaw": -93.74,
   "yaw": -101.96,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_38D9763B_2685_14FB_41B1_F0477557FA18",
  "this.overlay_38BB8585_2687_378C_41B7_29A0DF0C4001",
  "this.overlay_3867238B_277B_139B_41BD_71FFD1577F33"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 106.58,
  "pitch": 0
 },
 "id": "camera_4702DC27_550E_4E94_41B0_EBE76483C187"
},
{
 "class": "ImageResource",
 "id": "ImageResource_BD413263_A9FF_A18E_41C7_0DF39B721A21",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_A616331F_A9F6_67B6_41E2_69C1C0CBC130_0_0.jpg",
   "width": 2480,
   "height": 3508
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_A616331F_A9F6_67B6_41E2_69C1C0CBC130_0_1.jpg",
   "width": 1447,
   "height": 2048
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_A616331F_A9F6_67B6_41E2_69C1C0CBC130_0_2.jpg",
   "width": 723,
   "height": 1024
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/zoomImage_A616331F_A9F6_67B6_41E2_69C1C0CBC130_0_3.jpg",
   "width": 361,
   "height": 512
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri kamel",
 "id": "panorama_28729730_269B_1484_41A5_6EE78C208A93",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "backwardYaw": -78.17,
   "yaw": 97.57,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3BC51A26_2685_1C8C_4187_63DFF368E1A8",
  "this.overlay_3BE239B0_268B_7F85_41A0_166488FFC330",
  "this.overlay_3B8258E0_268B_FD84_41B5_5A4AF680B688"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.82,
  "pitch": 0
 },
 "id": "camera_44EF2BAC_550E_4994_41B1_8AFF26E497C3"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_32641EAB_2685_3584_41C2_BBBF36857A8C",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Irama Baru",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3218AEA9_2685_3584_41C1_E166E453FFBD"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.15,
  "pitch": 0
 },
 "id": "camera_452C4712_550E_5A8D_41D0_30CAB04EABB9"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3839AFE1_2785_F384_4194_AA2B1C69C68D",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Suharto",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_383D9FE0_2785_F384_419A_43743A858DE6"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.31,
  "pitch": 0
 },
 "id": "camera_440F195E_550E_56B4_41D3_CE8F0F9F714A"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_287290B7_269B_0D8C_419C_D10032C9F004_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.25,
  "pitch": 0
 },
 "id": "camera_4785DD0F_550E_4E94_41CA_6241D7F88BB7"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_A25CAE15_B0E3_A113_41E6_12AE051E4DCB",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Gerbang Utama",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_A259FE14_B0E3_A111_41DE_21063FCC9CFF"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_381CB4F0_278D_1585_41B2_6CED4DA08200",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Cendera mata",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_381884EF_278D_159B_41C2_C0D40C98021C"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.01,
  "pitch": 0
 },
 "id": "camera_45937839_550E_56FC_41D3_E6784C5F3CD1"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_camera"
},
{
 "thumbnailUrl": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri SN",
 "id": "panorama_2871B343_269B_0C84_41C2_24521148DC12",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "backwardYaw": 118.33,
   "yaw": 117.15,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_39923AAF_2787_3D9C_415A_236DA7DC34E7",
  "this.overlay_3866951A_2785_7484_41A9_BA372612BCB6"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Galeri Firman",
 "id": "panorama_28729A35_269B_1C8C_41C0_5A525D7087D6",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "backwardYaw": -28.99,
   "yaw": 87.61,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3A995DBB_269B_77FB_41B5_5AE56A21477A",
  "this.overlay_3A888CA1_269B_1584_41C1_6267839DF602"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in",
 "id": "FadeInEffect_BD412263_A9FF_A18E_41D1_FB554AD1C292",
 "duration": 500
},
{
 "thumbnailUrl": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri SN produksi",
 "id": "panorama_28713489_269B_7584_41AF_BDD2D82C2BC0",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
   "backwardYaw": 3.4,
   "yaw": 117.15,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_39EF763C_277B_14FC_41AA_24459C5E4DF8",
  "this.overlay_384F2D13_2785_1484_41C2_CEC81A82F843"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.74,
  "pitch": 0
 },
 "id": "camera_45CB18DB_550E_57BC_41BD_3C6617B4C765"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "media": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "media": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "media": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "media": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "media": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "media": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 7)",
   "media": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 7, 8)",
   "media": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 8, 9)",
   "media": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 9, 10)",
   "media": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 10, 11)",
   "media": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 11, 12)",
   "media": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 12, 13)",
   "media": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 13, 14)",
   "media": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 14, 15)",
   "media": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 15, 16)",
   "media": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 16, 17)",
   "media": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 17, 18)",
   "media": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 18, 19)",
   "media": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 19, 20)",
   "media": "this.panorama_28728747_269B_348C_41AA_7151E4E17167",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728747_269B_348C_41AA_7151E4E17167_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 20, 21)",
   "media": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 21, 22)",
   "media": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 22, 23)",
   "media": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 23, 24)",
   "media": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 24, 25)",
   "media": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 25, 26)",
   "media": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 26, 27)",
   "media": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 27, 0)",
   "media": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70_camera"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.14,
  "pitch": 0
 },
 "id": "camera_455B2767_550E_5A94_4188_33C11C78C5CA"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3D42508A_2685_0D84_41C1_DB21E4E69EDA",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Dennis ",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3D464083_2685_0D84_41C1_E0A01D18769A"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "6 a ismo dalam",
 "id": "panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_389AB41F_278D_34BC_41B8_36EAAEBE5A9F",
  "this.overlay_39EB836D_278D_0C9C_41C1_074C0A6E8086"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "5 gang",
 "id": "panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "backwardYaw": 94.11,
   "yaw": -176.98,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_66A59D25_7021_BC5A_418C_09668296C0E0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.53,
  "pitch": 0
 },
 "id": "camera_4476EA0F_550E_4A94_41C7_574F2AEB2B30"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2872DC00_269B_7484_41B9_A8651744E690_camera"
},
{
 "thumbnailUrl": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri riyati",
 "id": "panorama_2873474B_269B_1484_41BB_4A97A6109E6C",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
   "backwardYaw": -61.12,
   "yaw": -170.79,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_39EC3A56_277F_1C8C_41A4_6F747F12E2B2",
  "this.overlay_381516D9_277D_7584_41AC_65C4CC67D711"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3AA8FD4C_269B_749D_41A5_825142A6A23F",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Firman",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3AA4ED45_269B_748F_41BC_43618A3EEB6B"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2873474B_269B_1484_41BB_4A97A6109E6C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.98,
  "pitch": 0
 },
 "id": "camera_45E8791A_550E_56BC_41A3_4655F000DCA3"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.69,
  "pitch": 0
 },
 "id": "camera_454027AE_550E_5994_41CC_8D752EE85C31"
},
{
 "thumbnailUrl": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Gerbang Utama Keramik",
 "id": "panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3CCD4594_268B_378C_41A3_BCDF1B7C9890",
  "this.overlay_3F287B81_268B_3387_41B8_97F33EAD908F",
  "this.overlay_3CAF38A0_2684_FD85_41A1_4E9CADE45A6B",
  "this.overlay_3C0DC31D_2685_0CBF_41C1_34361CB15197"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "6 b keramik samsul",
 "id": "panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8",
   "backwardYaw": -120.97,
   "yaw": -69.15,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188",
   "backwardYaw": -76.08,
   "yaw": 23.85,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F"
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_67761B31_71E6_84BA_41C6_92540CA66533",
  "this.overlay_67FDC1F4_71E1_87B9_41CE_AB0813EDEDCA",
  "this.overlay_679934F8_71E2_8DA9_41BB_2EA18F00762A"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri yans",
 "id": "panorama_2871FF57_269B_348B_418E_603251F2CF70",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F",
   "backwardYaw": -0.32,
   "yaw": -169.41,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_386F7BA4_278B_F38C_41AE_31D2887D13CC",
  "this.overlay_387797D2_278D_1385_41BA_8DB8C2AC16BA"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.43,
  "pitch": 0
 },
 "id": "camera_47464C9D_550E_4FB4_41A0_B374666B7E92"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_385D8B51_278B_FC84_41C2_3C48EE323ECF",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Yans",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_385A7B4F_278B_FC9B_41A0_833D0CCD2E6F"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2871B343_269B_0C84_41C2_24521148DC12_camera"
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.39,
  "pitch": 0
 },
 "id": "camera_45F8C8FB_550E_577C_41C0_91311A60014E"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
   "media": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
   "media": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3)",
   "media": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 4)",
   "media": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 4, 5)",
   "media": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 5, 6)",
   "media": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 6, 7)",
   "media": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 7, 8)",
   "media": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 8, 9)",
   "media": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 9, 10)",
   "media": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 10, 11)",
   "media": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 11, 12)",
   "media": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 12, 13)",
   "media": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 13, 14)",
   "media": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 14, 15)",
   "media": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 15, 16)",
   "media": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 16, 17)",
   "media": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 17, 18)",
   "media": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 18, 19)",
   "media": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 19, 20)",
   "media": "this.panorama_28728747_269B_348C_41AA_7151E4E17167",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728747_269B_348C_41AA_7151E4E17167_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 20, 21)",
   "media": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 21, 22)",
   "media": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 22, 23)",
   "media": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 23, 24)",
   "media": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 24, 25)",
   "media": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 25, 26)",
   "media": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 26, 27)",
   "media": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 27, 0)",
   "media": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70_camera"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_28729730_269B_1484_41A5_6EE78C208A93_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_camera"
},
{
 "thumbnailUrl": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri family",
 "id": "panorama_2872DC00_269B_7484_41B9_A8651744E690",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "backwardYaw": -1.47,
   "yaw": 172.86,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3D29739E_2685_13BC_418B_EFDE20D55408",
  "this.overlay_3D12CD78_2687_1484_41AD_2950475AF04D"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3CEE5C46_2687_F48A_41BC_B67E8CF564B3",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri CJDW",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3CF24C45_2687_F48F_4194_9A0F102AC8D1"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 118.88,
  "pitch": 0
 },
 "id": "camera_470C1C07_550E_4E94_41D4_4ABCCBA2FF96"
},
{
 "thumbnailUrl": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "6",
 "id": "panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6",
   "backwardYaw": -163.92,
   "yaw": -73.42,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4",
   "backwardYaw": -101.96,
   "yaw": -93.74,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C",
   "backwardYaw": -170.79,
   "yaw": -61.12,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0",
   "backwardYaw": 117.15,
   "yaw": 3.4,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_69CC3ABF_71E2_85A7_41C8_73351FD8EB84",
  "this.overlay_35740FBE_26BD_13FD_4186_78FEEDB6EF24",
  "this.overlay_32A14BD0_26BD_1384_41B3_279759A8EF03",
  "this.overlay_32305A84_26BD_1D8C_4193_81C647891FF5",
  "this.overlay_32772EE8_2685_3584_4135_EFF071DFE410",
  "this.overlay_33177D86_268D_178C_4161_2B5CAD224CD4"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
   "media": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "media": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3)",
   "media": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4)",
   "media": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5)",
   "media": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6)",
   "media": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7)",
   "media": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8)",
   "media": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9)",
   "media": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10)",
   "media": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11)",
   "media": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12)",
   "media": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 13)",
   "media": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 13, 14)",
   "media": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 14, 15)",
   "media": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 15, 16)",
   "media": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 16, 17)",
   "media": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 17, 18)",
   "media": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 18, 19)",
   "media": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 19, 20)",
   "media": "this.panorama_28728747_269B_348C_41AA_7151E4E17167",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728747_269B_348C_41AA_7151E4E17167_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 20, 21)",
   "media": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 21, 22)",
   "media": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 22, 23)",
   "media": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 23, 24)",
   "media": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 24, 25)",
   "media": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 25, 26)",
   "media": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 26, 27)",
   "media": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 27, 0)",
   "media": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70_camera"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist"
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "media": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "media": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "media": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4)",
   "media": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5)",
   "media": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6)",
   "media": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 7)",
   "media": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 7, 8)",
   "media": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 8, 9)",
   "media": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 9, 10)",
   "media": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 10, 11)",
   "media": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 11, 12)",
   "media": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 12, 13)",
   "media": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 13, 14)",
   "media": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_29F08508_269B_1484_41A3_A58EB64459F5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 14, 15)",
   "media": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 15, 16)",
   "media": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 16, 17)",
   "media": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 17, 18)",
   "media": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2872DC00_269B_7484_41B9_A8651744E690_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 18, 19)",
   "media": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 19, 20)",
   "media": "this.panorama_28728747_269B_348C_41AA_7151E4E17167",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28728747_269B_348C_41AA_7151E4E17167_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 20, 21)",
   "media": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28729730_269B_1484_41A5_6EE78C208A93_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 21, 22)",
   "media": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 22, 23)",
   "media": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 23, 24)",
   "media": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 24, 25)",
   "media": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 25, 26)",
   "media": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 26, 27)",
   "media": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 27, 0)",
   "media": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70_camera"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.19,
  "pitch": 0
 },
 "id": "camera_44F94B80_550E_498C_41B1_1E60A5E2EB3D"
},
{
 "thumbnailUrl": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri dennis a dalam",
 "id": "panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004",
   "backwardYaw": 31.13,
   "yaw": 131.82,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3C900584_26BB_378C_41C0_95698DFB661A",
  "this.overlay_3C656600_268D_1484_4199_A104D43CB6D0"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_camera"
},
{
 "thumbnailUrl": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "Galeri Istana Jaya",
 "id": "panorama_28728747_269B_348C_41AA_7151E4E17167",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "backwardYaw": -16.55,
   "yaw": -143,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3AF4AFA7_2685_338C_41C0_7DA2D38F7552",
  "this.overlay_3BDB1AF5_2687_1D8F_41A3_6994AADC2AA6"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_39DFF60E_277B_149C_41B3_0815B3FEEF06",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Produksi Galeri SN",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_39D3C60D_277B_149C_41BC_9AB70A6FB867"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_30059B51_2685_3C84_41B3_E041B7D23DBC",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Rita",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3005DB50_2685_3C84_419A_81610933F165"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129.72,
  "pitch": 0
 },
 "id": "camera_442309B7_550E_49F4_4193_3AE78ACC6B75"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_388B73D7_278D_338C_416B_4D53F748FB6A",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Cendera mata",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_387763D7_278D_338C_41A5_A8EFBB9CCEAF"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.55,
  "pitch": 0
 },
 "id": "camera_443DC97C_550E_4975_41C4_4964A5648BDD"
},
{
 "thumbnailUrl": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "7 gang a",
 "id": "panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2871FF57_269B_348B_418E_603251F2CF70",
   "backwardYaw": -169.41,
   "yaw": -0.32,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA",
   "backwardYaw": -174.56,
   "yaw": 31.81,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "backwardYaw": -11.81,
   "yaw": 173.02,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_30139BA3_2685_3384_41BB_1C231A80F266",
  "this.overlay_3089C050_269D_0C84_41C0_8E8A9D6A5F3F",
  "this.overlay_308AFA03_269B_1C84_41C0_EFC730A257F4",
  "this.overlay_31DB211D_2685_0CBC_41B9_972AD9B66BD4"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.41,
  "pitch": 0
 },
 "id": "camera_4767ECD5_550E_4FB7_41C6_33912A5FBF5E"
},
{
 "thumbnailUrl": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri dennis a",
 "id": "panorama_287290B7_269B_0D8C_419C_D10032C9F004",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6",
   "backwardYaw": 131.82,
   "yaw": 31.13,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "backwardYaw": 50.28,
   "yaw": -101.69,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3C0CF843_268C_FC84_41AC_D129DB8ACE8B",
  "this.overlay_3DC5020E_268B_0C9C_4181_6BA4ECE55D3C"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_camera"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3BD509B4_2685_1F8C_41AE_9894D1D8343E",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Kamel",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3BE919B2_2685_1F84_41A4_91BA6CD0D0B7"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "thumbnailUrl": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri CJDW",
 "id": "panorama_29F08508_269B_1484_41A3_A58EB64459F5",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D",
   "backwardYaw": -10.15,
   "yaw": -102.17,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3CE3FC98_2687_F584_41B2_A320A23DA149",
  "this.overlay_3CDA0D2B_26BD_1484_41C1_6D3AE486FBFD"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "6 b keramik samsul dalam",
 "id": "panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54",
   "backwardYaw": -69.15,
   "yaw": -120.97,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_68FBB7D6_71E2_8BF9_41C5_248109D5ECF6",
  "this.overlay_382CC51B_278D_14BA_41A2_FC7D11D5F737"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.08,
  "pitch": 0
 },
 "id": "camera_4586A859_550E_56BF_41D1_BF9EDB38A91A"
},
{
 "thumbnailUrl": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri suharto",
 "id": "panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE",
   "backwardYaw": -73.42,
   "yaw": -163.92,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3849803F_2785_0CFC_41BB_4BC5F50E469A",
  "this.overlay_38134266_278B_0C8D_41A9_3F3889859D06"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_out",
 "id": "FadeOutEffect_BD410263_A9FF_A18E_41E1_ED2B0010F109",
 "duration": 500
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77.83,
  "pitch": 0
 },
 "id": "camera_45268742_550E_5A8C_41C4_E010FEE711F3"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.15,
  "pitch": 0
 },
 "id": "camera_47338C44_550E_4E95_41C5_03F28C683A5D"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_28728E38_269B_1485_419C_72C1F63A41A3_camera"
},
{
 "thumbnailUrl": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "7 gang",
 "id": "panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_28728E38_269B_1485_419C_72C1F63A41A3",
   "backwardYaw": 82.26,
   "yaw": -18.75,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6",
   "backwardYaw": 87.61,
   "yaw": -28.99,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F",
   "backwardYaw": 173.02,
   "yaw": -11.81,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2871B343_269B_0C84_41C2_24521148DC12",
   "backwardYaw": 117.15,
   "yaw": 118.33,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_287290B7_269B_0D8C_419C_D10032C9F004",
   "backwardYaw": -101.69,
   "yaw": 50.28,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91",
   "backwardYaw": -4.45,
   "yaw": 164.59,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6A46E890_71E2_8479_41B8_6BEE2AAD3A57",
  "this.overlay_314B6BB6_2685_338D_41B8_ADE72C94FE7E",
  "this.overlay_3EE49A82_268B_3D85_41BC_FEE397C36975",
  "this.overlay_3E7463CB_268D_3384_418C_B7ADF5B34155",
  "this.overlay_3E02E6D3_268D_158B_41C1_E17D0F6EA76A",
  "this.overlay_3E2BE2C5_268F_0D8C_41B7_C76A3F301AE4"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.45,
  "pitch": 0
 },
 "id": "camera_47ABDD46_550E_4E94_41D0_C23FE884D316"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3D5C032F_2685_0C9C_41A6_7A0DADD1DAD3",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Family",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3D40132D_2685_0C9C_41BE_A30F9D2511D6"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.6,
  "pitch": 0
 },
 "id": "camera_44663A40_550E_4A8D_41D1_C0081B4BF93E"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.15,
  "pitch": 0
 },
 "id": "camera_47207C63_550E_4E8C_41C9_F7CC86808054"
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_39E239F7_277F_1F8C_41A7_D450D2CFDADD",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Riyati",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_39DE09F6_277F_1F8C_41BE_37D9B0DB1012"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.87,
  "pitch": 0
 },
 "id": "camera_471C9BD9_550E_49BF_41AB_43EED163E108"
},
{
 "thumbnailUrl": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri la rich",
 "id": "panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F",
   "backwardYaw": 31.81,
   "yaw": -174.56,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3BAD90CD_268D_0D9C_41BD_E8C8BD460D93",
  "this.overlay_3B1B9ED7_268B_358B_41B3_E469395796ED"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.89,
  "pitch": 0
 },
 "id": "camera_44B5BAC6_550E_4B94_41B4_18B776733131"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.18,
  "pitch": 0
 },
 "id": "camera_442D599A_550E_49BC_418B_DA17755E7E0B"
},
{
 "thumbnailUrl": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_t.jpg",
 "partial": false,
 "class": "Panorama",
 "label": "galeri dennis b",
 "id": "panorama_28728E38_269B_1485_419C_72C1F63A41A3",
 "cardboardMenu": "this.Menu_451146B3_550E_5B8C_41D0_DDF91CD89C67",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD",
   "backwardYaw": -18.75,
   "yaw": 82.26,
   "distance": 1
  }
 ],
 "hfovMin": "135%",
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_3D2E30E4_2685_0D8C_41A5_5A19F6C3080B",
  "this.overlay_3D8872B6_2685_0D8D_41C1_12F2DA87F132"
 ],
 "hfov": 360,
 "pitch": 0
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3A2CCED4_2685_358C_41A5_9E3BEF84A38F",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Galeri Istana Jaya",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3A20FECC_2685_359C_4190_4E7669C4448B"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "shadowHorizontalLength": 3,
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_3839532E_277B_0C9C_4187_A94F9D1706CC",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "shadow": true,
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "scrollBarWidth": 10,
 "modal": true,
 "verticalAlign": "middle",
 "headerVerticalAlign": "middle",
 "titlePaddingLeft": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "title": "Jalan Menuju Tegal Gondo",
 "height": 350,
 "scrollBarColor": "#000000",
 "class": "Window",
 "bodyPaddingLeft": 5,
 "backgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "closeButtonIconHeight": 12,
 "bodyPaddingTop": 5,
 "gap": 10,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonBackgroundColor": [],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "titleFontColor": "#FFFFFF",
 "headerBorderSize": 0,
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "titleFontSize": "3vmin",
 "shadowVerticalLength": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "backgroundColor": [],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderColor": "#000000",
 "veilColorDirection": "horizontal",
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "titlePaddingBottom": 5,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "shadowSpread": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "titleFontWeight": "bold",
 "closeButtonIconLineWidth": 2,
 "backgroundOpacity": 1,
 "children": [
  "this.htmlText_3834732E_277B_0C9C_41C0_50CB559A9521"
 ],
 "headerPaddingLeft": 10,
 "footerBackgroundOpacity": 1,
 "overflow": "scroll",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "minWidth": 20,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerBackgroundColor": [
  "#3E5CB8"
 ],
 "paddingLeft": 0,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "footerBorderColor": "#000000",
 "bodyBorderColor": "#000000",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "footerBorderSize": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "titleFontFamily": "Arial",
 "bodyPaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window15173"
 },
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37,
  "pitch": 0
 },
 "id": "camera_454FF78A_550E_599C_41A8_4628AC9F219E"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.26,
  "pitch": 0
 },
 "id": "camera_47BA7D29_550E_4E9C_41D1_18AE6A00BE3E"
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.44,
  "pitch": 0
 },
 "id": "camera_44C9CB4A_550E_4A9C_41C1_5FCC7FE374CB"
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "10px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
  "this.Image_5DA02F90_4081_3161_41CF_9A3B619DAC33"
 ],
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "layout": "absolute",
 "minHeight": 1,
 "width": 271,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "bottom": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 97,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "--BUTTON SET"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "data": {
  "name": "-button set"
 },
 "scrollBarOpacity": 0.5,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "layout": "vertical",
 "minHeight": 1,
 "width": 60,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": 15,
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "height": 300,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0.02
 ],
 "top": 62,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
  "this.IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18",
  "this.IconButton_B74E92BD_A090_3959_41E2_B32C2E223160",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "paddingRight": 30,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "35.793%",
 "height": 90,
 "scrollBarColor": "#000000",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "---INFO photo"
 },
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---PANORAMA LIST"
 },
 "id": "Container_2746E6CE_3686_81F9_41BB_AA2E9D5F2258",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_274626CE_3686_81F9_41C7_EE811DED4670"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2746E6CE_3686_81F9_41BB_AA2E9D5F2258, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---FLOORPLAN"
 },
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---PHOTOALBUM"
 },
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "data": {
  "name": "---REALTOR"
 },
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "0%",
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#04A3E1",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "minHeight": 0,
 "backgroundOpacity": 0.55,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "UIComponent",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "UIComponent2842"
 },
 "paddingTop": 0,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": 0,
 "minWidth": 0,
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": 0,
 "class": "ZoomImage",
 "backgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "ZoomImage2843"
 },
 "paddingTop": 0,
 "visible": false,
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "CloseButton2844"
 },
 "id": "closeButtonPopupPanorama",
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "minHeight": 0,
 "iconWidth": 20,
 "backgroundOpacity": 0.3,
 "shadowSpread": 1,
 "iconHeight": 20,
 "shadow": false,
 "paddingBottom": 5,
 "borderRadius": 0,
 "right": 10,
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "fontStyle": "normal",
 "rollOverIconColor": "#666666",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "fontWeight": "normal",
 "mode": "push",
 "paddingRight": 5,
 "top": 10,
 "class": "CloseButton",
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 5,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "iconLineWidth": 5
},
{
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Mute"
 },
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A2DD9FEA_B0E1_BF31_41DB_12BCEB9C504F, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CD498788_D81E_C98D_41DA_58E9CF2D6EE4",
   "pitch": -5.16,
   "yaw": -50.76,
   "hfov": 13.53,
   "distance": 100
  }
 ],
 "id": "overlay_A2CF500E_B0E1_A0F1_41DF_A6EE5B11FEF8",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.16,
   "hfov": 13.53
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -170.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.02,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_1_HS_2_0.png",
      "width": 354,
      "height": 346
     }
    ]
   },
   "pitch": -30.91
  }
 ],
 "id": "overlay_44AD5960_5440_A42B_41C4_B7AEBCEA1A75",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -30.91,
   "hfov": 18.02
  }
 ]
},
{
 "id": "htmlText_3C846538_26BB_3484_41AA_68AFF769FB66",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Undangan, Souvenir</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 2.000 - Rp 40.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 081230290765</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD97D242_A9FF_A18E_41DC_EF6A12577635",
   "pitch": -17.55,
   "yaw": -5.94,
   "hfov": 17.67,
   "distance": 100
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_661D4D27_71E1_9CA6_41C2_478B750AF521",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -17.55,
   "hfov": 17.67
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54, this.camera_47207C63_550E_4E8C_41C9_F7CC86808054); this.mainPlayList.set('selectedIndex', 8); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD979242_A9FF_A18E_4175_85B5FD90357C",
   "pitch": -13.44,
   "yaw": -76.08,
   "hfov": 18.02,
   "distance": 100
  }
 ],
 "id": "overlay_67FF0B37_71E2_84A7_41DB_73DADB6AC4A5",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_1_HS_1_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -13.44,
   "hfov": 18.02
  }
 ]
},
{
 "id": "htmlText_3C95E849_2684_FC87_41BB_AD0D5ACA2A30",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:21px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_3987CA7C_2787_3D7C_41B2_89372BB4ADDF",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Keramik, Souvenir</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 9.000 - Rp 10.000.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 08123596244</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_A2D99FE9_B0E1_BF33_41D1_29CBE81DA41D",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Tempat pembuatan keramik yang terbuat dari tanah liat</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D, this.camera_44EF2BAC_550E_4994_41B1_8AFF26E497C3); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C63D3A_408F_31A1_41B8_BED041E50B0F",
   "pitch": -3.68,
   "yaw": 10.85,
   "hfov": 10.62,
   "distance": 100
  }
 ],
 "id": "overlay_69B000F0_71E1_85BA_418B_D74F81A0B66C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_1_HS_3_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -3.68,
   "hfov": 10.62
  }
 ]
},
{
 "id": "htmlText_3F024B34_268B_3C8D_41B7_B4019F24E180",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:21px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4, this.camera_47767CB9_550E_4FFF_41CF_1296203EE2A6); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD9D723F_A9FF_A1F6_41C0_51B3B8121BED",
   "pitch": -5.45,
   "yaw": 94.11,
   "hfov": 7.9,
   "distance": 50
  }
 ],
 "id": "overlay_7C69C965_6FE2_84DA_41D2_B940D674BFF8",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.45,
   "hfov": 7.9
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD9D423F_A9FF_A1F6_41D2_AA7BAA47ACD9",
   "pitch": 1.18,
   "yaw": 85.76,
   "hfov": 7.93,
   "distance": 50
  }
 ],
 "id": "overlay_7BB399E4_6FE3_87DA_41C8_C37AF42B0677",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.18,
   "hfov": 7.93
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD92E23F_A9FF_A1F6_41AD_CEBECF17F978",
   "pitch": -1.4,
   "yaw": 68.98,
   "hfov": 7.93,
   "distance": 50
  }
 ],
 "id": "overlay_7C5B2D6E_6FE2_9CA6_41BA_3F9E0E05596A",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.4,
   "hfov": 7.93
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD, this.camera_4767ECD5_550E_4FB7_41C6_33912A5FBF5E); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C24D45_408F_31E3_41CF_08D4D4876AF1",
   "pitch": -7.82,
   "yaw": -4.45,
   "hfov": 11.18,
   "distance": 100
  }
 ],
 "id": "overlay_6612583E_7021_84A9_4194_926E39A9F0E5",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_4_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -7.82,
   "hfov": 11.18
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C1AD46_408F_31E1_41C1_60E9300AA783",
   "pitch": 1.08,
   "yaw": 13.8,
   "hfov": 7.93,
   "distance": 50
  }
 ],
 "id": "overlay_35FC4693_268B_1584_41BE_6217E662A3DE",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.08,
   "hfov": 7.93
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_28729730_269B_1484_41A5_6EE78C208A93, this.camera_47464C9D_550E_4FB4_41A0_B374666B7E92); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C10D47_408F_31EF_41BB_3E66D16C7307",
   "pitch": 3.82,
   "yaw": -78.17,
   "hfov": 7.92,
   "distance": 50
  }
 ],
 "id": "overlay_3280D2FB_268B_0D84_41C3_08312B24A7DB",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.82,
   "hfov": 7.92
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D, this.camera_47518C80_550E_4F8C_41D1_80AE0EF22023); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C09D48_408F_31E1_41BF_7AE0D63A39C1",
   "pitch": -12.46,
   "yaw": -91.31,
   "hfov": 15.31,
   "distance": 100
  }
 ],
 "id": "overlay_32BAD1CB_2685_0F9B_41B3_45EAD24EC7FD",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_8_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -12.46,
   "hfov": 15.31
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91, this.camera_454027AE_550E_5994_41CC_8D752EE85C31); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C4BD3C_408F_31A1_41B1_F488E682F9F7",
   "pitch": -7.38,
   "yaw": 1.26,
   "hfov": 13.67,
   "distance": 100
  }
 ],
 "id": "overlay_6AF70800_71E2_845A_41C2_6ADFAC424230",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_2_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -7.38,
   "hfov": 13.67
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91, this.camera_4574D7CF_550E_5994_41D2_672DCC43048D); this.mainPlayList.set('selectedIndex', 3); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD9DE23F_A9FF_A1F6_41D0_FDB815F0409D",
   "pitch": -2.83,
   "yaw": -129.18,
   "hfov": 13.77,
   "distance": 100
  }
 ],
 "id": "overlay_6A43E310_71E1_847A_4170_BCD465B15A42",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_3_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -2.83,
   "hfov": 13.77
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A25CAE15_B0E3_A113_41E6_12AE051E4DCB, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CD332783_D81E_C983_41D1_D14B05373DA2",
   "pitch": -5.16,
   "yaw": -50.76,
   "hfov": 13.53,
   "distance": 100
  }
 ],
 "id": "overlay_A234FE58_B0E3_A111_41CD_8DCF940DBA35",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.16,
   "hfov": 13.53
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_28728747_269B_348C_41AA_7151E4E17167, this.camera_454FF78A_550E_599C_41A8_4628AC9F219E); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C38D3D_408F_31A3_41AC_68BB28C191E7",
   "pitch": 4.74,
   "yaw": -16.55,
   "hfov": 5.82,
   "distance": 50
  }
 ],
 "id": "overlay_37B4C697_268D_F58C_41A4_11AB0EB920AB",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.74,
   "hfov": 5.82
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_29F08508_269B_1484_41A3_A58EB64459F5, this.camera_45268742_550E_5A8C_41C4_E010FEE711F3); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C3ED3E_408F_31A1_41CA_7F44156870B8",
   "pitch": 8.59,
   "yaw": -10.15,
   "hfov": 5.77,
   "distance": 50
  }
 ],
 "id": "overlay_34A8C7B1_268D_7384_41B6_CB628F033A74",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.59,
   "hfov": 5.77
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2872DC00_269B_7484_41B9_A8651744E690, this.camera_455B2767_550E_5A94_4188_33C11C78C5CA); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C34D44_408F_31E1_41BD_6C967EDB64CF",
   "pitch": 5.8,
   "yaw": -1.47,
   "hfov": 5.81,
   "distance": 50
  }
 ],
 "id": "overlay_37B40803_268C_FC8B_41C1_91958A8B2DA6",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.8,
   "hfov": 5.81
  }
 ]
},
{
 "id": "htmlText_3C6B82CF_2685_0D9B_41C1_B42E3137B1C8",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Masuk Lokasi kampung keramik Dinoyo</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_3BBA00A2_268D_0D84_41AA_752DDD745BA2",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Undangan, Souvenir, Parcel</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 3.500 - Rp 280.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 082332671979</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_38F2A5EB_2685_179B_41C2_CCB71613AC30",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Souvenir, Keramik</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 3.500 - Rp 50.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: -</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_38EE95EC_2685_179D_41A1_9DB17F8B333E, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D04D87_408F_316F_41C4_EAD0E36B0039",
   "pitch": 16.32,
   "yaw": 2.85,
   "hfov": 24.37,
   "distance": 100
  }
 ],
 "id": "overlay_38D9763B_2685_14FB_41B1_F0477557FA18",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.32,
   "hfov": 24.37
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE, this.camera_47BA7D29_550E_4E9C_41D1_18AE6A00BE3E); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62DFFD87_408F_316F_41CE_39364952B126",
   "pitch": -8.77,
   "yaw": -101.96,
   "hfov": 18.32,
   "distance": 100
  }
 ],
 "id": "overlay_38BB8585_2687_378C_41B7_29A0DF0C4001",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_1_HS_1_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -8.77,
   "hfov": 18.32
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3839532E_277B_0C9C_4187_A94F9D1706CC, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62DF5D88_408F_3161_41CB_D7BA0CD81C5B",
   "pitch": -5.3,
   "yaw": 105.8,
   "hfov": 25.29,
   "distance": 100
  }
 ],
 "id": "overlay_3867238B_277B_139B_41BD_71FFD1577F33",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.3,
   "hfov": 25.29
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3BD509B4_2685_1F8C_41AE_9894D1D8343E, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D26D84_408F_3161_41B2_2232CF013A61",
   "pitch": 16.32,
   "yaw": 2.85,
   "hfov": 24.37,
   "distance": 100
  }
 ],
 "id": "overlay_3BC51A26_2685_1C8C_4187_63DFF368E1A8",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.32,
   "hfov": 24.37
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91, this.camera_4450A9D5_550E_49B4_41C9_3ADDE7BCFBC9); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D10D85_408F_3163_41BE_385F1D11A7CA",
   "pitch": -10.76,
   "yaw": 97.57,
   "hfov": 18.21,
   "distance": 100
  }
 ],
 "id": "overlay_3BE239B0_268B_7F85_41A0_166488FFC330",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_1_HS_1_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -10.76,
   "hfov": 18.21
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D17D86_408F_3161_41CB_1ADE01C3C5CB",
   "pitch": -6.64,
   "yaw": -98.05,
   "hfov": 18.41,
   "distance": 100
  }
 ],
 "id": "overlay_3B8258E0_268B_FD84_41B5_5A4AF680B688",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_1_HS_2_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -6.64,
   "hfov": 18.41
  }
 ]
},
{
 "id": "htmlText_3218AEA9_2685_3584_41C1_E166E453FFBD",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Terima Pesanan/Ready only:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">rentan harga (nego):</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP:</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_383D9FE0_2785_F384_419A_43743A858DE6",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Pecah Belah, Souvenir</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 6.000 - Rp 50.000</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 085234378757</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_A259FE14_B0E3_A111_41DE_21063FCC9CFF",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Masuk melalui Jalan M.T Haryono</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_381884EF_278D_159B_41C2_C0D40C98021C",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Aroma terapi bakar, Souvenir, Vas bunga</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 20.000 - Rp 600.000</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 085852744660</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3983DA7E_2787_3D7C_41B9_3C0FACCE9650, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62DEBD90_408F_3161_41B6_240E48E2818A",
   "pitch": 2.25,
   "yaw": -75.05,
   "hfov": 25.38,
   "distance": 100
  }
 ],
 "id": "overlay_39923AAF_2787_3D9C_415A_236DA7DC34E7",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.25,
   "hfov": 25.38
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD, this.camera_4569E7F1_550E_598C_41CE_FC879FA482B6); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 117.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_1_HS_1_0.png",
      "width": 308,
      "height": 351
     }
    ]
   },
   "pitch": -41.21
  }
 ],
 "id": "overlay_3866951A_2785_7484_41A9_BA372612BCB6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -41.21,
   "hfov": 13.74
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3AA8FD4C_269B_749D_41A5_825142A6A23F, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D32D7D_408F_31A3_41C3_5A1C52E8FCF1",
   "pitch": 9.45,
   "yaw": -13.62,
   "hfov": 25.05,
   "distance": 100
  }
 ],
 "id": "overlay_3A995DBB_269B_77FB_41B5_5AE56A21477A",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.45,
   "hfov": 25.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD, this.camera_45937839_550E_56FC_41D3_E6784C5F3CD1); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 87.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.3,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_1_HS_1_0.png",
      "width": 308,
      "height": 351
     }
    ]
   },
   "pitch": -26.79
  }
 ],
 "id": "overlay_3A888CA1_269B_1584_41C1_6267839DF602",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -26.79,
   "hfov": 16.3
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_39DFF60E_277B_149C_41B3_0815B3FEEF06, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62DE7D8F_408F_317F_41C2_5705A5DB79BE",
   "pitch": 6.02,
   "yaw": 6.28,
   "hfov": 25.26,
   "distance": 100
  }
 ],
 "id": "overlay_39EF763C_277B_14FC_41AA_24459C5E4DF8",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.02,
   "hfov": 25.26
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE, this.camera_44663A40_550E_4A8D_41D1_C0081B4BF93E); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 117.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_1_HS_1_0.png",
      "width": 308,
      "height": 351
     }
    ]
   },
   "pitch": -41.21
  }
 ],
 "id": "overlay_384F2D13_2785_1484_41C2_CEC81A82F843",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -41.21,
   "hfov": 13.74
  }
 ]
},
{
 "id": "htmlText_3D464083_2685_0D84_41C1_E0A01D18769A",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Undangan, Souvenir</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 2.000 - Rp 40.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 081230290765</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_388B73D7_278D_338C_416B_4D53F748FB6A, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C05D4E_408F_31E1_41C9_0881FDC6844C",
   "pitch": 9.8,
   "yaw": 0.1,
   "hfov": 25.03,
   "distance": 100
  }
 ],
 "id": "overlay_389AB41F_278D_34BC_41B8_36EAAEBE5A9F",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.8,
   "hfov": 25.03
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -137.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_1_HS_3_0.png",
      "width": 308,
      "height": 351
     }
    ]
   },
   "pitch": -26.45
  }
 ],
 "id": "overlay_39EB836D_278D_0C9C_41C1_074C0A6E8086",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -26.45,
   "hfov": 16.35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91, this.camera_44B5BAC6_550E_4B94_41B4_18B776733131); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD967242_A9FF_A18E_41D4_9359B691BEFF",
   "pitch": -11.58,
   "yaw": -176.98,
   "hfov": 27.3,
   "distance": 100
  }
 ],
 "id": "overlay_66A59D25_7021_BC5A_418C_09668296C0E0",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -11.58,
   "hfov": 27.3
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_39E239F7_277F_1F8C_41A7_D450D2CFDADD, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62DECD89_408F_3163_41B3_8B082B62CD87",
   "pitch": 15.63,
   "yaw": -13.28,
   "hfov": 24.46,
   "distance": 100
  }
 ],
 "id": "overlay_39EC3A56_277F_1C8C_41A4_6F747F12E2B2",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 15.63,
   "hfov": 24.46
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE, this.camera_470C1C07_550E_4E94_41D4_4ABCCBA2FF96); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -170.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.72,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_1_HS_1_0.png",
      "width": 308,
      "height": 351
     }
    ]
   },
   "pitch": -23.71
  }
 ],
 "id": "overlay_381516D9_277D_7584_41AC_65C4CC67D711",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -23.71,
   "hfov": 16.72
  }
 ]
},
{
 "id": "htmlText_3AA4ED45_269B_748F_41BC_43618A3EEB6B",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Keramik, Souvenir, Fiber</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 25.000 - Rp 45.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 083835306810</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D77D70_408F_31A1_41C9_2A2714AA708F",
   "pitch": -3.5,
   "yaw": 2.26,
   "hfov": 9.94,
   "distance": 100
  }
 ],
 "id": "overlay_3CCD4594_268B_378C_41A3_BCDF1B7C9890",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_1_HS_1_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -3.5,
   "hfov": 9.94
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3F3E5B36_268B_3C8D_41C2_1FE84134A53A, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D6BD70_408F_31A1_41D0_20FFE85B7D26",
   "pitch": 10.78,
   "yaw": -62.91,
   "hfov": 8.22,
   "distance": 100
  }
 ],
 "id": "overlay_3F287B81_268B_3387_41B8_97F33EAD908F",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.78,
   "hfov": 8.22
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3C96C84A_2684_FC85_4182_3AC4857BE185, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D63D71_408F_31A3_41CC_A95A2F8CAD5A",
   "pitch": 1.17,
   "yaw": 75.71,
   "hfov": 8.37,
   "distance": 100
  }
 ],
 "id": "overlay_3CAF38A0_2684_FD85_41A1_4E9CADE45A6B",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.17,
   "hfov": 8.37
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3C6792D1_2685_0D87_41B4_08B530887757, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4721947C_5440_AC1B_41B7_F9B525F82C81",
   "pitch": 12.65,
   "yaw": 2.79,
   "hfov": 8.17,
   "distance": 100
  }
 ],
 "id": "overlay_3C0DC31D_2685_0CBF_41C1_34361CB15197",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 12.65,
   "hfov": 8.17
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8, this.camera_44943A6E_550E_4A94_41C9_BEA66A4E4491); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD94C243_A9FF_A18E_41AA_C971CE2FD0A0",
   "pitch": -17.62,
   "yaw": -69.15,
   "hfov": 17.66,
   "distance": 100
  }
 ],
 "id": "overlay_67761B31_71E6_84BA_41C6_92540CA66533",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -17.62,
   "hfov": 17.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188, this.camera_44846A99_550E_4BBF_41C2_799501C4AE7E); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD960243_A9FF_A18E_41D9_4FE46E65ACAE",
   "pitch": -22.77,
   "yaw": 23.85,
   "hfov": 17.09,
   "distance": 100
  }
 ],
 "id": "overlay_67FDC1F4_71E1_87B9_41CE_AB0813EDEDCA",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_1_HS_1_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -22.77,
   "hfov": 17.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD97C243_A9FF_A18E_41DC_9BB9FE911EB0",
   "pitch": -6.3,
   "yaw": 88.37,
   "hfov": 18.42,
   "distance": 100
  }
 ],
 "id": "overlay_679934F8_71E2_8DA9_41BB_2EA18F00762A",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_1_HS_2_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -6.3,
   "hfov": 18.42
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_385D8B51_278B_FC84_41C2_3C48EE323ECF, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62DD0D93_408F_3160_41A5_EF62AF91EB53",
   "pitch": 3.96,
   "yaw": -14.65,
   "hfov": 25.33,
   "distance": 100
  }
 ],
 "id": "overlay_386F7BA4_278B_F38C_41AE_31D2887D13CC",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.96,
   "hfov": 25.33
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F, this.camera_4440D9F3_550E_498C_41D1_A1A2F3C2F00D); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -169.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_1_HS_1_0.png",
      "width": 308,
      "height": 351
     }
    ]
   },
   "pitch": -26.45
  }
 ],
 "id": "overlay_387797D2_278D_1385_41BA_8DB8C2AC16BA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -26.45,
   "hfov": 16.35
  }
 ]
},
{
 "id": "htmlText_385A7B4F_278B_FC9B_41A0_833D0CCD2E6F",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Keramik, Souvenir</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 5.000 - Rp 100.000</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 085159473552</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings HS"
 },
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings Gyro"
 },
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedIconWidth": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "rollOverIconWidth": 30,
 "rollOverIconHeight": 30,
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button settings VR"
 },
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "fontStyle": "normal",
 "layout": "horizontal",
 "minHeight": 1,
 "iconWidth": 30,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3D5C032F_2685_0C9C_41A6_7A0DADD1DAD3, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D46D7D_408F_31A3_41C0_BE24F1725DA0",
   "pitch": -3.59,
   "yaw": 74.23,
   "hfov": 25.35,
   "distance": 100
  }
 ],
 "id": "overlay_3D29739E_2685_13BC_418B_EFDE20D55408",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.59,
   "hfov": 25.35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D, this.camera_4476EA0F_550E_4A94_41C7_574F2AEB2B30); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 172.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.41,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_1_HS_1_0.png",
      "width": 452,
      "height": 495
     }
    ]
   },
   "pitch": -28.99
  }
 ],
 "id": "overlay_3D12CD78_2687_1484_41AD_2950475AF04D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -28.99,
   "hfov": 23.41
  }
 ]
},
{
 "id": "htmlText_3CF24C45_2687_F48F_4194_9A0F102AC8D1",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Fiberglass, Souvenir</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 3.000 - Rp 2.000.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 08123540956</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62CB9D5A_408F_31E1_41C0_86202D26E003",
   "pitch": -1.46,
   "yaw": 55.57,
   "hfov": 10.29,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_69CC3ABF_71E2_85A7_41C8_73351FD8EB84",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.46,
   "hfov": 10.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_28713489_269B_7584_41AF_BDD2D82C2BC0, this.camera_45D5F8BA_550E_57FC_41C7_C8D6DC18C6DA); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62CBDD5B_408F_31E7_41B7_91E27124F62D",
   "pitch": -0.76,
   "yaw": 3.4,
   "hfov": 10.29,
   "distance": 50
  }
 ],
 "id": "overlay_35740FBE_26BD_13FD_4186_78FEEDB6EF24",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.76,
   "hfov": 10.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2873474B_269B_1484_41BB_4A97A6109E6C, this.camera_45A5989A_550E_57BC_417F_F03F50CB228D); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62CB3D5B_408F_31E7_41C7_57889A2E8635",
   "pitch": 5.63,
   "yaw": -61.12,
   "hfov": 10.25,
   "distance": 50
  }
 ],
 "id": "overlay_32A14BD0_26BD_1384_41B3_279759A8EF03",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.63,
   "hfov": 10.25
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6, this.camera_4586A859_550E_56BF_41D1_BF9EDB38A91A); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62CABD5C_408F_31E1_41C1_93A6AEDC79BB",
   "pitch": 6.95,
   "yaw": -73.42,
   "hfov": 8,
   "distance": 50
  }
 ],
 "id": "overlay_32305A84_26BD_1D8C_4193_81C647891FF5",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.95,
   "hfov": 8
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_32641EAB_2685_3584_41C2_BBBF36857A8C, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62CA1D5D_408F_31E3_41CA_618021D4B9CA",
   "pitch": 6.17,
   "yaw": -81.63,
   "hfov": 5.46,
   "distance": 100
  }
 ],
 "id": "overlay_32772EE8_2685_3584_4135_EFF071DFE410",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.17,
   "hfov": 5.46
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_287247BC_269B_13FC_41C2_F31A2986EDF4, this.camera_45B6487A_550E_577C_41C6_6461D9F8D13E); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62CA6D5D_408F_31E3_41C1_8F5D34364876",
   "pitch": 5.89,
   "yaw": -93.74,
   "hfov": 10.24,
   "distance": 50
  }
 ],
 "id": "overlay_33177D86_268D_178C_4161_2B5CAD224CD4",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.89,
   "hfov": 10.24
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3C80753A_26BB_3484_41B8_177295BC75A0, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D4FD73_408F_31A7_41A7_505F721E436C",
   "pitch": 11.17,
   "yaw": 5.59,
   "hfov": 24.91,
   "distance": 100
  }
 ],
 "id": "overlay_3C900584_26BB_378C_41C0_95698DFB661A",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.17,
   "hfov": 24.91
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_287290B7_269B_0D8C_419C_D10032C9F004, this.camera_471C9BD9_550E_49BF_41AB_43EED163E108); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 131.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_1_HS_1_0.png",
      "width": 289,
      "height": 322
     }
    ]
   },
   "pitch": -4.03
  }
 ],
 "id": "overlay_3C656600_268D_1484_4199_A104D43CB6D0",
 "data": {
  "label": "Arrow Blue Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -4.03,
   "hfov": 17.12
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3A2CCED4_2685_358C_41A5_9E3BEF84A38F, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D2ED7E_408F_31A1_41CF_4072FDCDF829",
   "pitch": 9.45,
   "yaw": -13.62,
   "hfov": 25.05,
   "distance": 100
  }
 ],
 "id": "overlay_3AF4AFA7_2685_338C_41C0_7DA2D38F7552",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.45,
   "hfov": 25.05
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D, this.camera_47ABDD46_550E_4E94_41D0_C23FE884D316); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -143,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.07,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_1_HS_1_0.png",
      "width": 308,
      "height": 351
     }
    ]
   },
   "pitch": -34.34
  }
 ],
 "id": "overlay_3BDB1AF5_2687_1D8F_41A3_6994AADC2AA6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -143,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -34.34,
   "hfov": 15.07
  }
 ]
},
{
 "id": "htmlText_39D3C60D_277B_149C_41BC_9AB70A6FB867",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Produksi Keramik</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_3005DB50_2685_3C84_419A_81610933F165",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Keramik </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 2.500 - Rp 50.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 081334849701</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_387763D7_278D_338C_41A5_A8EFBB9CCEAF",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Aroma terapi bakar, Souvenir, Vas bunga</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 20.000 - Rp 600.000</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 085852744660</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_30059B51_2685_3C84_41B3_E041B7D23DBC, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62CB7D5F_408F_319F_41CC_84B81E269500",
   "pitch": -4.48,
   "yaw": 116.72,
   "hfov": 13.55,
   "distance": 100
  }
 ],
 "id": "overlay_30139BA3_2685_3384_41BB_1C231A80F266",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.48,
   "hfov": 13.55
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA, this.camera_44C9CB4A_550E_4A9C_41C1_5FCC7FE374CB); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62CADD64_408F_31A1_41CA_25795924C426",
   "pitch": -1.63,
   "yaw": 31.81,
   "hfov": 10.29,
   "distance": 50
  }
 ],
 "id": "overlay_3089C050_269D_0C84_41C0_8E8A9D6A5F3F",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.63,
   "hfov": 10.29
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2871FF57_269B_348B_418E_603251F2CF70, this.camera_44DB2B1B_550E_4ABC_41BC_D136D1AD0AFD); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62CA2D65_408F_31A3_41C4_8E1DA5FF0B82",
   "pitch": 3.05,
   "yaw": -0.32,
   "hfov": 4.69,
   "distance": 50
  }
 ],
 "id": "overlay_308AFA03_269B_1C84_41C0_EFC730A257F4",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.05,
   "hfov": 4.69
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD, this.camera_44F94B80_550E_498C_41B1_1E60A5E2EB3D); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C98D66_408F_31A1_41A8_07308666B084",
   "pitch": -20.31,
   "yaw": 173.02,
   "hfov": 20.58,
   "distance": 100
  }
 ],
 "id": "overlay_31DB211D_2685_0CBC_41B9_972AD9B66BD4",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_1_HS_4_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -20.31,
   "hfov": 20.58
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6, this.camera_442D599A_550E_49BC_418B_DA17755E7E0B); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D38D7A_408F_31A1_41BA_A8B8483F6F0E",
   "pitch": -1.77,
   "yaw": 31.13,
   "hfov": 15.78,
   "distance": 50
  }
 ],
 "id": "overlay_3C0CF843_268C_FC84_41AC_D129DB8ACE8B",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.77,
   "hfov": 15.78
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD, this.camera_442309B7_550E_49F4_4193_3AE78ACC6B75); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -101.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_1_HS_1_0.png",
      "width": 452,
      "height": 495
     }
    ]
   },
   "pitch": -46.15
  }
 ],
 "id": "overlay_3DC5020E_268B_0C9C_4181_6BA4ECE55D3C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -46.15,
   "hfov": 18.54
  }
 ]
},
{
 "id": "htmlText_3BE919B2_2685_1F84_41A4_91BA6CD0D0B7",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Keramik, Souvenir</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 25.000 - Rp 45.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: -</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3CEE5C46_2687_F48A_41BC_B67E8CF564B3, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D53D73_408F_31A7_41C9_A1A2F2BC4FBC",
   "pitch": 9.8,
   "yaw": 28.93,
   "hfov": 25.03,
   "distance": 100
  }
 ],
 "id": "overlay_3CE3FC98_2687_F584_41B2_A320A23DA149",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.8,
   "hfov": 25.03
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D, this.camera_47958CF3_550E_4F8C_41CC_276DCBE424A5); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -102.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.44,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_1_HS_1_0.png",
      "width": 345,
      "height": 345
     }
    ]
   },
   "pitch": -2.39
  }
 ],
 "id": "overlay_3CDA0D2B_26BD_1484_41C1_6D3AE486FBFD",
 "data": {
  "label": "Arrow Blue Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.39,
   "hfov": 20.44
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54, this.camera_459D9812_550E_568C_41CC_41E422C4B141); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD973242_A9FF_A18E_41CB_89DAEC99DF23",
   "pitch": -2.52,
   "yaw": -120.97,
   "hfov": 28.39,
   "distance": 100
  }
 ],
 "id": "overlay_68FBB7D6_71E2_8BF9_41C5_248109D5ECF6",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -2.52,
   "hfov": 28.39
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_381CB4F0_278D_1585_41B2_6CED4DA08200, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62CE2D51_408F_31E3_41B2_11894D35ED9B",
   "pitch": 9.8,
   "yaw": 0.1,
   "hfov": 25.03,
   "distance": 100
  }
 ],
 "id": "overlay_382CC51B_278D_14BA_41A2_FC7D11D5F737",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.8,
   "hfov": 25.03
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3839AFE1_2785_F384_4194_AA2B1C69C68D, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62DE5D91_408F_3163_41AB_7247FB4EB890",
   "pitch": 3.96,
   "yaw": -14.65,
   "hfov": 25.33,
   "distance": 100
  }
 ],
 "id": "overlay_3849803F_2785_0CFC_41BB_4BC5F50E469A",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.96,
   "hfov": 25.33
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE, this.camera_4702DC27_550E_4E94_41B0_EBE76483C187); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -163.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_1_HS_1_0.png",
      "width": 308,
      "height": 351
     }
    ]
   },
   "pitch": -41.55
  }
 ],
 "id": "overlay_38134266_278B_0C8D_41A9_3F3889859D06",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -41.55,
   "hfov": 13.66
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91, this.camera_443DC97C_550E_4975_41C4_4964A5648BDD); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BD94B244_A9FF_A18A_41C4_AA32D5829F15",
   "pitch": -10.9,
   "yaw": 164.59,
   "hfov": 14.09,
   "distance": 100
  }
 ],
 "id": "overlay_6A46E890_71E2_8479_41B8_6BEE2AAD3A57",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -10.9,
   "hfov": 14.09
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_287290B7_269B_0D8C_419C_D10032C9F004, this.camera_440F195E_550E_56B4_41D3_CE8F0F9F714A); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C93D67_408F_31AF_41CB_92FFA3F88258",
   "pitch": -3.69,
   "yaw": 50.28,
   "hfov": 16.3,
   "distance": 50
  }
 ],
 "id": "overlay_314B6BB6_2685_338D_41B8_ADE72C94FE7E",
 "data": {
  "label": "Circle Arrow 04 Right"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 50.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.69,
   "hfov": 16.3
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2871B343_269B_0C84_41C2_24521148DC12, this.camera_441FC93C_550E_56F5_41CF_D376598B5FDC); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C89D67_408F_31AF_41CB_BA4AB0674EDE",
   "pitch": -6.26,
   "yaw": 118.33,
   "hfov": 12.48,
   "distance": 50
  }
 ],
 "id": "overlay_3EE49A82_268B_3D85_41BC_FEE397C36975",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.26,
   "hfov": 12.48
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_28729A35_269B_1C8C_41C0_5A525D7087D6, this.camera_45F8C8FB_550E_577C_41C0_91311A60014E); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C8FD68_408F_31A1_41C0_72BA41BE6776",
   "pitch": 1.27,
   "yaw": -28.99,
   "hfov": 12.55,
   "distance": 50
  }
 ],
 "id": "overlay_3E7463CB_268D_3384_418C_B7ADF5B34155",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.27,
   "hfov": 12.55
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_28728E38_269B_1485_419C_72C1F63A41A3, this.camera_45CB18DB_550E_57BC_41BD_3C6617B4C765); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62C85D69_408F_31A3_41CB_4C732571CE9D",
   "pitch": 10.38,
   "yaw": -18.75,
   "hfov": 12.35,
   "distance": 50
  }
 ],
 "id": "overlay_3E02E6D3_268D_158B_41C1_E17D0F6EA76A",
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.38,
   "hfov": 12.35
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F, this.camera_45E8791A_550E_56BC_41A3_4655F000DCA3); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D7AD69_408F_31A3_41C0_B6899112BFB5",
   "pitch": -7.9,
   "yaw": -11.81,
   "hfov": 14.21,
   "distance": 100
  }
 ],
 "id": "overlay_3E2BE2C5_268F_0D8C_41B7_C76A3F301AE4",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_7_0_0_map.gif",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -7.9,
   "hfov": 14.21
  }
 ]
},
{
 "id": "htmlText_3D40132D_2685_0C9C_41BE_A30F9D2511D6",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Keramik, Souvenir</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 4.000 - Rp 25.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 089617483263</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_39DE09F6_277F_1F8C_41BE_37D9B0DB1012",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Fiber, Souvenir, Gips, Mainan</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 8.500 - Rp 350.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: 085755539405</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3BBE10A3_268D_0D84_414A_F14D55577F28, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D0BD86_408F_3161_41C4_4277483528A3",
   "pitch": 16.32,
   "yaw": 2.85,
   "hfov": 24.37,
   "distance": 100
  }
 ],
 "id": "overlay_3BAD90CD_268D_0D9C_41BD_E8C8BD460D93",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.32,
   "hfov": 24.37
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F, this.camera_44AB9AF2_550E_4B8C_41A4_CBD5CBA4A1D8); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -174.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_1_HS_1_0.png",
      "width": 308,
      "height": 351
     }
    ]
   },
   "pitch": -36.06
  }
 ],
 "id": "overlay_3B1B9ED7_268B_358B_41B3_E469395796ED",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -36.06,
   "hfov": 14.76
  }
 ]
},
{
 "useHandCursor": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_3D42508A_2685_0D84_41C1_DB21E4E69EDA, null, false)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_62D48D7C_408F_31A1_41C2_8CBD731689E6",
   "pitch": 11.17,
   "yaw": 5.59,
   "hfov": 24.91,
   "distance": 100
  }
 ],
 "id": "overlay_3D2E30E4_2685_0D8C_41A5_5A19F6C3080B",
 "data": {
  "label": "Info 01"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.17,
   "hfov": 24.91
  }
 ]
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD, this.camera_4785DD0F_550E_4E94_41CA_6241D7F88BB7); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": 82.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.84,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_1_HS_1_0.png",
      "width": 452,
      "height": 495
     }
    ]
   },
   "pitch": -48.21
  }
 ],
 "id": "overlay_3D8872B6_2685_0D8D_41C1_12F2DA87F132",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -48.21,
   "hfov": 17.84
  }
 ]
},
{
 "id": "htmlText_3A20FECC_2685_359C_4190_4E7669C4448B",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Barang yang di jual: Keramik, Souvenir</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">Rentan harga: Rp 25.000 - Rp 45.000 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">CP: -</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">(Terima Pesanan)</SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "id": "htmlText_3834732E_277B_0C9C_41C0_50CB559A9521",
 "minHeight": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 0,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:21px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText15174"
 },
 "paddingTop": 10
},
{
 "textShadowColor": "#000000",
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "data": {
  "name": "text 2"
 },
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 3,
 "minHeight": 1,
 "width": 236,
 "shadow": false,
 "paddingBottom": 0,
 "textShadowVerticalLength": 0,
 "borderRadius": 0,
 "text": "Guide Your VR Tourism",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "textShadowBlurRadius": 10,
 "propagateClick": false,
 "textShadowHorizontalLength": 0,
 "bottom": 5,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 32,
 "class": "Label",
 "fontSize": 18,
 "horizontalAlign": "left",
 "textShadowOpacity": 1,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "id": "Image_5DA02F90_4081_3161_41CF_9A3B619DAC33",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 1871,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "60.221%",
 "height": "60.825%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 641,
 "url": "skin/Image_5DA02F90_4081_3161_41CF_9A3B619DAC33.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Image6684"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "fontFamily": "Montserrat",
 "fontWeight": "normal",
 "data": {
  "name": "Label Company Name"
 },
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "minHeight": 1,
 "width": 450,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "text": "Kampung Keramik Dinoyo",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 60,
 "top": "0%",
 "class": "Label",
 "fontSize": 31,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "paddingTop": 0,
 "textDecoration": "none"
},
{
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 40,
 "top": "1.67%",
 "bottom": "-1.67%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "5%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 30,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "horizontalAlign": "center",
 "data": {
  "name": "logo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 1199,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "paddingRight": 15,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": 60,
 "top": "0%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "gap": 3,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.showPopupImage(this.ImageResource_BD413263_A9FF_A18E_41C7_0DF39B721A21, null, '90%', '90%', this.FadeInEffect_BD412263_A9FF_A18E_41D1_FB554AD1C292, this.FadeOutEffect_BD410263_A9FF_A18E_41E1_ED2B0010F109, {'pressedIconColor':'#888888','pressedBorderColor':'#000000','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'rollOverBorderSize':0,'backgroundOpacity':0.3,'iconHeight':20,'backgroundColorDirection':'vertical','paddingBottom':5,'iconWidth':20,'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','paddingRight':5,'pressedBackgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'pressedIconHeight':20,'borderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'paddingLeft':5}, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.openLink('https://goo.gl/maps/wt8oakxgrebq1E4E8', '_blank')",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
 "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
 "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18.png",
 "id": "IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18",
 "minHeight": 1,
 "width": 44,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_B6B950D0_A091_D927_41BE_C8B55F476B18_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_B74E92BD_A090_3959_41E2_B32C2E223160.png",
 "id": "IconButton_B74E92BD_A090_3959_41E2_B32C2E223160",
 "minHeight": 1,
 "width": 36.8,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_B74E92BD_A090_3959_41E2_B32C2E223160_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 39.2,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "minHeight": 1,
 "width": 38.4,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44.8,
 "class": "IconButton",
 "click": "this.openLink('https://www.instagram.com/dewivtour/', '_blank')",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "minHeight": 1,
 "width": 36,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 101,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 41.6,
 "class": "IconButton",
 "click": "this.openLink('https://www.youtube.com/@user-gx1gq7me2z', '_blank')",
 "maxHeight": 101,
 "transparencyActive": true,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "id": "Container_274626CE_3686_81F9_41C7_EE811DED4670",
 "left": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "minHeight": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Image_2746D6CE_3686_81F9_41BD_27DFA4514831",
  "this.HTMLText_2746C6CE_3686_81F9_41C3_8C1893D5876D",
  "this.Image_2746F6CE_3686_81F9_41C4_82DE052B4EA3"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "layout": "absolute",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "layout": "vertical",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "shadow": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "right": "15%",
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "Container",
 "borderSize": 0,
 "gap": 10,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64DD37A2_6FE1_8C59_41D4_8DB1D509578F_1_HS_1_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CD498788_D81E_C98D_41DA_58E9CF2D6EE4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_1_HS_0_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD97D242_A9FF_A18E_41DC_EF6A12577635",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA2F25_6FE1_9C5B_41B4_25B778D60188_1_HS_1_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD979242_A9FF_A18E_4175_85B5FD90357C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6387DBDF_6FDE_BBE6_41DB_200A9F4A3725_1_HS_3_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C63D3A_408F_31A1_41B8_BED041E50B0F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_0_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD9D723F_A9FF_A1F6_41C0_51B3B8121BED",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_1_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD9D423F_A9FF_A1F6_41D2_AA7BAA47ACD9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_2_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD92E23F_A9FF_A1F6_41AD_CEBECF17F978",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_4_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C24D45_408F_31E3_41CF_08D4D4876AF1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_6_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C1AD46_408F_31E1_41C1_60E9300AA783",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_7_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C10D47_408F_31EF_41BB_3E66D16C7307",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_649136CB_6FDE_8DEE_41D9_5F7C3C06AD91_1_HS_8_0.png",
   "width": 1080,
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C09D48_408F_31E1_41BF_7AE0D63A39C1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_2_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C4BD3C_408F_31A1_41B1_F488E682F9F7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_3_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD9DE23F_A9FF_A1F6_41D0_FDB815F0409D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_4_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_CD332783_D81E_C983_41D1_D14B05373DA2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_5_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C38D3D_408F_31A3_41AC_68BB28C191E7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_6_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C3ED3E_408F_31A1_41CA_7F44156870B8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64F5FD9E_6FDE_9C69_41C5_07F2B061764D_1_HS_7_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C34D44_408F_31E1_41BD_6C967EDB64CF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D04D87_408F_316F_41C4_EAD0E36B0039",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_1_HS_1_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62DFFD87_408F_316F_41CE_39364952B126",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_287247BC_269B_13FC_41C2_F31A2986EDF4_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62DF5D88_408F_3161_41CB_D7BA0CD81C5B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D26D84_408F_3161_41B2_2232CF013A61",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_1_HS_1_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D10D85_408F_3163_41BE_385F1D11A7CA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_28729730_269B_1484_41A5_6EE78C208A93_1_HS_2_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D17D86_408F_3161_41CB_1ADE01C3C5CB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2871B343_269B_0C84_41C2_24521148DC12_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62DEBD90_408F_3161_41B6_240E48E2818A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_28729A35_269B_1C8C_41C0_5A525D7087D6_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D32D7D_408F_31A3_41C3_5A1C52E8FCF1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_28713489_269B_7584_41AF_BDD2D82C2BC0_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62DE7D8F_408F_317F_41C2_5705A5DB79BE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64A2272B_6FE1_8CAF_41DB_0D42A2641216_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C05D4E_408F_31E1_41C9_0881FDC6844C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64F5EEF2_6FDE_7DBE_41C2_FC7A516D2EE4_1_HS_0_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD967242_A9FF_A18E_41D4_9359B691BEFF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2873474B_269B_1484_41BB_4A97A6109E6C_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62DECD89_408F_3163_41B3_8B082B62CD87",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_1_HS_1_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D77D70_408F_31A1_41C9_2A2714AA708F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D6BD70_408F_31A1_41D0_20FFE85B7D26",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_1_HS_3_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D63D71_408F_31A3_41CC_A95A2F8CAD5A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_A43D4DF8_A9EA_627A_41D0_225B710FAC2B_1_HS_4_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4721947C_5440_AC1B_41B7_F9B525F82C81",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_1_HS_0_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD94C243_A9FF_A18E_41AA_C971CE2FD0A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_1_HS_1_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD960243_A9FF_A18E_41D9_4FE46E65ACAE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA5F99_6FE1_BC6A_41D1_DA243BA3EE54_1_HS_2_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD97C243_A9FF_A18E_41DC_9BB9FE911EB0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2871FF57_269B_348B_418E_603251F2CF70_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62DD0D93_408F_3160_41A5_EF62AF91EB53",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2872DC00_269B_7484_41B9_A8651744E690_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D46D7D_408F_31A3_41C0_BE24F1725DA0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_0_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62CB9D5A_408F_31E1_41C0_86202D26E003",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_2_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62CBDD5B_408F_31E7_41B7_91E27124F62D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_3_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62CB3D5B_408F_31E7_41C7_57889A2E8635",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_4_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62CABD5C_408F_31E1_41C1_93A6AEDC79BB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_5_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62CA1D5D_408F_31E3_41CA_618021D4B9CA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA6071_6FE1_84BA_4172_636A79FF24BE_1_HS_6_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62CA6D5D_408F_31E3_41C1_8F5D34364876",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2872D2EA_269B_0D85_41A6_2D50FA38C6B6_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D4FD73_408F_31A7_41A7_505F721E436C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_28728747_269B_348C_41AA_7151E4E17167_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D2ED7E_408F_31A1_41CF_4072FDCDF829",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_1_HS_1_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62CB7D5F_408F_319F_41CC_84B81E269500",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_1_HS_2_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62CADD64_408F_31A1_41CA_25795924C426",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_1_HS_3_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62CA2D65_408F_31A3_41C4_8E1DA5FF0B82",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64A148F0_6FE1_85B9_41D6_62F5A2157D7F_1_HS_4_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C98D66_408F_31A1_41A8_07308666B084",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_287290B7_269B_0D8C_419C_D10032C9F004_1_HS_0_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D38D7A_408F_31A1_41BA_A8B8483F6F0E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_29F08508_269B_1484_41A3_A58EB64459F5_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D53D73_408F_31A7_41C9_A1A2F2BC4FBC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_1_HS_0_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD973242_A9FF_A18E_41CB_89DAEC99DF23",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64DFF74D_6FE1_8CEA_41C7_169CDC439FB8_1_HS_2_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62CE2D51_408F_31E3_41B2_11894D35ED9B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2871812D_269B_0C9F_41A2_A1580F65B2A6_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62DE5D91_408F_3163_41AB_7247FB4EB890",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_0_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_BD94B244_A9FF_A18A_41C4_AA32D5829F15",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_3_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C93D67_408F_31AF_41CB_92FFA3F88258",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_4_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C89D67_408F_31AF_41CB_BA4AB0674EDE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_5_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C8FD68_408F_31A1_41C0_72BA41BE6776",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_6_0.png",
   "width": 536,
   "height": 804
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62C85D69_408F_31A3_41CB_4C732571CE9D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_64CA015F_6FE1_84E6_41C5_3C4492FE48BD_1_HS_7_0.png",
   "width": 1080,
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D7AD69_408F_31A3_41C0_B6899112BFB5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_287366E5_269B_F58C_41C0_5E63BAC0A5FA_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D0BD86_408F_3161_41C4_4277483528A3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_28728E38_269B_1485_419C_72C1F63A41A3_1_HS_0_0.png",
   "width": 460,
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_62D48D7C_408F_31A1_41C2_8CBD731689E6",
 "frameDuration": 41
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 1"
 },
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 116,
 "popUpFontColor": "#F0623E",
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "RECEPTION",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 2"
 },
 "height": "100%",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 5,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 96,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#3E5CB8"
 ],
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "paddingRight": 15,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "ROOMS",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "backgroundColorRatios": [
  0
 ],
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 3"
 },
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 114,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "AMENITIES",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 4"
 },
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 130,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#F7931E",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "class": "DropDown",
 "label": "SPORTS AREA",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 5"
 },
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 127.2,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#3E5CB8"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 15,
 "popUpGap": 2,
 "popUpBackgroundColor": "#3E5CB8",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#0033CC",
 "class": "DropDown",
 "label": "PRODUKSI",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#3E5CB8",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "fontWeight": "bold",
 "data": {
  "name": "DropDown 6"
 },
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpShadowColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "width": 140.2,
 "popUpFontColor": "#FFFFFF",
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "shadow": false,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "borderRadius": 0,
 "arrowBeforeLabel": false,
 "backgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "popUpShadowSpread": 1,
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 8,
 "popUpGap": 2,
 "popUpBackgroundColor": "#3E5CB8",
 "backgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#0033CC",
 "class": "DropDown",
 "label": "SPOT LOKASI",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#3E5CB8",
 "paddingRight": 15,
 "fontSize": 12,
 "popUpPaddingBottom": 10,
 "popUpShadow": false,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "textDecoration": "none",
 "backgroundColor": [
  "#3E5CB8"
 ],
 "popUpShadowBlurRadius": 6
},
{
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Settings"
 },
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 17,
 "width": 60,
 "shadowSpread": 1,
 "iconHeight": 17,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#0033CC"
 ],
 "propagateClick": false,
 "rollOverBackgroundColor": [
  "#0033CC"
 ],
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "paddingRight": 0,
 "fontSize": 12,
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#3E5CB8"
 ]
},
{
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "85%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "layout": "absolute",
 "minHeight": 1,
 "width": 8,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 50,
 "width": "50%",
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_2746D6CE_3686_81F9_41BD_27DFA4514831",
 "left": "34.99%",
 "minHeight": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": "47.03%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 512,
 "url": "skin/Image_2746D6CE_3686_81F9_41BD_27DFA4514831.png",
 "top": "30.94%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "height": "21.638%",
 "propagateClick": false,
 "class": "Image",
 "click": "this.setComponentVisibility(this.Container_2746E6CE_3686_81F9_41BB_AA2E9D5F2258, false, 0, null, null, false); this.playGlobalAudio(this.audio_24E4ACAA_3681_81B8_41B7_0E225B711BF3)",
 "maxHeight": 512,
 "horizontalAlign": "center",
 "data": {
  "name": "Image7656"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_2746C6CE_3686_81F9_41C3_8C1893D5876D",
 "left": "27.16%",
 "minHeight": 1,
 "shadow": false,
 "scrollBarWidth": 5,
 "paddingBottom": 20,
 "borderRadius": 0,
 "right": "22.83%",
 "backgroundOpacity": 0,
 "minWidth": 1,
 "top": "5.47%",
 "paddingRight": 10,
 "borderSize": 0,
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "24.678%",
 "scrollBarColor": "#FFFFFF",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:7.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.58vh;font-family:'Montserrat';\"><B>Pilih Bahasa Audio</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>Chose audio language</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "id": "Image_2746F6CE_3686_81F9_41C4_82DE052B4EA3",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "right": "30.97%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 512,
 "top": "31.09%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "17.588%",
 "height": "20.923%",
 "propagateClick": false,
 "class": "Image",
 "click": "this.setComponentVisibility(this.Container_2746E6CE_3686_81F9_41BB_AA2E9D5F2258, false, 0, null, null, false)",
 "maxHeight": 512,
 "url": "skin/Image_2746F6CE_3686_81F9_41C4_82DE052B4EA3.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Image8713"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false,
 "height": "100%"
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderSize": 0,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "10px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "layout": "absolute",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": "100%",
 "height": 140,
 "borderSize": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "55%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "layout": "absolute",
 "minHeight": 1,
 "width": 8,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "layout": "vertical",
 "minHeight": 1,
 "backgroundOpacity": 1,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 460,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 60,
 "width": "45%",
 "paddingRight": 60,
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarOpacity": 0.51
},
{
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "mode": "push",
 "height": "75%",
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 1000,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "layout": "vertical",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "mode": "push",
 "height": "36.14%",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "10px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "top": "0%",
 "playbackBarBackgroundOpacity": 1,
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "borderRadius": 0,
 "right": 10,
 "verticalAlign": "middle",
 "minWidth": 50,
 "maxWidth": 60,
 "top": "20%",
 "bottom": "20%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "14.22%",
 "mode": "push",
 "propagateClick": false,
 "class": "IconButton",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "minHeight": 50,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "borderRadius": 0,
 "right": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "10%",
 "mode": "push",
 "height": "10%",
 "propagateClick": false,
 "class": "IconButton",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "maxHeight": 60,
 "transparencyActive": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "maxWidth": 2000,
 "top": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "height": "100%",
 "propagateClick": false,
 "class": "Image",
 "maxHeight": 1000,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundOpacity": 0.3,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 60,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "layout": "vertical",
 "minHeight": 520,
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.79
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "layout": "horizontal",
 "minHeight": 1,
 "width": 370,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "height": 40,
 "borderSize": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#000000",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ]
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "paddingLeft": 10,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.72vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.29vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.58vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "layout": "horizontal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "iconWidth": 32,
 "width": 180,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "fontWeight": "bold",
 "backgroundOpacity": 0.8,
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "height": 50,
 "borderSize": 0,
 "paddingLeft": 0,
 "mode": "push",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "fontSize": "1.96vh",
 "label": "LOREM IPSUM",
 "shadowColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#F7931E"
 ]
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "45%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.87vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>Kampung Wisata </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.15vh;font-family:'Montserrat';\"><B>Kesenian</B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0
},
{
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "maxWidth": 200,
 "propagateClick": false,
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "25%",
 "height": "100%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "class": "Image",
 "maxHeight": 200,
 "horizontalAlign": "left",
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "paddingBottom": 10,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "paddingRight": 10,
 "scrollBarColor": "#F7931E",
 "paddingLeft": 10,
 "width": "75%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "class": "HTMLText",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>Bapak Agus</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.29vh;font-family:'Montserrat';\">PENGELOLA DESA</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0
}],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.59,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
