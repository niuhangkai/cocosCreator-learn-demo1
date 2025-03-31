import { _decorator, Component, Label, LabelComponent, Node } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('BombUI')
export class BombUI extends Component {

    @property(Label)
    bombCountLabel: Label = null;

    start() {
        GameManager.getInstance().node.on('AddBombCount', this.updateBombCount, this);
    }

    update(deltaTime: number) {
        
    }

    updateBombCount(bombCount: number) {
        this.bombCountLabel.string = bombCount.toString();
    }
}

