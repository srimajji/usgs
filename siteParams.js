const keyMirror = require("keymirror");

module.exports.siteTypes = {
  ES: "Estuary",
  "FA-DV": "Diversion",
  GL: "Glacier",
  LK: "Lake",
  OC: "Ocean",
  "OC-CO": "Ocean Coastal",
  SP: "Spring",
  ST: "Stream",
  "ST-CA": "Canal",
  "ST-TS": "Tides"
};

module.exports.siteParams = keyMirror({
  agency_cd: null,
  site_no: null,
  station_nm: null,
  dec_lat_va: null,
  dec_long_va: null,
  country_cd: null,
  tz_cd: null,
  "state_cd": null,
  "district_cd ": null,
  "county_cd": null
});
