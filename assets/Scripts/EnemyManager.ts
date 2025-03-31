import { _decorator, Component, Node, Prefab, instantiate, randomRangeInt } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EnemyManager')
export class EnemyManager extends Component {
    // 小飞机生成频率,1s一个
    @property
    enemy0Frequency: number = 1
    // 小飞机预制体，从场景中获取。prefab类型必须有
    @property(Prefab)
    enemy0Prefab: Prefab = null;

    // 中飞机生成频率,1s一个
    @property
    enemy1Frequency: number = 2
    // 中飞机预制体，从场景中获取。prefab类型必须有
    @property(Prefab)
    enemy1Prefab: Prefab = null

    // 大飞机生成频率,1s一个
    @property
    enemy2Frequency: number = 5
    // 大飞机预制体，从场景中获取。prefab类型必须有
    @property(Prefab)
    enemy2Prefab: Prefab = null

    
    // 奖励生成速率
    @property
    reward1Frequency: number = 10
    @property
    reward2Frequency: number = 20
    // 奖励预制体，从场景中获取。prefab类型必须有
    @property(Prefab)
    rewardPrefab1: Prefab = null
    @property(Prefab)
    rewardPrefab2: Prefab = null

    start() {
        // 每秒生成一个小飞机,schedule是定时器，最后一个参数是时间间隔，单位是秒
        this.schedule(this.generateEnemy0, this.enemy0Frequency);
        this.schedule(this.generateEnemy1, this.enemy1Frequency);
        this.schedule(this.generateEnemy2, this.enemy2Frequency);
        this.schedule(this.generateReward1, this.reward1Frequency);
        // this.schedule(this.generateReward2, this.reward2Frequency);
    }
    
    update(deltaTime: number) {
        
    }
    protected onDestroy(): void {
        this.unschedule(this.generateEnemy0);
        this.unschedule(this.generateEnemy1);
        this.unschedule(this.generateEnemy2);
        this.unschedule(this.generateReward1);
        // this.unschedule(this.generateReward2);
    }
    // 生成小飞机
    generateEnemy0() {
        this.generateEnemy(this.enemy0Prefab, this.enemy0Frequency, 215, 400);
    }

    // 生成中飞机
    generateEnemy1() {
        this.generateEnemy(this.enemy1Prefab, this.enemy1Frequency, 200, 450);
    }

    // 生成大飞机
    generateEnemy2() {
        this.generateEnemy(this.enemy2Prefab, this.enemy2Frequency, 150, 450);
    }
    // 生成奖励
    generateReward1() {
        this.generateReward(this.rewardPrefab1, this.reward1Frequency, 207, 482);
    }
    // generateReward2() {
    //     this.generateReward(this.rewardPrefab2, this.reward2Frequency, 207, 482);
    // }
    
    // 生成逻辑抽离
    generateEnemy(prefab: Prefab, frequency: number, x: number, y: number) {
        // 实例化小飞机
        const enemy = instantiate(prefab);
        // 添加到场景中,也就是EnemyManager的子节点中
        this.node.addChild(enemy);
        const randomX = randomRangeInt(-x, x);
        enemy.setPosition(randomX, y, 0);
        enemy.active = true;
    }

    generateReward(prefab: Prefab, frequency: number, x: number, y: number) {
        // 随机生成0-2之间的数
        const random = randomRangeInt(0, 2);
        if (random === 0) {
            prefab = this.rewardPrefab1;
        } else {
            prefab = this.rewardPrefab2;
        }

        const reward = instantiate(prefab);
        this.node.addChild(reward);
        const randomX = randomRangeInt(-x, x);
        reward.setPosition(randomX, y, 0);
        reward.active = true;
    }
}

