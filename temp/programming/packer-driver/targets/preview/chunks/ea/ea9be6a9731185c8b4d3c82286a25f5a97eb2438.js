System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, _decorator, Component, Collider2D, Contact2DType, Bullet, GameManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      Bullet = _unresolved_2.Bullet;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a605eq/H7VFfrFkVZEbQBYe", "Enemy", undefined);

      __checkObsolete__(['Animation', '_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("enemy", enemy = (_dec = ccclass('enemy'), _dec2 = property(Animation), _dec3 = property(String), _dec4 = property(String), _dec5 = property(Number), _dec(_class = (_class2 = class enemy extends Component {
        constructor() {
          super(...arguments);

          // 敌机移动速度
          _initializerDefineProperty(this, "speed", _descriptor, this);

          // 爆炸动画
          _initializerDefineProperty(this, "anim", _descriptor2, this);

          // 飞机血量
          _initializerDefineProperty(this, "hpLabel", _descriptor3, this);

          // 碰撞体
          this.collider = null;

          // 两个飞机动画
          _initializerDefineProperty(this, "animHit", _descriptor4, this);

          // 飞机爆炸动画
          _initializerDefineProperty(this, "animDown", _descriptor5, this);

          // 每个飞机的分数
          _initializerDefineProperty(this, "score", _descriptor6, this);
        }

        start() {
          // 播放爆炸动画
          // this.anim.play();
          // 注册单个碰撞体的回调函数
          this.collider = this.getComponent(Collider2D);

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          }
        }

        update(deltaTime) {
          // 敌机向下移动, 如果血量大于0
          if (this.hpLabel > 0) {
            this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime);
          }

          if (this.node.position.y <= -580) {
            this.node.destroy();
          }
        } // 碰撞检测
        // selfCollider: 自身碰撞体
        // otherCollider: 其他碰撞体
        // contact: 碰撞信息


        onBeginContact(selfCollider, otherCollider, contact) {
          // 销毁其他碰撞体，这里需要注意，碰撞体是敌机和敌机也会导致销毁，所以需要分组
          // 如果碰撞体是子弹，则销毁子弹。有可能是player飞机碰撞，所以只能处理player飞机的子弹
          if (otherCollider.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet)) {
            otherCollider.node.destroy();
          }

          this.hpLabel -= 1;

          if (this.hpLabel <= 0) {
            this.anim.play(this.animDown);
            this.collider.enabled = false; // 动画播放完成之后，销毁节点

            this.anim.on(Animation.EventType.FINISHED, () => {
              (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager).getInstance().AddScore(this.score);
              this.node.destroy();
            });
          } else {
            this.anim.play(this.animHit);
          }
        }

        onDestroy() {
          if (this.collider) {
            this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 300;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hpLabel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "animHit", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "animDown", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea9be6a9731185c8b4d3c82286a25f5a97eb2438.js.map