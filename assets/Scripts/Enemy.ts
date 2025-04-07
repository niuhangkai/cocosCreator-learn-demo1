import { Animation, _decorator, Component, Node, Collider2D, Contact2DType, IPhysics2DContact, AudioClip } from 'cc';
import { Bullet } from './Bullet';
import { GameManager } from './GameManager';
import { EnemyManager } from './EnemyManager';
import { AudioMgr } from './AudioMgr';
const { ccclass, property } = _decorator;

@ccclass('enemy')
export class enemy extends Component {
    // 敌机移动速度
    @property
    speed: number = 300;

    // 爆炸动画
    @property(Animation)
    anim: Animation = null;

    // 飞机血量
    @property
    hpLabel: number = 1;

    // 碰撞体
    collider: Collider2D = null;

    // 两个飞机动画
    @property(String)
    animHit: string = '';

    // 飞机爆炸动画
    @property(String)
    animDown: string = '';

    // 每个飞机的分数
    @property(Number)
    score: number = 100;

    // 敌机爆炸音效
    @property(AudioClip)
    enemyDownAudio: AudioClip = null;

    // 敌机Manager
    // @property(EnemyManager)
    // enemyManager: EnemyManager = null;

    start() {
        // 播放爆炸动画
        // this.anim.play();
        // 注册单个碰撞体的回调函数
        this.collider = this.getComponent(Collider2D);
        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }


    }

    update(deltaTime: number) {
        // 敌机向下移动, 如果血量大于0
        if (this.hpLabel > 0) {
            this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime);
        }
        if (this.node.position.y <= -580) {
            this.node.destroy();
        }
    }

    // 碰撞检测
    // selfCollider: 自身碰撞体
    // otherCollider: 其他碰撞体
    // contact: 碰撞信息
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 销毁其他碰撞体，这里需要注意，碰撞体是敌机和敌机也会导致销毁，所以需要分组

        // 如果碰撞体是子弹，则销毁子弹。有可能是player飞机碰撞，所以只能处理player飞机的子弹
        if (otherCollider.getComponent(Bullet)) {
            otherCollider.node.destroy()
        }
        this.hpLabel-=1
        if (this.hpLabel <= 0) {
            this.anim.play(this.animDown)
            this.collider.enabled = false;  

            AudioMgr.inst.playOneShot(this.enemyDownAudio, 0.2) 
            // 动画播放完成之后，销毁节点
            this.anim.on(Animation.EventType.FINISHED, () => {
                GameManager.getInstance().AddScore(this.score);
                // EnemyManager.getInstance().removeEnemy.call(EnemyManager.getInstance(), this.node)
                this.node.destroy();
             
             
            });
        } else {
            this.anim.play(this.animHit)
        }
    }

    onDestroy() {
        if (this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        // 销毁后从EnemyManager的enemyArray中移除
        EnemyManager.getInstance().removeEnemy(this.node)
    }
    // 销毁当前敌机

    killNow() {
        this.anim.play(this.animDown)   
        this.collider.enabled = false;  
        // 动画播放完成之后，销毁节点
        this.anim.on(Animation.EventType.FINISHED, () => {
            GameManager.getInstance().AddScore(this.score);
            this.node.destroy();
         
        });
    }
}

