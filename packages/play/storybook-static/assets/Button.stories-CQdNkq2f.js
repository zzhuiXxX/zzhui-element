import{f as Ct,w as A,u as l,e as p,c as g}from"./index-B9uFzlPP.js";import{r as gt,s as ft,a as Tt,B as V}from"./index-CHISG3F-.js";import{d as yt,C as Bt,j as wt,b as kt,k as T,o as j,D as K,n as xt,u as St,E as Ot,p as Et,r as $t,F as P,f as Pt,g as H,q as It,m as jt,G as X,H as Y}from"./vue.esm-bundler-Wxtk-7_U.js";var Ht=typeof global=="object"&&global&&global.Object===Object&&global,At=typeof self=="object"&&self&&self.Object===Object&&self,D=Ht||At||Function("return this")(),b=D.Symbol,ht=Object.prototype,Dt=ht.hasOwnProperty,Mt=ht.toString,_=b?b.toStringTag:void 0;function Nt(t){var n=Dt.call(t,_),e=t[_];try{t[_]=void 0;var a=!0}catch{}var o=Mt.call(t);return a&&(n?t[_]=e:delete t[_]),o}var Gt=Object.prototype,Zt=Gt.toString;function Rt(t){return Zt.call(t)}var Ft="[object Null]",Wt="[object Undefined]",q=b?b.toStringTag:void 0;function bt(t){return t==null?t===void 0?Wt:Ft:q&&q in Object(t)?Nt(t):Rt(t)}function Ut(t){return t!=null&&typeof t=="object"}var Vt="[object Symbol]";function M(t){return typeof t=="symbol"||Ut(t)&&bt(t)==Vt}function Kt(t,n){for(var e=-1,a=t==null?0:t.length,o=Array(a);++e<a;)o[e]=n(t[e],e,t);return o}var N=Array.isArray,Xt=1/0,L=b?b.prototype:void 0,J=L?L.toString:void 0;function vt(t){if(typeof t=="string")return t;if(N(t))return Kt(t,vt)+"";if(M(t))return J?J.call(t):"";var n=t+"";return n=="0"&&1/t==-Xt?"-0":n}function S(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}var Yt="[object AsyncFunction]",qt="[object Function]",Lt="[object GeneratorFunction]",Jt="[object Proxy]";function Qt(t){if(!S(t))return!1;var n=bt(t);return n==qt||n==Lt||n==Yt||n==Jt}var I=D["__core-js_shared__"],Q=function(){var t=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function tn(t){return!!Q&&Q in t}var nn=Function.prototype,en=nn.toString;function an(t){if(t!=null){try{return en.call(t)}catch{}try{return t+""}catch{}}return""}var on=/[\\^$.*+?()[\]{}|]/g,rn=/^\[object .+?Constructor\]$/,sn=Function.prototype,cn=Object.prototype,ln=sn.toString,un=cn.hasOwnProperty,pn=RegExp("^"+ln.call(un).replace(on,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dn(t){if(!S(t)||tn(t))return!1;var n=Qt(t)?pn:rn;return n.test(an(t))}function gn(t,n){return t==null?void 0:t[n]}function G(t,n){var e=gn(t,n);return dn(e)?e:void 0}var tt=function(){try{var t=G(Object,"defineProperty");return t({},"",{}),t}catch{}}(),fn=9007199254740991,yn=/^(?:0|[1-9]\d*)$/;function hn(t,n){var e=typeof t;return n=n??fn,!!n&&(e=="number"||e!="symbol"&&yn.test(t))&&t>-1&&t%1==0&&t<n}function bn(t,n,e){n=="__proto__"&&tt?tt(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}function mt(t,n){return t===n||t!==t&&n!==n}var vn=Object.prototype,mn=vn.hasOwnProperty;function _n(t,n,e){var a=t[n];(!(mn.call(t,n)&&mt(a,e))||e===void 0&&!(n in t))&&bn(t,n,e)}var zn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Cn=/^\w*$/;function Tn(t,n){if(N(t))return!1;var e=typeof t;return e=="number"||e=="symbol"||e=="boolean"||t==null||M(t)?!0:Cn.test(t)||!zn.test(t)||n!=null&&t in Object(n)}var z=G(Object,"create");function Bn(){this.__data__=z?z(null):{},this.size=0}function wn(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}var kn="__lodash_hash_undefined__",xn=Object.prototype,Sn=xn.hasOwnProperty;function On(t){var n=this.__data__;if(z){var e=n[t];return e===kn?void 0:e}return Sn.call(n,t)?n[t]:void 0}var En=Object.prototype,$n=En.hasOwnProperty;function Pn(t){var n=this.__data__;return z?n[t]!==void 0:$n.call(n,t)}var In="__lodash_hash_undefined__";function jn(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=z&&n===void 0?In:n,this}function f(t){var n=-1,e=t==null?0:t.length;for(this.clear();++n<e;){var a=t[n];this.set(a[0],a[1])}}f.prototype.clear=Bn;f.prototype.delete=wn;f.prototype.get=On;f.prototype.has=Pn;f.prototype.set=jn;function Hn(){this.__data__=[],this.size=0}function O(t,n){for(var e=t.length;e--;)if(mt(t[e][0],n))return e;return-1}var An=Array.prototype,Dn=An.splice;function Mn(t){var n=this.__data__,e=O(n,t);if(e<0)return!1;var a=n.length-1;return e==a?n.pop():Dn.call(n,e,1),--this.size,!0}function Nn(t){var n=this.__data__,e=O(n,t);return e<0?void 0:n[e][1]}function Gn(t){return O(this.__data__,t)>-1}function Zn(t,n){var e=this.__data__,a=O(e,t);return a<0?(++this.size,e.push([t,n])):e[a][1]=n,this}function v(t){var n=-1,e=t==null?0:t.length;for(this.clear();++n<e;){var a=t[n];this.set(a[0],a[1])}}v.prototype.clear=Hn;v.prototype.delete=Mn;v.prototype.get=Nn;v.prototype.has=Gn;v.prototype.set=Zn;var Rn=G(D,"Map");function Fn(){this.size=0,this.__data__={hash:new f,map:new(Rn||v),string:new f}}function Wn(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function E(t,n){var e=t.__data__;return Wn(n)?e[typeof n=="string"?"string":"hash"]:e.map}function Un(t){var n=E(this,t).delete(t);return this.size-=n?1:0,n}function Vn(t){return E(this,t).get(t)}function Kn(t){return E(this,t).has(t)}function Xn(t,n){var e=E(this,t),a=e.size;return e.set(t,n),this.size+=e.size==a?0:1,this}function y(t){var n=-1,e=t==null?0:t.length;for(this.clear();++n<e;){var a=t[n];this.set(a[0],a[1])}}y.prototype.clear=Fn;y.prototype.delete=Un;y.prototype.get=Vn;y.prototype.has=Kn;y.prototype.set=Xn;var Yn="Expected a function";function Z(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new TypeError(Yn);var e=function(){var a=arguments,o=n?n.apply(this,a):a[0],s=e.cache;if(s.has(o))return s.get(o);var i=t.apply(this,a);return e.cache=s.set(o,i)||s,i};return e.cache=new(Z.Cache||y),e}Z.Cache=y;var qn=500;function Ln(t){var n=Z(t,function(a){return e.size===qn&&e.clear(),a}),e=n.cache;return n}var Jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qn=/\\(\\)?/g,te=Ln(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(Jn,function(e,a,o,s){n.push(o?s.replace(Qn,"$1"):a||e)}),n});function ne(t){return t==null?"":vt(t)}function ee(t,n){return N(t)?t:Tn(t,n)?[t]:te(ne(t))}var ae=1/0;function oe(t){if(typeof t=="string"||M(t))return t;var n=t+"";return n=="0"&&1/t==-ae?"-0":n}function re(t,n,e,a){if(!S(t))return t;n=ee(n,t);for(var o=-1,s=n.length,i=s-1,u=t;u!=null&&++o<s;){var c=oe(n[o]),d=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return t;if(o!=i){var m=u[c];d=void 0,d===void 0&&(d=S(m)?m:hn(n[o+1])?[]:{})}_n(u,c,d),u=u[c]}return t}function h(t,n,e){return t==null?t:re(t,n,e)}const _t=Symbol("BUTTON_GROUP_CTX_KEY"),se=gt(yt({name:"ZzButton",__name:"Button",props:{tag:{default:"button"},type:{},size:{},nativeType:{default:"button"},disabled:{type:Boolean},loading:{type:Boolean},icon:{},circle:{type:Boolean},plain:{type:Boolean},round:{type:Boolean},loadingIcon:{},autofocus:{type:Boolean},useThrottle:{type:Boolean,default:!0},throttleDuration:{default:1e3}},emits:["click"],setup(t,{expose:n,emit:e}){const a=t,o=e,s=Bt(),i=wt(_t,void 0),u=kt(),c=T(()=>(i==null?void 0:i.type)??(a==null?void 0:a.type)??""),d=T(()=>(i==null?void 0:i.size)??(a==null?void 0:a.size)??""),m=T(()=>(i==null?void 0:i.disabled)||(a==null?void 0:a.disabled)||!1),R=T(()=>({marginRight:s.default&&Array.isArray(s.default())&&s.default().length>0&&s.default()[0].children?"8px":"0px"})),F=r=>o("click",r),zt=Tt(F,a.throttleDuration,{trailing:!1});return n({ref:u}),(r,W)=>(j(),K(Ot(r.tag),{ref_key:"_ref",ref:u,class:xt(["er-button",{[`er-button--${c.value}`]:c.value,[`er-button--${d.value}`]:d.value,"is-plain":r.plain,"is-round":r.round,"is-circle":r.circle,"is-disabled":m.value,"is-loading":r.loading}]),autofocus:r.autofocus,type:r.tag==="button"?r.nativeType:void 0,disabled:!(!m.value&&!r.loading)||void 0,onClick:W[0]||(W[0]=U=>r.useThrottle?St(zt)(U):F(U))},{default:It(()=>[r.loading?H(r.$slots,"loading",{key:0},()=>[jt(V,{class:"loading-icon",icon:r.loadingIcon??"spinner",style:X(R.value),size:"1x",spin:""},null,8,["icon","style"])],!0):Y("",!0),r.icon&&!r.loading?(j(),K(V,{key:1,icon:r.icon,style:X(R.value),size:"1x"},null,8,["icon","style"])):Y("",!0),H(r.$slots,"default",{},void 0,!0)]),_:3},8,["autofocus","type","disabled","class"]))}}),[["__scopeId","data-v-37c7895f"]]),ie={class:"er-button-group"},ce=gt(yt({name:"ZzButtonGroup",__name:"ButtonGroup",props:{size:{},type:{},disabled:{type:Boolean}},setup(t){const n=t;return Et(_t,$t({size:P(n,"size"),type:P(n,"type"),disabled:P(n,"disabled")})),(e,a)=>(j(),Pt("div",ie,[H(e.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-81dc8650"]]),C=ft(se),le=ft(ce),ge={title:"Example/Button",component:C,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},size:{control:{type:"select"},options:["large","default","small",""]},disabled:{control:"boolean"},loading:{control:"boolean"},useThrottle:{control:"boolean"},throttleDuration:{control:"number"},autofocus:{control:"boolean"},tag:{control:{type:"select"},options:["button","a","div"]},nativeType:{control:{type:"select"},options:["button","submit","reset",""]},icon:{control:{type:"text"}},loadingIcon:{control:{type:"text"}}},args:{onClick:Ct()}},$=t=>`
<div style="margin: 5px">
  ${t}
</div>
`,B={argTypes:{content:{control:{type:"text"}}},args:{type:"primary",content:"default-button",round:!0,icon:"search"},render:t=>({components:{ZzButton:C},setup(){return{args:t}},template:$('<zz-button data-testid="story-test-btn" v-bind="args">{{args.content}}</zz-button>')}),play:async({canvasElement:t,args:n,step:e})=>{const a=A(t),o=a.getByTestId("story-test-btn");await e("When useThrottle is set to true, the onClick should be called once",async()=>{h(n,"useThrottle",!0),await l.tripleClick(o),p(n.onClick).toHaveBeenCalledOnce(),g()}),await e("When useThrottle is set to false, the onClick should be called  three time",async()=>{h(n,"useThrottle",!1),await l.tripleClick(o),p(n.onClick).toHaveBeenCalledTimes(3),g()}),await e("When disabled is set to true, the onClick should not be called",async()=>{h(n,"disabled",!0),await l.click(o),p(n.onClick).toHaveBeenCalledTimes(0),h(n,"disabled",!1),g()}),await e("When loading is set to true, the onClick should not be called",async()=>{h(n,"loading",!0),await l.click(o),p(n.onClick).toHaveBeenCalledTimes(0),h(n,"loading",!1),g()}),await e("click btn",async()=>{await l.click(a.getByRole("button")),p(n.onClick).toHaveBeenCalled(),g()})}},w={argTypes:{content:{control:{type:"text"}}},args:{content:"focus-button",autofocus:!0},render:t=>({components:{ZzButton:C},setup(){return{args:t}},template:$(`
      <h3>点击浏览器的刷新页面来获取按钮聚焦</h3>
      <zz-button data-testid="story-test-btn" v-bind="args">{{args.content}}</zz-button>`)}),play:async({args:t})=>{await l.keyboard("{enter}"),p(t.onClick).toHaveBeenCalled(),g()}},k={argTypes:{content:{control:{type:"text"}}},args:{icon:"search",circle:!0,type:"primary"},render:t=>({components:{ZzButton:C},setup(){return{args:t}},template:$('<zz-button v-bind="args" />')}),play:async({canvasElement:t,args:n,step:e})=>{const a=A(t);await e("click btn",async()=>{await l.click(a.getByRole("button")),p(n.onClick).toHaveBeenCalled(),g()})}},x={argTypes:{groupType:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},groupSize:{control:{type:"select"},options:["large","default","small",""]},groupDisabled:{control:"boolean"},content1:{control:{type:"text"},defaultValue:"Button1"},content2:{control:{type:"text"},defaultValue:"Button2"}},args:{round:!0,content1:"Button1",content2:"Button2",content3:"Button3"},render:t=>({components:{ZzButton:C,ZzButtonGroup:le},setup(){return{args:t}},template:$(`
       <zz-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <zz-button v-bind="args">{{args.content1}}</zz-button>
         <zz-button v-bind="args">{{args.content2}}</zz-button>
         <zz-button v-bind="args">{{args.content3}}</zz-button>
       </zz-button-group>
    `)}),play:async({canvasElement:t,args:n,step:e})=>{const a=A(t);await e("click btn1",async()=>{await l.click(a.getByText("Button1"))}),await e("click btn2",async()=>{await l.click(a.getByText("Button2"))}),p(n.onClick).toHaveBeenCalled()}};var nt,et,at;B.parameters={...B.parameters,docs:{...(nt=B.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(at=(et=B.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var ot,rt,st;w.parameters={...w.parameters,docs:{...(ot=w.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(rt=w.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ct,lt;k.parameters={...k.parameters,docs:{...(it=k.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(ct=k.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var ut,pt,dt;x.parameters={...x.parameters,docs:{...(ut=x.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(dt=(pt=x.parameters)==null?void 0:pt.docs)==null?void 0:dt.source}}};const fe=["Default","Autofocus","Circle","Group"];export{w as Autofocus,k as Circle,B as Default,x as Group,fe as __namedExportsOrder,ge as default};
