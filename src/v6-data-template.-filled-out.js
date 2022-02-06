// V6: FOREST CHART

// ANMERKUNG
// 'showInLegend' nicht beachten/so lassen

// ERKLÄRUNG (Attribute zum Anpassen)
//showInLegend: false kann ignoriert werden
//name Name des Landes ist schon richtig ausgefüllt => kann ignoriert werden
// data nach name (ARRAY): die Punktdaten zu dem einzelnen Land
// in data: x (INTEGER/FLOAT) ist die Position der Kategorie oben gibt es 13 => geht von 0 - 12 = 'Age', 'Gender', 'Income Medium', 'Income High', 'Education medium', 'Education high', 'Ethnical minority', 'City', 'Exposure', 'Exposure frequency public', 'Exposure frequency private', 'Exposure & frequency public', 'Exposure & frequency private'
// in data: y (INTEGER/FLOAT) ist die Position auf der Skala zwischen 0 und 5
// in data: color (HEX) ist die Farbe des Punktes sind schon die richtigen unten
// in data: name (STRING) sind die Signifikanzsterne; existiert einer so fügst du name: '**' z.B. wenn keines existiert name: ''
// objekt nach data: {} beinhaltet das Interval des Punktes
// in objekt: type ist immer errorbar kann so bleiben
// in objekt: data [ARRAY] beinhaltet das Interval [[0.5, 2]] z. B. für die 1. Kategorie age; für die 2. Kategorie gender [null,[1, 2]] z.B. usw. pro weiter Kategorie kommt eine null hinzu

//Diese Struktur wiederholt sich 4mal für alle vier Länder zuerst China dann UK, US, DE

// WICHTIGES FÜR ENTWICKLER
// Einheit: keine Einheit

