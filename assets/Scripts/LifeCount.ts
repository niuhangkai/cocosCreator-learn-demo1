import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LifeCount')
export class LifeCount extends Component {

    @property(Label)
    lifeCountLabel: Label = null;

    updateUI(hp: number) {
        this.lifeCountLabel.string = hp.toString();
    }
}

