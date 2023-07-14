import { Component } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard!: string | undefined;
  game!: Game; // Notice the definite assignment operator (!)

  constructor(public dialog: MatDialog) { 
    this.newGame();
  
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if(!this.pickCardAnimation) {
        this.currentCard = this.game.stack.pop();
        this.pickCardAnimation = true;
        console.log(this.currentCard);
        console.log(this.game);

        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        

        setTimeout(() => {
          // Überprüfen, ob this.currentCard definiert ist, bevor Sie es hinzufügen
          if (this.currentCard) {
            this.game.playedCards.push(this.currentCard);
          }
              this.pickCardAnimation = false;
          }, 1250);
    }
}

openDialog(): void {
  const dialogRef = this.dialog.open(DialogAddPlayerComponent);

  dialogRef.afterClosed().subscribe(name => {
    if(name && name.length > 0) {
      this.game.players.push(name);
    }
    
   
  });
}

}