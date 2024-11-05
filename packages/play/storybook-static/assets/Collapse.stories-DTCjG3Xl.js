import{r as x,s as y,B as $,t as k}from"./index-CHISG3F-.js";import{d as V,b as S,e as T,w as N,p as L,o as w,f as E,g as r,j as D,k as O,l as c,m as p,n as u,q as j,s as H,t as P,u as A,T as K,v as X,x as q,y as Y,z as F}from"./vue.esm-bundler-Wxtk-7_U.js";const I=Symbol("COLLAPSE_CTX_KEY"),G={class:"er-collapse"},J="ZzCollapse",M=x(V({name:J,__name:"Collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["upadte:modelValue","change"],setup(e,{emit:n}){const l=e,o=n,i=S(l.modelValue);function t(a){i.value=a,o("upadte:modelValue",a),o("change",a)}return T(()=>{l.accordion&&i.value.length>1&&k()}),N(()=>l.modelValue,a=>t(a)),L(I,{activeNames:i,handleItemClick:function(a){let s=[...i.value];if(l.accordion)return s=[s[0]===a?"":a],void t(s);const m=s.indexOf(a);m>-1?s.splice(m,1):s.push(a),t(s)}}),(a,s)=>(w(),E("div",G,[r(a.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-bfd797c6"]]),v=e=>e.style.height="0px",z=e=>e.style.height=`${e.scrollHeight}px`,h=e=>e.style.height="",f=e=>e.style.overflow="hidden",b=e=>e.style.overflow="",Q={beforeEnter(e){v(e),f(e)},enter:e=>z(e),afterEnter(e){h(e),b(e)},beforeLeave(e){z(e),f(e)},leave:e=>v(e),afterLeave(e){h(e),b(e)}},R=["id"],U={class:"er-collapse-item__title"},W={class:"er-collapse-item__wapper"},ee=["id"],ae=x(V({name:"ZzCollapseItem",__name:"CollapseItem",props:{name:{},title:{},disabled:{type:Boolean}},setup(e){const n=e,l=D(I,void 0),o=O(()=>l==null?void 0:l.activeNames.value.includes(n.name));function i(){n.disabled||(l==null||l.handleItemClick(n.name))}return(t,a)=>(w(),E("div",{class:u(["er-collapse-item",{"is-disabled":t.disabled}])},[c("div",{class:u(["er-collapse-item__header",{"is-disabled":t.disabled,"is-active":o.value}]),id:`item-header-${t.name}`,onClick:i},[c("span",U,[r(t.$slots,"title",{},()=>[X(q(t.title),1)],!0)]),p($,{icon:"angle-right",class:"header-angle"})],10,R),p(K,H({name:"slide"},P(A(Q))),{default:j(()=>[Y(c("div",W,[c("div",{class:"er-collapse-item__content",id:`item-content-${t.name}`},[r(t.$slots,"default",{},void 0,!0)],8,ee)],512),[[F,o.value]])]),_:3},16)],2))}}),[["__scopeId","data-v-c00a684d"]]),B=y(M),Z=y(ae),ie={title:"Example/Collapse",component:B,subcomponents:{ZzCollapseItem:Z},tags:["autodocs"]},te=e=>`
<div style="margin: 5px">
  ${e}
</div>
`,d={args:{accordion:!0,modelValue:["a"]},render:e=>({components:{ZzCollapse:B,ZzCollapseItem:Z},setup(){return{args:e}},template:te(`
    <zz-collapse v-bind="args">
      <zz-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </zz-collapse-item>
      <zz-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </zz-collapse-item>
      <zz-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </zz-collapse-item>
    </zz-collapse>
    `)})};var g,_,C;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    accordion: true,
    modelValue: ["a"]
  },
  render: args => ({
    components: {
      ZzCollapse,
      ZzCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
    <zz-collapse v-bind="args">
      <zz-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </zz-collapse-item>
      <zz-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </zz-collapse-item>
      <zz-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </zz-collapse-item>
    </zz-collapse>
    \`)
  })
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const ne=["Default"];export{d as Default,ne as __namedExportsOrder,ie as default};
