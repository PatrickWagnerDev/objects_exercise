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
            
// JSON
    // Die Unterschiede zwischen einem JSON und einem Object sind folgendes:
    // JSON werden genutzt um so auch z.B. an ein Backend gesendet zu werden
    // In validem JSON werden die 'Keys' und String immer in "" geschrieben
    // In JSON dürfen keine Funktionen(Methoden), dates oder undefined stehen
    // Jedes JSON ist ein Objekt, aber nicht jedes Objekt ist ein JSON

    // JSONArray: filter-Methode
        // Hiermit kann man Objekte aus Arrays filtern
        // Beispiel Array:
        let myObjectArr = [
            {
                "name":"Max",
                "is_a_good_guy": true
            },
            {
                "name":"Peter",
                "is_a_good_guy": false
            },
            {
                "name":"Arnold",
                "is_a_good_guy": true
            },
            {
                "name":"Justus",
                "is_a_good_guy": true
            },
            {
                "name":"Bombur",
                "is_a_good_guy": false
            },
        ];

        // Array.filter
            // Ein Array.filter ist wie folgt aufgebaut
            //            Das Array  .filter   Paramenter   "function"   "return" die Funktion selbst
            //                                 der einzelne              muss true oder false ergeben
            //                                 Eintrag vom Array
            console.log(  myObjectArr.filter   ((element)       =>       element['is_a_good_guy']==true));
                // -> (3) [{…}, {…}, {…}]
                // ->   0: {name: 'Max', is_a_good_guy: true}
                // ->   1: {name: 'Arnold', is_a_good_guy: true}
                // ->   2: {name: 'Justus', is_a_good_guy: true}

        // Array.findIndex
            // Ein Array.findIndex ist wie Array.filter aufgebaut, aber es gibt den Index aus
            console.log(  myObjectArr.findIndex  ((element) => element['name']=='Justus'));

    // Verschachtelte JSON/Object
        // Hier ein Beispiel:
        let library = {
        "info": {
            "name": "Stadtbibliothek",
            "location": {
            "city": "Musterstadt",
            "coordinates": { "lat": 48.1351, "lon": 11.582 }
            }
        },
        "sections": {
            "fiction": [
            {
                "shelf": 1,
                "book": {
                "title": "Die Verwandlung",
                "author": {
                    "name": "Franz Kafka",
                    "born": "1883-07-03",
                    "died": "1924-06-03"
                },
                "year": 1915,
                "status": "ausgeliehen"
                }
            },
            {
                "shelf": 2,
                "book": {
                "title": "1984",
                "author": {
                    "name": "George Orwell",
                    "born": "1903-06-25",
                    "died": "1950-01-21"
                },
                "year": 1949,
                "status": "verfügbar"
                }
            }
            ],
            "nonFiction": [
            {
                "shelf": 3,
                "book": {
                "title": "Eine kurze Geschichte der Zeit",
                "author": {
                    "name": "Stephen Hawking",
                    "born": "1942-01-08",
                    "died": "2018-03-14"
                },
                "year": 1988,
                "status": "verfügbar"
                }
            }
            ]
        }
        }

        // Diese können ganz einfach ausgelesen werden z.B. erstmal in der Console
        // Auslesen in der Console: gib dafür einfach den namen des Objects an und bestätige
        // Nun kannst du das Object nach und nach aufklappen in der Console
        // Alternativ auch dann Stück im console.log bis man die gewünschten Daten hat
            console.log(library.info.location.city);    // -> Musterstadt
            console.log(library.sections.fiction[1].book.status);   // -> verfügbar
            
// Console.table
    // Zur schöneren Ausgabe kann man simple Objekte und Arrays auch mit console.table ausgeben
        console.table(myObject.job);