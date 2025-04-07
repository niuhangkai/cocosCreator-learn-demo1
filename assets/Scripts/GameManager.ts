import { _decorator, Component, Node, director, game, Button, sys, AudioClip } from 'cc';
const { ccclass, property } = _decorator;
import { GameOver } from './GameOver';
import { AudioMgr } from './AudioMgr';
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

    // 游戏结束界面
    @property(GameOver)
    gameOverNode: GameOver = null;

    // 游戏背景音乐
    @property(AudioClip)
    gameMusic: AudioClip = null;

    // 按钮音效
    @property(AudioClip)
    buttonAudio: AudioClip = null;

    // 结束音效
    @property(AudioClip)
    gameOverAudio: AudioClip = null;


    private static instance: GameManager;
    public static getInstance() {
        if (!this.instance) {
            this.instance = new GameManager();
        }
        return this.instance;
    }
    // 播放背景音乐
    protected start(): void {
        AudioMgr.inst.play(this.gameMusic, 0.1)
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
        AudioMgr.inst.playOneShot(this.buttonAudio, 1)
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
        AudioMgr.inst.playOneShot(this.buttonAudio, 1)
        this.pauseButton.active = true;
        this.resumeButton.active = false;
        game.resume();
    }

    public gameOver() {
        AudioMgr.inst.playOneShot(this.gameOverAudio, 1)
        // 本地缓存存储
        let historyHighScore = sys.localStorage.getItem('historyHighScore') ?? 0;
        if (historyHighScore) {
            historyHighScore = parseInt(historyHighScore);
        }
        if (this.score > historyHighScore) {
            sys.localStorage.setItem('historyHighScore', this.score.toString());
            historyHighScore = this.score;
        }

        // 获取本地缓存
        this.gameOverNode.showGameOver(historyHighScore,this.score)
        this.onPauseGame();
    }
    // 重新开始游戏
    public restartGame() {
        AudioMgr.inst.playOneShot(this.buttonAudio,1)
        // 重新加载场景
        director.loadScene('game-scene');
        this.onResumeGame()
    }

    // 是否有炸弹
    public hasBomb() {
        return this.bombCount > 0;
    }
    public useBomb() {
        this.bombCount -= 1;
        this.node.emit('AddBombCount', this.bombCount);

    }
    // 退出游戏,一般web没有退出
    // public exitGame() {
    //     // sys.exit();
    // }
}

