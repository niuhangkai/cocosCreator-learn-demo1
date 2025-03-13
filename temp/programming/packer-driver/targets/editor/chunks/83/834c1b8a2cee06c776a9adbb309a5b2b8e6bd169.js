System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Bg;

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
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1160dodfBJJr7igFAHfC6rL", "Bg", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bg", Bg = (_dec = ccclass('Bg'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class Bg extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg01", _descriptor, this);

          _initializerDefineProperty(this, "bg02", _descriptor2, this);

          this.speed = 100;
        }

        // start() 方法是在组件被激活后执行的方法，通常用于初始化组件的状态。
        start() {
          console.log("start-Bg-scene");
        } // update() 方法是每帧更新时执行的方法，用于更新游戏对象的状态。deltaTime 参数表示自上一帧以来经过的时间（以秒为单位）。


        update(deltaTime) {
          const position1 = this.bg01.getPosition();
          console.log("update-Bg-scene122111", deltaTime, position1.x);
          this.bg01.setPosition(position1.x, position1.y - this.speed * deltaTime
          /** 速度*时间 */
          , position1.z);
          const position2 = this.bg02.getPosition();
          this.bg02.setPosition(position2.x, position2.y - this.speed * deltaTime, position2.z);

          if (this.bg01.position.y <= -850) {
            this.bg01.setPosition(position1.x, position2.y + 850, 0);
          }

          if (this.bg02.position.y <= -850) {
            this.bg02.setPosition(position2.x, position1.y + 850, 0);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg01", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg02", [_dec3], {
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
//# sourceMappingURL=834c1b8a2cee06c776a9adbb309a5b2b8e6bd169.js.map