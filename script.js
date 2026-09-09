// Object
    // Hier der grundsätzliche Aufbau eines Objekts
        // Object sind Listen bei den jedes Element mit einem ',' getrennt wird
        // Elemente bestehen aus einem 'Key' und einem 'Value' welche mit ':' getrennt werden
        // 'Keys' sind Grundsätzlich Strings, wobei die 'Values' jedem andern Datentyp, Array, Object oder Funktion entsprechen können
        let myObject = {
            'name':'Flo',
            'age':45,
            'job': {
                'name':'Dev-Mentor',
                'company':'DA'
            },
            'good_guy':true,
        };

    // Objekte können auf 2 Arten ausgelesen werden
        // entweder über einen Punkt
            console.log(myObject.name);     // -> Flo

        // oder auch über [], wobei hier auch Variablen eingetragen werden können, wie im Beispiel
            let objKey = 'age';
            console.log(myObject[objKey]);

// Console.table
    // Zur schöneren Ausgabe kann man simple Objekte und Arrays auch mit console.table ausgeben
        console.table(myObject.job);