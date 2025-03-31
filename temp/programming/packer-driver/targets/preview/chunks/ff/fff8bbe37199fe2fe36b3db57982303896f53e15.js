System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, instantiate, _decorator, Component, Node, Vec3, Collider2D, Contact2DType, Animation, Enum, Reward, RewardType, GameManager, LifeCount, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, ShootType, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReward(extras) {
    _reporterNs.report("Reward", "./Reward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRewardType(extras) {
    _reporterNs.report("RewardType", "./Reward", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLifeCount(extras) {
    _reporterNs.report("LifeCount", "./LifeCount", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Animation = _cc.Animation;
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      Reward = _unresolved_2.Reward;
      RewardType = _unresolved_2.RewardType;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      LifeCount = _unresolved_4.LifeCount;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc16eyXe7RNfpE68Fsj/k+x", "Player", undefined);

      __checkObsolete__(['Prefab', 'instantiate', '_decorator', 'Component', 'Node', 'EventTouch', 'Vec3', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'Animation', 'Enum', 'game']);

      ({
        ccclass,
        property
      } = _decorator);

      ShootType = /*#__PURE__*/function (ShootType) {
        ShootType[ShootType["Single"] = 0] = "Single";
        ShootType[ShootType["Double"] = 1] = "Double";
        ShootType[ShootType["Triple"] = 2] = "Triple";
        return ShootType;
      }(ShootType || {});

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property({
        type: Enum(ShootType)
      }), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Number), _dec10 = property(Animation), _dec11 = property(String), _dec12 = property(String), _dec13 = property(_crd && LifeCount === void 0 ? (_reportPossibleCrUseOfLifeCount({
        error: Error()
      }), LifeCount) : LifeCount), _dec(_class = (_class2 = class Player extends Component {
        constructor() {
          super(...arguments);

          // 子弹部分
          _initializerDefineProperty(this, "frequency", _descriptor, this);

          // 射击计时器
          this.shootTimer = 0;

          // 获取到子弹预制体，这里需要在编辑中，拖拽预制体到这个属性，并且在下面update中实例化
          _initializerDefineProperty(this, "bulletPrefab", _descriptor2, this);

          // 子弹的父节点，子弹会添加到这个节点下
          _initializerDefineProperty(this, "bulletParent", _descriptor3, this);

          // 子弹的初始位置
          _initializerDefineProperty(this, "bulletInitPos", _descriptor4, this);

          // 射击类型
          _initializerDefineProperty(this, "shootType", _descriptor5, this);

          // 第二种子弹的prefab
          _initializerDefineProperty(this, "bulletPrefab2", _descriptor6, this);

          // 第二种两个子弹的初始位置
          _initializerDefineProperty(this, "bulletInitPos2", _descriptor7, this);

          _initializerDefineProperty(this, "bulletInitPos3", _descriptor8, this);

          // 碰撞体
          this.collider = null;

          // 血量为3
          _initializerDefineProperty(this, "hp", _descriptor9, this);

          // 爆炸动画
          _initializerDefineProperty(this, "anim", _descriptor10, this);

          // 两个主角飞机动画
          _initializerDefineProperty(this, "animHit", _descriptor11, this);

          // 飞机爆炸动画
          _initializerDefineProperty(this, "animDown", _descriptor12, this);

          // 主角无敌时间
          this.invincibleTime = 1;
          this.isInvincible = false;

          // 生命计数器
          _initializerDefineProperty(this, "lifeCountUI", _descriptor13, this);
        }

        start() {
          this.lifeCountUI.updateUI(this.hp); // 注册单个碰撞体的回调函数

          this.collider = this.getComponent(Collider2D);

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        } // 绑定touchmove事件
        // onLoad 是 cocos 的钩子函数，在节点加载时调用


        onLoad() {
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }

        update(deltaTime) {
          switch (this.shootType) {
            case ShootType.Single:
              // 0
              this.singleShoot(deltaTime);
              break;

            case ShootType.Double:
              // 1
              this.doubleShoot(deltaTime);
              break;

            case ShootType.Triple:
              // 2
              this.singleShoot(deltaTime);
              this.doubleShoot(deltaTime);
              break;
          }
        } // 单发射击


        singleShoot(deltaTime) {
          // deltaTime 是时间间隔,每帧调用一次,每次时间间隔大概0.016秒
          this.shootTimer += deltaTime; // 如果shootTime大于等于frequency，则发射子弹

          if (this.shootTimer >= this.frequency) {
            // 计时器清零
            this.shootTimer = 0; // 实例化子弹
            // instantiate 是 cocos 的实例化函数

            var bullet1 = instantiate(this.bulletPrefab); // 添加到场景中

            this.bulletParent.addChild(bullet1); // 设置子弹位置

            bullet1.setWorldPosition(this.bulletInitPos.worldPosition);
          }
        } // 双发射击


        doubleShoot(deltaTime) {
          // deltaTime 是时间间隔,每帧调用一次,每次时间间隔大概0.016秒
          this.shootTimer += deltaTime; // 如果shootTime大于等于frequency，则发射子弹

          if (this.shootTimer >= this.frequency) {
            // 计时器清零
            this.shootTimer = 0; // 实例化子弹
            // instantiate 是 cocos 的实例化函数

            var bullet1 = instantiate(this.bulletPrefab2);
            var bullet2 = instantiate(this.bulletPrefab2); // 添加到场景中

            this.bulletParent.addChild(bullet1);
            this.bulletParent.addChild(bullet2); // 设置子弹位置

            bullet1.setWorldPosition(this.bulletInitPos2.worldPosition);
            bullet2.setWorldPosition(this.bulletInitPos3.worldPosition);
          }
        } // 触摸移动事件


        onTouchMove(event) {
          // 如果游戏暂停，则不进行移动       
          // if (game.isPaused) {
          //     return;
          // }
          if (this.hp <= 0) {
            return;
          } // 跟随鼠标移动


          var p = this.node.position; // Vec3 是 cocos 的向量类

          var targetPos = new Vec3(p.x + event.getDeltaX(), p.y + event.getDeltaY(), p.z); // 限制移动范围

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

        onBeginContact(selfCollider, otherCollider, contact) {
          console.log('碰撞事件'); // 判断是不是奖励

          var reward = otherCollider.getComponent(_crd && Reward === void 0 ? (_reportPossibleCrUseOfReward({
            error: Error()
          }), Reward) : Reward);

          if (reward) {
            // 判断奖励类型
            if (reward.rewardType === (_crd && RewardType === void 0 ? (_reportPossibleCrUseOfRewardType({
              error: Error()
            }), RewardType) : RewardType).TwoShoot) {
              this.shootType = ShootType.Double;
              this.scheduleOnce(() => {
                this.shootType = ShootType.Single;
              }, 5);
            } else if (reward.rewardType === (_crd && RewardType === void 0 ? (_reportPossibleCrUseOfRewardType({
              error: Error()
            }), RewardType) : RewardType).Bomb) {
              (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().AddBombCount();
              otherCollider.node.destroy(); // this.shootType = ShootType.Triple;
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
              this.anim.play(this.animDown);
              this.anim.on(Animation.EventType.FINISHED, () => {
                // this.collider.enabled = false;
                this.node.destroy();
              });
            } else {
              this.anim.play(this.animHit); // 主角无敌时间

              this.scheduleOnce(() => {
                this.isInvincible = false;
              }, this.invincibleTime);
            }

            this.lifeCountUI.updateUI(this.hp);
          }
        }

        onDestroy() {
          if (this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "frequency", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bulletParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bulletInitPos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "shootType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ShootType.Single;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bulletInitPos2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bulletInitPos3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "hp", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "animHit", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "animDown", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lifeCountUI", [_dec13], {
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
//# sourceMappingURL=fff8bbe37199fe2fe36b3db57982303896f53e15.js.map