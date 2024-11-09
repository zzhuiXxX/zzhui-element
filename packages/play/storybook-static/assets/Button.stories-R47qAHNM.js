import{f as Ct,w as H,u as l,e as d,c as g}from"./index-B9uFzlPP.js";import{s as gt,o as ft,a as Tt,B as V}from"./index-Y-HwIfvd.js";import{d as yt,u as Bt,B as wt,b as xt,e as T,o as j,f as K,n as kt,E as St,H as Ot,A as Et,r as $t,I,s as It,p as A,g as Pt,x as jt,m as X,l as Y}from"./vue.esm-bundler-DLBXQljg.js";const ht=Symbol("BUTTON_GROUP_CTX_KEY"),At=gt(yt({name:"ZzButton",__name:"Button",props:{tag:{default:"button"},type:{},size:{},nativeType:{default:"button"},disabled:{type:Boolean},loading:{type:Boolean},icon:{},circle:{type:Boolean},plain:{type:Boolean},round:{type:Boolean},loadingIcon:{},autofocus:{type:Boolean},useThrottle:{type:Boolean,default:!0},throttleDuration:{default:1e3}},emits:["click"],setup(t,{expose:e,emit:n}){const a=t,o=n,s=Bt(),i=wt(ht,void 0),u=xt(),c=T(()=>(i==null?void 0:i.type)??(a==null?void 0:a.type)??""),p=T(()=>(i==null?void 0:i.size)??(a==null?void 0:a.size)??""),h=T(()=>(i==null?void 0:i.disabled)||(a==null?void 0:a.disabled)||!1),R=T(()=>({marginRight:s.default&&Array.isArray(s.default())&&s.default().length>0&&s.default()[0].children?"8px":"0px"})),F=r=>o("click",r),zt=Tt(F,a.throttleDuration,{trailing:!1});return e({ref:u,size:p,type:c,disabled:h}),(r,W)=>(j(),K(Ot(r.tag),{ref_key:"_ref",ref:u,class:kt(["er-button",{[`er-button--${c.value}`]:c.value,[`er-button--${p.value}`]:p.value,"is-plain":r.plain,"is-round":r.round,"is-circle":r.circle,"is-disabled":h.value,"is-loading":r.loading}]),autofocus:r.autofocus,type:r.tag==="button"?r.nativeType:void 0,disabled:!(!h.value&&!r.loading)||void 0,onClick:W[0]||(W[0]=U=>r.useThrottle?St(zt)(U):F(U))},{default:Pt(()=>[r.loading?A(r.$slots,"loading",{key:0},()=>[jt(V,{class:"loading-icon",icon:r.loadingIcon??"spinner",style:X(R.value),size:"1x",spin:""},null,8,["icon","style"])],!0):Y("",!0),r.icon&&!r.loading?(j(),K(V,{key:1,icon:r.icon,style:X(R.value),size:"1x"},null,8,["icon","style"])):Y("",!0),A(r.$slots,"default",{},void 0,!0)]),_:3},8,["autofocus","type","disabled","class"]))}}),[["__scopeId","data-v-6a6d9de9"]]),Ht={class:"er-button-group"},Dt=gt(yt({name:"ZzButtonGroup",__name:"ButtonGroup",props:{size:{},type:{},disabled:{type:Boolean}},setup(t){const e=t;return Et(ht,$t({size:I(e,"size"),type:I(e,"type"),disabled:I(e,"disabled")})),(n,a)=>(j(),It("div",Ht,[A(n.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-81dc8650"]]),C=ft(At),Mt=ft(Dt);var Nt=typeof global=="object"&&global&&global.Object===Object&&global,Zt=typeof self=="object"&&self&&self.Object===Object&&self,D=Nt||Zt||Function("return this")(),v=D.Symbol,bt=Object.prototype,Gt=bt.hasOwnProperty,Rt=bt.toString,_=v?v.toStringTag:void 0;function Ft(t){var e=Gt.call(t,_),n=t[_];try{t[_]=void 0;var a=!0}catch{}var o=Rt.call(t);return a&&(e?t[_]=n:delete t[_]),o}var Wt=Object.prototype,Ut=Wt.toString;function Vt(t){return Ut.call(t)}var Kt="[object Null]",Xt="[object Undefined]",L=v?v.toStringTag:void 0;function vt(t){return t==null?t===void 0?Xt:Kt:L&&L in Object(t)?Ft(t):Vt(t)}function Yt(t){return t!=null&&typeof t=="object"}var Lt="[object Symbol]";function M(t){return typeof t=="symbol"||Yt(t)&&vt(t)==Lt}function qt(t,e){for(var n=-1,a=t==null?0:t.length,o=Array(a);++n<a;)o[n]=e(t[n],n,t);return o}var N=Array.isArray,Jt=1/0,q=v?v.prototype:void 0,J=q?q.toString:void 0;function mt(t){if(typeof t=="string")return t;if(N(t))return qt(t,mt)+"";if(M(t))return J?J.call(t):"";var e=t+"";return e=="0"&&1/t==-Jt?"-0":e}function S(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Qt="[object AsyncFunction]",te="[object Function]",ee="[object GeneratorFunction]",ne="[object Proxy]";function ae(t){if(!S(t))return!1;var e=vt(t);return e==te||e==ee||e==Qt||e==ne}var P=D["__core-js_shared__"],Q=function(){var t=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function oe(t){return!!Q&&Q in t}var re=Function.prototype,se=re.toString;function ie(t){if(t!=null){try{return se.call(t)}catch{}try{return t+""}catch{}}return""}var ce=/[\\^$.*+?()[\]{}|]/g,le=/^\[object .+?Constructor\]$/,ue=Function.prototype,pe=Object.prototype,de=ue.toString,ge=pe.hasOwnProperty,fe=RegExp("^"+de.call(ge).replace(ce,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ye(t){if(!S(t)||oe(t))return!1;var e=ae(t)?fe:le;return e.test(ie(t))}function he(t,e){return t==null?void 0:t[e]}function Z(t,e){var n=he(t,e);return ye(n)?n:void 0}var tt=function(){try{var t=Z(Object,"defineProperty");return t({},"",{}),t}catch{}}(),be=9007199254740991,ve=/^(?:0|[1-9]\d*)$/;function me(t,e){var n=typeof t;return e=e??be,!!e&&(n=="number"||n!="symbol"&&ve.test(t))&&t>-1&&t%1==0&&t<e}function _e(t,e,n){e=="__proto__"&&tt?tt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function _t(t,e){return t===e||t!==t&&e!==e}var ze=Object.prototype,Ce=ze.hasOwnProperty;function Te(t,e,n){var a=t[e];(!(Ce.call(t,e)&&_t(a,n))||n===void 0&&!(e in t))&&_e(t,e,n)}var Be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,we=/^\w*$/;function xe(t,e){if(N(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||M(t)?!0:we.test(t)||!Be.test(t)||e!=null&&t in Object(e)}var z=Z(Object,"create");function ke(){this.__data__=z?z(null):{},this.size=0}function Se(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Oe="__lodash_hash_undefined__",Ee=Object.prototype,$e=Ee.hasOwnProperty;function Ie(t){var e=this.__data__;if(z){var n=e[t];return n===Oe?void 0:n}return $e.call(e,t)?e[t]:void 0}var Pe=Object.prototype,je=Pe.hasOwnProperty;function Ae(t){var e=this.__data__;return z?e[t]!==void 0:je.call(e,t)}var He="__lodash_hash_undefined__";function De(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=z&&e===void 0?He:e,this}function f(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}f.prototype.clear=ke;f.prototype.delete=Se;f.prototype.get=Ie;f.prototype.has=Ae;f.prototype.set=De;function Me(){this.__data__=[],this.size=0}function O(t,e){for(var n=t.length;n--;)if(_t(t[n][0],e))return n;return-1}var Ne=Array.prototype,Ze=Ne.splice;function Ge(t){var e=this.__data__,n=O(e,t);if(n<0)return!1;var a=e.length-1;return n==a?e.pop():Ze.call(e,n,1),--this.size,!0}function Re(t){var e=this.__data__,n=O(e,t);return n<0?void 0:e[n][1]}function Fe(t){return O(this.__data__,t)>-1}function We(t,e){var n=this.__data__,a=O(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}function m(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}m.prototype.clear=Me;m.prototype.delete=Ge;m.prototype.get=Re;m.prototype.has=Fe;m.prototype.set=We;var Ue=Z(D,"Map");function Ve(){this.size=0,this.__data__={hash:new f,map:new(Ue||m),string:new f}}function Ke(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function E(t,e){var n=t.__data__;return Ke(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Xe(t){var e=E(this,t).delete(t);return this.size-=e?1:0,e}function Ye(t){return E(this,t).get(t)}function Le(t){return E(this,t).has(t)}function qe(t,e){var n=E(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}function y(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var a=t[e];this.set(a[0],a[1])}}y.prototype.clear=Ve;y.prototype.delete=Xe;y.prototype.get=Ye;y.prototype.has=Le;y.prototype.set=qe;var Je="Expected a function";function G(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Je);var n=function(){var a=arguments,o=e?e.apply(this,a):a[0],s=n.cache;if(s.has(o))return s.get(o);var i=t.apply(this,a);return n.cache=s.set(o,i)||s,i};return n.cache=new(G.Cache||y),n}G.Cache=y;var Qe=500;function tn(t){var e=G(t,function(a){return n.size===Qe&&n.clear(),a}),n=e.cache;return e}var en=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nn=/\\(\\)?/g,an=tn(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(en,function(n,a,o,s){e.push(o?s.replace(nn,"$1"):a||n)}),e});function on(t){return t==null?"":mt(t)}function rn(t,e){return N(t)?t:xe(t,e)?[t]:an(on(t))}var sn=1/0;function cn(t){if(typeof t=="string"||M(t))return t;var e=t+"";return e=="0"&&1/t==-sn?"-0":e}function ln(t,e,n,a){if(!S(t))return t;e=rn(e,t);for(var o=-1,s=e.length,i=s-1,u=t;u!=null&&++o<s;){var c=cn(e[o]),p=n;if(c==="__proto__"||c==="constructor"||c==="prototype")return t;if(o!=i){var h=u[c];p=void 0,p===void 0&&(p=S(h)?h:me(e[o+1])?[]:{})}Te(u,c,p),u=u[c]}return t}function b(t,e,n){return t==null?t:ln(t,e,n)}const gn={title:"Example/Button",component:C,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},size:{control:{type:"select"},options:["large","default","small",""]},disabled:{control:"boolean"},loading:{control:"boolean"},useThrottle:{control:"boolean"},throttleDuration:{control:"number"},autofocus:{control:"boolean"},tag:{control:{type:"select"},options:["button","a","div"]},nativeType:{control:{type:"select"},options:["button","submit","reset",""]},icon:{control:{type:"text"}},loadingIcon:{control:{type:"text"}}},args:{onClick:Ct()}},$=t=>`
<div style="margin: 5px">
  ${t}
</div>
`,B={argTypes:{content:{control:{type:"text"}}},args:{type:"primary",content:"default-button",round:!0,icon:"search"},render:t=>({components:{ZzButton:C},setup(){return{args:t}},template:$('<zz-button data-testid="story-test-btn" v-bind="args">{{args.content}}</zz-button>')}),play:async({canvasElement:t,args:e,step:n})=>{const a=H(t),o=a.getByTestId("story-test-btn");await n("When useThrottle is set to true, the onClick should be called once",async()=>{b(e,"useThrottle",!0),await l.tripleClick(o),d(e.onClick).toHaveBeenCalledOnce(),g()}),await n("When useThrottle is set to false, the onClick should be called  three time",async()=>{b(e,"useThrottle",!1),await l.tripleClick(o),d(e.onClick).toHaveBeenCalledTimes(3),g()}),await n("When disabled is set to true, the onClick should not be called",async()=>{b(e,"disabled",!0),await l.click(o),d(e.onClick).toHaveBeenCalledTimes(0),b(e,"disabled",!1),g()}),await n("When loading is set to true, the onClick should not be called",async()=>{b(e,"loading",!0),await l.click(o),d(e.onClick).toHaveBeenCalledTimes(0),b(e,"loading",!1),g()}),await n("click btn",async()=>{await l.click(a.getByRole("button")),d(e.onClick).toHaveBeenCalled(),g()})}},w={argTypes:{content:{control:{type:"text"}}},args:{content:"focus-button",autofocus:!0},render:t=>({components:{ZzButton:C},setup(){return{args:t}},template:$(`
      <h3>点击浏览器的刷新页面来获取按钮聚焦</h3>
      <zz-button data-testid="story-test-btn" v-bind="args">{{args.content}}</zz-button>`)}),play:async({args:t})=>{await l.keyboard("{enter}"),d(t.onClick).toHaveBeenCalled(),g()}},x={argTypes:{content:{control:{type:"text"}}},args:{icon:"search",circle:!0,type:"primary"},render:t=>({components:{ZzButton:C},setup(){return{args:t}},template:$('<zz-button v-bind="args" />')}),play:async({canvasElement:t,args:e,step:n})=>{const a=H(t);await n("click btn",async()=>{await l.click(a.getByRole("button")),d(e.onClick).toHaveBeenCalled(),g()})}},k={argTypes:{groupType:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},groupSize:{control:{type:"select"},options:["large","default","small",""]},groupDisabled:{control:"boolean"},content1:{control:{type:"text"},defaultValue:"Button1"},content2:{control:{type:"text"},defaultValue:"Button2"}},args:{round:!0,content1:"Button1",content2:"Button2",content3:"Button3"},render:t=>({components:{ZzButton:C,ZzButtonGroup:Mt},setup(){return{args:t}},template:$(`
       <zz-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <zz-button v-bind="args">{{args.content1}}</zz-button>
         <zz-button v-bind="args">{{args.content2}}</zz-button>
         <zz-button v-bind="args">{{args.content3}}</zz-button>
       </zz-button-group>
    `)}),play:async({canvasElement:t,args:e,step:n})=>{const a=H(t);await n("click btn1",async()=>{await l.click(a.getByText("Button1"))}),await n("click btn2",async()=>{await l.click(a.getByText("Button2"))}),d(e.onClick).toHaveBeenCalled()}};var et,nt,at;B.parameters={...B.parameters,docs:{...(et=B.parameters)==null?void 0:et.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    type: "primary",
    content: "default-button",
    round: true,
    icon: "search"
  },
  render: args => ({
    components: {
      ZzButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`<zz-button data-testid="story-test-btn" v-bind="args">{{args.content}}</zz-button>\`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByTestId("story-test-btn");
    await step("When useThrottle is set to true, the onClick should be called once", async () => {
      set(args, "useThrottle", true);
      await userEvent.tripleClick(btn);
      expect(args.onClick).toHaveBeenCalledOnce();
      clearAllMocks();
    });
    await step("When useThrottle is set to false, the onClick should be called  three time", async () => {
      set(args, "useThrottle", false);
      await userEvent.tripleClick(btn);
      expect(args.onClick).toHaveBeenCalledTimes(3);
      clearAllMocks();
    });
    await step("When disabled is set to true, the onClick should not be called", async () => {
      set(args, "disabled", true);
      await userEvent.click(btn);
      expect(args.onClick).toHaveBeenCalledTimes(0);
      set(args, "disabled", false);
      clearAllMocks();
    });
    await step("When loading is set to true, the onClick should not be called", async () => {
      set(args, "loading", true);
      await userEvent.click(btn);
      expect(args.onClick).toHaveBeenCalledTimes(0);
      set(args, "loading", false);
      clearAllMocks();
    });
    await step("click btn", async () => {
      await userEvent.click(canvas.getByRole("button"));
      expect(args.onClick).toHaveBeenCalled();
      clearAllMocks();
    });
  }
}`,...(at=(nt=B.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,rt,st;w.parameters={...w.parameters,docs:{...(ot=w.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    content: "focus-button",
    autofocus: true
  },
  render: args => ({
    components: {
      ZzButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
      <h3>点击浏览器的刷新页面来获取按钮聚焦</h3>
      <zz-button data-testid="story-test-btn" v-bind="args">{{args.content}}</zz-button>\`)
  }),
  play: async ({
    args
  }) => {
    await userEvent.keyboard("{enter}");
    expect(args.onClick).toHaveBeenCalled();
    clearAllMocks();
  }
}`,...(st=(rt=w.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ct,lt;x.parameters={...x.parameters,docs:{...(it=x.parameters)==null?void 0:it.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    icon: "search",
    circle: true,
    type: "primary"
  },
  render: args => ({
    components: {
      ZzButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`<zz-button v-bind="args" />\`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click btn", async () => {
      await userEvent.click(canvas.getByRole("button"));
      expect(args.onClick).toHaveBeenCalled();
      clearAllMocks();
    });
  }
}`,...(lt=(ct=x.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var ut,pt,dt;k.parameters={...k.parameters,docs:{...(ut=k.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  argTypes: {
    groupType: {
      control: {
        type: "select"
      },
      options: ["primary", "success", "warning", "danger", "info", ""]
    },
    groupSize: {
      control: {
        type: "select"
      },
      options: ["large", "default", "small", ""]
    },
    groupDisabled: {
      control: "boolean"
    },
    content1: {
      control: {
        type: "text"
      },
      defaultValue: "Button1"
    },
    content2: {
      control: {
        type: "text"
      },
      defaultValue: "Button2"
    }
  },
  args: {
    round: true,
    content1: "Button1",
    content2: "Button2",
    content3: "Button3"
  },
  render: args => ({
    components: {
      ZzButton,
      ZzButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
       <zz-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <zz-button v-bind="args">{{args.content1}}</zz-button>
         <zz-button v-bind="args">{{args.content2}}</zz-button>
         <zz-button v-bind="args">{{args.content3}}</zz-button>
       </zz-button-group>
    \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click btn1", async () => {
      await userEvent.click(canvas.getByText("Button1"));
    });
    await step("click btn2", async () => {
      await userEvent.click(canvas.getByText("Button2"));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(dt=(pt=k.parameters)==null?void 0:pt.docs)==null?void 0:dt.source}}};const fn=["Default","Autofocus","Circle","Group"];export{w as Autofocus,x as Circle,B as Default,k as Group,fn as __namedExportsOrder,gn as default};
