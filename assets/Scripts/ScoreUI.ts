import { _decorator, Component, Label, Node } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('ScoreUI')
export class ScoreUI extends Component {
    @property(Label)
    scoreLabel: Label = null;

    start() {
        GameManager.getInstance().node.on('AddScore', this.updateScore, this);
    }

    update(deltaTime: number) {
        
    }

    updateScore(score: number) {
        this.scoreLabel.string = score.toString();
    }
}

