System.register("chunks:///_virtual/ctrl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,e,r,n,a,s,o,h,c,l,d,_,u,p,m,y,R;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,r=i.initializerDefineProperty,n=i.assertThisInitialized},function(i){a=i.cclegacy,s=i._decorator,o=i.Size,h=i.CCFloat,c=i.SkeletalAnimation,l=i.input,d=i.Input,_=i.KeyCode,u=i.Vec3,p=i.clamp,m=i.size,y=i.v3,R=i.Component}],execute:function(){var v,D,f,b,g,T,E,W,O;a._RF.push({},"d5a8bxiRHRAl7qKvhyfbVq6","ctrl",void 0);var P=s.ccclass,A=s.property,K=function(i){return i[i.UP=1]="UP",i[i.DOWN=2]="DOWN",i[i.LEFT=4]="LEFT",i[i.RIGHT=8]="RIGHT",i}(K||{});i("Ctrl",(v=P("Ctrl"),D=A(o),f=A(h),b=A(c),v((E=t((T=function(i){function t(){for(var t,e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];return t=i.call.apply(i,[this].concat(a))||this,r(t,"range",E,n(t)),r(t,"speed",W,n(t)),r(t,"anim",O,n(t)),t._moveDir=0,t._dir=y(),t}e(t,i);var a=t.prototype;return a.onLoad=function(){l.on(d.EventType.KEY_DOWN,this._handleKey,this),l.on(d.EventType.KEY_UP,this._handleKey,this)},a._handleKey=function(i){var t=0;switch(i.keyCode){case _.ARROW_UP:case _.KEY_W:t=K.UP;break;case _.ARROW_DOWN:case _.KEY_S:t=K.DOWN;break;case _.ARROW_LEFT:case _.KEY_A:t=K.LEFT;break;case _.ARROW_RIGHT:case _.KEY_D:t=K.RIGHT}"keydown"===i.type?this._moveDir|=t:this._moveDir&=~t},a.update=function(){this._moveDir?(this._updatePosition(),this.anim.getState("mixamo.com").isPlaying||this.anim.play("mixamo.com")):this.anim.stop()},a._updatePosition=function(){this._dir.set(0,0,0),this._moveDir&K.UP&&this._dir.add(u.FORWARD),this._moveDir&K.DOWN&&this._dir.subtract(u.FORWARD),this._moveDir&K.LEFT&&this._dir.subtract(u.RIGHT),this._moveDir&K.RIGHT&&this._dir.add(u.RIGHT),this._dir.normalize(),this._dir.multiplyScalar(this.speed).add(this.node.position),this.node.lookAt(this._dir),this._dir.x=p(this._dir.x,-this.range.width/2,this.range.width/2),this._dir.z=p(this._dir.z,-this.range.height/2,this.range.height/2),this.node.setPosition(this._dir)},t}(R)).prototype,"range",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return m(8,8)}}),W=t(T.prototype,"speed",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.05}}),O=t(T.prototype,"anim",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=T))||g));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./ctrl.ts","./main.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/main.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,i,o,n,a,u,l,c,s,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,u=t.RenderTexture,l=t.Camera,c=t.Material,s=t.gfx,p=t.Component}],execute:function(){var f,h,b,d,m,g,y,T,v;n._RF.push({},"6638aXjxh9JtozrpjFJZpor","main",void 0);var P=a.ccclass,R=a.property;t("Main",(f=P("Main"),h=R({type:[u]}),b=R(l),d=R(c),f((y=e((g=function(t){function e(){var e;return e=t.call(this)||this,i(e,"doubleRT",y,o(e)),i(e,"footPrintCam",T,o(e)),i(e,"footPrintMat",v,o(e)),s.deviceManager.gfxDevice._swapchainFormat=s.Format.RGBA16F,e.doubleRT.forEach((function(t){return t.reset({width:t.width,height:t.height})})),e}r(e,t);var n=e.prototype;return n.update=function(){this._swap()},n._swap=function(){var t=this.footPrintCam.targetTexture===this.doubleRT[0]?[1,0]:[0,1],e=t[0],r=t[1];this.footPrintCam.targetTexture=this.doubleRT[e],this.footPrintMat.setProperty("mainTexture",this.doubleRT[r])},e}(p)).prototype,"doubleRT",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),T=e(g.prototype,"footPrintCam",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=e(g.prototype,"footPrintMat",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=g))||m));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});