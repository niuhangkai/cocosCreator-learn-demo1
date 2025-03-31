System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RewardType, Reward;

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
      Enum = _cc.Enum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd32dWlUsVD5IrOJw23ffLO", "Reward", undefined);

      __checkObsolete__(['Animation', '_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'Enum']);

      ({
        ccclass,
        property
      } = _decorator); // 奖励类型

      _export("RewardType", RewardType = /*#__PURE__*/function (RewardType) {
        RewardType[RewardType["TwoShoot"] = 0] = "TwoShoot";
        RewardType[RewardType["Bomb"] = 1] = "Bomb";
        return RewardType;
      }({}));

      _export("Reward", Reward = (_dec = ccclass('Reward'), _dec2 = property({
        type: Enum(RewardType)
      }), _dec(_class = (_class2 = class Reward extends Component {
        constructor(...args) {
          super(...args);

          // 移动速度
          _initializerDefineProperty(this, "speed", _descriptor, this);

          // 奖励类型
          _initializerDefineProperty(this, "rewardType", _descriptor2, this);
        }

        start() {}

        update(deltaTime) {
          this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime);

          if (this.node.position.y <= -580) {
            this.node.destroy();
          }
        } // 碰撞检测
        // selfCollider: 自身碰撞体
        // otherCollider: 其他碰撞体
        // contact: 碰撞信息


        onBeginContact(selfCollider, otherCollider, contact) {}

        onDestroy() {// if (this.collider) {
          //     this.collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          // }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 300;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rewardType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return RewardType.TwoShoot;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=27c51b58c6fa2bcddc158df8f868e24b7a0d9759.js.map