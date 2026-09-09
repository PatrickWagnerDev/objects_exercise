// Object
    // Hier der grundsätzliche Aufbau eines Objekts
        // Object sind Listen bei den jedes Element mit einem ',' getrennt wird
        // Elemente bestehen aus einem 'Key' und einem 'Value' welche mit ':' getrennt werden
        // 'Keys' sind Grundsätzlich Strings, wobei die 'Values' jedem andern Datentyp, Array, Object oder Funktion entsprechen können
        let myObject = {
            'name':'Flo',                   // -> String
            'age':45,                       // -> Number
            'job': {                        // -> Objects
                'name':'Dev-Mentor',
                'company':'DA'
            },
            'good_guy':true,                // -> Boolean
            'loghobby': function() {        // -> Methoden
                console.log('Warhammer');                
            }
        };

    // Objekte können auf 2 Arten ausgelesen werden
        // entweder über einen Punkt
            console.log(myObject.name);     // -> Flo

        // oder auch über [], wobei hier auch Variablen eingetragen werden können, wie im Beispiel
            let objKey = 'age';
            console.log(myObject[objKey]);

    // Methoden
        // Wenn Methoden (Funktionen in objects) ausgelesen werden sollen, dann wie folgt
            myObject.loghobby();

    // Keys auslesen
        // 'Keys' können ausgelesen werden durch Object.keys("Objectname")
        // Hiermit wird ein ein Array mit den Keys ausgelesen
            let objKeys = Object.keys(myObject);

        // Verwendung z.B. für for-loops
            let ourArray = [];
            for (let i = 0; i < objKeys.length; i++) {
                const element = objKeys[i];
                ourArray.push(myObject[objKeys[i]]); 
            }
            console.table(ourArray);
            
// Console.table
    // Zur schöneren Ausgabe kann man simple Objekte und Arrays auch mit console.table ausgeben
        console.table(myObject.job);