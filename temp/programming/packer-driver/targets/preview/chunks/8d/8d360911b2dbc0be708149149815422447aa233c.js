System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, randomRangeInt, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, EnemyManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      randomRangeInt = _cc.randomRangeInt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02397mWCbBGF6x4r2P6Y+QT", "EnemyManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'randomRangeInt']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyManager", EnemyManager = (_dec = ccclass('EnemyManager'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec(_class = (_class2 = class EnemyManager extends Component {
        constructor() {
          super(...arguments);

          // 小飞机生成频率,1s一个
          _initializerDefineProperty(this, "enemy0Frequency", _descriptor, this);

          // 小飞机预制体，从场景中获取。prefab类型必须有
          _initializerDefineProperty(this, "enemy0Prefab", _descriptor2, this);

          // 中飞机生成频率,1s一个
          _initializerDefineProperty(this, "enemy1Frequency", _descriptor3, this);

          // 中飞机预制体，从场景中获取。prefab类型必须有
          _initializerDefineProperty(this, "enemy1Prefab", _descriptor4, this);

          // 大飞机生成频率,1s一个
          _initializerDefineProperty(this, "enemy2Frequency", _descriptor5, this);

          // 大飞机预制体，从场景中获取。prefab类型必须有
          _initializerDefineProperty(this, "enemy2Prefab", _descriptor6, this);

          // 奖励生成速率
          _initializerDefineProperty(this, "reward1Frequency", _descriptor7, this);

          _initializerDefineProperty(this, "reward2Frequency", _descriptor8, this);

          // 奖励预制体，从场景中获取。prefab类型必须有
          _initializerDefineProperty(this, "rewardPrefab1", _descriptor9, this);

          _initializerDefineProperty(this, "rewardPrefab2", _descriptor10, this);
        }

        start() {
          // 每秒生成一个小飞机,schedule是定时器，最后一个参数是时间间隔，单位是秒
          this.schedule(this.generateEnemy0, this.enemy0Frequency);
          this.schedule(this.generateEnemy1, this.enemy1Frequency);
          this.schedule(this.generateEnemy2, this.enemy2Frequency);
          this.schedule(this.generateReward1, this.reward1Frequency); // this.schedule(this.generateReward2, this.reward2Frequency);
        }

        update(deltaTime) {}

        onDestroy() {
          this.unschedule(this.generateEnemy0);
          this.unschedule(this.generateEnemy1);
          this.unschedule(this.generateEnemy2);
          this.unschedule(this.generateReward1); // this.unschedule(this.generateReward2);
        } // 生成小飞机


        generateEnemy0() {
          this.generateEnemy(this.enemy0Prefab, this.enemy0Frequency, 215, 400);
        } // 生成中飞机


        generateEnemy1() {
          this.generateEnemy(this.enemy1Prefab, this.enemy1Frequency, 200, 450);
        } // 生成大飞机


        generateEnemy2() {
          this.generateEnemy(this.enemy2Prefab, this.enemy2Frequency, 150, 450);
        } // 生成奖励


        generateReward1() {
          this.generateReward(this.rewardPrefab1, this.reward1Frequency, 207, 482);
        } // generateReward2() {
        //     this.generateReward(this.rewardPrefab2, this.reward2Frequency, 207, 482);
        // }
        // 生成逻辑抽离


        generateEnemy(prefab, frequency, x, y) {
          // 实例化小飞机
          var enemy = instantiate(prefab); // 添加到场景中,也就是EnemyManager的子节点中

          this.node.addChild(enemy);
          var randomX = randomRangeInt(-x, x);
          enemy.setPosition(randomX, y, 0);
          enemy.active = true;
        }

        generateReward(prefab, frequency, x, y) {
          // 随机生成0-2之间的数
          var random = randomRangeInt(0, 2);

          if (random === 0) {
            prefab = this.rewardPrefab1;
          } else {
            prefab = this.rewardPrefab2;
          }

          var reward = instantiate(prefab);
          this.node.addChild(reward);
          var randomX = randomRangeInt(-x, x);
          reward.setPosition(randomX, y, 0);
          reward.active = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemy0Frequency", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemy0Prefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemy1Frequency", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemy1Prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "enemy2Frequency", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "enemy2Prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "reward1Frequency", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "reward2Frequency", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "rewardPrefab1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "rewardPrefab2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d360911b2dbc0be708149149815422447aa233c.js.map