/// <reference path="../definitions/phaser.comments.d.ts"/>

module YoPhaser.State {
  export class Preload extends Phaser.State {
    private preloadBar:Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(290, 290, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);
    }

    create() {
      this.game.state.start('main');
    }
  }
}
