System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, game, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, GameManager;

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
      game = _cc.game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3fccaGd9HlKz7HN7nG5Oe8c", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'game', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(Number), _dec3 = property(Number), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_class3 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          // 当前炸弹数量
          _initializerDefineProperty(this, "bombCount", _descriptor, this);

          // 分数
          _initializerDefineProperty(this, "score", _descriptor2, this);

          // 按钮状态
          _initializerDefineProperty(this, "pauseButton", _descriptor3, this);

          _initializerDefineProperty(this, "resumeButton", _descriptor4, this);
        }

        static getInstance() {
          if (!this.instance) {
            this.instance = new GameManager();
          }

          return this.instance;
        }

        onLoad() {
          GameManager.instance = this;
        }

        update(deltaTime) {}

        AddBombCount() {
          this.bombCount += 1;
          this.node.emit('AddBombCount', this.bombCount);
        }

        AddScore(score) {
          this.score += score;
          this.node.emit('AddScore', this.score);
        }

        onPauseGame() {
          // director.pause()和game.pause()的区别
          // director.pause();
          this.pauseButton.active = false;
          this.resumeButton.active = true; // 延迟一帧

          setTimeout(() => {
            game.pause();
          }, 100);
        }

        onResumeGame() {
          this.pauseButton.active = true;
          this.resumeButton.active = false;
          game.resume();
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bombCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pauseButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "resumeButton", [_dec5], {
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
//# sourceMappingURL=07943ca28e1c03af484eede2dfe42ec1e9114cb0.js.map