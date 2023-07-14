// Definition der Spielklasse
export class Game {
    // Array zum Speichern der Namen der Spieler
    public players: string[] = ['Hans', 'Freddy', 'Peter'];

    // Array zum Speichern des Kartenstapels, jede Karte ist als String repräsentiert
    public stack: string[] =  [];

    // Array zum Speichern der gespielten Karten
    public playedCards: string[] = [] ;

    // Variable zur Speicherung des aktuellen Spielers
    public currentPlayer: number = 0;

    // Konstruktor der Klasse
    constructor() {
        // Fügt jede Karte als String zum Stapel hinzu, wobei jeder Kartentyp 13 verschiedene Karten hat
        for (let i = 0; i < 13; i++) {
            this.stack.push('spade_' + i) // Pik
            this.stack.push('hearts_' + i) // Herz
            this.stack.push('diamonds_' + i) // Karo
            this.stack.push('clubs_' + i) // Kreuz
        }
        // Mischt den Kartenstapel nach dem Hinzufügen aller Karten
        shuffle(this.stack);
    }
}

// Funktion zum Mischen eines Arrays
function shuffle(array: any[]) {
    // Iteriert rückwärts durch das Array
    for (let i = array.length - 1; i > 0; i--) {
        // Wählt eine zufällige Position j kleiner oder gleich i
        const j = Math.floor(Math.random() * (i + 1));
        // Tauscht die Elemente an den Positionen i und j
        [array[i], array[j]] = [array[j], array[i]];
    }
}