attributes: [
    [
        {
            showInLegend:false,
            name: 'CH',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {
                    textOutline: "0px",
                },
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [
                    //das sind auch alle Farben die du brauchst!!
                    {x: 0,y:0.99,color: '#EFF3FF', name: ''}, 
                    {x: 1,y: 1.24,color: '#B2DBFF', name: '**'}, //Gender
                    {x: 2,y: 1.18,color: '#6C93ED', name: ''}, //Income Medium
                    {x: 3,y: 1.47,color: '#6C93ED', name: '**'}, //Income high
                    {x: 4,y:0.76,color: '#4DD1F0', name: ''}, //Education medium
                    {x: 5,y:0.71,color: '#4DD1F0', name: ''}, //Education high
                    {x: 6,y:0.98,color: '#39DECD', name: ''}, //Ethical minority
                    {x: 7,y:0.85,color: '#00A5C3', name: ''}, //City
                    {x: 8,y:1,color: '#086DD3', name: ''}, //Exposure
                    {x: 9,y:1.06,color: '#086DD3', name: ''}, //Exposure frequency public
                    {x: 10,y:1.18,color: '#086DD3', name: '***'}, //Exposure frequency private
                    {x: 11,y:0.99,color: '#086DD3', name: ''}, //Exposure # frequency public
                    {x: 12,y:1.01,color: '#086DD3', name: ''}, //Exposure # frequency private
                ]
        }, 
        {type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],}, //Intervall = 0? Age
        {type: 'errorbar',color: '#B2DBFF',data: [null, [0, 1.45]],}, //Gender
        {type: 'errorbar', color: '#6C93ED',data: [null, null, [0.85,1.6]],}, //Income Medium
        {type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.1,1.95]],}, //Income high
        {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [0.6,1.15]],}, //Education medium
        {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [0.5,1.1]],}, //Education high
        {type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.7,1.5]],}, //Ethical minority
        {type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.75,0.05]],}, //City
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [0.9,0.1]],}, //Exposure
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.95,1.2]],}, //Exposure frequency public
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [1.15,1.3]],}, //Exposure frequency private
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],}, //Exposure # frequency public
        {type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],}, //Exposure # frequency private
    ]



        //hier sollten also 13 errorbars sein anstatt 4
    ],
    [
        {
            showInLegend:false,
            name: 'UK',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {
                    textOutline: "0px",
                },
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [
                //das sind auch alle Farben die du brauchst!!
                {x: 0,y:1,color: '#EFF3FF', name: ''}, 
                {x: 1,y: 0.85,color: '#B2DBFF', name: ''}, //Gender
                {x: 2,y: 1.2,color: '#6C93ED', name: ''}, //Income Medium
                {x: 3,y: 1.07,color: '#6C93ED', name: ''}, //Income high
                {x: 4,y:0.89,color: '#4DD1F0', name: ''}, //Education medium
                {x: 5,y:0.91,color: '#4DD1F0', name: ''}, //Education high
                {x: 6,y:0.8,color: '#39DECD', name: ''}, //Ethical minority
                {x: 7,y:1.06,color: '#00A5C3', name: ''}, //City
                {x: 8,y:0.93,color: '#086DD3', name: ''}, //Exposure
                {x: 9,y:0.97,color: '#086DD3', name: ''}, //Exposure frequency public
                {x: 10,y:0.99,color: '#086DD3', name: ''}, //Exposure frequency private
                {x: 11,y:1,color: '#086DD3', name: ''}, //Exposure # frequency public
                {x: 12,y:1.03,color: '#086DD3', name: ''}, //Exposure # frequency private
            ]
        }, 
        {type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],}, //Intervall = 0? Age
        {type: 'errorbar',color: '#B2DBFF',data: [null, [0.7, 1.02]],}, //Gender
        {type: 'errorbar', color: '#6C93ED',data: [null, null, [0.9,1.7]],}, //Income Medium
        {type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.7,1.5]],}, //Income high
        {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [0.6,1.3]],}, //Education medium
        {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [0.6,1.4]],}, //Education high
        {type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.7,1.05]],}, //Ethical minority
        {type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.9,1.2]],}, //City
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [0.8,1.02]],}, //Exposure
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.9,1.02]],}, //Exposure frequency public
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.9,1.05]],}, //Exposure frequency private
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],}, //Exposure # frequency public
        {type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],}, //Exposure # frequency private
    ],
    [
        {
            showInLegend:false,
            name: 'US',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {
                    textOutline: "0px",
                },
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [
                //das sind auch alle Farben die du brauchst!!
                {x: 0,y:1.01,color: '#EFF3FF', name: '*'}, 
                {x: 1,y: 1.08,color: '#B2DBFF', name: ''}, //Gender
                {x: 2,y: 1.19,color: '#6C93ED', name: ''}, //Income Medium
                {x: 3,y: 1.17,color: '#6C93ED', name: ''}, //Income high
                {x: 4,y:0.82,color: '#4DD1F0', name: ''}, //Education medium
                {x: 5,y:0.89,color: '#4DD1F0', name: ''}, //Education high
                {x: 6,y:1.01,color: '#39DECD', name: ''}, //Ethical minority
                {x: 7,y:1.05,color: '#00A5C3', name: ''}, //City
                {x: 8,y:0.97,color: '#086DD3', name: ''}, //Exposure
                {x: 9,y:0.96,color: '#086DD3', name: ''}, //Exposure frequency public
                {x: 10,y:1.09,color: '#086DD3', name: '**'}, //Exposure frequency private
                {x: 11,y:1,color: '#086DD3', name: ''}, //Exposure # frequency public
                {x: 12,y:1.01,color: '#086DD3', name: ''}, //Exposure # frequency private
            ]
        }, 
        {type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],}, //Intervall = 0? Age
        {type: 'errorbar',color: '#B2DBFF',data: [null, [0.8, 1.3]],}, //Gender
        {type: 'errorbar', color: '#6C93ED',data: [null, null, [0.8, 1.5]],}, //Income Medium
        {type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.8, 1.45]],}, //Income high
        {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [0.6, 1.35]],}, //Education medium
        {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [0.6,1.6]],}, //Education high
        {type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.85,1.25]],}, //Ethical minority
        {type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.9,1.25]],}, //City
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [0.9,1.1]],}, //Exposure
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.9,1.02]],}, //Exposure frequency public
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [1,1.2]],}, //Exposure frequency private
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],}, //Exposure # frequency public
        {type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],}, //Exposure # frequency private
    ],
    [
        {
            showInLegend:false,
            name: 'DE',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {
                    textOutline: "0px",
                },
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [
                //das sind auch alle Farben die du brauchst!!
                {x: 0,y:1,color: '#EFF3FF', name: ''}, //Age
                {x: 1,y: 0.67,color: '#B2DBFF', name: '***'}, //Gender
                {x: 2,y: 0.86,color: '#6C93ED', name: ''}, //Income Medium
                {x: 3,y: 0.59,color: '#6C93ED', name: '***'}, //Income high
                {x: 4,y:2.93,color: '#4DD1F0', name: '***'}, //Education medium
                {x: 5,y:2.63,color: '#4DD1F0', name: '***'}, //Education high
                {x: 6,y:0.91,color: '#39DECD', name: ''}, //Ethical minority
                {x: 7,y:0.80,color: '#00A5C3', name: '**'}, //City
                {x: 8,y:1.21,color: '#086DD3', name: '***'}, //Exposure
                {x: 9,y:0.92,color: '#086DD3', name: ''}, //Exposure frequency public
                {x: 10,y:1.02,color: '#086DD3', name: ''}, //Exposure frequency private
                {x: 11,y:0.97,color: '#086DD3', name: '**'}, //Exposure # frequency public
                {x: 12,y:1.01,color: '#086DD3', name: ''}, //Exposure # frequency private
            ]
        }, 
        {type: 'errorbar',color: '#EFF3FF',data: [[0, 0]],}, //Intervall = 0? Age
        {type: 'errorbar',color: '#B2DBFF',data: [null, [0.6, 0.7]],}, //Gender
        {type: 'errorbar', color: '#6C93ED',data: [null, null, [0.6, 1.3]],}, //Income Medium
        {type: 'errorbar', color: '#6C93ED',data: [null, null, null,[0.5, 0.9]],}, //Income high
        {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, [1.8, 4.7]],}, //Education medium
        {type: 'errorbar', color: '#4DD1F0',data: [null, null, null, null, null, [1.6,4.5]],}, //Education high
        {type: 'errorbar', color: '#39DECD',data: [null, null, null, null, null, null, [0.7,1.2]],}, //Ethical minority
        {type: 'errorbar', color: '#00A5C3',data: [null, null, null, null, null, null, null, [0.9,0.95]],}, //City
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, [1.1,1.3]],}, //Exposure
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.95,1]],}, //Exposure frequency public
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, [0.98, 1.15]],}, //Exposure frequency private
        {type: 'errorbar', color: '#086DD3',data: [null, null, null, null, null, null, null, null, null, null, [0, 0]],}, //Exposure # frequency public
        {type: 'errorbar', color: '#086DD3',data: [null, null, null,null, null, null, null, null, null, null, null, [0, 0]],}, //Exposure # frequency private
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
                style: {
                    textOutline: "0px",
                },
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [
                    {x: 0,y:1.71,color: '#CDF2D8', name: '***'}, //Convinience
                    {x: 1,y: 0.58,color: '#8EE5A9', name: '***'}, //Privacy Violations
                    {x: 2,y: 1.4,color: '#8BFFBC', name: '***'}, //Efficiency
                    {x: 3,y: 0.56,color: '#67EB68', name: '**'}, //Discrimination
                    {x: 4,y: 1.88,color: '#00881F', name: '***'}, //Security
                    {x: 5,y: 0.56,color: '#016228', name: '***'} //Surveillance
            ]
        }, 
        {type: 'errorbar',color: '#CDF2D8',data: [[1.3, 2.1]],}, //Convinience
        {type: 'errorbar',color: '#8EE5A9',data: [null, [0.6, 0.8]],}, //Privacy Violations
        {type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.1,1.8]],}, //Efficiency
        {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.4,1.1]],}, //Discrimination
        {type: 'errorbar',color: '#00881F',data: [null, null, null, null,[1.5,2.4]],}, //Security
        {type: 'errorbar',color: '#016228',data: [null, null, null, null, null,[0.5,0.8]],}, //Surveillance

        //hier würden quasi zwei Intervalle fehlen
    ],
    [
        {
            showInLegend:false,
            name: 'UK',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {
                    textOutline: "0px",
                },
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [
                {x: 0,y:2.39,color: '#CDF2D8', name: '***'}, //Convinience
                {x: 1,y: 0.43,color: '#8EE5A9', name: '***'}, //Privacy Violations
                {x: 2,y: 1.56,color: '#8BFFBC', name: '***'}, //Efficiency
                {x: 3,y: 0.62,color: '#67EB68', name: '**'}, //Discrimination
                {x: 4,y: 2.08,color: '#00881F', name: '***'}, //Security
                {x: 5,y: 1.05,color: '#016228', name: ''} //Surveillance
        ]
    }, 
    {type: 'errorbar',color: '#CDF2D8',data: [[1.8, 3.2]],}, //Convinience
    {type: 'errorbar',color: '#8EE5A9',data: [null, [0.5, 0.6]],}, //Privacy Violations
    {type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.3,2.1]],}, //Efficiency
    {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.5,0.85]],}, //Discrimination
    {type: 'errorbar',color: '#00881F',data: [null, null, null, null, [1.5,2.7]],}, //Security
    {type: 'errorbar',color: '#016228',data: [null, null, null, null, null, [0.8,1.35]],}, //Surveillance

    //hier würden quasi zwei Intervalle fehlen
],
    [
        {
            showInLegend:false,
            name: 'US',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {
                    textOutline: "0px",
                },
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [
                {x: 0,y:1.51,color: '#CDF2D8', name: '***'}, //Convinience
                {x: 1,y: 0.49,color: '#8EE5A9', name: '***'}, //Privacy Violations
                {x: 2,y: 1.97,color: '#8BFFBC', name: '***'}, //Efficiency
                {x: 3,y: 0.68,color: '#67EB68', name: '**'}, //Discrimination
                {x: 4,y: 2.3,color: '#00881F', name: '***'}, //Security
                {x: 5,y: 1.09,color: '#016228', name: ''} //Surveillance
        ]
    }, 
    {type: 'errorbar',color: '#CDF2D8',data: [[1.2, 1.9]],}, //Convinience
    {type: 'errorbar',color: '#8EE5A9',data: [null, [0.3, 0.7]],}, //Privacy Violations
    {type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.5,2.5]],}, //Efficiency
    {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.5,0.85]],}, //Discrimination
    {type: 'errorbar',color: '#00881F',data: [null, null, null, null, [1.7,3.9]],}, //Security
    {type: 'errorbar',color: '#016228',data: [null, null, null, null, null, [0.9,1.3]],}, //Surveillance
    [
        {
            showInLegend:false,
            name: 'DE',
            dataLabels: {
                enabled: true,
                color: '#00FFFF',
                style: {
                    textOutline: "0px",
                },
                align: 'left',
                position: 'top',
                formatter: function() {
                    return this.point.name;
                }
            },
            data: [
                {x: 0,y:0.99,color: '#CDF2D8'}, //Convinience
                {x: 1,y: 0.37,color: '#8EE5A9', name: '***'}, //Privacy Violations
                {x: 2,y: 1.56,color: '#8BFFBC', name: '***'}, //Efficiency
                {x: 3,y: 0.44,color: '#67EB68', name: '**'}, //Discrimination
                {x: 4,y: 3.09,color: '#00881F', name: '***'}, //Security
                {x: 5,y: 1.29,color: '#016228', name: '**'} //Surveillance
        ]
    }, 
    {type: 'errorbar',color: '#CDF2D8',data: [[0.9, 1.2]],}, //Convinience
    {type: 'errorbar',color: '#8EE5A9',data: [null, [0.35, 0.4]],}, //Privacy Violations
    {type: 'errorbar',color: '#8BFFBC',data: [null, null, [1.2,2]],}, //Efficiency
    {type: 'errorbar',color: '#67EB68',data: [null, null, null,[0.4,0.5]],}, //Discrimination
    {type: 'errorbar',color: '#00881F',data: [null, null, null, null, [2.3,3.8]],}, //Security
    {type: 'errorbar',color: '#016228',data: [null, null, null, null, null, [1,1.6]],}, //Surveillance
    ]
]
        
        