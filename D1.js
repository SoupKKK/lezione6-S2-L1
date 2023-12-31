/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
Numero (Number): Questo tipo di dato rappresenta i numeri. Puoi usarlo per fare calcoli matematici come l'addizione, la sottrazione e la moltiplicazione. Ad esempio, 5 è un numero.
Stringa (String): Una stringa è una sequenza di lettere, parole o frasi. È come una catena di caratteri. Ad esempio, "Ciao, mondo!" è una stringa.
Booleano (Boolean): Questo tipo di dato può avere solo due valori: vero o falso. È utile per prendere decisioni. Ad esempio, puoi dire se è giorno (vero) o notte (falso).
Nullo (Null): Questo rappresenta l'assenza di valore. È come dire che non c'è nulla o che una scatola è vuota.
 */ 

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name = "Giuseppe"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var addizione = 12 + 20;
console.log(addizione);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const name = "Conza" // ERRORE PERCHE' VARIABILE "NAME" E' GIA' STATA ASSEGNATA (commento altrimenti la console manda errore)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var sottrazione = x - 4
console.log(sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name1 = "john";
var name2 = "John";

var confronto = name1 !== name2;
console.log("Le stringhe sono diverse:", confronto);

var confrontoMinuscolo = name1.toLowerCase() === name2.toLowerCase();
console.log("Le stringhe sono uguali in minuscolo:", confrontoMinuscolo);