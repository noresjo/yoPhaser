/// <reference path="../definitions/phaser.comments.d.ts"/>

module YoPhaser.State {
  export class Main extends Phaser.State {
    text: Phaser.Text;
    
    create() {
      var thing:String = 'code !';
      this.text = this.add.text(10, 10, `Let's ${thing}`, { font: '65px Arial' });
    }
    
    update() {
      var sizeOfMovement = this.game.width - this.text.width;
      this.text.x = sizeOfMovement / 2 + Math.sin(this.game.time.now / 1000) * sizeOfMovement /2;
    }
  }
}
