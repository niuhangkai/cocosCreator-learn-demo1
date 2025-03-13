import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bg')
export class Bg extends Component {

    @property(Node) // property(Node) 表示这是一个节点类型
    bg01: Node = null;

    @property(Node) // property(Node) 表示这是一个节点类型
    bg02: Node = null;
    

    speed: number = 100;
    

    // start() 方法是在组件被激活后执行的方法，通常用于初始化组件的状态。
    start() {
        console.log("start-Bg-scene")
    }

    // update() 方法是每帧更新时执行的方法，用于更新游戏对象的状态。deltaTime 参数表示自上一帧以来经过的时间（以秒为单位）。
    update(deltaTime: number) {
        const position1 = this.bg01.getPosition();
        console.log("update-Bg-scene122111", deltaTime, position1.x)
        this.bg01.setPosition(position1.x, position1.y- this.speed*deltaTime/** 速度*时间 */, position1.z ); 

        const position2 = this.bg02.getPosition();
        this.bg02.setPosition(position2.x, position2.y- this.speed*deltaTime, position2.z ); 


        if (this.bg01.position.y <= -425) {
            this.bg01.setPosition(position1.x, position2.y+850, 0);
        }

        if (this.bg02.position.y <= -425) {
            this.bg02.setPosition(position2.x, position1.y+850, 0);
        }


    }
}

