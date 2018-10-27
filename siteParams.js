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
  "county_cd": null,
  "site_tp_cd": null,
  "coord_acy_cd": null,
  "huc_cd": null,
});

module.exports.stateFipsCode = {
  "01": "Alabama",
  "02": "Alaska",
  "04": "Arizona",
  "05": "Arkansas",
  "06": "California",
  "08": "Colorado",
  "09": "Connecticut",
  "10": "Delaware",
  "11": "District of Columbia",
  "12": "Florida",
  "13": "Geogia",
  "15": "Hawaii",
  "16": "Idaho",
  "17": "Illinois",
  "18": "Indiana",
  "19": "Iowa",
  "20": "Kansas",
  "21": "Kentucky",
  "22": "Louisiana",
  "23": "Maine",
  "24": "Maryland",
  "25": "Massachusetts",
  "26": "Michigan",
  "27": "Minnesota",
  "28": "Mississippi",
  "29": "Missouri",
  "30": "Montana",
  "31": "Nebraska",
  "32": "Nevada",
  "33": "New Hampshire",
  "34": "New Jersey",
  "35": "New Mexico",
  "36": "New York",
  "37": "North Carolina",
  "38": "North Dakota",
  "39": "Ohio",
  "40": "Oklahoma",
  "41": "Oregon",
  "42": "Pennsylvania",
  "44": "Rhode Island",
  "45": "South Carolina",
  "46": "South Dakota",
  "47": "Tennessee",
  "48": "Texas",
  "49": "Utah",
  "50": "Vermont",
  "51": "Virginia",
  "53": "Washington",
  "54": "West Virginia",
  "55": "Wisconsin",
  "56": "Wyoming",
  "60": "American Samoa",
  "66": "Guam",
  "69": "Northern Marianas",
  "72": "Puerto Rico",
  "74": "U.S. Minor Outlying Islands",
  "78": "Puerto Rico"
}

module.exports.countyFipsCode = {
  "1": "Adjuntas Municipio",
  "3": "Aguada Municipio",
  "5": "Aguadilla Municipio",
  "6": "Cibola County",
  "7": "Aguas Buenas Municipio",
  "9": "Aibonito Municipio",
  "10": "St. Croix Island",
  "11": "Anasco Municipio",
  "12": "La Paz County",
  "13": "Arecibo Municipio",
  "14": "Broomfield County",
  "15": "Arroyo Municipio",
  "16": "Aleutians West Census Area",
  "17": "Barceloneta Municipio",
  "19": "Barranquitas Municipio",
  "20": "St. John Island",
  "21": "Bayamon Municipio",
  "23": "Cabo Rojo Municipio",
  "25": "Caguas Municipio",
  "27": "Camuy Municipio",
  "28": "Los Alamos County",
  "29": "Canovanas Municipio",
  "30": "St. Thomas Island",
  "31": "Carolina Municipio",
  "33": "Catano Municipio",
  "35": "Cayey Municipio",
  "36": "Charles City County",
  "37": "Ceiba Municipio",
  "39": "Ciales Municipio",
  "40": "Swains Island",
  "41": "Cidra Municipio",
  "43": "Coamo Municipio",
  "45": "Comerio Municipio",
  "47": "Corozal Municipio",
  "49": "Culebra Municipio",
  "50": "Western District",
  "51": "Dorado Municipio",
  "53": "Fajardo Municipio",
  "54": "Florida Municipio",
  "55": "Guanica Municipio",
  "57": "Guayama Municipio",
  "59": "Guayanilla Municipio",
  "60": "Bristol Bay Borough",
  "61": "Guaynabo Municipio",
  "63": "Gurabo Municipio",
  "65": "Hatillo Municipio",
  "67": "Hormigueros Municipio",
  "68": "Denali Borough",
  "69": "Humacao Municipio",
  "70": "Dillingham Census Area",
  "71": "Isabela Municipio",
  "73": "Jayuya Municipio",
  "75": "Juana Diaz Municipio",
  "77": "Juncos Municipio",
  "78": "Menominee County",
  "79": "Lajas Municipio",
  "81": "Lares Municipio",
  "83": "Las Marias Municipio",
  "85": "Las Piedras Municipio",
  "86": "Miami-Dade County",
  "87": "Loiza Municipio",
  "89": "Luquillo Municipio",
  "90": "Fairbanks North Star Borough",
  "91": "Manati Municipio",
  "93": "Maricao Municipio",
  "95": "Maunabo Municipio",
  "97": "Mayaguez Municipio",
  "99": "Moca Municipio",
  "100": "Rota Municipality",
  "101": "Morovis Municipio",
  "103": "Naguabo Municipio",
  "105": "Naranjito Municipio",
  "107": "Orocovis Municipio",
  "109": "Patillas Municipio",
  "110": "Saipan Municipality",
  "111": "Penuelas Municipio",
  "113": "Ponce Municipio",
  "115": "Quebradillas Municipio",
  "117": "Rincon Municipio",
  "119": "Rio Grande Municipio",
  "120": "Tinian Municipality",
  "121": "Sabana Grande Municipio",
  "122": "Kenai Peninsula Borough",
  "123": "Salinas Municipio",
  "125": "San German Municipio",
  "127": "San Juan Municipio",
  "129": "San Lorenzo Municipio",
  "130": "Ketchikan Gateway Borough",
  "131": "San Sebastian Municipio",
  "133": "Santa Isabel Municipio",
  "135": "Toa Alta Municipio",
  "137": "Toa Baja Municipio",
  "139": "Trujillo Alto Municipio",
  "141": "Utuado Municipio",
  "143": "Vega Alta Municipio",
  "145": "Vega Baja Municipio",
  "147": "Vieques Municipio",
  "149": "Villalba Municipio",
  "150": "Kodiak Island Borough",
  "151": "Yabucoa Municipio",
  "153": "Yauco Municipio",
  "155": "Pulaski County",
  "157": "Rappahannock County",
  "159": "Richmond County",
  "161": "Roanoke County",
  "163": "Rockbridge County",
  "164": "Lake and Peninsula Borough",
  "165": "Rockingham County",
  "167": "Russell County",
  "169": "Scott County",
  "170": "Matanuska-Susitna Borough",
  "171": "Shenandoah County",
  "173": "Smyth County",
  "175": "Southampton County",
  "177": "Spotsylvania County",
  "179": "Stafford County",
  "180": "Nome Census Area",
  "181": "Surry County",
  "183": "Sussex County",
  "185": "Tazewell County",
  "186": "Ste. Genevieve County",
  "187": "Warren County",
  "188": "Northwest Arctic Borough",
  "189": "Hale County",
  "191": "Washington County",
  "193": "Westmoreland County",
  "195": "Wise County",
  "197": "Wythe County",
  "198": "Prince of Wales-Hyder Census Area",
  "199": "York County",
  "201": "Harris County",
  "203": "Harrison County",
  "205": "Hartley County",
  "207": "Haskell County",
  "209": "Hays County",
  "211": "Hemphill County",
  "213": "Henderson County",
  "215": "Hidalgo County",
  "217": "Hill County",
  "219": "Hockley County",
  "220": "Sitka City and Borough",
  "221": "Hood County",
  "223": "Hopkins County",
  "225": "Houston County",
  "227": "Howard County",
  "229": "Hudspeth County",
  "230": "Skagway Municipality",
  "231": "Hunt County",
  "233": "Hutchinson County",
  "235": "Irion County",
  "237": "Jack County",
  "239": "Jackson County",
  "240": "Southeast Fairbanks Census Area",
  "241": "Jasper County",
  "243": "Jeff Davis County",
  "245": "Jefferson County",
  "247": "Jim Hogg County",
  "249": "Jim Wells County",
  "251": "Johnson County",
  "253": "Jones County",
  "255": "Karnes County",
  "257": "Kaufman County",
  "259": "Kendall County",
  "261": "Kenedy County",
  "263": "Kent County",
  "265": "Kerr County",
  "267": "Kimble County",
  "269": "King County",
  "270": "Wade Hampton Census Area",
  "271": "Kinney County",
  "273": "Kleberg County",
  "275": "Knox County",
  "277": "Lamar County",
  "279": "Lamb County",
  "281": "Lampasas County",
  "282": "Yakutat City and Borough",
  "283": "La Salle County",
  "285": "Lavaca County",
  "287": "Lee County",
  "289": "Leon County",
  "290": "Yukon-Koyukuk Census Area",
  "291": "Liberty County",
  "293": "Limestone County",
  "295": "Lipscomb County",
  "297": "Live Oak County",
  "299": "Llano County",
  "300": "Midway Islands",
  "301": "Loving County",
  "303": "Lubbock County",
  "305": "Lynn County",
  "307": "McCulloch County",
  "309": "McLennan County",
  "311": "McMullen County",
  "313": "Madison County",
  "315": "Marion County",
  "317": "Martin County",
  "319": "Mason County",
  "321": "Matagorda County",
  "323": "Maverick County",
  "325": "Medina County",
  "327": "Menard County",
  "329": "Midland County",
  "331": "Milam County",
  "333": "Mills County",
  "335": "Mitchell County",
  "337": "Montague County",
  "339": "Montgomery County",
  "341": "Moore County",
  "343": "Morris County",
  "345": "Motley County",
  "347": "Nacogdoches County",
  "349": "Navarro County",
  "351": "Newton County",
  "353": "Nolan County",
  "355": "Nueces County",
  "357": "Ochiltree County",
  "359": "Oldham County",
  "361": "Orange County",
  "363": "Palo Pinto County",
  "365": "Panola County",
  "367": "Parker County",
  "369": "Parmer County",
  "371": "Pecos County",
  "373": "Polk County",
  "375": "Potter County",
  "377": "Presidio County",
  "379": "Rains County",
  "381": "Randall County",
  "383": "Reagan County",
  "385": "Real County",
  "387": "Red River County",
  "389": "Reeves County",
  "391": "Refugio County",
  "393": "Roberts County",
  "395": "Robertson County",
  "397": "Rockwall County",
  "399": "Runnels County",
  "401": "Rusk County",
  "403": "Sabine County",
  "405": "San Augustine County",
  "407": "San Jacinto County",
  "409": "San Patricio County",
  "411": "San Saba County",
  "413": "Schleicher County",
  "415": "Scurry County",
  "417": "Shackelford County",
  "419": "Shelby County",
  "421": "Sherman County",
  "423": "Smith County",
  "425": "Somervell County",
  "427": "Starr County",
  "429": "Stephens County",
  "431": "Sterling County",
  "433": "Stonewall County",
  "435": "Sutton County",
  "437": "Swisher County",
  "439": "Tarrant County",
  "441": "Taylor County",
  "443": "Terrell County",
  "445": "Terry County",
  "447": "Throckmorton County",
  "449": "Titus County",
  "451": "Tom Green County",
  "453": "Travis County",
  "455": "Trinity County",
  "457": "Tyler County",
  "459": "Upshur County",
  "461": "Upton County",
  "463": "Uvalde County",
  "465": "Val Verde County",
  "467": "Van Zandt County",
  "469": "Victoria County",
  "471": "Walker County",
  "473": "Waller County",
  "475": "Ward County",
  "477": "Washington County",
  "479": "Webb County",
  "481": "Wharton County",
  "483": "Wheeler County",
  "485": "Wichita County",
  "487": "Wilbarger County",
  "489": "Willacy County",
  "491": "Williamson County",
  "493": "Wilson County",
  "495": "Winkler County",
  "497": "Wise County",
  "499": "Wood County",
  "501": "Yoakum County",
  "503": "Young County",
  "505": "Zapata County",
  "507": "Zavala County",
  "510": "Alexandria city",
  "515": "Bedford city",
  "520": "Bristol city",
  "530": "Buena Vista city",
  "540": "Charlottesville city",
  "550": "Chesapeake city",
  "570": "Colonial Heights city",
  "580": "Covington city",
  "590": "Danville city",
  "595": "Emporia city",
  "600": "Fairfax city",
  "610": "Falls Church city",
  "620": "Franklin city",
  "630": "Fredericksburg city",
  "640": "Galax city",
  "650": "Hampton city",
  "660": "Harrisonburg city",
  "670": "Hopewell city",
  "678": "Lexington city",
  "680": "Lynchburg city",
  "683": "Manassas city",
  "685": "Manassas Park city",
  "690": "Martinsville city",
  "700": "Newport News city",
  "710": "Norfolk city",
  "720": "Norton city",
  "730": "Petersburg city",
  "735": "Poquoson city",
  "740": "Portsmouth city",
  "750": "Radford city",
  "760": "Richmond city",
  "770": "Roanoke city",
  "775": "Salem city",
  "790": "Staunton city",
  "800": "Suffolk city",
  "810": "Virginia Beach city",
  "820": "Waynesboro city",
  "830": "Williamsburg city",
  "840": "Winchester city"
};

module.exports.statePostalCodes = {
  "AL": 1,
  "AK": 2,
  "AZ": 4,
  "AR": 5,
  "CA": 6,
  "CO": 8,
  "CT": 9,
  "DE": 10,
  "DC": 11,
  "FL": 12,
  "GA": 13,
  "HI": 15,
  "ID": 16,
  "IL": 17,
  "IN": 18,
  "IA": 19,
  "KS": 20,
  "KY": 21,
  "LA": 22,
  "ME": 23,
  "MD": 24,
  "MA": 25,
  "MI": 26,
  // "MN": 27, DOES NOT EXIST
  "MS": 28,
  "MO": 29,
  "MT": 30,
  "NE": 31,
  "NV": 32,
  "NH": 33,
  "NJ": 34,
  "NM": 35,
  "NY": 36,
  "NC": 37,
  "ND": 38,
  "OH": 39,
  "OK": 40,
  "OR": 41,
  "PA": 42,
  "RI": 44,
  "SC": 45,
  "SD": 46,
  "TN": 47,
  "TX": 48,
  "UT": 49,
  "VT": 50,
  "VA": 51,
  "WA": 53,
  "WV": 54,
  "WI": 55,
  "WY": 56,
  // "AS": 60, DOES NOT EXIST
  "GU": 66,
  "MP": 69,
  "PR": 72,
  // "UM": 74, DOES NOT EXIST
  "VI": 78
};


