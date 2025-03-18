import {Prefab, instantiate, _decorator, Component, Node, EventTouch, Vec3 } from 'cc';
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
    @property(ShootType)
    shootType: ShootType = ShootType.Single;

    // 第二种子弹的prefab
    @property(Prefab)
    bulletPrefab2: Prefab = null;

    // 第二种两个子弹的初始位置
    @property(Node)
    bulletInitPos2: Node = null;
    @property(Node)
    bulletInitPos3: Node = null;




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
            console.log(this.bulletParent, 'this.bulletParent',this.bulletInitPos.worldPosition, 'this.bulletInitPos')
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
        console.log('触摸移动事件');
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
}

