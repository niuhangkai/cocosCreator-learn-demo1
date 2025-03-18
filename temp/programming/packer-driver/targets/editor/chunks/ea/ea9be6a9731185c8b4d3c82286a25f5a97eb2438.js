System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, _decorator, Component, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a605eq/H7VFfrFkVZEbQBYe", "Enemy", undefined);

      __checkObsolete__(['Animation', '_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("enemy", enemy = (_dec = ccclass('enemy'), _dec2 = property(Animation), _dec(_class = (_class2 = class enemy extends Component {
        constructor(...args) {
          super(...args);

          // 敌机移动速度
          _initializerDefineProperty(this, "speed", _descriptor, this);

          // 爆炸动画
          _initializerDefineProperty(this, "anim", _descriptor2, this);
        }

        start() {
          // 播放爆炸动画
          this.anim.play();
        }

        update(deltaTime) {
          // 敌机向下移动
          this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * deltaTime);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 300;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea9be6a9731185c8b4d3c82286a25f5a97eb2438.js.map