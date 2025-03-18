import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {

    // 子弹移动速度，写上property可以在编辑器中设置
    @property
    speed: number = 500;

    start() {

    }

    update(deltaTime: number) {
        // 子弹向上移动,deltaTime是时间间隔
        this.node.setPosition(this.node.position.x, this.node.position.y + this.speed * deltaTime);

       if (this.node.position.y > 820) {
        this.node.destroy();
       }
    }
    
}

