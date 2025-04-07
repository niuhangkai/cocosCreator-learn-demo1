import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameOver')
export class GameOver extends Component {
    // 历史最高分
    @property(Label)
    private historyHighScore: Label = null;

    // 当前得分
    @property(Label)
    private currentScore: Label = null;

    start() {

    }

    update(deltaTime: number) {
        
    }

    // 显示游戏结束界面
    showGameOver(historyHighScore: number, currentScore: number) {
        this.node.active = true;
        this.historyHighScore.string = historyHighScore.toString();
        this.currentScore.string = currentScore.toString();
    }
    

}

