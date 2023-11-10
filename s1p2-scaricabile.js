/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log('I principali Datatype in Javascript sono: String, Number, Undefined, Null, Boolean, NaN');
// console.log('-------------');
// console.log('String: è un tipo di dato che contiene solo valori testuali. può essere inizializzato in tre modi: utilizzando le virgolette, apici singoli o backtick');
// console.log('');
// console.log('Number: è un tipo di dato numerico (sia interi che reali) con dimensioni massime e minime (intervallo +,- (2^53 -1)), questi tipi di dati, essendo numerici, possono essere soggetti ad operazioni aritmetiche tra loro');
// console.log('');
// console.log('Undefined: è un tipo di dato instanziato (creato) ma mai valorizzato, di conseguenza mai "Definito"');
// console.log('');
// console.log('Null: è un tipo di dato in cui il suo valore è stato impostato come "Vuoto", questo può avvenire sia in fase di inizializzazione, sia per annullare o meglio "svuotare" una variabile precedentemente valorizzata con un qualsiasi tipo di dato');
// console.log('');
// console.log('Bool / Boolean: è una variabile che può avere solo due valori possibili TRUE o FALSE (vero o falso), è una variabile binaria come se fosse il valore di un interruttore (acceso o spento), i due valori quindi non sono stringhe, anche se vengono stampate in output come se fosse un testo essi in realtà hanno un valore logico');
// console.log('');


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log(`Object: è un tipo di dato anch'esso strutturato, un pò più complesso dell'array. 
// Viene utilizzato per definire un Soggetto o Oggetto reale che non potrebbe essere espresso utilizzando un solo dato primitivo o tramite un array. 
// L'oggetto, infatti, spesso è una coombinazione di tutti i Datatype disponibili che possano esprimere o rappresentare le particolarità del soggetto/oggetto che si sta definendo. 
// Un esempio protrebbe essere la rappresentazione di una persona quindi: un nome(string), cognome(string), età(number), sposato (bool)...`);


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log(12+20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let name = 'Mirko';

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// console.log(4-x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let name1="john";
// let name2="John";

// console.log(name1!==name2);
// console.log(name1 === name2.toLowerCase());


/* Esercizio extra
   Crea un oggetto di Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
*/

// let Mirko ={
//     'nome':'Mirko',
//     'cognome':'Colella',
//     'hobby':'Programmazione, Musica e Basket',
// }