module.exports.hydrologicCd = {
  null: {
    "huc_class_cd":"",
    "huc_nm": "",
  },
  "10": {
    "huc_class_cd": "Region",
    "huc_nm": "Missouri Region"
  },
  "11": {
    "huc_class_cd": "Region",
    "huc_nm": "Arkansas-White-Red Region"
  },
  "12": {
    "huc_class_cd": "Region",
    "huc_nm": "Texas-Gulf Region"
  },
  "13": {
    "huc_class_cd": "Region",
    "huc_nm": "Rio Grande Region"
  },
  "14": {
    "huc_class_cd": "Region",
    "huc_nm": "Upper Colorado Region"
  },
  "15": {
    "huc_class_cd": "Region",
    "huc_nm": "Lower Colorado Region"
  },
  "16": {
    "huc_class_cd": "Region",
    "huc_nm": "Great Basin Region"
  },
  "17": {
    "huc_class_cd": "Region",
    "huc_nm": "Pacific Northwest Region"
  },
  "18": {
    "huc_class_cd": "Region",
    "huc_nm": "California Region"
  },
  "19": {
    "huc_class_cd": "Region",
    "huc_nm": "Alaska Region"
  },
  "20": {
    "huc_class_cd": "Region",
    "huc_nm": "Hawaii Region"
  },
  "21": {
    "huc_class_cd": "Region",
    "huc_nm": "Caribbean Region"
  },
  "1001": {
    "huc_class_cd": "Subregion",
    "huc_nm": "The Saskatchewan River Basin"
  },
  "1002": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Missouri Headwaters"
  },
  "1003": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Missouri-Marias"
  },
  "1004": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Missouri-Musselshell"
  },
  "1005": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Milk"
  },
  "1006": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Missouri-Poplar"
  },
  "1007": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Yellowstone"
  },
  "1008": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Big Horn"
  },
  "1009": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Powder-Tongue"
  },
  "1010": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Yellowstone"
  },
  "1011": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Missouri-Little Missouri"
  },
  "1012": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Cheyenne"
  },
  "1013": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Missouri-Oahe"
  },
  "1014": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Missouri-White"
  },
  "1015": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Niobrara"
  },
  "1016": {
    "huc_class_cd": "Subregion",
    "huc_nm": "James"
  },
  "1017": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Missouri-Big Sioux"
  },
  "1018": {
    "huc_class_cd": "Subregion",
    "huc_nm": "North Platte"
  },
  "1019": {
    "huc_class_cd": "Subregion",
    "huc_nm": "South Platte"
  },
  "1020": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Platte"
  },
  "1021": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Loup"
  },
  "1022": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Elkhorn"
  },
  "1023": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Missouri-Little Sioux"
  },
  "1024": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Missouri-Nishnabotna"
  },
  "1025": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Republican"
  },
  "1026": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Smoky Hill"
  },
  "1027": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Kansas"
  },
  "1028": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Chariton-Grand"
  },
  "1029": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Gasconade-Osage"
  },
  "1030": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Missouri"
  },
  "1101": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper White"
  },
  "1102": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Arkansas"
  },
  "1103": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Middle Arkansas"
  },
  "1104": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Cimarron"
  },
  "1105": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Cimarron"
  },
  "1106": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Arkansas-Keystone"
  },
  "1107": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Neosho-Verdigris"
  },
  "1108": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Canadian"
  },
  "1109": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Canadian"
  },
  "1110": {
    "huc_class_cd": "Subregion",
    "huc_nm": "North Canadian"
  },
  "1111": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Arkansas"
  },
  "1112": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Red Headwaters"
  },
  "1113": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Red-Washita"
  },
  "1114": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Red-Sulphur"
  },
  "1201": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Sabine"
  },
  "1202": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Neches"
  },
  "1203": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Trinity"
  },
  "1204": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Galveston Bay-San Jacinto"
  },
  "1205": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Brazos Headwaters"
  },
  "1206": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Middle Brazos"
  },
  "1207": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Brazos"
  },
  "1208": {
    "huc_class_cd": "Subregion",
    "huc_nm": "UpperColorado"
  },
  "1209": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Colorado-San Bernard Coastal"
  },
  "1210": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Central Texas Coastal"
  },
  "1211": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Nueces-Southwestern Texas Coastal"
  },
  "1301": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Rio Grande Headwaters"
  },
  "1302": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Rio Grande-Elephant Butte"
  },
  "1303": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Rio Grande-Mimbres"
  },
  "1304": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Rio Grande-Amistad"
  },
  "1305": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Rio Grande Closed Basins"
  },
  "1306": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Pecos"
  },
  "1307": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Pecos"
  },
  "1308": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Rio Grande-Falcon"
  },
  "1309": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Rio Grande"
  },
  "1401": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Colorado Headwaters"
  },
  "1402": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Gunnison"
  },
  "1403": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Colorado-Dolores"
  },
  "1404": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Great Divide-Upper Green"
  },
  "1405": {
    "huc_class_cd": "Subregion",
    "huc_nm": "White-Yampa"
  },
  "1406": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Green"
  },
  "1407": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Colorado-Dirty Devil"
  },
  "1408": {
    "huc_class_cd": "Subregion",
    "huc_nm": "San Juan"
  },
  "1501": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Colorado-Lake Mead"
  },
  "1502": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Little Colorado"
  },
  "1503": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Colorado"
  },
  "1504": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Gila"
  },
  "1505": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Middle Gila"
  },
  "1506": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Salt"
  },
  "1507": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Gila"
  },
  "1508": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Sonora"
  },
  "1601": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Bear"
  },
  "1602": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Great Salt Lake"
  },
  "1603": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Escalante Desert-Sevier Lake"
  },
  "1604": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Black Rock Desert-Humboldt"
  },
  "1605": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Central Lahontan"
  },
  "1606": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Central Nevada Desert Basins"
  },
  "1701": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Kootenai-Pend Oreille-Spokane"
  },
  "1702": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Columbia"
  },
  "1703": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Yakima"
  },
  "1704": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Snake"
  },
  "1705": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Middle Snake"
  },
  "1706": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Snake"
  },
  "1707": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Middle Columbia"
  },
  "1708": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Columbia"
  },
  "1709": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Willamette"
  },
  "1710": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Oregon-Washington Coastal"
  },
  "1711": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Puget Sound"
  },
  "1712": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Oregon Closed Basins"
  },
  "1801": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Klamath-Northern California Coastal"
  },
  "1802": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Sacramento"
  },
  "1803": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Tulare-Buena Vista Lakes"
  },
  "1804": {
    "huc_class_cd": "Subregion",
    "huc_nm": "San Joaquin"
  },
  "1805": {
    "huc_class_cd": "Subregion",
    "huc_nm": "San Francisco Bay"
  },
  "1806": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Central California Coastal"
  },
  "1807": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southern California Coastal"
  },
  "1808": {
    "huc_class_cd": "Subregion",
    "huc_nm": "North Lahontan"
  },
  "1809": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Northern Mojave-Mono Lake"
  },
  "1810": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southern Mojave-Salton Sea"
  },
  "1901": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southeast Alaska"
  },
  "1902": {
    "huc_class_cd": "Subregion",
    "huc_nm": "South Central Alaska"
  },
  "1903": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southwest Alaska"
  },
  "1904": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Yukon Alaska"
  },
  "1905": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Northwest Alaska"
  },
  "1906": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Arctic Alaska"
  },
  "1907": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Headwaters Yukon-Lake Laberge"
  },
  "2001": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Hawaii"
  },
  "2002": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Maui"
  },
  "2003": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Kahoolawe"
  },
  "2004": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lanai"
  },
  "2005": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Molokai"
  },
  "2006": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Oahu"
  },
  "2007": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Kauai"
  },
  "2008": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Niihau"
  },
  "2009": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Northwestern Hawaiian Islands"
  },
  "2101": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Puerto Rico"
  },
  "2102": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Virgin Islands"
  },
  "2103": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Caribbean Outlying Areas"
  },
  "100100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Saskatchewan"
  },
  "100200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Missouri Headwaters"
  },
  "100301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Missouri"
  },
  "100302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Marias"
  },
  "100401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Fort Peck Lake"
  },
  "100402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Musselshell"
  },
  "100500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Milk"
  },
  "100600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Missouri-Poplar"
  },
  "100700": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Yellowstone"
  },
  "100800": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Big Horn"
  },
  "100901": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Tongue"
  },
  "100902": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Powder"
  },
  "101000": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Yellowstone"
  },
  "101101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lake Sakakawea"
  },
  "101102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Little Missouri"
  },
  "101201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Cheyenne"
  },
  "101202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Belle Fourche"
  },
  "101301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lake Oahe"
  },
  "101302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Cannonball-Heart-Knife"
  },
  "101303": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Grand-Moreau"
  },
  "101401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Fort Randall Reservoir"
  },
  "101402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "White"
  },
  "101500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Niobrara"
  },
  "101600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "James"
  },
  "101701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lewis and Clark Lake"
  },
  "101702": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Big Sioux"
  },
  "101800": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "North Platte"
  },
  "101900": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "South Platte"
  },
  "102001": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Platte"
  },
  "102002": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Platte"
  },
  "102100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Loup"
  },
  "102200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Elkhorn"
  },
  "102300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Missouri-Little Sioux"
  },
  "102400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Missouri-Nishnabotna"
  },
  "102500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Republican"
  },
  "102600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Smoky Hill"
  },
  "102701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kansas"
  },
  "102702": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Big Blue"
  },
  "102801": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Grand"
  },
  "102802": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Chariton"
  },
  "102901": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Osage"
  },
  "102902": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Gasconade"
  },
  "103001": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Missouri-Blackwater"
  },
  "103002": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Missouri"
  },
  "110100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper White"
  },
  "110200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Arkansas"
  },
  "110300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Arkansas"
  },
  "110400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Cimarron"
  },
  "110500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Cimarron"
  },
  "110600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Arkansas-Keystone"
  },
  "110701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Verdigris"
  },
  "110702": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Neosho"
  },
  "110800": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Canadian"
  },
  "110901": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Canadian"
  },
  "110902": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Canadian"
  },
  "111001": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Beaver"
  },
  "111002": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Beaver"
  },
  "111003": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower North Canadian"
  },
  "111101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Robert S. Kerr Reservoir"
  },
  "111102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Arkansas-Fourche La Fave"
  },
  "111201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Prairie Dog Town Fork Red"
  },
  "111202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Salt Fork Red"
  },
  "111203": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "North Fork Red"
  },
  "111301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Red-Pease"
  },
  "111302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Red-Lake Texoma"
  },
  "111303": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Washita"
  },
  "111401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Red-Little"
  },
  "111402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Red-Saline"
  },
  "111403": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Big Cypress-Sulphur"
  },
  "120100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Sabine"
  },
  "120200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Neches"
  },
  "120301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Trinity"
  },
  "120302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Trinity"
  },
  "120401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "San Jacinto"
  },
  "120402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Galveston Bay-Sabine Lake"
  },
  "120500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Brazos Headwaters"
  },
  "120601": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Brazos-Clear Fork"
  },
  "120602": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Brazos-Bosque"
  },
  "120701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Brazos"
  },
  "120702": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Little"
  },
  "120800": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Colorado"
  },
  "120901": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Colorado-Concho"
  },
  "120902": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Colorado-Llano"
  },
  "120903": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Colorado"
  },
  "120904": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "San Bernard Coastal"
  },
  "121001": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lavaca"
  },
  "121002": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Guadalupe"
  },
  "121003": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "San Antonio"
  },
  "121004": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Central Texas Coastal"
  },
  "121101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Nueces"
  },
  "121102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southwestern Texas Coastal"
  },
  "130100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rio Grande Headwaters"
  },
  "130201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Rio Grande"
  },
  "130202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rio Grande-Elephant Butte"
  },
  "130301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rio Grande-Caballo"
  },
  "130302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Mimbres"
  },
  "130401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rio Grande-Fort Quitman"
  },
  "130402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rio Grande-Amistad"
  },
  "130403": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Devils"
  },
  "130500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rio Grande Closed Basins"
  },
  "130600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Pecos"
  },
  "130700": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Pecos"
  },
  "130800": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rio Grande-Falcon"
  },
  "130900": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Rio Grande"
  },
  "140100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Colorado Headwaters"
  },
  "140200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Gunnison"
  },
  "140300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Colorado-Dolores"
  },
  "140401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Green"
  },
  "140402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Great Divide Closed Basin"
  },
  "140500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "White-Yampa"
  },
  "140600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Green"
  },
  "140700": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Colorado-Dirty Devil"
  },
  "140801": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper San Juan"
  },
  "140802": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower San Juan"
  },
  "150100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Colorado-Lake Mead"
  },
  "150200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Little Colorado"
  },
  "150301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Colorado"
  },
  "150302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Bill Williams"
  },
  "150400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Gila"
  },
  "150501": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Gila"
  },
  "150502": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "San Pedro-Willcox"
  },
  "150503": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Santa Cruz"
  },
  "150601": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Salt"
  },
  "150602": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Verde"
  },
  "150701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Gila-Agua Fria"
  },
  "150702": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Gila"
  },
  "150801": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rio Sonoyta"
  },
  "150802": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rio De La Concepcion"
  },
  "150803": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rio De Bavispe"
  },
  "160101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Bear"
  },
  "160102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Bear"
  },
  "160201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Weber"
  },
  "160202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Jordan"
  },
  "160203": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Great Salt Lake"
  },
  "160300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Escalante Desert-Sevier Lake"
  },
  "160401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Humboldt"
  },
  "160402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Black Rock Desert"
  },
  "160501": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Truckee"
  },
  "160502": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Carson"
  },
  "160503": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Walker"
  },
  "160600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Central Nevada Desert Basins"
  },
  "170101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kootenai"
  },
  "170102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Pend Oreille"
  },
  "170103": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Spokane"
  },
  "170200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Columbia"
  },
  "170300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Yakima"
  },
  "170401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Snake Headwaters"
  },
  "170402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Snake"
  },
  "170501": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Snake-Boise"
  },
  "170502": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Snake-Powder"
  },
  "170601": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Snake"
  },
  "170602": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Salmon"
  },
  "170603": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Clearwater"
  },
  "170701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Columbia"
  },
  "170702": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "John Day"
  },
  "170703": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Deschutes"
  },
  "170800": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Columbia"
  },
  "170900": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Willamette"
  },
  "171001": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Washington Coastal"
  },
  "171002": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northern Oregon Coastal"
  },
  "171003": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southern Oregon Coastal"
  },
  "171100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Puget Sound"
  },
  "171200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Oregon Closed Basins"
  },
  "180101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northern California Coastal"
  },
  "180102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Klamath"
  },
  "180200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Sacramento"
  },
  "180201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Sacramento"
  },
  "180300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Tulare-Buena Vista Lakes"
  },
  "180400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "San Joaquin"
  },
  "180500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "San Francisco Bay"
  },
  "180600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Central California Coastal"
  },
  "180701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Ventura-San Gabriel Coastal"
  },
  "180702": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Santa Ana"
  },
  "180703": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Laguna-San Diego Coastal"
  },
  "180800": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "North Lahontan"
  },
  "180901": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Mono-Owens Lakes"
  },
  "180902": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northern Mojave"
  },
  "181001": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southern Mojave"
  },
  "181002": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Salton Sea"
  },
  "190101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southern Southeast Alaska"
  },
  "190102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Central Southeast Alaska"
  },
  "190103": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northern Southeast Alaska"
  },
  "190104": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Gulf of Alaska"
  },
  "190105": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Icy Strait-Chatham Strait"
  },
  "190201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Copper River"
  },
  "190202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Prince William Sound"
  },
  "190203": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kenai Peninsula"
  },
  "190204": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Knik Arm"
  },
  "190205": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Susitna River"
  },
  "190206": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Western Cook Inlet"
  },
  "190207": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kodiak-Shelikof"
  },
  "190208": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Cook Inlet"
  },
  "190301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Aleutian Islands"
  },
  "190302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kvichak-Port Heiden"
  },
  "190303": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Nushagak River"
  },
  "190304": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Kuskokwim River"
  },
  "190305": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Kuskokwim River"
  },
  "190401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Canada"
  },
  "190402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Porcupine River"
  },
  "190403": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Chandalar-Christian Rivers"
  },
  "190404": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Yukon River"
  },
  "190405": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Tanana River"
  },
  "190406": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Koyukuk River"
  },
  "190407": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Central Yukon"
  },
  "190408": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Yukon"
  },
  "190501": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Norton Sound"
  },
  "190502": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northern Seward Peninsula"
  },
  "190503": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kobuk-Selawik Rivers"
  },
  "190504": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Noatak River-Lisburne Peninsula"
  },
  "190505": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kotzebue Sound"
  },
  "190601": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Western Arctic"
  },
  "190602": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Barrow Alaska"
  },
  "190603": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Colville River"
  },
  "190604": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Prudhoe Bay"
  },
  "190605": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Eastern Arctic"
  },
  "190701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Headwaters Yukon River"
  },
  "200100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Hawaii"
  },
  "200200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Maui"
  },
  "200300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kahoolawe"
  },
  "200400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lanai"
  },
  "200500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Molokai"
  },
  "200600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Oahu"
  },
  "200700": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kauai"
  },
  "200800": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Niihau"
  },
  "200900": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northwestern Hawaiian Islands"
  },
  "210100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Puerto Rico"
  },
  "210200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Virgin Islands"
  },
  "210300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Caribbean Outlying Areas"
  },
  "10010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Belly"
  },
  "10010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Mary"
  },
  "10020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Red Rock"
  },
  "10020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaverhead"
  },
  "10020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ruby"
  },
  "10020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Hole"
  },
  "10020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Jefferson"
  },
  "10020006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Boulder"
  },
  "10020007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Madison"
  },
  "10020008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Gallatin"
  },
  "10030101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Missouri"
  },
  "10030102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Missouri-Dearborn"
  },
  "10030103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Smith"
  },
  "10030104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sun"
  },
  "10030105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Belt"
  },
  "10030201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Two Medicine"
  },
  "10030202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cut Bank"
  },
  "10030203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Marias"
  },
  "10030204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Willow"
  },
  "10030205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Teton"
  },
  "10040101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bullwhacker-Dog"
  },
  "10040102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Arrow"
  },
  "10040103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Judith"
  },
  "10040104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fort Peck Reservoir"
  },
  "10040105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Dry"
  },
  "10040106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Dry"
  },
  "10040201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Musselshell"
  },
  "10040202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Musselshell"
  },
  "10040203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Flatwillow"
  },
  "10040204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Box Elder"
  },
  "10040205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Musselshell"
  },
  "10050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Milk Headwaters"
  },
  "10050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Milk"
  },
  "10050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wild Horse Lake"
  },
  "10050004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Milk"
  },
  "10050005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Sandy"
  },
  "10050006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sage"
  },
  "10050007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lodge"
  },
  "10050008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Battle"
  },
  "10050009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Peoples"
  },
  "10050010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cottonwood"
  },
  "10050011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Whitewater"
  },
  "10050012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Milk"
  },
  "10050013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Frenchman"
  },
  "10050014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver"
  },
  "10050015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rock"
  },
  "10050016": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Porcupine"
  },
  "10060001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Prarie Elk-Wolf"
  },
  "10060002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Redwater"
  },
  "10060003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Poplar"
  },
  "10060004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Fork Poplar"
  },
  "10060005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Charlie-Little Muddy"
  },
  "10060006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Muddy"
  },
  "10060007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Brush Lake Closed Basin"
  },
  "10070001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yellowstone Headwaters"
  },
  "10070002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Yellowstone"
  },
  "10070003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shields"
  },
  "10070004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Yellowstone-Lake Basin"
  },
  "10070005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Stillwater"
  },
  "10070006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clarks Fork Yellowstone"
  },
  "10070007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Yellowstone-Pompeys Pillar"
  },
  "10070008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pryor"
  },
  "10080001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Wind"
  },
  "10080002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Wind"
  },
  "10080003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Popo Agie"
  },
  "10080004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Muskrat"
  },
  "10080005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Wind"
  },
  "10080006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Badwater"
  },
  "10080007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Bighorn"
  },
  "10080008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nowood"
  },
  "10080009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Greybull"
  },
  "10080010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Horn Lake"
  },
  "10080011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dry"
  },
  "10080012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Shoshone"
  },
  "10080013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Shoshone"
  },
  "10080014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shoshone"
  },
  "10080015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Bighorn"
  },
  "10080016": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Bighorn"
  },
  "10090101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Tongue"
  },
  "10090102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Tongue"
  },
  "10090201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork Powder"
  },
  "10090202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Powder"
  },
  "10090203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Powder"
  },
  "10090204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salt"
  },
  "10090205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crazy Woman"
  },
  "10090206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clear"
  },
  "10090207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Powder"
  },
  "10090208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Powder"
  },
  "10090209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Powder"
  },
  "10090210": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mizpah"
  },
  "10100001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Yellowstone-Sunday"
  },
  "10100002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Porcupine"
  },
  "10100003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rosebud"
  },
  "10100004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Yellowstone"
  },
  "10100005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "O'Fallon"
  },
  "10110101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Sakakawea"
  },
  "10110102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Muddy"
  },
  "10110201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Little Missouri"
  },
  "10110202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Boxelder"
  },
  "10110203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Little Missouri"
  },
  "10110204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver"
  },
  "10110205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Little Missouri"
  },
  "10120101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Antelope"
  },
  "10120102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dry Fork Cheyenne"
  },
  "10120103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cheyenne"
  },
  "10120104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lance"
  },
  "10120105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lightning"
  },
  "10120106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Angostura Reservoir"
  },
  "10120107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver"
  },
  "10120108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hat"
  },
  "10120109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Cheyenne-Spring"
  },
  "10120110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rapid"
  },
  "10120111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Cheyenne-Elk"
  },
  "10120112": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cheyenne"
  },
  "10120113": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cherry"
  },
  "10120201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Belle Fourche"
  },
  "10120202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Belle Fourche"
  },
  "10120203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Redwater"
  },
  "10130101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Painted Woods-Square Butte"
  },
  "10130102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Lake Oahe"
  },
  "10130103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Apple"
  },
  "10130104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver"
  },
  "10130105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Lake Oahe"
  },
  "10130106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Missouri Coteau"
  },
  "10130201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Knife"
  },
  "10130202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Heart"
  },
  "10130203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Heart"
  },
  "10130204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cannonball"
  },
  "10130205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cedar"
  },
  "10130206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cannonball"
  },
  "10130301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Grand"
  },
  "10130302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Grand"
  },
  "10130303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Grand"
  },
  "10130304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Moreau"
  },
  "10130305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Moreau"
  },
  "10130306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Moreau"
  },
  "10140101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fort Randall Reservoir"
  },
  "10140102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bad"
  },
  "10140103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Medicine Knoll"
  },
  "10140104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Medicine"
  },
  "10140105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crow"
  },
  "10140201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper White"
  },
  "10140202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle White"
  },
  "10140203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little White"
  },
  "10140204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower White"
  },
  "10150001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ponca"
  },
  "10150002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Niobrara Headwaters"
  },
  "10150003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Niobrara"
  },
  "10150004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Niobrara"
  },
  "10150005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Snake"
  },
  "10150006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Keya Paha"
  },
  "10150007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Niobrara"
  },
  "10160001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "James Headwaters"
  },
  "10160002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pipestem"
  },
  "10160003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper James"
  },
  "10160004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elm"
  },
  "10160005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mud"
  },
  "10160006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle James"
  },
  "10160007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Snake"
  },
  "10160008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Snake"
  },
  "10160009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Turtle"
  },
  "10160010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Big Sioux Coteau"
  },
  "10160011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower James"
  },
  "10170101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lewis and Clark Lake"
  },
  "10170102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Vermillion"
  },
  "10170103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Thompson"
  },
  "10170201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Big Sioux"
  },
  "10170202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Big Sioux"
  },
  "10170203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Big Sioux"
  },
  "10170204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rock"
  },
  "10180001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Platte Headwaters"
  },
  "10180002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper North Platte"
  },
  "10180003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pathfinder-Seminoe Reservoirs"
  },
  "10180004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Medicine Bow"
  },
  "10180005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Medicine Bow"
  },
  "10180006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sweetwater"
  },
  "10180007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle North Platte-Casper"
  },
  "10180008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Glendo Reservoir"
  },
  "10180009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle North Platte-Scotts Bluff"
  },
  "10180010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Laramie"
  },
  "10180011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Laramie"
  },
  "10180012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Horse"
  },
  "10180013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pumpkin"
  },
  "10180014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower North Platte"
  },
  "10190001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Platte Headwaters"
  },
  "10190002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper South Platte"
  },
  "10190003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle South Platte-Cherry Creek"
  },
  "10190004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clear"
  },
  "10190005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Vrain"
  },
  "10190006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Thompson"
  },
  "10190007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cache La Poudre"
  },
  "10190008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lone Tree-Owl"
  },
  "10190009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crow"
  },
  "10190010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kiowa"
  },
  "10190011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bijou"
  },
  "10190012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle South Platte-Sterling"
  },
  "10190013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver"
  },
  "10190014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pawnee"
  },
  "10190015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Lodgepole"
  },
  "10190016": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Lodgepole"
  },
  "10190017": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sidney Draw"
  },
  "10190018": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower South Platte"
  },
  "10200101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Platte-Buffalo"
  },
  "10200102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wood"
  },
  "10200103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Platte-Prairie"
  },
  "10200201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Platte-Shell"
  },
  "10200202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Platte"
  },
  "10200203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salt"
  },
  "10210001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Middle Loup"
  },
  "10210002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dismal"
  },
  "10210003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Middle Loup"
  },
  "10210004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Loup"
  },
  "10210005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mud"
  },
  "10210006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper North Loup"
  },
  "10210007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower North Loup"
  },
  "10210008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Calamus"
  },
  "10210009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Loup"
  },
  "10210010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cedar"
  },
  "10220001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Elkhorn"
  },
  "10220002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Elkhorn"
  },
  "10220003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Elkhorn"
  },
  "10220004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Logan"
  },
  "10230001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blackbird-Soldier"
  },
  "10230002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Floyd"
  },
  "10230003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Sioux"
  },
  "10230004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Monona-Harrison Ditch"
  },
  "10230005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Maple"
  },
  "10230006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Papillion-Mosquito"
  },
  "10230007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Boyer"
  },
  "10240001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Keg-Weeping Water"
  },
  "10240002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Nishnabotna"
  },
  "10240003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Nishnabotna"
  },
  "10240004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nishnabotna"
  },
  "10240005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tarkio-Wolf"
  },
  "10240006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Nemaha"
  },
  "10240007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Big Nemaha"
  },
  "10240008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Nemaha"
  },
  "10240009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Nodaway"
  },
  "10240010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nodaway"
  },
  "10240011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Independence-Sugar"
  },
  "10240012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Platte"
  },
  "10240013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "One Hundred and Two"
  },
  "10250001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Arikaree"
  },
  "10250002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Republican"
  },
  "10250003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Republican"
  },
  "10250004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Republican"
  },
  "10250005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Frenchman"
  },
  "10250006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Stinking Water"
  },
  "10250007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Red Willow"
  },
  "10250008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Medicine"
  },
  "10250009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Harlan County Reservoir"
  },
  "10250010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Sappa"
  },
  "10250011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Sappa"
  },
  "10250012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Beaver"
  },
  "10250013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Beaver"
  },
  "10250014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver"
  },
  "10250015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Prairie Dog"
  },
  "10250016": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Republican"
  },
  "10250017": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Republican"
  },
  "10260001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Smoky Hill Headwaters"
  },
  "10260002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Smoky Hill"
  },
  "10260003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Smoky Hill"
  },
  "10260004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ladder"
  },
  "10260005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hackberry"
  },
  "10260006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Smoky Hill"
  },
  "10260007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big"
  },
  "10260008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Smoky Hill"
  },
  "10260009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Saline"
  },
  "10260010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Saline"
  },
  "10260011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper North Fork Solomon"
  },
  "10260012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower North Fork Solomon"
  },
  "10260013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper South Fork Solomon"
  },
  "10260014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower South Fork Solomon"
  },
  "10260015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Solomon"
  },
  "10270101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Kansas"
  },
  "10270102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Kansas"
  },
  "10270103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Delaware"
  },
  "10270104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Kansas, Kansas"
  },
  "10270201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Big Blue"
  },
  "10270202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Big Blue"
  },
  "10270203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Fork Big Blue"
  },
  "10270204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Turkey"
  },
  "10270205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Big Blue"
  },
  "10270206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Little Blue"
  },
  "10270207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Little Blue"
  },
  "10280101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Grand"
  },
  "10280102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Thompson"
  },
  "10280103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Grand"
  },
  "10280201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Chariton"
  },
  "10280202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Chariton"
  },
  "10280203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Chariton"
  },
  "10290101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Marais Des Cygnes"
  },
  "10290102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Marais Des Cygnes"
  },
  "10290103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Osage"
  },
  "10290104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Marmaton"
  },
  "10290105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Harry S. Truman Reservoir"
  },
  "10290106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sac"
  },
  "10290107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pomme De Terre"
  },
  "10290108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Grand"
  },
  "10290109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Of The Ozarks"
  },
  "10290110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Niangua"
  },
  "10290111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Osage"
  },
  "10290201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Gasconade"
  },
  "10290202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Piney"
  },
  "10290203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Gasconade"
  },
  "10300101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Missouri-Crooked"
  },
  "10300102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Missouri-Moreau"
  },
  "10300103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lamine"
  },
  "10300104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blackwater"
  },
  "10300200": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Missouri"
  },
  "11010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver Reservoir"
  },
  "11010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "James"
  },
  "11010003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bull Shoals Lake"
  },
  "11010004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle White"
  },
  "11010005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buffalo"
  },
  "11010006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork White"
  },
  "11010007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Black"
  },
  "11010008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Current"
  },
  "11010009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Black"
  },
  "11010010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Spring"
  },
  "11010011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eleven Point"
  },
  "11010012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Strawberry"
  },
  "11010013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper White-Village"
  },
  "11010014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Red"
  },
  "11020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Arkansas Headwaters"
  },
  "11020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Arkansas"
  },
  "11020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fountain"
  },
  "11020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chico"
  },
  "11020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Arkansas-Lake Meredith"
  },
  "11020006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Huerfano"
  },
  "11020007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Apishapa"
  },
  "11020008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Horse"
  },
  "11020009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Arkansas-John Martin Reservoir"
  },
  "11020010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Purgatoire"
  },
  "11020011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Sandy"
  },
  "11020012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rush"
  },
  "11020013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Two Butte"
  },
  "11030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Arkansas-Lake Mckinney"
  },
  "11030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Whitewoman"
  },
  "11030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Arkansas-Dodge City"
  },
  "11030004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coon-Pickerel"
  },
  "11030005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pawnee"
  },
  "11030006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buckner"
  },
  "11030007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Walnut Creek"
  },
  "11030008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Walnut Creek"
  },
  "11030009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rattlesnake"
  },
  "11030010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Gar-Peace"
  },
  "11030011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cow"
  },
  "11030012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Arkansas"
  },
  "11030013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Arkansas-Slate"
  },
  "11030014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Ninnescah"
  },
  "11030015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Ninnescah"
  },
  "11030016": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ninnescah"
  },
  "11030017": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Walnut River"
  },
  "11030018": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Walnut River"
  },
  "11040001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cimarron Headwaters"
  },
  "11040002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cimarron"
  },
  "11040003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Cimarron"
  },
  "11040004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sand Arroyo"
  },
  "11040005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bear"
  },
  "11040006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cimarron-Liberal"
  },
  "11040007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crooked"
  },
  "11040008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cimarron-Bluff"
  },
  "11050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cimarron-Eagle Chief"
  },
  "11050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cimarron-Skeleton"
  },
  "11050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cimarron"
  },
  "11060001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kaw Lake"
  },
  "11060002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Salt Fork Arkansas"
  },
  "11060003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Medicine Lodge"
  },
  "11060004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Salt Fork Arkansas"
  },
  "11060005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chikaskia"
  },
  "11060006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black Bear-Red Rock"
  },
  "11070101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Verdigris"
  },
  "11070102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fall"
  },
  "11070103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Verdigris"
  },
  "11070104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elk"
  },
  "11070105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Verdigris"
  },
  "11070106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Caney"
  },
  "11070107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bird"
  },
  "11070201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Neosho Headwaters"
  },
  "11070202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cottonwood"
  },
  "11070203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cottonwood"
  },
  "11070204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Neosho"
  },
  "11070205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Neosho"
  },
  "11070206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake O' The Cherokees"
  },
  "11070207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Spring"
  },
  "11070208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elk"
  },
  "11070209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Neosho"
  },
  "11080001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Canadian Headwaters"
  },
  "11080002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cimarron"
  },
  "11080003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Canadian"
  },
  "11080004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mora"
  },
  "11080005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Conchas"
  },
  "11080006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Canadian-Ute Reservoir"
  },
  "11080007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ute"
  },
  "11080008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Revuelto"
  },
  "11090101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Canadian-Trujillo"
  },
  "11090102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Punta De Agua"
  },
  "11090103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rita Blanca"
  },
  "11090104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Carrizo"
  },
  "11090105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Meredith"
  },
  "11090106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Canadian-Spring"
  },
  "11090201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Canadian-Deer"
  },
  "11090202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Canadian-Walnut"
  },
  "11090203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little"
  },
  "11090204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Canadian"
  },
  "11100101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Beaver"
  },
  "11100102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Beaver"
  },
  "11100103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coldwater"
  },
  "11100104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Palo Duro"
  },
  "11100201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Beaver"
  },
  "11100202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Wolf"
  },
  "11100203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Wolf"
  },
  "11100301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle North Canadian"
  },
  "11100302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower North Canadian"
  },
  "11100303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Deep Fork"
  },
  "11110101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Polecat-Snake"
  },
  "11110102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dirty-Greenleaf"
  },
  "11110103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Illinois"
  },
  "11110104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Robert S. Kerr Reservoir"
  },
  "11110105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Poteau"
  },
  "11110201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Frog-Mulberry"
  },
  "11110202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dardanelle Reservoir"
  },
  "11110203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Conway-Point Remove"
  },
  "11110204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Petit Jean"
  },
  "11110205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cadron"
  },
  "11110206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fourche La Fave"
  },
  "11110207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Arkansas-Maumelle"
  },
  "11120101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tierra Blanca"
  },
  "11120102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Palo Duro"
  },
  "11120103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Prairie Dog Town Fork Red"
  },
  "11120104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tule"
  },
  "11120105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Prairie Dog Town Fork Red"
  },
  "11120201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Salt Fork Red"
  },
  "11120202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Salt Fork Red"
  },
  "11120301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper North Fork Red"
  },
  "11120302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle North Fork Red"
  },
  "11120303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower North Fork Red"
  },
  "11120304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elm Fork Red"
  },
  "11130101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Groesbeck-Sandy"
  },
  "11130102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blue-China"
  },
  "11130103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Pease"
  },
  "11130104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Pease"
  },
  "11130105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pease"
  },
  "11130201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Farmers-Mud"
  },
  "11130202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cache"
  },
  "11130203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Cache"
  },
  "11130204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Wichita"
  },
  "11130205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Wichita"
  },
  "11130206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wichita"
  },
  "11130207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Southern Beaver"
  },
  "11130208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Northern Beaver"
  },
  "11130209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Wichita"
  },
  "11130210": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Texoma"
  },
  "11130301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Washita Headwaters"
  },
  "11130302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Washita"
  },
  "11130303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Washita"
  },
  "11130304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Washita"
  },
  "11140101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bois D'Arc-Island"
  },
  "11140102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blue"
  },
  "11140103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Muddy Boggy"
  },
  "11140104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clear Boggy"
  },
  "11140105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kiamichi"
  },
  "11140106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pecan-Waterhole"
  },
  "11140107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Little"
  },
  "11140108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mountain Fork"
  },
  "11140109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Little Arkansas, Oklahoma"
  },
  "11140201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mckinney-Posten Bayous"
  },
  "11140202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Red-Coushatta"
  },
  "11140203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Loggy Bayou"
  },
  "11140204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Red Chute"
  },
  "11140205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bodcau Bayou"
  },
  "11140206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bayou Pierre"
  },
  "11140207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Red-Lake Iatt"
  },
  "11140208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Saline Bayou"
  },
  "11140209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black Lake Bayou"
  },
  "11140301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sulphur Headwaters"
  },
  "11140302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Sulphur"
  },
  "11140303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "White Oak Bayou"
  },
  "11140304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cross Bayou"
  },
  "11140305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake O'The Pines"
  },
  "11140306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Caddo Lake"
  },
  "11140307": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Cypress"
  },
  "12010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Sabine"
  },
  "12010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Sabine"
  },
  "12010003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Fork"
  },
  "12010004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Toledo Bend Reservoir"
  },
  "12010005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Sabine"
  },
  "12020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Neches"
  },
  "12020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Neches"
  },
  "12020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Neches"
  },
  "12020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Angelina"
  },
  "12020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Angelina"
  },
  "12020006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Village"
  },
  "12020007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pine Island Bayou"
  },
  "12030101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper West Fork Trinity"
  },
  "12030102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower West Fork Trinity"
  },
  "12030103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elm Fork Trinity"
  },
  "12030104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Denton"
  },
  "12030105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Trinity"
  },
  "12030106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Fork Trinity"
  },
  "12030107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cedar"
  },
  "12030108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Richland"
  },
  "12030109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chambers"
  },
  "12030201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Trinity-Tehuacana"
  },
  "12030202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Trinity-Kickapoo"
  },
  "12030203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Trinity"
  },
  "12040101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Fork San Jacinto"
  },
  "12040102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Spring"
  },
  "12040103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Fork San Jacinto"
  },
  "12040104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buffalo-San Jacinto"
  },
  "12040201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sabine Lake"
  },
  "12040202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Galveston Bay"
  },
  "12040203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Galveston Bay"
  },
  "12040204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Galveston Bay"
  },
  "12040205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Austin-Oyster"
  },
  "12050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yellow House Draw"
  },
  "12050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blackwater Draw"
  },
  "12050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Double Mountain Fork Brazos"
  },
  "12050004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Double Mountain Fork Brazos"
  },
  "12050005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Running Water Draw"
  },
  "12050006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "White"
  },
  "12050007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salt Fork Brazos"
  },
  "12060101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Brazos-Millers"
  },
  "12060102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Clear Fork Brazos"
  },
  "12060103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Paint"
  },
  "12060104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Clear Fork Brazos"
  },
  "12060105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hubbard"
  },
  "12060201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Brazos-Palo Pinto"
  },
  "12060202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Brazos-Lake Whitney"
  },
  "12060203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bosque"
  },
  "12060204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Bosque"
  },
  "12070101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Brazos-Little Brazos"
  },
  "12070102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yegua"
  },
  "12070103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Navasota"
  },
  "12070104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Brazos"
  },
  "12070201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Leon"
  },
  "12070202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cowhouse"
  },
  "12070203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lampasas"
  },
  "12070204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little"
  },
  "12070205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Gabriel"
  },
  "12080001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lost Draw"
  },
  "12080002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Colorado Headwaters"
  },
  "12080003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Monument-Seminole Draws"
  },
  "12080004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mustang Draw"
  },
  "12080005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Johnson Draw"
  },
  "12080006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sulphur Springs Draw"
  },
  "12080007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beals"
  },
  "12080008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Colorado"
  },
  "12090101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Colorado-Elm"
  },
  "12090102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Concho"
  },
  "12090103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Concho"
  },
  "12090104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Concho"
  },
  "12090105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Concho"
  },
  "12090106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Colorado"
  },
  "12090107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pecan Bayou"
  },
  "12090108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Jim Ned"
  },
  "12090109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Saba"
  },
  "12090110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Brady"
  },
  "12090201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buchanan-Lyndon B. Johnson Lakes"
  },
  "12090202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Llano"
  },
  "12090203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Llano"
  },
  "12090204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Llano"
  },
  "12090205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Austin-Travis Lakes"
  },
  "12090206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pedernales"
  },
  "12090301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Colorado-Cummins"
  },
  "12090302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Colorado"
  },
  "12090401": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Bernard"
  },
  "12090402": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Matagorda Bay"
  },
  "12100101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lavaca"
  },
  "12100102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Navidad"
  },
  "12100201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Guadalupe"
  },
  "12100202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Guadalupe"
  },
  "12100203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Marcos"
  },
  "12100204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Guadalupe"
  },
  "12100301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper San Antonio"
  },
  "12100302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Medina"
  },
  "12100303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower San Antonio"
  },
  "12100304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cibolo"
  },
  "12100401": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Matagorda Bay"
  },
  "12100402": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Matagorda Bay"
  },
  "12100403": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East San Antonio Bay"
  },
  "12100404": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West San Antonio Bay"
  },
  "12100405": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Aransas Bay"
  },
  "12100406": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mission"
  },
  "12100407": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Aransas"
  },
  "12110101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nueces Headwaters"
  },
  "12110102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Nueces"
  },
  "12110103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Nueces"
  },
  "12110104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Turkey"
  },
  "12110105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Nueces"
  },
  "12110106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Frio"
  },
  "12110107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hondo"
  },
  "12110108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Frio"
  },
  "12110109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Miguel"
  },
  "12110110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Atascosa"
  },
  "12110111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Nueces"
  },
  "12110201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Corpus Christi Bay"
  },
  "12110202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Corpus Christi Bay"
  },
  "12110203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Laguna Madre"
  },
  "12110204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Fernando"
  },
  "12110205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Baffin Bay"
  },
  "12110206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Palo Blanco"
  },
  "12110207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Central Laguna Madre"
  },
  "12110208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Laguna Madre"
  },
  "13010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Grande Headwaters"
  },
  "13010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Alamosa-Trinchera"
  },
  "13010003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Luis"
  },
  "13010004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Saguache"
  },
  "13010005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Conejos"
  },
  "13020101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Rio Grande"
  },
  "13020102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Chama"
  },
  "13020201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Grande-Santa Fe"
  },
  "13020202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Jemez"
  },
  "13020203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Grande-Albuquerque"
  },
  "13020204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Puerco"
  },
  "13020205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Arroyo Chico"
  },
  "13020206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Plains"
  },
  "13020207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio San Jose"
  },
  "13020208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Plains of San Agustin"
  },
  "13020209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Salado"
  },
  "13020210": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Jornada Del Muerto"
  },
  "13020211": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elephant Butte Reservoir"
  },
  "13030101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Caballo"
  },
  "13030102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "El Paso-Las Cruces"
  },
  "13030103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Jornada Draw"
  },
  "13030201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Playas Lake"
  },
  "13030202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mimbres"
  },
  "13040100": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Grande-Fort Quitman"
  },
  "13040201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cibolo-Red Light"
  },
  "13040202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Alamito"
  },
  "13040203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black Hills-Fresno"
  },
  "13040204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Terlingua"
  },
  "13040205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Bend"
  },
  "13040206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Maravillas"
  },
  "13040207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santiago Draw"
  },
  "13040208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Reagan-Sanderson"
  },
  "13040209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Francisco"
  },
  "13040210": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lozier Canyon"
  },
  "13040211": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Canyon"
  },
  "13040212": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Amistad Reservoir"
  },
  "13040301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Devils"
  },
  "13040302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Devils"
  },
  "13040303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dry Devils"
  },
  "13050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Western Estancia"
  },
  "13050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eastern Estancia"
  },
  "13050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tularosa Valley"
  },
  "13050004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salt Basin"
  },
  "13060001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pecos Headwaters"
  },
  "13060002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pintada Arroyo"
  },
  "13060003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Pecos"
  },
  "13060004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Taiban"
  },
  "13060005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Arroyo Del Macho"
  },
  "13060006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Gallo Arroyo"
  },
  "13060007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Pecos-Long Arroyo"
  },
  "13060008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Hondo"
  },
  "13060009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Felix"
  },
  "13060010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Penasco"
  },
  "13060011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Pecos-Black"
  },
  "13070001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Pecos-Red Bluff Reservoir"
  },
  "13070002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Delaware"
  },
  "13070003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Toyah"
  },
  "13070004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salt Draw"
  },
  "13070005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Barrilla Draw"
  },
  "13070006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coyanosa-Hackberry Draws"
  },
  "13070007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Landreth-Monument Draws"
  },
  "13070008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pecos"
  },
  "13070009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tunas"
  },
  "13070010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Independence"
  },
  "13070011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Howard Draw"
  },
  "13070012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Pecos"
  },
  "13080001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elm-Sycamore"
  },
  "13080002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Ambrosia-Santa Isabel"
  },
  "13080003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "International Falcon Reservoir"
  },
  "13090001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Los Olmos"
  },
  "13090002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Rio Grande"
  },
  "14010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Colorado Headwaters"
  },
  "14010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blue"
  },
  "14010003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eagle"
  },
  "14010004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Roaring Fork"
  },
  "14010005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Colorado Headwaters-Plateau"
  },
  "14010006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Parachute-Roan"
  },
  "14020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East-Taylor"
  },
  "14020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Gunnison"
  },
  "14020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tomichi"
  },
  "14020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Gunnison"
  },
  "14020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Gunnison"
  },
  "14020006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Uncompahgre"
  },
  "14030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Westwater Canyon"
  },
  "14030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Dolores"
  },
  "14030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Miguel"
  },
  "14030004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Dolores"
  },
  "14030005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Colorado-Kane Springs"
  },
  "14040101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Green"
  },
  "14040102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "New Fork"
  },
  "14040103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Green-Slate"
  },
  "14040104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Sandy"
  },
  "14040105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bitter"
  },
  "14040106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Green-Flaming Gorge Reservoir"
  },
  "14040107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blacks Fork"
  },
  "14040108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Muddy"
  },
  "14040109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Vermilion"
  },
  "14040200": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Great Divide Closed Basin"
  },
  "14050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Yampa"
  },
  "14050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Yampa"
  },
  "14050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Snake"
  },
  "14050004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Muddy"
  },
  "14050005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper White"
  },
  "14050006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Piceance-Yellow"
  },
  "14050007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower White"
  },
  "14060001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Green-Diamond"
  },
  "14060002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ashley-Brush"
  },
  "14060003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Duchesne"
  },
  "14060004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Strawberry"
  },
  "14060005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Green-Desolation Canyon"
  },
  "14060006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Willow"
  },
  "14060007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Price"
  },
  "14060008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Green"
  },
  "14060009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Rafael"
  },
  "14070001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Lake Powell"
  },
  "14070002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Muddy"
  },
  "14070003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fremont"
  },
  "14070004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dirty Devil"
  },
  "14070005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Escalante"
  },
  "14070006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Lake Powell"
  },
  "14070007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Paria"
  },
  "14080101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper San Juan"
  },
  "14080102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Piedra"
  },
  "14080103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blanco Canyon"
  },
  "14080104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Animas"
  },
  "14080105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle San Juan"
  },
  "14080106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chaco"
  },
  "14080107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mancos"
  },
  "14080201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower San Juan-Four Corners"
  },
  "14080202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "McElmo"
  },
  "14080203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Montezuma"
  },
  "14080204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chinle"
  },
  "14080205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower San Juan"
  },
  "15010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Colorado-Marble Canyon"
  },
  "15010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Grand Canyon"
  },
  "15010003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kanab"
  },
  "15010004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Havasu Canyon"
  },
  "15010005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Mead"
  },
  "15010006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Grand Wash"
  },
  "15010007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Red Lake"
  },
  "15010008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Virgin"
  },
  "15010009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fort Pearce Wash"
  },
  "15010010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Virgin"
  },
  "15010011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "White"
  },
  "15010012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Muddy"
  },
  "15010013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Meadow Valley Wash"
  },
  "15010014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Detrital Wash"
  },
  "15010015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Las Vegas Wash"
  },
  "15020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Colorado Headwaters"
  },
  "15020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Little Colorado"
  },
  "15020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Carrizo Wash"
  },
  "15020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Zuni"
  },
  "15020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Silver"
  },
  "15020006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Puerco"
  },
  "15020007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Puerco"
  },
  "15020008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Little Colorado"
  },
  "15020009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Leroux Wash"
  },
  "15020010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chevelon Canyon"
  },
  "15020011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cottonwood Wash"
  },
  "15020012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Corn-Oraibi"
  },
  "15020013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Polacca Wash"
  },
  "15020014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Jadito Wash"
  },
  "15020015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Canyon Diablo"
  },
  "15020016": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Little Colorado"
  },
  "15020017": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dinnebito Wash"
  },
  "15020018": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Moenkopi Wash"
  },
  "15030101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Havasu-Mohave Lakes"
  },
  "15030102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Piute Wash"
  },
  "15030103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sacramento Wash"
  },
  "15030104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Imperial Reservoir"
  },
  "15030105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bouse Wash"
  },
  "15030106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tyson Wash"
  },
  "15030107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Colorado"
  },
  "15030108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yuma Desert"
  },
  "15030201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Sandy"
  },
  "15030202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Burro"
  },
  "15030203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Maria"
  },
  "15030204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bill Williams"
  },
  "15040001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Gila"
  },
  "15040002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Gila-Mangas"
  },
  "15040003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Animas Valley"
  },
  "15040004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Francisco"
  },
  "15040005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Gila-San Carlos Reservoir"
  },
  "15040006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Simon"
  },
  "15040007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Carlos"
  },
  "15050100": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Gila"
  },
  "15050201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Willcox Playa"
  },
  "15050202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper San Pedro"
  },
  "15050203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower San Pedro"
  },
  "15050301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Santa Cruz"
  },
  "15050302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rillito"
  },
  "15050303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Santa Cruz"
  },
  "15050304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Brawley Wash"
  },
  "15050305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Aguirre Valley"
  },
  "15050306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Rosa Wash"
  },
  "15060101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black"
  },
  "15060102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "White"
  },
  "15060103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Salt"
  },
  "15060104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Carrizo"
  },
  "15060105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tonto"
  },
  "15060106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Salt"
  },
  "15060201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Chino-Williamson Valley"
  },
  "15060202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Verde"
  },
  "15060203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Verde"
  },
  "15070101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Gila-Painted Rock Reservoir"
  },
  "15070102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Agua Fria"
  },
  "15070103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hassayampa"
  },
  "15070104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Centennial Wash"
  },
  "15070201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Gila"
  },
  "15070202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tenmile Wash"
  },
  "15070203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Cristobal Wash"
  },
  "15080101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Simon Wash"
  },
  "15080102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio Sonoyta"
  },
  "15080103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tule Desert"
  },
  "15080200": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rio De La Concepcion"
  },
  "15080301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Whitewater Draw"
  },
  "15080302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Bernardino Valley"
  },
  "15080303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cloverdale"
  },
  "16010101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Bear"
  },
  "16010102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Central Bear"
  },
  "16010201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bear Lake"
  },
  "16010202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Bear"
  },
  "16010203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Bear-Logan"
  },
  "16010204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Bear-Malad"
  },
  "16020101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Weber"
  },
  "16020102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Weber"
  },
  "16020201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Utah Lake"
  },
  "16020202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Spanish Fork"
  },
  "16020203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Provo"
  },
  "16020204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Jordan"
  },
  "16020301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hamlin-Snake Valleys"
  },
  "16020302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pine Valley"
  },
  "16020303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tule Valley"
  },
  "16020304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rush-Tooele Valleys"
  },
  "16020305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Skull Valley"
  },
  "16020306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Southern Great Salt Lake Desert"
  },
  "16020307": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pilot-Thousand Springs, Nevada, Utah"
  },
  "16020308": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Northern Great Salt Lake Desert"
  },
  "16020309": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Curlew Valley"
  },
  "16020310": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Great Salt Lake"
  },
  "16030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Sevier"
  },
  "16030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Fork Sevier"
  },
  "16030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Sevier"
  },
  "16030004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Pitch"
  },
  "16030005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Sevier"
  },
  "16030006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Escalante Desert"
  },
  "16030007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver Bottoms-Upper Beaver"
  },
  "16030008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Beaver"
  },
  "16030009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sevier Lake"
  },
  "16040101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Humboldt"
  },
  "16040102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Humboldt"
  },
  "16040103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Humboldt"
  },
  "16040104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pine"
  },
  "16040105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Humboldt"
  },
  "16040106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rock"
  },
  "16040107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Reese"
  },
  "16040108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Humboldt"
  },
  "16040109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Humboldt"
  },
  "16040201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Quinn"
  },
  "16040202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Quinn"
  },
  "16040203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Smoke Creek Desert"
  },
  "16040204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Massacre Lake"
  },
  "16040205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Thousand-Virgin"
  },
  "16050101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Tahoe"
  },
  "16050102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Truckee"
  },
  "16050103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pyramid-Winnemucca Lakes"
  },
  "16050104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Granite Springs Valley"
  },
  "16050201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Carson"
  },
  "16050202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Carson"
  },
  "16050203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Carson Desert"
  },
  "16050301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Walker"
  },
  "16050302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Walker"
  },
  "16050303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Walker"
  },
  "16050304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Walker Lake"
  },
  "16060001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dixie Valley"
  },
  "16060002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Gabbs Valley"
  },
  "16060003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Southern Big Smoky Valley"
  },
  "16060004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Northern Big Smoky Valley"
  },
  "16060005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Diamond-Monitor Valleys"
  },
  "16060006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Smoky-Newark Valleys"
  },
  "16060007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Long-Ruby Valleys"
  },
  "16060008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Spring-Steptoe Valleys"
  },
  "16060009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dry Lake Valley"
  },
  "16060010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fish Lake-Soda Spring Valleys"
  },
  "16060011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ralston-Stone Cabin Valleys"
  },
  "16060012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hot Creek-Railroad Valleys"
  },
  "16060013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cactus-Sarcobatus Flats"
  },
  "16060014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sand Spring-Tikaboo Valleys"
  },
  "16060015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ivanpah-Pahrump Valleys"
  },
  "17010101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Kootenai"
  },
  "17010102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fisher"
  },
  "17010103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yaak"
  },
  "17010104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Kootenai"
  },
  "17010105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Moyie"
  },
  "17010106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elk"
  },
  "17010201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Clark Fork"
  },
  "17010202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Flint-Rock"
  },
  "17010203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blackfoot"
  },
  "17010204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Clark Fork"
  },
  "17010205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bitterroot"
  },
  "17010206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Flathead"
  },
  "17010207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork Flathead"
  },
  "17010208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Flathead Lake"
  },
  "17010209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Flathead"
  },
  "17010210": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Stillwater"
  },
  "17010211": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Swan"
  },
  "17010212": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Flathead"
  },
  "17010213": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Clark Fork"
  },
  "17010214": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pend Oreille Lake"
  },
  "17010215": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Priest"
  },
  "17010216": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pend Oreille"
  },
  "17010301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Coeur D'Alene"
  },
  "17010302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Coeur D'Alene"
  },
  "17010303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coeur D'Alene Lake"
  },
  "17010304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Joe"
  },
  "17010305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Spokane"
  },
  "17010306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hangman"
  },
  "17010307": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Spokane"
  },
  "17010308": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Spokane"
  },
  "17020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Franklin D. Roosevelt Lake"
  },
  "17020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kettle"
  },
  "17020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Colville"
  },
  "17020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sanpoil"
  },
  "17020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chief Joseph"
  },
  "17020006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Okanogan"
  },
  "17020007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Similkameen"
  },
  "17020008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Methow"
  },
  "17020009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Chelan"
  },
  "17020010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Columbia-Entiat"
  },
  "17020011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wenatchee"
  },
  "17020012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Moses Coulee"
  },
  "17020013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Crab"
  },
  "17020014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Banks Lake"
  },
  "17020015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Crab"
  },
  "17020016": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Columbia-Priest Rapids"
  },
  "17030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Yakima"
  },
  "17030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Naches"
  },
  "17030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Yakima"
  },
  "17040101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Snake Headwaters"
  },
  "17040102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Gros Ventre"
  },
  "17040103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Greys-Hoback"
  },
  "17040104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Palisades"
  },
  "17040105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salt"
  },
  "17040201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Idaho Falls"
  },
  "17040202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Henrys"
  },
  "17040203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Henrys"
  },
  "17040204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Teton"
  },
  "17040205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Willow"
  },
  "17040206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "American Falls"
  },
  "17040207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blackfoot"
  },
  "17040208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Portneuf"
  },
  "17040209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Walcott"
  },
  "17040210": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Raft"
  },
  "17040211": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Goose"
  },
  "17040212": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Snake-Rock"
  },
  "17040213": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salmon Falls"
  },
  "17040214": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver-Camas"
  },
  "17040215": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Medicine Lodge"
  },
  "17040216": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Birch"
  },
  "17040217": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Lost"
  },
  "17040218": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Lost"
  },
  "17040219": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Wood"
  },
  "17040220": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Camas"
  },
  "17040221": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Wood"
  },
  "17050101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "C. J. Strike Reservoir"
  },
  "17050102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bruneau"
  },
  "17050103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Snake-Succor"
  },
  "17050104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Owyhee"
  },
  "17050105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Owyhee"
  },
  "17050106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Little Owyhee"
  },
  "17050107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Owyhee"
  },
  "17050108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Jordan"
  },
  "17050109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crooked-Rattlesnake"
  },
  "17050110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Owyhee"
  },
  "17050111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North and Middle Forks Boise"
  },
  "17050112": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Boise-Mores"
  },
  "17050113": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Boise"
  },
  "17050114": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Boise"
  },
  "17050115": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Snake-Payette"
  },
  "17050116": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Malheur"
  },
  "17050117": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Malheur"
  },
  "17050118": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bully"
  },
  "17050119": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Willow"
  },
  "17050120": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Payette"
  },
  "17050121": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork Payette"
  },
  "17050122": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Payette"
  },
  "17050123": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Payette"
  },
  "17050124": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Weiser"
  },
  "17050201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Brownlee Reservoir"
  },
  "17050202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Burnt"
  },
  "17050203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Powder"
  },
  "17060101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hells Canyon"
  },
  "17060102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Imnaha"
  },
  "17060103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Snake-Asotin"
  },
  "17060104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Grande Ronde"
  },
  "17060105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wallowa"
  },
  "17060106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Grande Ronde"
  },
  "17060107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Snake-Tucannon"
  },
  "17060108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Palouse"
  },
  "17060109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rock"
  },
  "17060110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Snake"
  },
  "17060201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Salmon"
  },
  "17060202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pahsimeroi"
  },
  "17060203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Salmon-Panther"
  },
  "17060204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lemhi"
  },
  "17060205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Middle Fork Salmon"
  },
  "17060206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Middle Fork Salmon"
  },
  "17060207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Salmon-Chamberlain"
  },
  "17060208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Salmon"
  },
  "17060209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Salmon"
  },
  "17060210": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Salmon"
  },
  "17060301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Selway"
  },
  "17060302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Selway"
  },
  "17060303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lochsa"
  },
  "17060304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork Clearwater"
  },
  "17060305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Clearwater"
  },
  "17060306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clearwater"
  },
  "17060307": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper North Fork Clearwater"
  },
  "17060308": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower North Fork Clearwater"
  },
  "17070101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Columbia-Lake Wallula"
  },
  "17070102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Walla Walla"
  },
  "17070103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Umatilla"
  },
  "17070104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Willow"
  },
  "17070105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Columbia-Hood"
  },
  "17070106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Klickitat"
  },
  "17070201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper John Day"
  },
  "17070202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork John Day"
  },
  "17070203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork John Day"
  },
  "17070204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower John Day"
  },
  "17070301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Deschutes"
  },
  "17070302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Deschutes"
  },
  "17070303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver-South Fork"
  },
  "17070304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Crooked"
  },
  "17070305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Crooked"
  },
  "17070306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Deschutes"
  },
  "17070307": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Trout"
  },
  "17080001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Columbia-Sandy"
  },
  "17080002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lewis"
  },
  "17080003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Columbia-Clatskanie"
  },
  "17080004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cowlitz"
  },
  "17080005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cowlitz"
  },
  "17080006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Columbia"
  },
  "17090001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork Willamette"
  },
  "17090002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coast Fork Willamette"
  },
  "17090003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Willamette"
  },
  "17090004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mckenzie"
  },
  "17090005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Santiam"
  },
  "17090006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Santiam"
  },
  "17090007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Willamette"
  },
  "17090008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yamhill"
  },
  "17090009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Molalla-Pudding"
  },
  "17090010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tualatin"
  },
  "17090011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clackamas"
  },
  "17090012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Willamette"
  },
  "17100101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hoh-Quillayute"
  },
  "17100102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Queets-Quinault"
  },
  "17100103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Chehalis"
  },
  "17100104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Chehalis"
  },
  "17100105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Grays Harbor"
  },
  "17100106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Willapa Bay"
  },
  "17100201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Necanicum"
  },
  "17100202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nehalem"
  },
  "17100203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wilson-Trusk-Nestuccu"
  },
  "17100204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Siletz-Yaquina"
  },
  "17100205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Alsea"
  },
  "17100206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Siuslaw"
  },
  "17100207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Siltcoos"
  },
  "17100301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Umpqua"
  },
  "17100302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Umpqua"
  },
  "17100303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Umpqua"
  },
  "17100304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coos"
  },
  "17100305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coquille"
  },
  "17100306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sixes"
  },
  "17100307": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Rogue"
  },
  "17100308": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Rogue"
  },
  "17100309": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Applegate"
  },
  "17100310": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Rogue"
  },
  "17100311": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Illinois"
  },
  "17100312": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chetco"
  },
  "17110001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fraser"
  },
  "17110002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Strait of Georgia"
  },
  "17110003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Juan Islands"
  },
  "17110004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nooksack"
  },
  "17110005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Skagit"
  },
  "17110006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sauk"
  },
  "17110007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Skagit"
  },
  "17110008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Stillaguamish"
  },
  "17110009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Skykomish"
  },
  "17110010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Snoqualmie"
  },
  "17110011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Snohomish"
  },
  "17110012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Washington"
  },
  "17110013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Duwamish"
  },
  "17110014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Puyallup"
  },
  "17110015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nisqually"
  },
  "17110016": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Deschutes"
  },
  "17110017": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Skokomish"
  },
  "17110018": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hood Canal"
  },
  "17110019": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Puget Sound"
  },
  "17110020": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dungeness-Elwha"
  },
  "17110021": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crescent-Hoko"
  },
  "17120001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Harney-Malheur Lakes"
  },
  "17120002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Silvies"
  },
  "17120003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Donner und Blitzen"
  },
  "17120004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Silver"
  },
  "17120005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Summer Lake"
  },
  "17120006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Abert"
  },
  "17120007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Warner Lakes"
  },
  "17120008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Guano"
  },
  "17120009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Alvord Lake"
  },
  "18010101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Smith"
  },
  "18010102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mad-Redwood"
  },
  "18010103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Eel"
  },
  "18010104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork Eel"
  },
  "18010105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Eel"
  },
  "18010106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Eel"
  },
  "18010107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mattole"
  },
  "18010108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big-Navarro-Garcia"
  },
  "18010109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Gualala-Salmon"
  },
  "18010110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Russian"
  },
  "18010111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bodega Bay"
  },
  "18010201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Williamson"
  },
  "18010202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sprague"
  },
  "18010203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Klamath Lake"
  },
  "18010204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lost"
  },
  "18010205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Butte"
  },
  "18010206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Klamath"
  },
  "18010207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shasta"
  },
  "18010208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Scott"
  },
  "18010209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Klamath"
  },
  "18010210": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salmon"
  },
  "18010211": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Trinity"
  },
  "18010212": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Trinity"
  },
  "18020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Goose Lake"
  },
  "18020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Pit"
  },
  "18020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Pit"
  },
  "18020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "McCloud"
  },
  "18020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sacramento Headwaters"
  },
  "18020101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sacramento-Lower Cow-Lower Clear"
  },
  "18020102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cottonwood"
  },
  "18020103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sacramento-Lower Thomes"
  },
  "18020104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sacramento-Stone Corral"
  },
  "18020105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Butte"
  },
  "18020106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Feather"
  },
  "18020107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Yuba"
  },
  "18020108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Bear"
  },
  "18020109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Sacramento"
  },
  "18020110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cache"
  },
  "18020111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower American"
  },
  "18020112": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sacramento-Upper Clear"
  },
  "18020113": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cottonwood Headwaters"
  },
  "18020114": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Elder-Upper Thomes"
  },
  "18020115": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Stony"
  },
  "18020116": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cache"
  },
  "18020117": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Putah"
  },
  "18020118": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cow-Battle"
  },
  "18020119": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mill-Big Chico"
  },
  "18020120": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Butte"
  },
  "18020121": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Feather"
  },
  "18020122": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Branch North Fork Feather"
  },
  "18020123": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork Feather"
  },
  "18020124": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Honcut Headwaters"
  },
  "18020125": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Yuba"
  },
  "18020126": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Bear"
  },
  "18020127": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Coon-Upper Auburn"
  },
  "18020128": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork American"
  },
  "18020129": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork American"
  },
  "18020151": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cow Creek"
  },
  "18020152": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cottonwood Creek"
  },
  "18020153": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Battle Creek"
  },
  "18020154": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clear Creek-Sacramento River"
  },
  "18020155": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Paynes Creek-Sacramento River"
  },
  "18020156": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Thomes Creek-Sacramento River"
  },
  "18020157": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Chico Creek-Sacramento River"
  },
  "18020158": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Butte Creek"
  },
  "18020159": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Honcut Headwaters-Lower Feather"
  },
  "18020161": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Coon-Upper Auburn"
  },
  "18020162": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Putah"
  },
  "18020163": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Sacramento"
  },
  "18030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Kern"
  },
  "18030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Kern"
  },
  "18030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Kern-Upper Tehachapi-Grapevine"
  },
  "18030004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Poso"
  },
  "18030005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Deer-Upper White"
  },
  "18030006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Tule"
  },
  "18030007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Kaweah"
  },
  "18030008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mill"
  },
  "18030009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Dry"
  },
  "18030010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper King"
  },
  "18030011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Los Gatos-Avenal"
  },
  "18030012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tulare Lake Bed"
  },
  "18040001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle San Joaquin-Lower Chowchilla"
  },
  "18040002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower San Joaquin River"
  },
  "18040003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Joaquin Delta"
  },
  "18040004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Calaveras-Mormon Slough"
  },
  "18040005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cosumnes-Lower Mokelumne"
  },
  "18040006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper San Joaquin"
  },
  "18040007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fresno River"
  },
  "18040008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Merced"
  },
  "18040009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Tuolumne"
  },
  "18040010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Stanislaus"
  },
  "18040011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Calaveras California"
  },
  "18040012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Mokelumne"
  },
  "18040013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cosumnes"
  },
  "18040014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Panoche-San Luis Reservoir"
  },
  "18040051": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rock Creek-French Camp Slough"
  },
  "18050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Suisun Bay"
  },
  "18050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Pablo Bay"
  },
  "18050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coyote"
  },
  "18050004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Francisco Bay"
  },
  "18050005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tomales-Drake Bays"
  },
  "18050006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Francisco Coastal South"
  },
  "18060001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Lorenzo-Soquel"
  },
  "18060002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pajaro"
  },
  "18060003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Carrizo Plain"
  },
  "18060004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Estrella"
  },
  "18060005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salinas"
  },
  "18060006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Central Coastal"
  },
  "18060007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cuyama"
  },
  "18060008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Maria"
  },
  "18060009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Antonio"
  },
  "18060010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Ynez"
  },
  "18060011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Alisal-Elkhorn Sloughs"
  },
  "18060012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Carmel"
  },
  "18060013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Barbara Coastal"
  },
  "18060014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Barbara Channel Islands"
  },
  "18060015": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Monterey Bay"
  },
  "18070101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ventura"
  },
  "18070102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Clara"
  },
  "18070103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Calleguas"
  },
  "18070104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Monica Bay"
  },
  "18070105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Los Angeles"
  },
  "18070106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Gabriel"
  },
  "18070107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Pedro Channel Islands"
  },
  "18070201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Seal Beach"
  },
  "18070202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Jacinto"
  },
  "18070203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Ana"
  },
  "18070204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Newport Bay"
  },
  "18070301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Aliso-San Onofre"
  },
  "18070302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Margarita"
  },
  "18070303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Luis Rey-Escondido"
  },
  "18070304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Diego"
  },
  "18070305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cottonwood-Tijuana"
  },
  "18080001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Surprise Valley"
  },
  "18080002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Madeline Plains"
  },
  "18080003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Honey-Eagle Lakes"
  },
  "18090101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mono Lake"
  },
  "18090102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crowley Lake"
  },
  "18090103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Owens Lake"
  },
  "18090201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eureka-Saline Valleys"
  },
  "18090202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Amargosa"
  },
  "18090203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Death Valley-Lower Amargosa"
  },
  "18090204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Panamint Valley"
  },
  "18090205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Indian Wells-Searles Valleys"
  },
  "18090206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Antelope-Fremont Valleys"
  },
  "18090207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coyote-Cuddeback Lakes"
  },
  "18090208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mojave"
  },
  "18100100": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Southern Mojave"
  },
  "18100200": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salton Sea"
  },
  "18100201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Whitewater River"
  },
  "18100202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Carrizo Creek"
  },
  "18100203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "San Felipe Creek"
  },
  "18100204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salton Sea"
  },
  "19010101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Southeast Mainland"
  },
  "19010102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ketchikan"
  },
  "19010103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Prince of Wales"
  },
  "19010104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bradfield Canal"
  },
  "19010105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Burroughs Bay"
  },
  "19010106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Headwaters Portland Canal"
  },
  "19010107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Outlet Portland Canal"
  },
  "19010201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mainland"
  },
  "19010202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kuiu-Kupreanof-Mitkof-Etolin-Zarembo-Wrangell"
  },
  "19010203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Baranof-Chichagof Islands"
  },
  "19010204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Admiralty Island"
  },
  "19010205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Iskut"
  },
  "19010206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Holkham Bay"
  },
  "19010207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Stikine River"
  },
  "19010208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Thomas Bay"
  },
  "19010301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lynn Canal"
  },
  "19010302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Glacier Bay"
  },
  "19010303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chilkat-Skagway Rivers"
  },
  "19010304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Taku River"
  },
  "19010401": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yakutat Bay"
  },
  "19010402": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bering Glacier"
  },
  "19010403": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tatshenshini River"
  },
  "19010404": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Alsek River"
  },
  "19010405": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yakutat Bay-Gulf of Alaska"
  },
  "19010406": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Palma Bay"
  },
  "19010500": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Icy Strait-Chatham Strait"
  },
  "19020101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Copper River"
  },
  "19020102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Copper River"
  },
  "19020103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chitina River"
  },
  "19020104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Copper River"
  },
  "19020201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eastern Prince William Sound"
  },
  "19020202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Western Prince William Sound"
  },
  "19020203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Prince William Sound"
  },
  "19020301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Kenai Peninsula"
  },
  "19020302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Kenai Peninsula"
  },
  "19020401": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Anchorage"
  },
  "19020402": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Matanuska"
  },
  "19020501": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Susitna River"
  },
  "19020502": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chulitna River"
  },
  "19020503": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Talkeetna River"
  },
  "19020504": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yentna River"
  },
  "19020505": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Susitna River"
  },
  "19020601": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Redoubt-Trading Bays"
  },
  "19020602": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tuxedni-Kamishak Bays"
  },
  "19020701": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kodiak-Afognak Islands"
  },
  "19020702": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shelikof Strait"
  },
  "19020800": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cook Inlet"
  },
  "19030101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cold Bay"
  },
  "19030102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fox Islands"
  },
  "19030103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Western Aleutian Islands"
  },
  "19030104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pribilof Islands"
  },
  "19030201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Port Heiden"
  },
  "19030202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ugashik Bay"
  },
  "19030203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Egegik Bay"
  },
  "19030204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Naknek"
  },
  "19030205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Clark"
  },
  "19030206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Iliamna"
  },
  "19030301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Nushagak River"
  },
  "19030302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mulchatna River"
  },
  "19030303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Nushagak River"
  },
  "19030304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wood River"
  },
  "19030305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Togiak"
  },
  "19030306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nushagak Bay"
  },
  "19030401": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Kuskokwim River"
  },
  "19030402": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Farewell Lake"
  },
  "19030403": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Takotna River"
  },
  "19030404": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Holitna River"
  },
  "19030405": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Stony River"
  },
  "19030406": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork Kuskokwim River"
  },
  "19030407": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Kuskokwim River"
  },
  "19030501": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Aniak"
  },
  "19030502": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kuskokwim Delta"
  },
  "19030503": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nunivak-St. Matthew Islands"
  },
  "19040101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "White River"
  },
  "19040102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ladue River"
  },
  "19040103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sixtymile River"
  },
  "19040104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fortymile River"
  },
  "19040201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Old Crow River"
  },
  "19040202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coleen River"
  },
  "19040203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sheenjek River"
  },
  "19040204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black River"
  },
  "19040205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Porcupine Flats"
  },
  "19040301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork-North Fork Chandalar Rivers"
  },
  "19040302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Fork Chandalar River"
  },
  "19040303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Christian River"
  },
  "19040304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Chandalar River"
  },
  "19040401": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eagle to Circle"
  },
  "19040402": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Birch-Beaver Creeks"
  },
  "19040403": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yukon Flats"
  },
  "19040404": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ramparts"
  },
  "19040501": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nebesna-Chisana Rivers"
  },
  "19040502": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tok"
  },
  "19040503": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Healy Lake"
  },
  "19040504": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Delta River"
  },
  "19040505": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salcha River"
  },
  "19040506": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chena River"
  },
  "19040507": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tanana Flats"
  },
  "19040508": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nenana River"
  },
  "19040509": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tolovana River"
  },
  "19040510": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kantishna River"
  },
  "19040511": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Tanana River"
  },
  "19040601": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Koyukuk River"
  },
  "19040602": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Koyukuk River"
  },
  "19040603": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Alatna River"
  },
  "19040604": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kanuti River"
  },
  "19040605": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Allakaket"
  },
  "19040606": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Huslia River"
  },
  "19040607": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dulbi River"
  },
  "19040608": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Koyukuk Flats"
  },
  "19040609": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kateel River"
  },
  "19040701": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tozitna River"
  },
  "19040702": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nowitna River"
  },
  "19040703": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Melozitna River"
  },
  "19040704": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ramparts to Ruby"
  },
  "19040705": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Galena"
  },
  "19040801": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Anvik River"
  },
  "19040802": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Innoko River"
  },
  "19040803": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Innoko River"
  },
  "19040804": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Anvik to Pilot Station"
  },
  "19040805": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yukon Delta"
  },
  "19050101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Lawrence Island"
  },
  "19050102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Unalakleet"
  },
  "19050103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Norton Bay"
  },
  "19050104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nome"
  },
  "19050105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Imuruk Basin"
  },
  "19050201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shishmaref"
  },
  "19050202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Goodhope-Spafarief Bay"
  },
  "19050203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buckland River"
  },
  "19050301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Selawik Lake"
  },
  "19050302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Kobuk River"
  },
  "19050303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Kobuk River"
  },
  "19050304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Kobuk River"
  },
  "19050401": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Noatak River"
  },
  "19050402": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Noatak River"
  },
  "19050403": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Noatak River"
  },
  "19050404": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wulik-Kivalina Rivers"
  },
  "19050405": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lisburne Peninsula"
  },
  "19050500": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kotzebue Sound"
  },
  "19060101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kukpowruk River"
  },
  "19060102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kokolik River"
  },
  "19060103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Utukok River"
  },
  "19060201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kuk River"
  },
  "19060202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Northwest Coast"
  },
  "19060203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Meade River"
  },
  "19060204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ikpikpuk River"
  },
  "19060205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Harrison Bay"
  },
  "19060206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Admiralty Bay-Dease Inlet"
  },
  "19060301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Colville River"
  },
  "19060302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Killik River"
  },
  "19060303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chandler-Anaktuvuk Rivers"
  },
  "19060304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Colville River"
  },
  "19060401": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kuparuk River"
  },
  "19060402": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sagavanirktok River"
  },
  "19060403": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mikkelsen Bay"
  },
  "19060501": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Canning River"
  },
  "19060502": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Camden Bay"
  },
  "19060503": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaufort Lagoon"
  },
  "19070101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Atlin Lake"
  },
  "19070102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bennett Lake"
  },
  "19070103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tagish Lake"
  },
  "19070104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Takhini River"
  },
  "20010000": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hawaii"
  },
  "20020000": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Maui"
  },
  "20030000": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kahoolawe"
  },
  "20040000": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lanai"
  },
  "20050000": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Molokai"
  },
  "20060000": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Oahu"
  },
  "20070000": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kauai"
  },
  "20080000": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Niihau"
  },
  "20090000": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Northwestern Hawaiian Islands"
  },
  "21010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Interior Puerto Rico"
  },
  "21010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cibuco-Guajataca"
  },
  "21010003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Culebrinas-Guanajibo"
  },
  "21010004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Southern Puerto Rico"
  },
  "21010005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eastern Puerto Rico"
  },
  "21010006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Puerto Rican Islands"
  },
  "21020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. John-St. Thomas"
  },
  "21020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Croix"
  },
  "21030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Canal Zone"
  },
  "21030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Navassa"
  },
  "21030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Roncador-Serrana"
  },
  "01": {
    "huc_class_cd": "Region",
    "huc_nm": "New England Region"
  },
  "0101": {
    "huc_class_cd": "Subregion",
    "huc_nm": "St. John"
  },
  "010100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "St. John"
  },
  "01010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper St. John"
  },
  "01010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Allagash"
  },
  "01010003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fish"
  },
  "01010004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Aroostook"
  },
  "01010005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Meduxnekeag"
  },
  "0102": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Penobscot"
  },
  "010200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Penobscot"
  },
  "01020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Branch Penobscot"
  },
  "01020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Branch Penobscot"
  },
  "01020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mattawamkeag"
  },
  "01020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Piscataquis"
  },
  "01020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Penobscot"
  },
  "0103": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Kennebec"
  },
  "010300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kennebec"
  },
  "01030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Kennebec"
  },
  "01030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dead"
  },
  "01030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Kennebec"
  },
  "0104": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Androscoggin"
  },
  "010400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Androscoggin"
  },
  "01040001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Androscoggin"
  },
  "01040002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Androscoggin"
  },
  "0105": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Maine Coastal"
  },
  "010500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Maine Coastal"
  },
  "01050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Croix"
  },
  "01050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Maine Coastal"
  },
  "01050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. George-Sheepscot"
  },
  "01050004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Passamaquoddy Bay-Bay of Fundy"
  },
  "0106": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Saco"
  },
  "010600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Saco"
  },
  "01060001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Presumpscot"
  },
  "01060002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Saco"
  },
  "01060003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Piscataqua-Salmon Falls"
  },
  "0107": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Merrimack"
  },
  "010700": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Merrimack"
  },
  "01070001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pemigewasset"
  },
  "01070002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Winnipesaukee River"
  },
  "01070003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Contoocook"
  },
  "01070004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nashua"
  },
  "01070005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Concord"
  },
  "01070006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Merrimack River"
  },
  "0108": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Connecticut"
  },
  "010801": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Connecticut"
  },
  "01080101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Connecticut"
  },
  "01080102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Passumpsic"
  },
  "01080103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Waits"
  },
  "01080104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Connecticut-Mascoma"
  },
  "01080105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "White"
  },
  "01080106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black-Ottauquechee"
  },
  "01080107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West"
  },
  "010802": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Connecticut"
  },
  "01080201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Connecticut"
  },
  "01080202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Miller"
  },
  "01080203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Deerfield"
  },
  "01080204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chicopee"
  },
  "01080205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Connecticut"
  },
  "01080206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Westfield"
  },
  "01080207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Farmington"
  },
  "0109": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Massachusetts-Rhode Island Coastal"
  },
  "010900": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Massachusetts-Rhode Island Coastal"
  },
  "01090001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Charles"
  },
  "01090002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cape Cod"
  },
  "01090003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blackstone"
  },
  "01090004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Narragansett"
  },
  "01090005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pawcatuck-Wood"
  },
  "0110": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Connecticut Coastal"
  },
  "011000": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Connecticut Coastal"
  },
  "01100001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Quinebaug"
  },
  "01100002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shetucket"
  },
  "01100003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Thames"
  },
  "01100004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Quinnipiac"
  },
  "01100005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Housatonic"
  },
  "01100006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Saugatuck"
  },
  "01100007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Long Island Sound"
  },
  "0111": {
    "huc_class_cd": "Subregion",
    "huc_nm": "St. Francois"
  },
  "011100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "St. Francois"
  },
  "01110000": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Francois"
  },
  "02": {
    "huc_class_cd": "Region",
    "huc_nm": "Mid Atlantic Region"
  },
  "0201": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Richelieu"
  },
  "020100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Richelieu"
  },
  "02010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake George"
  },
  "02010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Otter"
  },
  "02010003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Winooski"
  },
  "02010004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ausable"
  },
  "02010005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lamoille"
  },
  "02010006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Great Chazy-Saranac"
  },
  "02010007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Missisquoi"
  },
  "0202": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Hudson"
  },
  "020200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Hudson"
  },
  "02020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Hudson"
  },
  "02020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sacandaga"
  },
  "02020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hudson-Hoosic"
  },
  "02020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mohawk"
  },
  "02020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Schoharie"
  },
  "02020006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Hudson"
  },
  "02020007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rondout"
  },
  "02020008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hudson-Wappinger"
  },
  "0203": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Hudson-Long Island"
  },
  "020301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Hudson"
  },
  "02030101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Hudson"
  },
  "02030102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bronx"
  },
  "02030103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hackensack-Passaic"
  },
  "02030104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sandy Hook-Staten Island"
  },
  "02030105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Raritan"
  },
  "020302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Long Island"
  },
  "02030201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Northern Long Island"
  },
  "02030202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Southern Long Island"
  },
  "02030203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Long Island Sound"
  },
  "0204": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Delaware-Mid Atlantic Coastal"
  },
  "020401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Delaware"
  },
  "02040101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Delaware"
  },
  "02040102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Branch Delaware"
  },
  "02040103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lackawaxen"
  },
  "02040104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Delaware-Mongaup-Brodhead"
  },
  "02040105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Delaware-Musconetcong"
  },
  "02040106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lehigh"
  },
  "020402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Delaware"
  },
  "02040201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crosswicks-Neshaminy"
  },
  "02040202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Delaware"
  },
  "02040203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Schuylkill"
  },
  "02040204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Delaware Bay"
  },
  "02040205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Brandywine-Christina"
  },
  "02040206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cohansey-Maurice"
  },
  "02040207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Broadkill-Smyrna"
  },
  "020403": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Mid Atlantic Coastal"
  },
  "02040301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mullica-Toms"
  },
  "02040302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Great Egg Harbor"
  },
  "02040303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chincoteague"
  },
  "02040304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eastern Lower Delmarva"
  },
  "0205": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Susquehanna"
  },
  "020501": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Susquehanna"
  },
  "02050101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Susquehanna"
  },
  "02050102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chenango"
  },
  "02050103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Owego-Wappasening"
  },
  "02050104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tioga"
  },
  "02050105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chemung"
  },
  "02050106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Susquehanna-Tunkhannock"
  },
  "02050107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Susquehanna-Lackawanna"
  },
  "020502": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "West Branch Susquehanna"
  },
  "02050201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper West Branch Susquehanna"
  },
  "02050202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sinnemahoning"
  },
  "02050203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle West Branch Susquehanna"
  },
  "02050204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bald Eagle"
  },
  "02050205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pine"
  },
  "02050206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower West Branch Susquehanna"
  },
  "020503": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Susquehanna"
  },
  "02050301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Susquehanna-Penns"
  },
  "02050302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Juniata"
  },
  "02050303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Raystown"
  },
  "02050304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Juniata"
  },
  "02050305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Susquehanna-Swatara"
  },
  "02050306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Susquehanna"
  },
  "0206": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Chesapeake"
  },
  "020600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Chesapeake"
  },
  "02060001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Chesapeake Bay"
  },
  "02060002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chester-Sassafras"
  },
  "02060003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Gunpowder-Patapsco"
  },
  "02060004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Severn"
  },
  "02060005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Choptank"
  },
  "02060006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Patuxent"
  },
  "02060007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blackwater-Wicomico"
  },
  "02060008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nanticoke"
  },
  "02060009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pocomoke"
  },
  "02060010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chincoteague"
  },
  "0207": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Potomac"
  },
  "020700": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Potomac"
  },
  "02070001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Branch Potomac"
  },
  "02070002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Branch Potomac"
  },
  "02070003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cacapon-Town"
  },
  "02070004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Conococheague-Opequon"
  },
  "02070005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Shenandoah"
  },
  "02070006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Shenandoah"
  },
  "02070007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shenandoah"
  },
  "02070008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Potomac-Catoctin"
  },
  "02070009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Monocacy"
  },
  "02070010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Potomac-Anacostia-Occoquan"
  },
  "02070011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Potomac"
  },
  "0208": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Chesapeake"
  },
  "020801": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Chesapeake"
  },
  "02080101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Chesapeake Bay"
  },
  "02080102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Great Wicomico-Piankatank"
  },
  "02080103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rapidan-Upper Rappahannock"
  },
  "02080104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Rappahannock"
  },
  "02080105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mattaponi"
  },
  "02080106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pamunkey"
  },
  "02080107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "York"
  },
  "02080108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lynnhaven-Poquoson"
  },
  "02080109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Western Lower Delmarva"
  },
  "02080110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tangier"
  },
  "02080111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pokomoke-Western Lower Delmarva"
  },
  "020802": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "James"
  },
  "02080201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper James"
  },
  "02080202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Maury"
  },
  "02080203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle James-Buffalo"
  },
  "02080204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rivanna"
  },
  "02080205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle James-Willis"
  },
  "02080206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower James"
  },
  "02080207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Appomattox"
  },
  "02080208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hampton Roads"
  },
  "03": {
    "huc_class_cd": "Region",
    "huc_nm": "South Atlantic-Gulf Region"
  },
  "0301": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Chowan-Roanoke"
  },
  "030101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Roanoke"
  },
  "03010101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Roanoke"
  },
  "03010102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Roanoke"
  },
  "03010103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Dan"
  },
  "03010104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Dan"
  },
  "03010105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Banister"
  },
  "03010106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Roanoke Rapids"
  },
  "03010107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Roanoke"
  },
  "030102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Albemarle-Chowan"
  },
  "03010201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nottoway"
  },
  "03010202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blackwater"
  },
  "03010203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chowan"
  },
  "03010204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Meherrin"
  },
  "03010205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Albemarle"
  },
  "0302": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Neuse-Pamlico"
  },
  "030201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Pamlico"
  },
  "03020101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Tar"
  },
  "03020102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fishing"
  },
  "03020103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Tar"
  },
  "03020104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pamlico"
  },
  "03020105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pamlico Sound"
  },
  "03020106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bogue-Core Sounds"
  },
  "030202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Neuse"
  },
  "03020201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Neuse"
  },
  "03020202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Neuse"
  },
  "03020203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Contentnea"
  },
  "03020204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Neuse"
  },
  "030203": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Onslow Bay"
  },
  "03020301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "White Oak River"
  },
  "03020302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "New River"
  },
  "0303": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Cape Fear"
  },
  "030300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Cape Fear"
  },
  "03030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "New"
  },
  "03030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Haw"
  },
  "03030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Deep"
  },
  "03030004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cape Fear"
  },
  "03030005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cape Fear"
  },
  "03030006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black"
  },
  "03030007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Northeast Cape Fear"
  },
  "0304": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Pee Dee"
  },
  "030401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Pee Dee"
  },
  "03040101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Yadkin"
  },
  "03040102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Yadkin"
  },
  "03040103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Yadkin"
  },
  "03040104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Pee Dee"
  },
  "03040105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rocky"
  },
  "030402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Pee Dee"
  },
  "03040201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Pee Dee"
  },
  "03040202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lynches"
  },
  "03040203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lumber"
  },
  "03040204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Pee Dee"
  },
  "03040205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black"
  },
  "03040206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Waccamaw"
  },
  "03040207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Carolina Coastal-Sampit"
  },
  "03040208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coastal Carolina"
  },
  "0305": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Edisto-Santee"
  },
  "030501": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Santee"
  },
  "03050101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Catawba"
  },
  "03050102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Catawba"
  },
  "03050103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Catawba"
  },
  "03050104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wateree"
  },
  "03050105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Broad"
  },
  "03050106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Broad"
  },
  "03050107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tyger"
  },
  "03050108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Enoree"
  },
  "03050109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Saluda"
  },
  "03050110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Congaree"
  },
  "03050111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Marion"
  },
  "03050112": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santee"
  },
  "030502": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Edisto-South Carolina Coastal"
  },
  "03050201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cooper"
  },
  "03050202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Carolina Coastal"
  },
  "03050203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Edisto"
  },
  "03050204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Edisto"
  },
  "03050205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Four Hole Swamp"
  },
  "03050206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Edisto River"
  },
  "03050207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salkehatchie"
  },
  "03050208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Broad-St. Helena"
  },
  "03050209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bulls Bay"
  },
  "03050210": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Helena Island"
  },
  "0306": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Ogeechee-Savannah"
  },
  "030601": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Savannah"
  },
  "03060101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Seneca"
  },
  "03060102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tugaloo"
  },
  "03060103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Savannah"
  },
  "03060104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Broad"
  },
  "03060105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper French Broad"
  },
  "03060106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Savannah"
  },
  "03060107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Stevens"
  },
  "03060108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Brier"
  },
  "03060109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Savannah"
  },
  "03060110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Calibogue Sound-Wright River"
  },
  "030602": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Ogeechee"
  },
  "03060201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Ogeechee"
  },
  "03060202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Ogeechee"
  },
  "03060203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Canoochee"
  },
  "03060204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ogeechee Coastal"
  },
  "0307": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Altamaha-St. Marys"
  },
  "030701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Altamaha"
  },
  "03070101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Oconee"
  },
  "03070102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Oconee"
  },
  "03070103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Ocmulgee"
  },
  "03070104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Ocmulgee"
  },
  "03070105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Ocmulgee"
  },
  "03070106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Altamaha"
  },
  "03070107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ohoopee"
  },
  "030702": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "St. Marys-Satilla"
  },
  "03070201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Satilla"
  },
  "03070202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Satilla"
  },
  "03070203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cumberland-St. Simons"
  },
  "03070204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Marys"
  },
  "03070205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nassau"
  },
  "0308": {
    "huc_class_cd": "Subregion",
    "huc_nm": "St. Johns"
  },
  "030801": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "St. Johns"
  },
  "03080101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper St. Johns"
  },
  "03080102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Oklawaha"
  },
  "03080103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower St. Johns"
  },
  "030802": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "East Florida Coastal"
  },
  "03080201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Daytona-St. Augustine"
  },
  "03080202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cape Canaveral"
  },
  "03080203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Vero Beach"
  },
  "0309": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southern Florida"
  },
  "030901": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kissimmee"
  },
  "03090101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kissimmee"
  },
  "03090102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Northern Okeechobee Inflow"
  },
  "03090103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Western Okeechobee Inflow"
  },
  "030902": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southern Florida"
  },
  "03090201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Okeechobee"
  },
  "03090202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Everglades"
  },
  "03090203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Florida Bay-Florida Keys"
  },
  "03090204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Cypress Swamp"
  },
  "03090205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Caloosahatchee"
  },
  "03090206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Florida Southeast Coast"
  },
  "0310": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Peace-Tampa Bay"
  },
  "031001": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Peace"
  },
  "03100101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Peace"
  },
  "03100102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Myakka"
  },
  "03100103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Charlotte Harbor"
  },
  "031002": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Tampa Bay"
  },
  "03100201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sarasota Bay"
  },
  "03100202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Manatee"
  },
  "03100203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Manatee"
  },
  "03100204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Alafia"
  },
  "03100205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hillsborough"
  },
  "03100206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tampa Bay"
  },
  "03100207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crystal-Pithlachascotee"
  },
  "03100208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Withlacoochee"
  },
  "0311": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Suwannee"
  },
  "031101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Aucilla-Waccasassa"
  },
  "03110101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Waccasassa"
  },
  "03110102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Econfina-Steinhatchee"
  },
  "03110103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Aucilla"
  },
  "031102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Suwannee"
  },
  "03110201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Suwannee"
  },
  "03110202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Alapaha"
  },
  "03110203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Withlacoochee"
  },
  "03110204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little"
  },
  "03110205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Suwannee"
  },
  "03110206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Santa Fe"
  },
  "0312": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Ochlockonee"
  },
  "031200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Ochlockonee"
  },
  "03120001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Apalachee Bay-St. Marks"
  },
  "03120002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Ochlockonee"
  },
  "03120003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Ochlockonee"
  },
  "0313": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Apalachicola"
  },
  "031300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Apalachicola"
  },
  "03130001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Chattahoochee"
  },
  "03130002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Chattahoochee-Lake Harding"
  },
  "03130003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Chattahoochee-Walter F"
  },
  "03130004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Chattahoochee"
  },
  "03130005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Flint"
  },
  "03130006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Flint"
  },
  "03130007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kinchafoonee-Muckalee"
  },
  "03130008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Flint"
  },
  "03130009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ichawaynochaway"
  },
  "03130010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Spring"
  },
  "03130011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Apalachicola"
  },
  "03130012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chipola"
  },
  "03130013": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "New"
  },
  "03130014": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Apalachicola Bay"
  },
  "0314": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Choctawhatchee-Escambia"
  },
  "031401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Florida Panhandle Coastal"
  },
  "03140101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Andrew-St. Joseph Bays"
  },
  "03140102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Choctawhatchee Bay"
  },
  "03140103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yellow"
  },
  "03140104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blackwater"
  },
  "03140105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pensacola Bay"
  },
  "03140106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Perdido"
  },
  "03140107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Perdido Bay"
  },
  "031402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Choctawhatchee"
  },
  "03140201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Choctawhatchee"
  },
  "03140202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pea"
  },
  "03140203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Choctawhatchee"
  },
  "031403": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Escambia"
  },
  "03140301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Conecuh"
  },
  "03140302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Patsaliga"
  },
  "03140303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sepulga"
  },
  "03140304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Conecuh"
  },
  "03140305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Escambia"
  },
  "0315": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Alabama"
  },
  "031501": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Coosa-Tallapoosa"
  },
  "03150101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Conasauga"
  },
  "03150102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coosawattee"
  },
  "03150103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Oostanaula"
  },
  "03150104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Etowah"
  },
  "03150105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Coosa"
  },
  "03150106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Coosa"
  },
  "03150107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Coosa"
  },
  "03150108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Tallapoosa"
  },
  "03150109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Tallapoosa"
  },
  "03150110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Tallapoosa"
  },
  "031502": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Alabama"
  },
  "03150201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Alabama"
  },
  "03150202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cahaba"
  },
  "03150203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Alabama"
  },
  "03150204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Alabama"
  },
  "0316": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Mobile-Tombigbee"
  },
  "031601": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Black Warrior-Tombigbee"
  },
  "03160101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Tombigbee"
  },
  "03160102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Town"
  },
  "03160103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buttahatchee"
  },
  "03160104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tibbee"
  },
  "03160105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Luxapallila"
  },
  "03160106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Tombigbee-Lubbub"
  },
  "03160107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sipsey"
  },
  "03160108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Noxubee"
  },
  "03160109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mulberry"
  },
  "03160110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sipsey Fork"
  },
  "03160111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Locust"
  },
  "03160112": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Black Warrior"
  },
  "03160113": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Black Warrior"
  },
  "031602": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Mobile Bay-Tombigbee"
  },
  "03160201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Tombigbee-Chickasaw"
  },
  "03160202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sucarnoochee"
  },
  "03160203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Tombigbee"
  },
  "03160204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mobile-Tensaw"
  },
  "03160205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mobile Bay"
  },
  "0317": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Pascagoula"
  },
  "031700": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Pascagoula"
  },
  "03170001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chunky-Okatibbee"
  },
  "03170002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Chickasawhay"
  },
  "03170003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Chickasawhay"
  },
  "03170004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Leaf"
  },
  "03170005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Leaf"
  },
  "03170006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pascagoula"
  },
  "03170007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black"
  },
  "03170008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Escatawpa"
  },
  "03170009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mississippi Coastal"
  },
  "0318": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Pearl"
  },
  "031800": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Pearl"
  },
  "03180001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Pearl"
  },
  "03180002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Pearl-Strong"
  },
  "03180003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Pearl-Silver"
  },
  "03180004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Pearl"
  },
  "03180005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bogue Chitto"
  },
  "04": {
    "huc_class_cd": "Region",
    "huc_nm": "Great Lakes Region"
  },
  "0401": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Western Lake Superior"
  },
  "040101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northwestern Lake Superior"
  },
  "04010101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Baptism-Brule"
  },
  "04010102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver-Lester"
  },
  "040102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "St. Louis"
  },
  "04010201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Louis"
  },
  "04010202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cloquet"
  },
  "040103": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southwestern Lake Superior"
  },
  "04010301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beartrap-Nemadji"
  },
  "04010302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bad-Montreal"
  },
  "0402": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southern Lake Superior-Lake Superior"
  },
  "040201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southcentral Lake Superior"
  },
  "04020101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black-Presque Isle"
  },
  "04020102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ontonagon"
  },
  "04020103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Keweenaw Peninsula"
  },
  "04020104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sturgeon"
  },
  "04020105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dead-Kelsey"
  },
  "040202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southeastern Lake Superior"
  },
  "04020201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Betsy-Chocolay"
  },
  "04020202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tahquamenon"
  },
  "04020203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Waiska"
  },
  "040203": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lake Superior"
  },
  "04020300": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Superior"
  },
  "0403": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Northwestern Lake Michigan"
  },
  "040301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northwestern Lake Michigan"
  },
  "04030101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Manitowoc-Sheboygan"
  },
  "04030102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Door-Kewaunee"
  },
  "04030103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Duck-Pensaukee"
  },
  "04030104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Oconto"
  },
  "04030105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Peshtigo"
  },
  "04030106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Brule"
  },
  "04030107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Michigamme"
  },
  "04030108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Menominee"
  },
  "04030109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cedar-Ford"
  },
  "04030110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Escanaba"
  },
  "04030111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tacoosh-Whitefish"
  },
  "04030112": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Fishdam-Sturgeon"
  },
  "040302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Fox"
  },
  "04030201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Fox"
  },
  "04030202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wolf"
  },
  "04030203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Winnebago"
  },
  "04030204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Fox"
  },
  "0404": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southwestern Lake Michigan"
  },
  "040400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southwestern Lake Michigan"
  },
  "04040001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Calumet-Galien"
  },
  "04040002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pike-Root"
  },
  "04040003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Milwaukee"
  },
  "0405": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southeastern Lake Michigan"
  },
  "040500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southeastern Lake Michigan"
  },
  "04050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Joseph"
  },
  "04050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black-Macatawa"
  },
  "04050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kalamazoo"
  },
  "04050004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Grand"
  },
  "04050005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Maple"
  },
  "04050006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Grand"
  },
  "04050007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Thornapple"
  },
  "0406": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Northeastern Lake Michigan-Lake Michigan"
  },
  "040601": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northeastern Lake Michigan"
  },
  "04060101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pere Marquette-White"
  },
  "04060102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Muskegon"
  },
  "04060103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Manistee"
  },
  "04060104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Betsie-Platte"
  },
  "04060105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Boardman-Charlevoix"
  },
  "04060106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Manistique"
  },
  "04060107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Brevoort-Millecoquins"
  },
  "040602": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lake Michigan"
  },
  "04060200": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Michigan"
  },
  "0407": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Northwestern Lake Huron"
  },
  "040700": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northwestern Lake Huron"
  },
  "04070001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Marys"
  },
  "04070002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Carp-Pine"
  },
  "04070003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lone Lake-Ocqueoc"
  },
  "04070004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cheboygan"
  },
  "04070005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black"
  },
  "04070006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Thunder Bay"
  },
  "04070007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Au Sable"
  },
  "0408": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southwestern Lake Huron-Lake Huron"
  },
  "040801": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southwestern Lake Huron"
  },
  "04080101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Au Gres-Rifle"
  },
  "04080102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kawkawlin-Pine"
  },
  "04080103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pigeon-Wiscoggin"
  },
  "04080104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Birch-Willow"
  },
  "040802": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Saginaw"
  },
  "04080201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tittabawassee"
  },
  "04080202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pine"
  },
  "04080203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shiawassee"
  },
  "04080204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Flint"
  },
  "04080205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cass"
  },
  "04080206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Saginaw"
  },
  "040803": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lake Huron"
  },
  "04080300": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Huron"
  },
  "0409": {
    "huc_class_cd": "Subregion",
    "huc_nm": "St. Clair-Detroit"
  },
  "040900": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "St. Clair-Detroit"
  },
  "04090001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Clair"
  },
  "04090002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake St. Clair"
  },
  "04090003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clinton"
  },
  "04090004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Detroit"
  },
  "04090005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Huron"
  },
  "0410": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Western Lake Erie"
  },
  "041000": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Western Lake Erie"
  },
  "04100001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ottawa-Stony"
  },
  "04100002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Raisin"
  },
  "04100003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Joseph"
  },
  "04100004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Marys"
  },
  "04100005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Maumee"
  },
  "04100006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tiffin"
  },
  "04100007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Auglaize"
  },
  "04100008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blanchard"
  },
  "04100009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Maumee"
  },
  "04100010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cedar-Portage"
  },
  "04100011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sandusky"
  },
  "04100012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Huron-Vermilion"
  },
  "0411": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southern Lake Erie"
  },
  "041100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southern Lake Erie"
  },
  "04110001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black-Rocky"
  },
  "04110002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cuyahoga"
  },
  "04110003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ashtabula-Chagrin"
  },
  "04110004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Grand"
  },
  "0412": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Eastern Lake Erie-Lake Erie"
  },
  "041201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Eastern Lake Erie"
  },
  "04120101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chautauqua-Conneaut"
  },
  "04120102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cattaraugus"
  },
  "04120103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buffalo-Eighteenmile"
  },
  "04120104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Niagara"
  },
  "041202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lake Erie"
  },
  "04120200": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Erie"
  },
  "0413": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southwestern Lake Ontario"
  },
  "041300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southwestern Lake Ontario"
  },
  "04130001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Oak Orchard-Twelvemile"
  },
  "04130002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Genesee"
  },
  "04130003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Genesee"
  },
  "0414": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Southeastern Lake Ontario"
  },
  "041401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Southeastern Lake Ontario"
  },
  "04140101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Irondequoit-Ninemile"
  },
  "04140102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salmon-Sandy"
  },
  "041402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Oswego"
  },
  "04140201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Seneca"
  },
  "04140202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Oneida"
  },
  "04140203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Oswego"
  },
  "0415": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Northeastern Lake Ontario-Lake Ontario-St. Lawrence"
  },
  "041501": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Northeastern Lake Ontario"
  },
  "04150101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black"
  },
  "04150102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chaumont-Perch"
  },
  "041502": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lake Ontario"
  },
  "04150200": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Ontario"
  },
  "041503": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "St. Lawrence"
  },
  "04150301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper St. Lawrence"
  },
  "04150302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Oswegatchie"
  },
  "04150303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Indian"
  },
  "04150304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Grass"
  },
  "04150305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Raquette"
  },
  "04150306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Regis"
  },
  "04150307": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salmon"
  },
  "04150308": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chateaugay-English"
  },
  "041504": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lake Champlain-Richelieu River"
  },
  "04150401": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mettawee River"
  },
  "04150402": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Otter Creek"
  },
  "04150403": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Winooski River"
  },
  "04150404": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ausable River"
  },
  "04150405": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lamoille River"
  },
  "04150406": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Saranac River"
  },
  "04150407": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Missiquoi River"
  },
  "04150408": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Champlain"
  },
  "04150409": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Richelieu River"
  },
  "041505": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "St. Francois River"
  },
  "04150500": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Francois River"
  },
  "05": {
    "huc_class_cd": "Region",
    "huc_nm": "Ohio Region"
  },
  "0501": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Allegheny"
  },
  "050100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Allegheny"
  },
  "05010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Allegheny"
  },
  "05010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Conewango"
  },
  "05010003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Allegheny-Tionesta"
  },
  "05010004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "French"
  },
  "05010005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clarion"
  },
  "05010006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Allegheny-Redbank"
  },
  "05010007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Conemaugh"
  },
  "05010008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kiskiminetas"
  },
  "05010009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Allegheny"
  },
  "0502": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Monongahela"
  },
  "050200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Monongahela"
  },
  "05020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tygart Valley"
  },
  "05020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Fork"
  },
  "05020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Monongahela"
  },
  "05020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cheat"
  },
  "05020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Monongahela"
  },
  "05020006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Youghiogheny"
  },
  "0503": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Ohio"
  },
  "050301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Ohio-Beaver"
  },
  "05030101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Ohio"
  },
  "05030102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shenango"
  },
  "05030103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mahoning"
  },
  "05030104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Beaver"
  },
  "05030105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Connoquenessing"
  },
  "05030106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Ohio-Wheeling"
  },
  "050302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Ohio-Little Kanawha"
  },
  "05030201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Muskingum-Middle Island"
  },
  "05030202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Ohio-Shade"
  },
  "05030203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Kanawha"
  },
  "05030204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hocking"
  },
  "0504": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Muskingum"
  },
  "050400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Muskingum"
  },
  "05040001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tuscarawas"
  },
  "05040002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mohican"
  },
  "05040003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Walhonding"
  },
  "05040004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Muskingum"
  },
  "05040005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wills"
  },
  "05040006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Licking"
  },
  "0505": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Kanawha"
  },
  "050500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kanawha"
  },
  "05050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper New"
  },
  "05050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle New"
  },
  "05050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Greenbrier"
  },
  "05050004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower New"
  },
  "05050005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Gauley"
  },
  "05050006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Kanawha"
  },
  "05050007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elk"
  },
  "05050008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Kanawha"
  },
  "05050009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coal"
  },
  "0506": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Scioto"
  },
  "050600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Scioto"
  },
  "05060001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Scioto"
  },
  "05060002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Scioto"
  },
  "05060003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Paint"
  },
  "0507": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Big Sandy-Guyandotte"
  },
  "050701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Guyandotte"
  },
  "05070101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Guyandotte"
  },
  "05070102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Guyandotte"
  },
  "050702": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Big Sandy"
  },
  "05070201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tug"
  },
  "05070202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Levisa"
  },
  "05070203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Levisa"
  },
  "05070204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Sandy"
  },
  "0508": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Great Miami"
  },
  "050800": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Great Miami"
  },
  "05080001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Great Miami, Indiana, Ohio"
  },
  "05080002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Great Miami, Indiana, Ohio"
  },
  "05080003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Whitewater"
  },
  "0509": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Middle Ohio"
  },
  "050901": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Ohio-Raccoon"
  },
  "05090101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Raccoon-Symmes"
  },
  "05090102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Twelvepole"
  },
  "05090103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Scioto-Tygarts"
  },
  "05090104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Sandy"
  },
  "050902": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Ohio-Little Miami"
  },
  "05090201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ohio Brush-Whiteoak"
  },
  "05090202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Miami"
  },
  "05090203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Ohio-Laughery"
  },
  "0510": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Kentucky-Licking"
  },
  "051001": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Licking"
  },
  "05100101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Licking"
  },
  "05100102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Licking"
  },
  "051002": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kentucky"
  },
  "05100201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Kentucky"
  },
  "05100202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Fork Kentucky"
  },
  "05100203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Kentucky"
  },
  "05100204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Kentucky"
  },
  "05100205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Kentucky"
  },
  "0511": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Green"
  },
  "051100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Green"
  },
  "05110001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Green"
  },
  "05110002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Barren"
  },
  "05110003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Green"
  },
  "05110004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rough"
  },
  "05110005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Green"
  },
  "05110006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pond"
  },
  "0512": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Wabash"
  },
  "051201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Wabash"
  },
  "05120101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Wabash"
  },
  "05120102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salamonie"
  },
  "05120103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mississinewa"
  },
  "05120104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eel"
  },
  "05120105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Wabash-Deer"
  },
  "05120106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tippecanoe"
  },
  "05120107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wildcat"
  },
  "05120108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Wabash-Little Vermilion"
  },
  "05120109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Vermilion"
  },
  "05120110": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sugar"
  },
  "05120111": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Wabash-Busseron"
  },
  "05120112": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Embarras"
  },
  "05120113": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Wabash"
  },
  "05120114": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Wabash"
  },
  "05120115": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Skillet"
  },
  "051202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Patoka-White"
  },
  "05120201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper White"
  },
  "05120202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower White"
  },
  "05120203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eel"
  },
  "05120204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Driftwood"
  },
  "05120205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Flatrock-Haw"
  },
  "05120206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper East Fork White"
  },
  "05120207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Muscatatuck"
  },
  "05120208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower East Fork White"
  },
  "05120209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Patoka"
  },
  "0513": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Cumberland"
  },
  "051301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Cumberland"
  },
  "05130101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cumberland"
  },
  "05130102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rockcastle"
  },
  "05130103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cumberland-Lake Cumberland"
  },
  "05130104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Cumberland"
  },
  "05130105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Obey"
  },
  "05130106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cumberland-Cordell Hull Reservoir"
  },
  "05130107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Collins"
  },
  "05130108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Caney"
  },
  "051302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Cumberland"
  },
  "05130201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cumberland-Old Hickory Lake"
  },
  "05130202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cumberland-Sycamore"
  },
  "05130203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Stones"
  },
  "05130204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Harpeth"
  },
  "05130205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cumberland"
  },
  "05130206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Red"
  },
  "0514": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Ohio"
  },
  "051401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Ohio-Salt"
  },
  "05140101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Silver-Little Kentucky"
  },
  "05140102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salt"
  },
  "05140103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rolling Fork"
  },
  "05140104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blue-Sinking"
  },
  "051402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Ohio"
  },
  "05140201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Ohio-Little Pigeon"
  },
  "05140202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Highland-Pigeon"
  },
  "05140203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Ohio-Bay"
  },
  "05140204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Saline"
  },
  "05140205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tradewater"
  },
  "05140206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Ohio"
  },
  "06": {
    "huc_class_cd": "Region",
    "huc_nm": "Tennessee Region"
  },
  "0601": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Tennessee"
  },
  "060101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "French Broad-Holston"
  },
  "06010101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Holston"
  },
  "06010102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Holston"
  },
  "06010103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Watauga, North Carolina, Tennessee"
  },
  "06010104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Holston"
  },
  "06010105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper French Broad"
  },
  "06010106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pigeon"
  },
  "06010107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower French Broad"
  },
  "06010108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Nolichucky"
  },
  "060102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Tennessee"
  },
  "06010201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Watts Bar Lake"
  },
  "06010202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Little Tennessee"
  },
  "06010203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tuckasegee"
  },
  "06010204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Little Tennessee"
  },
  "06010205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Clinch, Tennessee, Virginia"
  },
  "06010206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Powell"
  },
  "06010207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Clinch"
  },
  "06010208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Emory"
  },
  "0602": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Middle Tennessee-Hiwassee"
  },
  "060200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Tennessee-Hiwassee"
  },
  "06020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Tennessee-Chickamauga"
  },
  "06020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hiwassee"
  },
  "06020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ocoee"
  },
  "06020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sequatchie"
  },
  "0603": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Middle Tennessee-Elk"
  },
  "060300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Middle Tennessee-Elk"
  },
  "06030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Guntersville Lake"
  },
  "06030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wheeler Lake"
  },
  "06030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Elk"
  },
  "06030004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Elk"
  },
  "06030005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pickwick Lake"
  },
  "06030006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bear"
  },
  "0604": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Tennessee"
  },
  "060400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Tennessee"
  },
  "06040001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Tennessee-Beech"
  },
  "06040002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Duck"
  },
  "06040003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Duck"
  },
  "06040004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buffalo"
  },
  "06040005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kentucky Lake"
  },
  "06040006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Tennessee"
  },
  "07": {
    "huc_class_cd": "Region",
    "huc_nm": "Upper Mississippi Region"
  },
  "0701": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Mississippi Headwaters"
  },
  "070101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Mississippi Headwaters"
  },
  "07010101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mississippi Headwaters"
  },
  "07010102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Leech Lake"
  },
  "07010103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Prairie-Willow"
  },
  "07010104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elk-Nokasippi"
  },
  "07010105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pine"
  },
  "07010106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crow Wing"
  },
  "07010107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Redeye"
  },
  "07010108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Long Prairie"
  },
  "070102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Mississippi-Crow-Rum"
  },
  "07010201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Platte-Spunk"
  },
  "07010202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sauk"
  },
  "07010203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clearwater-Elk"
  },
  "07010204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Crow"
  },
  "07010205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Crow"
  },
  "07010206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Twin Cities"
  },
  "07010207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rum"
  },
  "0702": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Minnesota"
  },
  "070200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Minnesota"
  },
  "07020001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Minnesota"
  },
  "07020002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pomme De Terre"
  },
  "07020003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lac Qui Parle"
  },
  "07020004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Hawk-Yellow Medicine"
  },
  "07020005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chippewa"
  },
  "07020006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Redwood"
  },
  "07020007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Minnesota"
  },
  "07020008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cottonwood"
  },
  "07020009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Blue Earth"
  },
  "07020010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Watonwan"
  },
  "07020011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Le Sueur"
  },
  "07020012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Minnesota"
  },
  "0703": {
    "huc_class_cd": "Subregion",
    "huc_nm": "St. Croix"
  },
  "070300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "St. Croix"
  },
  "07030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper St. Croix"
  },
  "07030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Namekagon"
  },
  "07030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kettle"
  },
  "07030004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Snake"
  },
  "07030005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower St. Croix"
  },
  "0704": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Mississippi-Black-Root"
  },
  "070400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Mississippi-Black-Root"
  },
  "07040001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rush-Vermillion"
  },
  "07040002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cannon"
  },
  "07040003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buffalo-Whitewater"
  },
  "07040004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Zumbro"
  },
  "07040005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Trempealeau"
  },
  "07040006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "La Crosse-Pine"
  },
  "07040007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black"
  },
  "07040008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Root"
  },
  "0705": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Chippewa"
  },
  "070500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Chippewa"
  },
  "07050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Chippewa"
  },
  "07050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Flambeau"
  },
  "07050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Flambeau"
  },
  "07050004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Jump"
  },
  "07050005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Chippewa"
  },
  "07050006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eau Claire"
  },
  "07050007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Red Cedar"
  },
  "0706": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Mississippi-Maquoketa-Plum"
  },
  "070600": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Mississippi-Maquoketa-Plum"
  },
  "07060001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coon-Yellow"
  },
  "07060002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Iowa"
  },
  "07060003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Grant-Little Maquoketa"
  },
  "07060004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Turkey"
  },
  "07060005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Apple-Plum"
  },
  "07060006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Maquoketa"
  },
  "0707": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Wisconsin"
  },
  "070700": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Wisconsin"
  },
  "07070001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Wisconsin"
  },
  "07070002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Dubay"
  },
  "07070003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Castle Rock"
  },
  "07070004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Baraboo"
  },
  "07070005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Wisconsin"
  },
  "07070006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kickapoo"
  },
  "0708": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Mississippi-Iowa-Skunk-Wapsipinicon"
  },
  "070801": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Mississippi-Skunk-Wapsipinicon"
  },
  "07080101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Copperas-Duck"
  },
  "07080102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Wapsipinicon"
  },
  "07080103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Wapsipinicon"
  },
  "07080104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Flint-Henderson"
  },
  "07080105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Skunk"
  },
  "07080106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Skunk"
  },
  "07080107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Skunk"
  },
  "070802": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Iowa"
  },
  "07080201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Cedar"
  },
  "07080202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shell Rock"
  },
  "07080203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Winnebago"
  },
  "07080204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Fork Cedar"
  },
  "07080205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Cedar"
  },
  "07080206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Cedar"
  },
  "07080207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Iowa"
  },
  "07080208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Iowa"
  },
  "07080209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Iowa"
  },
  "0709": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Rock"
  },
  "070900": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rock"
  },
  "07090001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Rock"
  },
  "07090002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Rock"
  },
  "07090003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pecatonica"
  },
  "07090004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sugar"
  },
  "07090005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Rock"
  },
  "07090006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kishwaukee"
  },
  "07090007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Green"
  },
  "0710": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Des Moines"
  },
  "071000": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Des Moines"
  },
  "07100001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Des Moines Headwaters"
  },
  "07100002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Des Moines"
  },
  "07100003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Fork Des Moines"
  },
  "07100004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Des Moines"
  },
  "07100005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Boone"
  },
  "07100006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Raccoon"
  },
  "07100007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Raccoon"
  },
  "07100008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Red Rock"
  },
  "07100009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Des Moines"
  },
  "0711": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Mississippi-Salt"
  },
  "071100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Mississippi-Salt"
  },
  "07110001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bear-Wyaconda"
  },
  "07110002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fabius"
  },
  "07110003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fabius"
  },
  "07110004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "The Sny"
  },
  "07110005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Salt"
  },
  "07110006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Salt"
  },
  "07110007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salt"
  },
  "07110008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cuivre"
  },
  "07110009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Peruque-Piasa"
  },
  "0712": {
    "huc_class_cd": "Subregion",
    "huc_nm": "UpperIllinois"
  },
  "071200": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Illinois"
  },
  "07120001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Kankakee"
  },
  "07120002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Iroquois"
  },
  "07120003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Chicago"
  },
  "07120004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Des Plaines"
  },
  "07120005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Illinois"
  },
  "07120006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Fox"
  },
  "07120007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Fox"
  },
  "0713": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Illinois"
  },
  "071300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Illinois"
  },
  "07130001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Illinois-Senachwine Lake"
  },
  "07130002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Vermilion"
  },
  "07130003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Illinois-Lake Chautauqua"
  },
  "07130004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mackinaw"
  },
  "07130005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Spoon"
  },
  "07130006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Sangamon"
  },
  "07130007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Sangamon"
  },
  "07130008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Sangamon"
  },
  "07130009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Salt"
  },
  "07130010": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "La Moine"
  },
  "07130011": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Illinois"
  },
  "07130012": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Macoupin"
  },
  "0714": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Upper Mississippi-Kaskaskia-Meramec"
  },
  "071401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Mississippi-Meramec"
  },
  "07140101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cahokia-Joachim"
  },
  "07140102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Meramec"
  },
  "07140103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bourbeuse"
  },
  "07140104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big"
  },
  "07140105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Mississippi-Cape Girardeau"
  },
  "07140106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Muddy"
  },
  "07140107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Whitewater"
  },
  "07140108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cache"
  },
  "071402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Kaskaskia"
  },
  "07140201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Kaskaskia"
  },
  "07140202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Kaskaskia"
  },
  "07140203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Shoal"
  },
  "07140204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Kaskaskia"
  },
  "08": {
    "huc_class_cd": "Region",
    "huc_nm": "Lower Mississippi Region"
  },
  "0801": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Mississippi-Hatchie"
  },
  "080101": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Mississippi-Memphis"
  },
  "08010100": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Mississippi-Memphis"
  },
  "080102": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Hatchie-Obion"
  },
  "08010201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bayou De Chien-Mayfield"
  },
  "08010202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Obion"
  },
  "08010203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Obion"
  },
  "08010204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "North Fork Forked Deer"
  },
  "08010205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "South Fork Forked Deer"
  },
  "08010206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Forked Deer"
  },
  "08010207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Hatchie"
  },
  "08010208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Hatchie"
  },
  "08010209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Loosahatchie"
  },
  "08010210": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Wolf"
  },
  "08010211": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Horn Lake-Nonconnah"
  },
  "0802": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Mississippi-St. Francis"
  },
  "080201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Mississippi-Helena"
  },
  "08020100": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Mississippi-Helena"
  },
  "080202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "St. Francis"
  },
  "08020201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "New Madrid-St. Johns"
  },
  "08020202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper St. Francis"
  },
  "08020203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower St. Francis"
  },
  "08020204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little River Ditches"
  },
  "08020205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "L'Anguille"
  },
  "080203": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower White"
  },
  "08020301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower White-Bayou Des Arc"
  },
  "08020302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Cache"
  },
  "08020303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower White"
  },
  "08020304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big"
  },
  "080204": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Arkansas"
  },
  "08020401": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Arkansas"
  },
  "08020402": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bayou Meto"
  },
  "0803": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Mississippi-Yazoo"
  },
  "080301": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Mississippi-Greenville"
  },
  "08030100": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Mississippi-Greenville"
  },
  "080302": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Yazoo"
  },
  "08030201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Tallahatchie"
  },
  "08030202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tallahatchie"
  },
  "08030203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yocona"
  },
  "08030204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coldwater"
  },
  "08030205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Yalobusha"
  },
  "08030206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Yazoo"
  },
  "08030207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Sunflower"
  },
  "08030208": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Yazoo"
  },
  "08030209": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Deer-Steele"
  },
  "0804": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Red-Ouachita"
  },
  "080401": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Ouachita"
  },
  "08040101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Ouachita Headwaters"
  },
  "08040102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Ouachita"
  },
  "08040103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Missouri"
  },
  "080402": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Ouachita"
  },
  "08040201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Ouachita-Smackover"
  },
  "08040202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Ouachita-Bayou De Loutre"
  },
  "08040203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Saline"
  },
  "08040204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Saline"
  },
  "08040205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bayou Bartholomew"
  },
  "08040206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bayou D'Arbonne"
  },
  "08040207": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Ouachita"
  },
  "080403": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Red"
  },
  "08040301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Red"
  },
  "08040302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Castor"
  },
  "08040303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Dugdemona"
  },
  "08040304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little"
  },
  "08040305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Black"
  },
  "08040306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bayou Cocodrie"
  },
  "0805": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Boeuf-Tensas"
  },
  "080500": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Boeuf-Tensas"
  },
  "08050001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Boeuf"
  },
  "08050002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bayou Macon"
  },
  "08050003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tensas"
  },
  "0806": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Mississippi-Big Black"
  },
  "080601": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Mississippi-Natchez"
  },
  "08060100": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Mississippi-Natchez"
  },
  "080602": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Big Black-Homochitto"
  },
  "08060201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Big Black"
  },
  "08060202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Big Black"
  },
  "08060203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bayou Pierre"
  },
  "08060204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Coles Creek"
  },
  "08060205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Homochitto"
  },
  "08060206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buffalo"
  },
  "0807": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Mississippi-Lake Maurepas"
  },
  "080701": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Mississippi-Baton Rouge"
  },
  "08070100": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Mississippi-Baton Rouge"
  },
  "080702": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lake Maurepas"
  },
  "08070201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bayou Sara-Thompson"
  },
  "08070202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Amite"
  },
  "08070203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tickfaw"
  },
  "08070204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Maurepas"
  },
  "08070205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Tangipahoa"
  },
  "080703": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Grand"
  },
  "08070300": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Grand"
  },
  "0808": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Louisiana Coastal"
  },
  "080801": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Atchafalaya-Vermilion"
  },
  "08080101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Atchafalaya"
  },
  "08080102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bayou Teche"
  },
  "08080103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Vermilion"
  },
  "080802": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Calcasieu-Mermentau"
  },
  "08080201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mermentau Headwaters"
  },
  "08080202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mermentau"
  },
  "08080203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Calcasieu"
  },
  "08080204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Whisky Chitto"
  },
  "08080205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Fork Calcasieu"
  },
  "08080206": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Calcasieu"
  },
  "0809": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Lower Mississippi"
  },
  "080901": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Mississippi-New Orleans"
  },
  "08090100": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Mississippi-New Orleans"
  },
  "080902": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lake Pontchartrain"
  },
  "08090201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Liberty Bayou-Tchefuncta"
  },
  "08090202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake Pontchartrain"
  },
  "08090203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eastern Louisiana Coastal"
  },
  "080903": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Central Louisiana Coastal"
  },
  "08090301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "East Central Louisiana Coastal"
  },
  "08090302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "West Central Louisiana Coastal"
  },
  "09": {
    "huc_class_cd": "Region",
    "huc_nm": "Souris-Red-Rainy Region"
  },
  "0901": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Souris"
  },
  "090100": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Souris"
  },
  "09010001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Souris"
  },
  "09010002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Des Lacs"
  },
  "09010003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Souris"
  },
  "09010004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Willow"
  },
  "09010005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Deep"
  },
  "09010006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Long Creek"
  },
  "09010007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Headwaters Souris River"
  },
  "09010008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Moose Mountain Creek-Souris River"
  },
  "0902": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Red"
  },
  "090201": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper Red"
  },
  "09020101": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Bois De Sioux"
  },
  "09020102": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Mustinka"
  },
  "09020103": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Otter Tail"
  },
  "09020104": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Red"
  },
  "09020105": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Western Wild Rice"
  },
  "09020106": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Buffalo"
  },
  "09020107": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Elm-Marsh"
  },
  "09020108": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Eastern Wild Rice"
  },
  "09020109": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Goose"
  },
  "090202": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Devils Lake-Sheyenne"
  },
  "09020201": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Devils Lake"
  },
  "09020202": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Sheyenne"
  },
  "09020203": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Sheyenne"
  },
  "09020204": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Sheyenne"
  },
  "09020205": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Maple"
  },
  "090203": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Lower Red"
  },
  "09020301": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Sandhill-Wilson"
  },
  "09020302": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Red Lakes"
  },
  "09020303": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Red Lake"
  },
  "09020304": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Thief"
  },
  "09020305": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Clearwater"
  },
  "09020306": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Grand Marais-Red"
  },
  "09020307": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Turtle"
  },
  "09020308": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Forest"
  },
  "09020309": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Snake"
  },
  "09020310": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Park"
  },
  "09020311": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Middle Red"
  },
  "09020312": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Two Rivers"
  },
  "09020313": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Pembina"
  },
  "09020314": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Roseau"
  },
  "09020315": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Pembina River"
  },
  "09020316": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Pembina River"
  },
  "0903": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Rainy"
  },
  "090300": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Rainy"
  },
  "09030001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rainy Headwaters"
  },
  "09030002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Vermilion"
  },
  "09030003": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rainy Lake"
  },
  "09030004": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Upper Rainy"
  },
  "09030005": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Little Fork"
  },
  "09030006": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Big Fork"
  },
  "09030007": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Rapid"
  },
  "09030008": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lower Rainy"
  },
  "09030009": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Lake of the Woods"
  },
  "0904": {
    "huc_class_cd": "Subregion",
    "huc_nm": "Saskatchewan River"
  },
  "090400": {
    "huc_class_cd": "Accounting Unit",
    "huc_nm": "Upper South Saskatchewan River"
  },
  "09040001": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "St. Marys"
  },
  "09040002": {
    "huc_class_cd": "Cataloging Unit",
    "huc_nm": "Belly"
  }
};
