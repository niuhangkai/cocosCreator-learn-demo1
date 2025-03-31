import { _decorator, Component, Node, director, game, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    // 当前炸弹数量
    @property(Number)
    bombCount: number = 0;

    // 分数
    @property(Number)
    score: number = 0;

    // 按钮状态
    @property(Node)
    pauseButton: Node = null;

    @property(Node)
    resumeButton: Node = null;


    private static instance: GameManager;
    public static getInstance() {
        if (!this.instance) {
            this.instance = new GameManager();
        }
        return this.instance;
    }

    onLoad() {
        GameManager.instance = this;
    }

    update(deltaTime: number) {
        
    }
    
    public AddBombCount() {
        this.bombCount+=1;
        this.node.emit('AddBombCount', this.bombCount);
    }

    public AddScore(score: number) {
        this.score += score;
        this.node.emit('AddScore', this.score);
    }
    public onPauseGame() {
        // director.pause()和game.pause()的区别
        // director.pause();
        this.pauseButton.active = false;
        this.resumeButton.active = true;
        // 延迟一帧
        setTimeout(() => {
            game.pause();
        }, 100);
    }
    public onResumeGame() {
        this.pauseButton.active = true;
        this.resumeButton.active = false;
        game.resume();
    }
}

