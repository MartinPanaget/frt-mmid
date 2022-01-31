// V3: LOLLIPOP CHART

// ANMERKUNG
// 'showInLegend' nicht beachten/so lassen

// ERKLÄRUNG (Attribute zum Anpassen)
// name (STRING): erscheint beim Tooltip
// color (STRING, Hex oder RGB): Farbe der Kugel (in unserem Fall dei Länderfarben)
// data (INTEGER/FLOAT): der tatsächliche Wert in eckigen Klammern
// visible (BOLLEAN): Die Balken, die von Anfang an per default sichtbar sein sollen müssen auf true gesetzt werden, sonst auf false
// radius (INTEGER): Radius der Kugel. Müsset passen wenn man den Wert aus XD übernimmt

// WICHTIG
// Es gibt 6 Gruppen: Convenience, Efficiency, Security, PrivacyViolation, Discrimination und Surveillance.
// Jede dieser Gruppen hat je 4 Datagroups (1 pro Land). Die Reihenfolge entspricht der x-Achse.

// WICHTIGES FÜR ENTWICKLER
// Einheit: 


series:{
    Convinience:[//start Gruppe
        {//start Datagroup
        showInLegend:false,
        visible: true, //wenn per default sichtbar, dann auf true setzen
        name:'CH', //erscheint im Tooltip
        color: '#C7F700', //Farbe der Kugel
        data:[20], //erscheint im Tooltip
        marker: {
            symbol: 'circle',
            radius: 10 //Radius der Kugel in mm
        }
        }, //ende Datagroup
        {
        showInLegend:false,
        visible: false,
        name:'GB',
        color: '#70E6AB',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'USA',
        color: '#0CBAF7',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        },{
        showInLegend:false,
        visible: true,
        name:'DE',
        color: '#23EFEF',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }
    ];//ende Gruppe
    Efficiency:[{
        showInLegend:false,
        visible: true,
        name:'CH',
        color: '#C7F700',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'GB',
        color: '#70E6AB',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'USA',
        color: '#0CBAF7',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        },{
        showInLegend:false,
        visible: true,
        name:'DE',
        color: '#23EFEF',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }
    ];
    Security:[{
        showInLegend:false,
        visible: true,
        name:'CH',
        color: '#C7F700',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'GB',
        color: '#70E6AB',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'USA',
        color: '#0CBAF7',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        },{
        showInLegend:false,
        visible: true,
        name:'DE',
        color: '#23EFEF',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }
    ];
    PrivacyViolation:[{
        showInLegend:false,
        visible: true,
        name:'CH',
        color: '#C7F700',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'GB',
        color: '#70E6AB',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'USA',
        color: '#0CBAF7',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        },{
        showInLegend:false,
        visible: true,
        name:'DE',
        color: '#23EFEF',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }
    ];
    Discrimination:[{
        showInLegend:false,
        visible: true,
        name:'CH',
        color: '#C7F700',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'GB',
        color: '#70E6AB',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'USA',
        color: '#0CBAF7',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        },{
        showInLegend:false,
        visible: true,
        name:'DE',
        color: '#23EFEF',
        data:[20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }
    ];
    Surveillance:[{
        showInLegend:false,
        visible: true,
        name:'CH',
        color: '#C7F700',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'GB',
        color: '#70E6AB',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }, {
        showInLegend:false,
        visible: false,
        name:'USA',
        color: '#0CBAF7',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        },{
        showInLegend:false,
        visible: true,
        name:'DE',
        color: '#23EFEF',
        data:[-20],
        marker: {
            symbol: 'circle',
            radius: 10
        }
        }
    ]
}