'use-strict';

const stations = [{
    "name": "Röhrmoos",
    "uic": 8005127,
    "coordinates": {
        "lat": 11.44477,
        "lon": 48.333318
    }
}, {
    "name": "Sauerlach",
    "uic": 8005299,
    "coordinates": {
        "lat": 11.654774,
        "lon": 47.974061
    }
}, {
    "name": "Gräfelfing",
    "uic": 8002339,
    "coordinates": {
        "lat": 11.425571,
        "lon": 48.119774
    }
}, {
    "name": "Lohhof",
    "uic": 8003735,
    "coordinates": {
        "lat": 11.580813,
        "lon": 48.287937
    }
}, {
    "name": "Otterfing",
    "uic": 8004726,
    "coordinates": {
        "lat": 11.682121,
        "lon": 47.911387
    }
}, {
    "name": "Kleinberghofen",
    "uic": 8003317,
    "coordinates": {
        "lat": 11.275478,
        "lon": 48.354045
    }
}, {
    "name": "Olching",
    "uic": 8004667,
    "coordinates": {
        "lat": 11.335602,
        "lon": 48.209995
    }
}, {
    "name": "Grafrath",
    "uic": 8002351,
    "coordinates": {
        "lat": 11.153259,
        "lon": 48.132096
    }
}, {
    "name": "Heimstetten",
    "uic": 8002715,
    "coordinates": {
        "lat": 11.759659,
        "lon": 48.158755
    }
}, {
    "name": "Feldkirchen(b München)",
    "uic": 8001973,
    "coordinates": {
        "lat": 11.732103,
        "lon": 48.151846
    }
}, {
    "name": "München Hbf",
    "uic": 8000261,
    "coordinates": {
        "lat": 11.558335,
        "lon": 48.140232
    }
}, {
    "name": "München-Fasanerie",
    "uic": 8004145,
    "coordinates": {
        "lat": 11.525924,
        "lon": 48.197811
    }
}, {
    "name": "Markt Indersdorf",
    "uic": 8003072,
    "coordinates": {
        "lat": 11.378446,
        "lon": 48.352391
    }
}, {
    "name": "Steinebach",
    "uic": 8005699,
    "coordinates": {
        "lat": 11.206812,
        "lon": 48.061184
    }
}, {
    "name": "München Hirschgarten",
    "uic": 8004179,
    "coordinates": {
        "lat": 11.519245,
        "lon": 48.14354
    }
}, {
    "name": "Vierkirchen-Esterhofen",
    "uic": 8001922,
    "coordinates": {
        "lat": 11.445108,
        "lon": 48.361118
    }
}, {
    "name": "Furth(b Deisenhofen)",
    "uic": 8002161,
    "coordinates": {
        "lat": 11.593281,
        "lon": 48.035521
    }
}, {
    "name": "Esting",
    "uic": 8001996,
    "coordinates": {
        "lat": 11.317322,
        "lon": 48.212196
    }
}, {
    "name": "Schöngeising",
    "uic": 8005406,
    "coordinates": {
        "lat": 11.192051,
        "lon": 48.14737
    }
}, {
    "name": "München-Pasing",
    "uic": 8004158,
    "coordinates": {
        "lat": 11.461485,
        "lon": 48.149896
    }
}, {
    "name": "München-Untermenzing",
    "uic": 8004139,
    "coordinates": {
        "lat": 11.472792,
        "lon": 48.177673
    }
}, {
    "name": "Hebertshausen",
    "uic": 8006189,
    "coordinates": {
        "lat": 11.455487,
        "lon": 48.291106
    }
}, {
    "name": "München Marienplatz",
    "uic": 8004135,
    "coordinates": {
        "lat": 11.575386,
        "lon": 48.137048
    }
}, {
    "name": "Kirchseeon",
    "uic": 8003290,
    "coordinates": {
        "lat": 11.887255,
        "lon": 48.0709
    }
}, {
    "name": "Puchheim",
    "uic": 8004893,
    "coordinates": {
        "lat": 11.353061,
        "lon": 48.172179
    }
}, {
    "name": "Haar",
    "uic": 8002491,
    "coordinates": {
        "lat": 11.73115,
        "lon": 48.111413
    }
}, {
    "name": "München Isartor",
    "uic": 8004131,
    "coordinates": {
        "lat": 11.583234,
        "lon": 48.134202
    }
}, {
    "name": "Grafing Stadt",
    "uic": 8002348,
    "coordinates": {
        "lat": 11.962758,
        "lon": 48.047217
    }
}, {
    "name": "Fürstenfeldbruck",
    "uic": 8002141,
    "coordinates": {
        "lat": 11.262148,
        "lon": 48.171656
    }
}, {
    "name": "Hohenschäftlarn",
    "uic": 8002955,
    "coordinates": {
        "lat": 11.457513,
        "lon": 47.991299
    }
}, {
    "name": "Markt Schwaben",
    "uic": 8003879,
    "coordinates": {
        "lat": 11.862093,
        "lon": 48.193606
    }
}, {
    "name": "München-Riem",
    "uic": 8004160,
    "coordinates": {
        "lat": 11.678049,
        "lon": 48.143983
    }
}, {
    "name": "Oberschleißheim",
    "uic": 8004580,
    "coordinates": {
        "lat": 11.55783,
        "lon": 48.257226
    }
}, {
    "name": "Possenhofen",
    "uic": 8004874,
    "coordinates": {
        "lat": 11.306475,
        "lon": 47.96196
    }
}, {
    "name": "Seefeld-Hechendorf",
    "uic": 8005504,
    "coordinates": {
        "lat": 11.19873,
        "lon": 48.04137
    }
}, {
    "name": "Mammendorf",
    "uic": 8004204,
    "coordinates": {
        "lat": 11.174618,
        "lon": 48.216826
    }
}, {
    "name": "Stockdorf",
    "uic": 8005735,
    "coordinates": {
        "lat": 11.400845,
        "lon": 48.093258
    }
}, {
    "name": "Höllriegelskreuth",
    "uic": 8002899,
    "coordinates": {
        "lat": 11.509752,
        "lon": 48.043452
    }
}, {
    "name": "St Koloman",
    "uic": 8005652,
    "coordinates": {
        "lat": 11.882965,
        "lon": 48.243747
    }
}, {
    "name": "Grub(Oberbay)",
    "uic": 8002435,
    "coordinates": {
        "lat": 11.782559,
        "lon": 48.164523
    }
}, {
    "name": "Freising",
    "uic": 8002078,
    "coordinates": {
        "lat": 11.744539,
        "lon": 48.395195
    }
}, {
    "name": "Niederroth",
    "uic": 8004404,
    "coordinates": {
        "lat": 11.390041,
        "lon": 48.320935
    }
}, {
    "name": "München-Mittersendling",
    "uic": 8004154,
    "coordinates": {
        "lat": 11.536354,
        "lon": 48.107824
    }
}, {
    "name": "Fasanenpark",
    "uic": 8001963,
    "coordinates": {
        "lat": 11.609378,
        "lon": 48.079713
    }
}, {
    "name": "Neufahrn(b Freising)",
    "uic": 8004279,
    "coordinates": {
        "lat": 11.661261,
        "lon": 48.321636
    }
}, {
    "name": "Lochham",
    "uic": 8003720,
    "coordinates": {
        "lat": 11.43089,
        "lon": 48.128247
    }
}, {
    "name": "München-Perlach",
    "uic": 8004159,
    "coordinates": {
        "lat": 11.631208,
        "lon": 48.093426
    }
}, {
    "name": "Altenerding",
    "uic": 8000524,
    "coordinates": {
        "lat": 11.901744,
        "lon": 48.293572
    }
}, {
    "name": "München-Obermenzing",
    "uic": 8004157,
    "coordinates": {
        "lat": 11.478117,
        "lon": 48.164223
    }
}, {
    "name": "Starnberg",
    "uic": 8005676,
    "coordinates": {
        "lat": 11.34367,
        "lon": 47.995963
    }
}, {
    "name": "Erding",
    "uic": 8001825,
    "coordinates": {
        "lat": 11.912063,
        "lon": 48.30346
    }
}, {
    "name": "Holzkirchen",
    "uic": 8002980,
    "coordinates": {
        "lat": 11.697234,
        "lon": 47.884384
    }
}, {
    "name": "München-Neuperlach Süd",
    "uic": 8006696,
    "coordinates": {
        "lat": 11.645175,
        "lon": 48.088685
    }
}, {
    "name": "Deisenhofen",
    "uic": 8001404,
    "coordinates": {
        "lat": 11.583597,
        "lon": 48.019539
    }
}, {
    "name": "Gernlinden",
    "uic": 8002247,
    "coordinates": {
        "lat": 11.300378,
        "lon": 48.212765
    }
}, {
    "name": "Weßling(Oberbay)",
    "uic": 8006359,
    "coordinates": {
        "lat": 11.251768,
        "lon": 48.077374
    }
}, {
    "name": "Höhenkirchen-Siegertsbrunn",
    "uic": 8002894,
    "coordinates": {
        "lat": 11.719226,
        "lon": 48.018465
    }
}, {
    "name": "Erdweg",
    "uic": 8001829,
    "coordinates": {
        "lat": 11.303305,
        "lon": 48.333744
    }
}, {
    "name": "Aufhausen(b Erding)",
    "uic": 8000653,
    "coordinates": {
        "lat": 11.894375,
        "lon": 48.274365
    }
}, {
    "name": "Herrsching",
    "uic": 8002792,
    "coordinates": {
        "lat": 11.170571,
        "lon": 47.998849
    }
}, {
    "name": "Großhelfendorf",
    "uic": 8002420,
    "coordinates": {
        "lat": 11.78126,
        "lon": 47.94606
    }
}, {
    "name": "Buchenau(Oberbay)",
    "uic": 8001229,
    "coordinates": {
        "lat": 11.224497,
        "lon": 48.160277
    }
}, {
    "name": "München-Daglfing",
    "uic": 8004143,
    "coordinates": {
        "lat": 11.64933,
        "lon": 48.149622
    }
}, {
    "name": "Tutzing",
    "uic": 8005927,
    "coordinates": {
        "lat": 11.27289,
        "lon": 47.907142
    }
}, {
    "name": "Feldafing",
    "uic": 8001970,
    "coordinates": {
        "lat": 11.290224,
        "lon": 47.946938
    }
}, {
    "name": "Wolfratshausen",
    "uic": 8006550,
    "coordinates": {
        "lat": 11.427201,
        "lon": 47.914424
    }
}, {
    "name": "Gronsdorf",
    "uic": 8002383,
    "coordinates": {
        "lat": 11.698619,
        "lon": 48.118401
    }
}, {
    "name": "Unterhaching",
    "uic": 8005991,
    "coordinates": {
        "lat": 11.612359,
        "lon": 48.064962
    }
}, {
    "name": "Starnberg Nord",
    "uic": 8005675,
    "coordinates": {
        "lat": 11.347386,
        "lon": 48.005975
    }
}, {
    "name": "Schwabhausen(b Dachau)",
    "uic": 8005442,
    "coordinates": {
        "lat": 11.364758,
        "lon": 48.300517
    }
}, {
    "name": "München-Feldmoching",
    "uic": 8004147,
    "coordinates": {
        "lat": 11.541318,
        "lon": 48.213813
    }
}, {
    "name": "Ottenhofen(Oberbay)",
    "uic": 8004723,
    "coordinates": {
        "lat": 11.879385,
        "lon": 48.218134
    }
}, {
    "name": "Großhesselohe Isartalbf",
    "uic": 8002422,
    "coordinates": {
        "lat": 11.530945,
        "lon": 48.071068
    }
}, {
    "name": "München Flughafen Terminal",
    "uic": 8004168,
    "coordinates": {
        "lat": 11.78597,
        "lon": 48.353728
    }
}, {
    "name": "Geisenbrunn",
    "uic": 8002210,
    "coordinates": {
        "lat": 11.324847,
        "lon": 48.109157
    }
}, {
    "name": "Baldham",
    "uic": 8000785,
    "coordinates": {
        "lat": 11.78678,
        "lon": 48.099256
    }
}, {
    "name": "Eichenau(Oberbay)",
    "uic": 8001702,
    "coordinates": {
        "lat": 11.328277,
        "lon": 48.179324
    }
}, {
    "name": "Gauting",
    "uic": 8002198,
    "coordinates": {
        "lat": 11.376146,
        "lon": 48.070658
    }
}, {
    "name": "Ebersberg(Oberbay)",
    "uic": 8001634,
    "coordinates": {
        "lat": 11.970243,
        "lon": 48.07497
    }
}, {
    "name": "Türkenfeld",
    "uic": 8005920,
    "coordinates": {
        "lat": 11.077277,
        "lon": 48.104725
    }
}, {
    "name": "München Leienfelsstr.",
    "uic": 8004133,
    "coordinates": {
        "lat": 11.428524,
        "lon": 48.154538
    }
}, {
    "name": "München-Trudering",
    "uic": 8004162,
    "coordinates": {
        "lat": 11.663375,
        "lon": 48.126066
    }
}, {
    "name": "München-Freiham",
    "uic": 8004181,
    "coordinates": {
        "lat": 11.409369,
        "lon": 48.139917
    }
}, {
    "name": "Vaterstetten",
    "uic": 8006059,
    "coordinates": {
        "lat": 11.76438,
        "lon": 48.104109
    }
}, {
    "name": "Dürrnhaar",
    "uic": 8001578,
    "coordinates": {
        "lat": 11.736607,
        "lon": 47.993954
    }
}, {
    "name": "München-Moosach",
    "uic": 8004155,
    "coordinates": {
        "lat": 11.506237,
        "lon": 48.180258
    }
}, {
    "name": "Taufkirchen",
    "uic": 8005831,
    "coordinates": {
        "lat": 11.609252,
        "lon": 48.051552
    }
}, {
    "name": "Maisach",
    "uic": 8003824,
    "coordinates": {
        "lat": 11.256393,
        "lon": 48.214147
    }
}, {
    "name": "München-Englschalking",
    "uic": 8004144,
    "coordinates": {
        "lat": 11.648335,
        "lon": 48.156915
    }
}, {
    "name": "Dachau Stadt",
    "uic": 8001355,
    "coordinates": {
        "lat": 11.439761,
        "lon": 48.266661
    }
}, {
    "name": "München-Johanneskirchen",
    "uic": 8004149,
    "coordinates": {
        "lat": 11.646058,
        "lon": 48.167638
    }
}, {
    "name": "Pullach",
    "uic": 8004899,
    "coordinates": {
        "lat": 11.521848,
        "lon": 48.05898
    }
}, {
    "name": "München-Giesing",
    "uic": 8004148,
    "coordinates": {
        "lat": 11.596346,
        "lon": 48.110803
    }
}, {
    "name": "Grafing Bahnhof",
    "uic": 8002347,
    "coordinates": {
        "lat": 11.940423,
        "lon": 48.043226
    }
}, {
    "name": "Wächterhof",
    "uic": 8006131,
    "coordinates": {
        "lat": 11.712731,
        "lon": 48.033567
    }
}, {
    "name": "Harthaus",
    "uic": 8002610,
    "coordinates": {
        "lat": 11.387867,
        "lon": 48.133502
    }
}, {
    "name": "München-Karlsfeld",
    "uic": 8004150,
    "coordinates": {
        "lat": 11.459568,
        "lon": 48.211179
    }
}, {
    "name": "Neugilching",
    "uic": 8004249,
    "coordinates": {
        "lat": 11.288666,
        "lon": 48.098966
    }
}, {
    "name": "München-Lochhausen",
    "uic": 8004153,
    "coordinates": {
        "lat": 11.407895,
        "lon": 48.176505
    }
}, {
    "name": "Bachern",
    "uic": 8000685,
    "coordinates": {
        "lat": 11.378716,
        "lon": 48.280159
    }
}, {
    "name": "München-Allach",
    "uic": 8004140,
    "coordinates": {
        "lat": 11.468036,
        "lon": 48.189932
    }
}, {
    "name": "Dachau Bahnhof",
    "uic": 8001354,
    "coordinates": {
        "lat": 11.44426,
        "lon": 48.254652
    }
}, {
    "name": "Altomünster",
    "uic": 8000556,
    "coordinates": {
        "lat": 11.255133,
        "lon": 48.384918
    }
}, {
    "name": "München-Berg am Laim",
    "uic": 8004142,
    "coordinates": {
        "lat": 11.633482,
        "lon": 48.133979
    }
}, {
    "name": "München Leuchtenbergring",
    "uic": 8004134,
    "coordinates": {
        "lat": 11.615986,
        "lon": 48.13425
    }
}, {
    "name": "Planegg",
    "uic": 8004827,
    "coordinates": {
        "lat": 11.413556,
        "lon": 48.105303
    }
}, {
    "name": "Gröbenzell",
    "uic": 8002377,
    "coordinates": {
        "lat": 11.374107,
        "lon": 48.194919
    }
}, {
    "name": "München-Westkreuz",
    "uic": 8004163,
    "coordinates": {
        "lat": 11.44394,
        "lon": 48.149026
    }
}, {
    "name": "München Karlsplatz",
    "uic": 8004132,
    "coordinates": {
        "lat": 11.565619,
        "lon": 48.139452
    }
}, {
    "name": "Baierbrunn",
    "uic": 8000781,
    "coordinates": {
        "lat": 11.480027,
        "lon": 48.018741
    }
}, {
    "name": "München-Neuaubing",
    "uic": 8004156,
    "coordinates": {
        "lat": 11.422197,
        "lon": 48.141706
    }
}, {
    "name": "Hallbergmoos",
    "uic": 8002534,
    "coordinates": {
        "lat": 11.714334,
        "lon": 48.309167
    }
}, {
    "name": "Poing",
    "uic": 8004854,
    "coordinates": {
        "lat": 11.809438,
        "lon": 48.171329
    }
}, {
    "name": "Ottobrunn",
    "uic": 8004733,
    "coordinates": {
        "lat": 11.677795,
        "lon": 48.063692
    }
}, {
    "name": "Geltendorf",
    "uic": 8000119,
    "coordinates": {
        "lat": 11.037736,
        "lon": 48.105776
    }
}, {
    "name": "Peiß",
    "uic": 8004761,
    "coordinates": {
        "lat": 11.776595,
        "lon": 47.960102
    }
}, {
    "name": "München Heimeranplatz",
    "uic": 8005419,
    "coordinates": {
        "lat": 11.5315,
        "lon": 48.132961
    }
}, {
    "name": "Neubiberg",
    "uic": 8004252,
    "coordinates": {
        "lat": 11.660222,
        "lon": 48.075847
    }
}, {
    "name": "Ismaning",
    "uic": 8003092,
    "coordinates": {
        "lat": 11.679489,
        "lon": 48.226012
    }
}, {
    "name": "München-Laim",
    "uic": 8004151,
    "coordinates": {
        "lat": 11.503669,
        "lon": 48.144371
    }
}, {
    "name": "München Hackerbrücke",
    "uic": 8004129,
    "coordinates": {
        "lat": 11.548543,
        "lon": 48.141915
    }
}, {
    "name": "München Flughafen Besucherpark",
    "uic": 8004167,
    "coordinates": {
        "lat": 11.764185,
        "lon": 48.352095
    }
}, {
    "name": "München-Langwied",
    "uic": 8004152,
    "coordinates": {
        "lat": 11.432508,
        "lon": 48.163112
    }
}, {
    "name": "München St.Martin-Str.",
    "uic": 8004138,
    "coordinates": {
        "lat": 11.595785,
        "lon": 48.118543
    }
}, {
    "name": "München-Aubing",
    "uic": 8004141,
    "coordinates": {
        "lat": 11.413309,
        "lon": 48.155968
    }
}, {
    "name": "München Ost",
    "uic": 8000262,
    "coordinates": {
        "lat": 11.604971,
        "lon": 48.12744
    }
}, {
    "name": "Ebenhausen-Schäftlarn",
    "uic": 8001621,
    "coordinates": {
        "lat": 11.453608,
        "lon": 47.978686
    }
}, {
    "name": "Aying",
    "uic": 8000675,
    "coordinates": {
        "lat": 11.769578,
        "lon": 47.968762
    }
}, {
    "name": "München-Solln",
    "uic": 8004161,
    "coordinates": {
        "lat": 11.526954,
        "lon": 48.079921
    }
}, {
    "name": "Germering-Unterpfaffenhofen",
    "uic": 8006006,
    "coordinates": {
        "lat": 11.364023,
        "lon": 48.12887
    }
}, {
    "name": "Eglharting",
    "uic": 8001682,
    "coordinates": {
        "lat": 11.864291,
        "lon": 48.082348
    }
}, {
    "name": "Zorneding",
    "uic": 8006671,
    "coordinates": {
        "lat": 11.832456,
        "lon": 48.089601
    }
}, {
    "name": "Hohenbrunn",
    "uic": 8002940,
    "coordinates": {
        "lat": 11.698872,
        "lon": 48.046572
    }
}, {
    "name": "München-Fasangarten",
    "uic": 8004146,
    "coordinates": {
        "lat": 11.606009,
        "lon": 48.092746
    }
}, {
    "name": "Pulling(b Freising)",
    "uic": 8004900,
    "coordinates": {
        "lat": 11.707084,
        "lon": 48.36339
    }
}, {
    "name": "München Harras",
    "uic": 8004130,
    "coordinates": {
        "lat": 11.536311,
        "lon": 48.117747
    }
}, {
    "name": "Malching(Oberbay)",
    "uic": 8003828,
    "coordinates": {
        "lat": 11.219064,
        "lon": 48.21545
    }
}, {
    "name": "München Rosenheimer Platz",
    "uic": 8004136,
    "coordinates": {
        "lat": 11.593049,
        "lon": 48.129168
    }
}, {
    "name": "Petershausen(Obb)",
    "uic": 8004775,
    "coordinates": {
        "lat": 11.469881,
        "lon": 48.41345
    }
}, {
    "name": "Unterföhring",
    "uic": 8005986,
    "coordinates": {
        "lat": 11.646772,
        "lon": 48.19031
    }
}, {
    "name": "München Siemenswerke",
    "uic": 8004137,
    "coordinates": {
        "lat": 11.532799,
        "lon": 48.094503
    }
}, {
    "name": "Icking",
    "uic": 8003039,
    "coordinates": {
        "lat": 11.436647,
        "lon": 47.953249
    }
}, {
    "name": "Gilching-Argelsried",
    "uic": 8002275,
    "coordinates": {
        "lat": 11.299598,
        "lon": 48.105674
    }
}, {
    "name": "Kreuzstraße",
    "uic": 8003438,
    "coordinates": {
        "lat": 11.759014,
        "lon": 47.916494
    }
}, {
    "name": "München Donnersbergerbrücke",
    "uic": 8004128,
    "coordinates": {
        "lat": 11.536537,
        "lon": 48.142623
    }
}, {
    "name": "Arnbach",
    "uic": 8000603,
    "coordinates": {
        "lat": 11.344044,
        "lon": 48.34132
    }
}, {
    "name": "Eching",
    "uic": 8001647,
    "coordinates": {
        "lat": 11.616744,
        "lon": 48.303046
    }
}, {
    "name": "Buchenhain",
    "uic": 8001231,
    "coordinates": {
        "lat": 11.497442,
        "lon": 48.031255
    }
}, {
    "name": "Unterschleißheim",
    "uic": 8006688,
    "coordinates": {
        "lat": 11.568628,
        "lon": 48.2737
    }
}];