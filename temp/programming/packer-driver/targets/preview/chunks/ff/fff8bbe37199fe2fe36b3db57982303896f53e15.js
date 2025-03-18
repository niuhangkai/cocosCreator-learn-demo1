System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, instantiate, _decorator, Component, Node, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, ShootType, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc16eyXe7RNfpE68Fsj/k+x", "Player", undefined);

      __checkObsolete__(['Prefab', 'instantiate', '_decorator', 'Component', 'Node', 'EventTouch', 'Vec3']);

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

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ShootType), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = class Player extends Component {
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
        }

        // 绑定touchmove事件
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

            this.bulletParent.addChild(bullet1);
            console.log(this.bulletParent, 'this.bulletParent', this.bulletInitPos.worldPosition, 'this.bulletInitPos'); // 设置子弹位置

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
          console.log('触摸移动事件'); // 跟随鼠标移动

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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fff8bbe37199fe2fe36b3db57982303896f53e15.js.map