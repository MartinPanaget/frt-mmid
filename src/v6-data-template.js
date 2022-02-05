// V6: FOREST CHART

// ANMERKUNG
// 'showInLegend' nicht beachten/so lassen

// ERKLÄRUNG (Attribute zum Anpassen)
//showInLegend: false kann ignoriert werden
//name Name des Landes ist schon richtig ausgefüllt => kann ignoriert werden
//dataLabels kann ignoriert werden ist für die Anzeige der Signifikanzsterne (jedes Mal gleich)
// data nach dataLabels (ARRAY): die Punktdaten zu dem einzelnen Land
// in data: x (INTEGER/FLOAT) ist die Position der Kategorie oben gibt es 13 => geht von 0 - 12 = 'Age', 'Gender', 'Income Medium', 'Income High', 'Education medium', 'Education high', 'Ethnical minority', 'City', 'Exposure', 'Exposure frequency public', 'Exposure frequency private', 'Exposure & frequency public', 'Exposure & frequency private'
// in data: y (INTEGER/FLOAT) ist die Position auf der Skala zwischen 0 und 5
// in data: color (HEX) ist die Farbe des Punktes sind schon die richtigen unten
// in data: name (STRING) sind die Signifikanzsterne; existiert einer so fügst du name: '**' z.B. hinzu gibt es keine Sternchen lässt du dieses Attribut weg!!
// objekt nach data: {} beinhaltet das Interval des Punktes
// in objekt: type ist immer errorbar kann so bleiben
// in objekt: data [ARRAY] beinhaltet das Interval [[0.5, 2]] z. B. für die 1. Kategorie age; für die 2. Kategorie gender [null,[1, 2]] z.B. usw. pro weiter Kategorie kommt eine null hinzu

//Diese Struktur wiederholt sich 4mal für alle vier Länder zuerst China dann UK, US, DE

// WICHTIGES FÜR ENTWICKLER
// Einheit: 

attributes: [
    [
        {
            showInLegend:false,
            name: 'CH',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {textOutline: "0px",},
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [
                    //das sind auch alle Farben die du brauchst!!
                    {x: 0,y:1,color: '#EFF3FF',name: '**'}, 
                    {x: 1,y: 2,color: '#B2DBFF',}, 
                    {x: 2,y: 3,color: '#6C93ED',}, 
                    {x: 3,y: 1,color: '#6C93ED',}, 
                    {x: 4,y:1,color: '#4DD1F0'}, 
                    {x: 5,y:3,color: '#4DD1F0'}, 
                    {x: 6,y:0.5,color: '#39DECD'}, 
                    {x: 7,y:4,color: '#00A5C3'}, 
                    {x: 8,y:4,color: '#086DD3'}, 
                    {x: 9,y:4,color: '#086DD3'}, 
                    {x: 10,y:4,color: '#086DD3'}, 
                    {x: 11,y:4,color: '#086DD3'}, 
                    {x: 12,y:4,color: '#086DD3'},
                ]
        }, 
        {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],},
        {type: 'errorbar',color: '#B2DBFF',data: [null, [1.5, 2.3]],}, 
        {type: 'errorbar', color: '#6C93ED',data: [null, null, [2.8,3.1]],}, 
        {type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}
        //hier sollten also 12 errorbars sein anstatt 4
    ],
    [
        {
            showInLegend:false,
            name: 'UK',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {textOutline: "0px",},
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [{x: 0,y:1,color: '#EFF3FF',name: '**'}]
        }, 
        {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],}, 
        {type: 'errorbar',color: '#B2DBFF',data: [null, [1.5, 2.3]],}, 
        {type: 'errorbar',color: '#6C93ED',data: [null, null, [2.8,3.1]],}, 
        {type: 'errorbar',color: '#6C93ED',data: [null, null, null,[0.9,1.5]],}
    ],
    [
        {
            showInLegend:false,
            name: 'US',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {textOutline: "0px",},
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: []
        }, 
        {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],},
    ],
    [
        {
            showInLegend:false,
            name: 'DE',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {textOutline: "0px",},
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: []
        }, 
        {type: 'errorbar',color: '#EFF3FF',data: [[0.5, 2]],}
    ],
    //Hier beginnen die unteren Kategorien 'Convenience', 'Privacy violations', 'Efficiency', 'Discrimination', 'Security', 'Surveillance',
    //Hier gibt es statt 12 nur 6 Kategorien 
    //selbe Prinzip wie oben!!!
    [
        {
            showInLegend:false,
            name: 'CH',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {textOutline: "0px",},
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [
                    {x: 0,y:1,color: '#CDF2D8'}, 
                    {x: 1,y: 2,color: '#8EE5A9',}, 
                    {x: 2,y: 3,color: '#8BFFBC',}, 
                    {x: 3,y: 1,color: '#67EB68',}, 
                    {x: 4,y: 1,color: '#00881F',}, 
                    {x: 5,y: 1,color: '#016228',}
            ]
        }, 
        {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],},
        {type: 'errorbar',color: '#8EE5A9',data: [null, [1.5, 2.3]],}, 
        {type: 'errorbar',color: '#8BFFBC',data: [null, null, [2.8,3.1]],}, 
        {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.9,1.5]],}
        //hier würden quasi zwei Intervalle fehlen
    ],
    [
        {
            showInLegend:false,
            name: 'UK',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {textOutline: "0px",},
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: []
        }, 
        {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],}
    ],
    [
        {
            showInLegend:false,
            name: 'US',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {textOutline: "0px",},
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: []
        }, 
        {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],}
    ],
    [
        {
            showInLegend:false,
            name: 'DE',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {textOutline: "0px",},
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: []
        }, 
        {type: 'errorbar',color: '#CDF2D8',data: [[0.5, 2]],}
    ]
]