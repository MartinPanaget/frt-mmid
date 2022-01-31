// V3: PERCENTAGE STACKED BAR CHART

// ANMERKUNG
// 'showInLegend' nicht beachten/so lassen

// ERKLÄRUNG (Attribute zum Anpassen)
// name : erscheint beim Tooltip
// color: Farbe des Balken-Abschnitts der dazugehörigen Datagroup (in unserem Fall die Farbe des Landes in verschiedenen Sättigungen)
// data: der tatsächliche Wert in eckigen Klammern
// visible: ist das Balkendiagramm per default sichtbar
    // wenn ja --> visible:true, sonst visible: false

// WICHTIG
// Es gibt die Gruppen: Convenience, Efficiency, Security, PrivacyViolation, Discrimination und Surveillance.
// Innerhalb dieser Gruppen gibt es immer 1 Datensatz mit 4 Werte-Farbe-Kombos (je für ein Land) 
// und 3 Datagroups ('Strongly Accept', 'Middle', 'Strongly Oppose' --> in dieser Reihenfolge).
// Bedeutet: 
    // 1. Die erste Datagroup ( hier: 'Strongly Accept') definiert immer den äußersten Wert über die vier Balken (Datensätze) hinweg.
    //      Die letzte Datagroup den untersten Wert.
    // 2. innderhalb des 'data'-Attributs gehört der erste Wert zum Balken ganz links (in unserem Fall China), 
    //      der zweite gehört dem zweiten Balken von links (England) usw.
    //      ACHTUNG: Wenn also die Reihenfolge der x achse geändert wird, müssen die Werte analog angepasst werden

// WICHTIGES FÜR ENTWICKLER
// Einheit: 

    series:{
        Convenience:[
            { //start Datagroup
            showInLegend: false,
            visible: true,
            name: 'Strongly Accept', //Tooltip
            data: [{ //start Datensatz
                y: 2, // Wert 'Strongly accept' CH
                color: '#ff0000' // höchste Sättigung
                }, {
                y: 3,// Wert 'Strongly accept' GB
                color: '#00ff00' // höchste Sättigung
                },{
                y: 3,// Wert 'Strongly accept' USA
                color: '#00ff00' // höchste Sättigung
                },{
                y: 1,// Wert 'Strongly accept' DE
                color: '#0000ff' // höchste Sättigung
                }
            ] //ende Datensatz
        }, //ende Datagroup
        {
            name: 'Middle', //Tooltip
            data: [{
                y: 2, // Wert 'middle' CH
                color: '#ff0000' // mittlere Sättigung
                }, {
                y: 3,// Wert 'middle' GB
                color: '#00ff00' // mittlere Sättigung
                },{
                y: 3,// Wert 'middle' USA
                color: '#00ff00' // mittlere Sättigung
                },{
                y: 1,// Wert 'middle' DE
                color: '#0000ff' // mittlere Sättigung
                }
            ]
        },
        {
            name: 'Strongly Oppose', //Tooltip
            data: [{
                y: 2, // Wert 'Strongly Oppose' CH
                color: '#ff0000' // geringste Sättigung
                }, {
                y: 3,// Wert 'Strongly Oppose' GB
                color: '#00ff00' // geringste Sättigung
                },{
                y: 3,// Wert 'Strongly Oppose' USA
                color: '#00ff00' // geringste Sättigung
                },{
                y: 1,// Wert 'Strongly Oppose' DE
                color: '#0000ff' // geringste Sättigung
                }
            ]
    
        }];
        Efficiency:[{ 
            showInLegend: false,
            visible: true,
            name: 'Strongly Accept', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
        },
        {
            name: 'Middle', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
        },
        {
            name: 'Strongly Oppose', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff'
                }
            ]
    
        }];
        Security:[{ 
            showInLegend: false,
            visible: true,
            name: 'Strongly Accept', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
        },
        {
            name: 'Middle',
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
        },
        {
            name: 'Strongly Oppose', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
    
        }];
        PrivacyViolation:[{ 
            showInLegend: false,
            visible: true,
            name: 'Strongly Accept', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
        },
        {
            name: 'Middle', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
        },
        {
            name: 'Strongly Oppose', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
    
        }];
        Discrimination:[{ 
            showInLegend: false,
            visible: true,
            name: 'Strongly Accept', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
        },
        {
            name: 'Middle', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
        },
        {
            name: 'Strongly Oppose',
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
    
        }];
        Surveillance:[{ 
            showInLegend: false,
            visible: true,
            name: 'Strongly Accept',
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
        },
        {
            name: 'Middle', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
        },
        {
            name: 'Strongly Oppose', 
            data: [{
                y: 2, 
                color: '#ff0000' 
                }, {
                y: 3,
                color: '#00ff00' 
                },{
                y: 3,
                color: '#00ff00' 
                },{
                y: 1,
                color: '#0000ff' 
                }
            ]
    
        }]
    }