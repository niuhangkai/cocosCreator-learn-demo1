import {Prefab, instantiate, _decorator, Component, Node, EventTouch, Vec3, Collider2D, Contact2DType, IPhysics2DContact,Animation, Enum, game } from 'cc';
import { Reward, RewardType } from './Reward';
import { EnemyManager } from './EnemyManager';
import { GameManager } from './GameManager';
import { LifeCount } from './LifeCount';
const { ccclass, property } = _decorator;

enum ShootType {
    Single = 0,
    Double = 1,
    Triple = 2,
}
@ccclass('Player')
export class Player extends Component {
    // 子弹部分
    @property
    // 发射频率，0.5秒发射一次
    frequency: number = 0.5;

    // 射击计时器
    shootTimer: number = 0;

    // 获取到子弹预制体，这里需要在编辑中，拖拽预制体到这个属性，并且在下面update中实例化
    @property(Prefab)
    bulletPrefab: Prefab = null;

    // 子弹的父节点，子弹会添加到这个节点下
    @property(Node)
    bulletParent: Node = null;

    // 子弹的初始位置
    @property(Node)
    bulletInitPos: Node = null;
    
    // 射击类型
    @property({type: Enum(ShootType)})
    shootType: ShootType = ShootType.Single;

    // 第二种子弹的prefab
    @property(Prefab)
    bulletPrefab2: Prefab = null;

    // 第二种两个子弹的初始位置
    @property(Node)
    bulletInitPos2: Node = null;
    @property(Node)
    bulletInitPos3: Node = null;

    // 碰撞体
    collider: Collider2D = null;

    // 血量为3
    @property(Number)
    hp: number = 6;

    // 爆炸动画
    @property(Animation)
    anim: Animation = null;

    // 两个主角飞机动画
    @property(String)
    animHit: string = '';

    // 飞机爆炸动画
    @property(String)
    animDown: string = '';

    // 主角无敌时间
    invincibleTime: number = 1
    isInvincible: boolean = false

    // 生命计数器
    @property(LifeCount)
    lifeCountUI: LifeCount = null;

    start() {
        this.lifeCountUI.updateUI(this.hp)
        // 注册单个碰撞体的回调函数
        this.collider = this.getComponent(Collider2D);

        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    }
    // 绑定touchmove事件
    // onLoad 是 cocos 的钩子函数，在节点加载时调用
    protected onLoad(): void {
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }
    protected update(deltaTime: number): void {

        switch(this.shootType) {
            case ShootType.Single: // 0
                this.singleShoot(deltaTime);
                break;
            case ShootType.Double: // 1
                this.doubleShoot(deltaTime);
                break;
            case ShootType.Triple: // 2
                this.singleShoot(deltaTime);
                this.doubleShoot(deltaTime);
                break;
        }


    }
    // 单发射击
    singleShoot(deltaTime: number): void {
        // deltaTime 是时间间隔,每帧调用一次,每次时间间隔大概0.016秒
        this.shootTimer += deltaTime;
        // 如果shootTime大于等于frequency，则发射子弹
        if (this.shootTimer >= this.frequency) {
            // 计时器清零
            this.shootTimer = 0;
            // 实例化子弹
            // instantiate 是 cocos 的实例化函数
            const bullet1 = instantiate(this.bulletPrefab);
            // 添加到场景中
            this.bulletParent.addChild(bullet1);
            // 设置子弹位置
            bullet1.setWorldPosition(this.bulletInitPos.worldPosition);
        }
    }
    // 双发射击
    doubleShoot(deltaTime: number): void {
         // deltaTime 是时间间隔,每帧调用一次,每次时间间隔大概0.016秒
         this.shootTimer += deltaTime;
         // 如果shootTime大于等于frequency，则发射子弹
         if (this.shootTimer >= this.frequency) {
             // 计时器清零
             this.shootTimer = 0;
             // 实例化子弹
             // instantiate 是 cocos 的实例化函数
             const bullet1 = instantiate(this.bulletPrefab2);
             const bullet2 = instantiate(this.bulletPrefab2);
             // 添加到场景中
             this.bulletParent.addChild(bullet1);
             this.bulletParent.addChild(bullet2);

             // 设置子弹位置
             bullet1.setWorldPosition(this.bulletInitPos2.worldPosition);
             bullet2.setWorldPosition(this.bulletInitPos3.worldPosition);
         }
    }

    // 触摸移动事件
    onTouchMove(event: EventTouch): void {
        // 如果游戏暂停，则不进行移动       
        // if (game.isPaused) {
        //     return;
        // }
        if (this.hp <= 0) {
            return;
        }

        // 跟随鼠标移动
        const p = this.node.position
        // Vec3 是 cocos 的向量类
        let targetPos = new Vec3(p.x + event.getDeltaX(), p.y + event.getDeltaY(),p.z);
        // 限制移动范围

        if (targetPos.x <= -234) {
            targetPos.x = -234;
        }

        if (targetPos.x >= 234) {
            targetPos.x = 234;
        }

        if (targetPos.y <= -400) {
            targetPos.y = -400;
        }

        if (targetPos.y >= 400) {
            targetPos.y = 400;
        }

        this.node.setPosition(targetPos);
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log('碰撞事件');
        // 判断是不是奖励
        const reward = otherCollider.getComponent(Reward);
        if (reward) {
            // 判断奖励类型
            if (reward.rewardType === RewardType.TwoShoot) {
                this.shootType = ShootType.Double;
                this.scheduleOnce(() => {
                    this.shootType = ShootType.Single;
                }, 5);
            } else if (reward.rewardType === RewardType.Bomb) {
                GameManager.getInstance().AddBombCount();
                otherCollider.node.destroy();
                // this.shootType = ShootType.Triple;
            }
            otherCollider.node.destroy();
        } else { 
        // 如果主角无敌，则不进行碰撞检测
        if (this.isInvincible) {
            return;
        }
        this.isInvincible = true;
        this.hp -= 1;
        if (this.hp <= 0) {
            this.anim.play(this.animDown)
            this.anim.on(Animation.EventType.FINISHED, () => {
                // this.collider.enabled = false;
                this.node.destroy();
            });
        } else {
            this.anim.play(this.animHit)
            // 主角无敌时间
            this.scheduleOnce(() => {
                this.isInvincible = false;
            }, this.invincibleTime);
        }
        this.lifeCountUI.updateUI(this.hp)
        }
    }

    onDestroy() {
        if (this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
}

