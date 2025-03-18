import { Animation, _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('enemy')
export class enemy extends Component {
    // 敌机移动速度
    @property
    speed: number = 300;

    // 爆炸动画
    @property(Animation)
    anim: Animation = null;


    start() {
        // 播放爆炸动画
        this.anim.play();
    }

    update(deltaTime: number) {
        // 敌机向下移动
        this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime);
    }
}

