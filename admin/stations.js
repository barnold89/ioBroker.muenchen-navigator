'use-strict';

const stations = [
    {
       "uic":8000685,
       "name":"Bachern",
       "coordinates":{
          "lat":11.378716,
          "lon":48.280159
       }
    },
    {
       "uic":8004140,
       "name":"München-Allach",
       "coordinates":{
          "lat":11.468036,
          "lon":48.189932
       }
    },
    {
       "uic":8001354,
       "name":"Dachau Bahnhof",
       "coordinates":{
          "lat":11.44426,
          "lon":48.254652
       }
    },
    {
       "uic":8000556,
       "name":"Altomünster",
       "coordinates":{
          "lat":11.255133,
          "lon":48.384918
       }
    },
    {
       "uic":8004142,
       "name":"München-Berg am Laim",
       "coordinates":{
          "lat":11.633482,
          "lon":48.133979
       }
    },
    {
       "uic":8004134,
       "name":"München Leuchtenbergring",
       "coordinates":{
          "lat":11.615986,
          "lon":48.13425
       }
    },
    {
       "uic":8004827,
       "name":"Planegg",
       "coordinates":{
          "lat":11.413556,
          "lon":48.105303
       }
    },
    {
       "uic":8002377,
       "name":"Gröbenzell",
       "coordinates":{
          "lat":11.374107,
          "lon":48.194919
       }
    },
    {
       "uic":8004163,
       "name":"München-Westkreuz",
       "coordinates":{
          "lat":11.44394,
          "lon":48.149026
       }
    },
    {
       "uic":8004132,
       "name":"München Karlsplatz",
       "coordinates":{
          "lat":11.565619,
          "lon":48.139452
       }
    },
    {
       "uic":8000781,
       "name":"Baierbrunn",
       "coordinates":{
          "lat":11.480027,
          "lon":48.018741
       }
    },
    {
       "uic":8004156,
       "name":"München-Neuaubing",
       "coordinates":{
          "lat":11.422197,
          "lon":48.141706
       }
    },
    {
       "uic":8002534,
       "name":"Hallbergmoos",
       "coordinates":{
          "lat":11.714334,
          "lon":48.309167
       }
    },
    {
       "uic":8004854,
       "name":"Poing",
       "coordinates":{
          "lat":11.809438,
          "lon":48.171329
       }
    },
    {
       "uic":8004733,
       "name":"Ottobrunn",
       "coordinates":{
          "lat":11.677795,
          "lon":48.063692
       }
    },
    {
       "uic":8000119,
       "name":"Geltendorf",
       "coordinates":{
          "lat":11.037736,
          "lon":48.105776
       }
    },
    {
       "uic":8004761,
       "name":"Peiß",
       "coordinates":{
          "lat":11.776595,
          "lon":47.960102
       }
    },
    {
       "uic":8005419,
       "name":"München Heimeranplatz",
       "coordinates":{
          "lat":11.5315,
          "lon":48.132961
       }
    },
    {
       "uic":8004252,
       "name":"Neubiberg",
       "coordinates":{
          "lat":11.660222,
          "lon":48.075847
       }
    },
    {
       "uic":8003092,
       "name":"Ismaning",
       "coordinates":{
          "lat":11.679489,
          "lon":48.226012
       }
    },
    {
       "uic":8004151,
       "name":"München-Laim",
       "coordinates":{
          "lat":11.503669,
          "lon":48.144371
       }
    },
    {
       "uic":8004129,
       "name":"München Hackerbrücke",
       "coordinates":{
          "lat":11.548543,
          "lon":48.141915
       }
    },
    {
       "uic":8004167,
       "name":"München Flughafen Besucherpark",
       "coordinates":{
          "lat":11.764185,
          "lon":48.352095
       }
    },
    {
       "uic":8004152,
       "name":"München-Langwied",
       "coordinates":{
          "lat":11.432508,
          "lon":48.163112
       }
    },
    {
       "uic":8004138,
       "name":"München St.Martin-Str.",
       "coordinates":{
          "lat":11.595785,
          "lon":48.118543
       }
    },
    {
       "uic":8004141,
       "name":"München-Aubing",
       "coordinates":{
          "lat":11.413309,
          "lon":48.155968
       }
    },
    {
       "uic":8000262,
       "name":"München Ost",
       "coordinates":{
          "lat":11.604971,
          "lon":48.12744
       }
    },
    {
       "uic":8001621,
       "name":"Ebenhausen-Schäftlarn",
       "coordinates":{
          "lat":11.453608,
          "lon":47.978686
       }
    },
    {
       "uic":8000675,
       "name":"Aying",
       "coordinates":{
          "lat":11.769578,
          "lon":47.968762
       }
    },
    {
       "uic":8004161,
       "name":"München-Solln",
       "coordinates":{
          "lat":11.526954,
          "lon":48.079921
       }
    },
    {
       "uic":8006006,
       "name":"Germering-Unterpfaffenhofen",
       "coordinates":{
          "lat":11.364023,
          "lon":48.12887
       }
    },
    {
       "uic":8001682,
       "name":"Eglharting",
       "coordinates":{
          "lat":11.864291,
          "lon":48.082348
       }
    },
    {
       "uic":8006671,
       "name":"Zorneding",
       "coordinates":{
          "lat":11.832456,
          "lon":48.089601
       }
    },
    {
       "uic":8002940,
       "name":"Hohenbrunn",
       "coordinates":{
          "lat":11.698872,
          "lon":48.046572
       }
    },
    {
       "uic":8004146,
       "name":"München-Fasangarten",
       "coordinates":{
          "lat":11.606009,
          "lon":48.092746
       }
    },
    {
       "uic":8004900,
       "name":"Pulling(b Freising)",
       "coordinates":{
          "lat":11.707084,
          "lon":48.36339
       }
    },
    {
       "uic":8004130,
       "name":"München Harras",
       "coordinates":{
          "lat":11.536311,
          "lon":48.117747
       }
    },
    {
       "uic":8003828,
       "name":"Malching(Oberbay)",
       "coordinates":{
          "lat":11.219064,
          "lon":48.21545
       }
    },
    {
       "uic":8004136,
       "name":"München Rosenheimer Platz",
       "coordinates":{
          "lat":11.593049,
          "lon":48.129168
       }
    },
    {
       "uic":8004775,
       "name":"Petershausen(Obb)",
       "coordinates":{
          "lat":11.469881,
          "lon":48.41345
       }
    },
    {
       "uic":8005986,
       "name":"Unterföhring",
       "coordinates":{
          "lat":11.646772,
          "lon":48.19031
       }
    },
    {
       "uic":8004137,
       "name":"München Siemenswerke",
       "coordinates":{
          "lat":11.532799,
          "lon":48.094503
       }
    },
    {
       "uic":8003039,
       "name":"Icking",
       "coordinates":{
          "lat":11.436647,
          "lon":47.953249
       }
    },
    {
       "uic":8002275,
       "name":"Gilching-Argelsried",
       "coordinates":{
          "lat":11.299598,
          "lon":48.105674
       }
    },
    {
       "uic":8003438,
       "name":"Kreuzstraße",
       "coordinates":{
          "lat":11.759014,
          "lon":47.916494
       }
    },
    {
       "uic":8004128,
       "name":"München Donnersbergerbrücke",
       "coordinates":{
          "lat":11.536537,
          "lon":48.142623
       }
    },
    {
       "uic":8000603,
       "name":"Arnbach",
       "coordinates":{
          "lat":11.344044,
          "lon":48.34132
       }
    },
    {
       "uic":8001647,
       "name":"Eching",
       "coordinates":{
          "lat":11.616744,
          "lon":48.303046
       }
    },
    {
       "uic":8001231,
       "name":"Buchenhain",
       "coordinates":{
          "lat":11.497442,
          "lon":48.031255
       }
    },
    {
       "uic":8006688,
       "name":"Unterschleißheim",
       "coordinates":{
          "lat":11.568628,
          "lon":48.2737
       }
    }
 ];