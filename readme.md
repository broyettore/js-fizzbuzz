# FizzBuzz Game

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## Problem Solving

### Step 1 : Come identificare i multipli di 3 e 5 o di entrambi

* Dato un numero x, sono multpli di 3 e/o 5 tutti i numeri per cui x % 3 e/o x % 5 è uguale a 0.

### Step 2 : Fare in modo che il computer riesca (da 1 a 100) svolgere lo step 1

* Possiamo farlo grazie ad un ciclo.
* Partendo da 1 il contatore del ciclo permetterà al computer di controllare ogni numero fino 100 e definire in base quanto descritto nello step 1 i multipli di 3 e/o 5.
* In un primo momento possiamo creare delle condizioni all'interno del ciclo e stampare i risultati nella console per vedere se tutto funziona.
* SE il numero è multiplo di 3 e 5, stampa nella console Fizzbuzz
* ALTRIMENTI SE il numero è multiplo di 3, stampa nella console Fizz
* ALTRIMENTI SE il numero è multiplo di 5, stampa nella console Buzz
* ALTRIMENTI stampa nella console Boom.

### Step 3 (Bonus) : Avere una visuale del gioco con una manipolazione del dom

* Possiamo creare un button associato a un evento. L'evento farà partire al click una funzione col ciclo all'interno.
* Ogni numero sarà visibile e associato a un div contenitore.  Il numero verrà sostituito da fizz, buzz e fizzbuzz in base al tipo di numero.