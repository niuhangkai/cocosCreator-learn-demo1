import { Animation, _decorator, Component, Node, Collider2D, Contact2DType, IPhysics2DContact, Enum } from 'cc';
import { Bullet } from './Bullet';
const { ccclass, property } = _decorator;

// 奖励类型
export enum RewardType {
    TwoShoot = 0,
    Bomb = 1
}

@ccclass('Reward')
export class Reward extends Component {
    // 移动速度
    @property
    speed: number = 300;

    // 奖励类型
    @property({type: Enum(RewardType)})
    rewardType: RewardType = RewardType.TwoShoot;

    start() {

    }

    update(deltaTime: number) {

        this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime);
        if (this.node.position.y <= -580) {
            this.node.destroy();
        }
    }

    // 碰撞检测
    // selfCollider: 自身碰撞体
    // otherCollider: 其他碰撞体
    // contact: 碰撞信息
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    }

    onDestroy() {
        // if (this.collider) {
        //     this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        // }
    }
}

