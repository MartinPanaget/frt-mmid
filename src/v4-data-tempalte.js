// V4: BUBBLECHART

// ANMERKUNG
// 'showInLegend' und 'visible' nicht beachten/so lassen

// ERKLÄRUNG (Attribute zum Anpassen)
// name : erscheint beim Tooltip
// color: Farbe der Bubble der dazugehörigen Datagroup (in unserem Fall die Farbe des Landes)
// data: der tatsächliche Wert in eckigen Klammern

// WICHTIG
// Es gibt die Gruppen: Phone, PersonCheck, SmartDevice, IdCheck, Transport, Mall, Street, School, Private und Tourism.
// Innerhalb dieser Gruppen gibt es immer 4 Datagroups (also je eine für ein Land)
// Die Reihenfolge dieser Datagroups ist wichtig.
// Bedeutet: Die erste Datagroup muss den Datensatz mit dem kleinsten Wert besitzen, 
// die letzte (also vierte) den Datensatz mit dem größten Wert.

// WICHTIGES FÜR ENTWICKLER
// Einheit: 



series:{
    Phone:[//Gruppenname
        { //start Datagroup
        showInLegend: false,
        visible: true,
        name: 'Phone DE', //Tooltip
        color: '#23EFEF', //Landfarbe
        data:[12],// Datensatz mit kleinestem Wert in der Gruppe Phone
        },//Ende Datagroup
        {
        showInLegend: false,
        visible: true,
        name: 'Phone GB',
        color: '#70E6AB',
        data:[20],
        }, 
        {
        showInLegend: false,
        visible: true,
        name: 'Phone USA',
        color: '#0CBAF7',
        data:[25],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone CH',
        color: '#C7F700',
        data:[50],// Datensatz mit größtem Wert in der Gruppe Phone
        }
    ]; // Ende erste Gruppe 
    PersonCheck:[{
        showInLegend: false,
        visible: true,
        name: 'Phone DE',
        color: '#23EFEF',
        data:[12],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone GB',
        color: '#70E6AB',
        data:[20],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone CH',
        color: '#C7F700',
        data:[25],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone USA',
        color: '#0CBAF7',
        data:[50],
        }
    ];
    SmartDevice:[{
        showInLegend: false,
        visible: true,
        name: 'Phone DE',
        color: '#23EFEF',
        data:[12],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone GB',
        color: '#70E6AB',
        data:[20],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone USA',
        color: '#0CBAF7',
        data:[25],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone CH',
        color: '#C7F700',
        data:[30],
        }
    ];
    IdCheck:[{
        showInLegend: false,
        visible: true,
        name: 'Phone DE',
        color: '#23EFEF',
        data:[12],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone GB',
        color: '#70E6AB',
        data:[20],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone USA',
        color: '#0CBAF7',
        data:[25],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone CH',
        color: '#C7F700',
        data:[30],
        }
    ];
    Transport:[{
        showInLegend: false,
        visible: true,
        name: 'Phone DE',
        color: '#23EFEF',
        data:[12],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone GB',
        color: '#70E6AB',
        data:[20],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone USA',
        color: '#0CBAF7',
        data:[25],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone CH',
        color: '#C7F700',
        data:[30],
        }
    ];
    Mall:[{
        showInLegend: false,
        visible: true,
        name: 'Phone DE',
        color: '#23EFEF',
        data:[12],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone GB',
        color: '#70E6AB',
        data:[20],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone USA',
        color: '#0CBAF7',
        data:[25],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone CH',
        color: '#C7F700',
        data:[30],
        }
    ];
    Street:[{
        showInLegend: false,
        visible: true,
        name: 'Phone DE',
        color: '#23EFEF',
        data:[12],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone GB',
        color: '#70E6AB',
        data:[20],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone USA',
        color: '#0CBAF7',
        data:[25],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone CH',
        color: '#C7F700',
        data:[30],
        }
    ];
    School:[{
        showInLegend: false,
        visible: true,
        name: 'Phone DE',
        color: '#23EFEF',
        data:[12],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone GB',
        color: '#70E6AB',
        data:[20],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone USA',
        color: '#0CBAF7',
        data:[25],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone CH',
        color: '#C7F700',
        data:[30],
        }
    ];
    Private:[{
        showInLegend: false,
        visible: true,
        name: 'Phone DE',
        color: '#23EFEF',
        data:[12],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone CH',
        color: '#C7F700',
        data:[20],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone USA',
        color: '#0CBAF7',
        data:[25],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone GB',
        color: '#70E6AB',
        data:[30],
        }
    ];
    Tourism:[{
        showInLegend: false,
        visible: true,
        name: 'Phone CH',
        color: '#C7F700',
        data:[12],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone GB',
        color: '#70E6AB',
        data:[20],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone USA',
        color: '#0CBAF7',
        data:[25],
        },
        {
        showInLegend: false,
        visible: true,
        name: 'Phone DE',
        color: '#23EFEF',
        data:[80],
        }
    ];
    
}