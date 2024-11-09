import{s as x,o as y,B as $,r as k}from"./index-Y-HwIfvd.js";import{d as E,b as S,z as T,w as N,A as D,o as V,s as w,p as r,B as L,e as O,k as c,x as p,n as u,g as j,C as A,D as H,E as P,T as K,q as X,t as q,j as Y,v as F}from"./vue.esm-bundler-DLBXQljg.js";const B=Symbol("COLLAPSE_CTX_KEY"),G={class:"er-collapse"},J="ZzCollapse",M=x(E({name:J,__name:"Collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["upadte:modelValue","change"],setup(e,{emit:o}){const l=e,n=o,i=S(l.modelValue);function t(a){i.value=a,n("upadte:modelValue",a),n("change",a)}return T(()=>{l.accordion&&i.value.length>1&&k()}),N(()=>l.modelValue,a=>t(a)),D(B,{activeNames:i,handleItemClick:function(a){let s=[...i.value];if(l.accordion)return s=[s[0]===a?"":a],void t(s);const m=s.indexOf(a);m>-1?s.splice(m,1):s.push(a),t(s)}}),(a,s)=>(V(),w("div",G,[r(a.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-bfd797c6"]]),v=e=>e.style.height="0px",z=e=>e.style.height=`${e.scrollHeight}px`,h=e=>e.style.height="",f=e=>e.style.overflow="hidden",b=e=>e.style.overflow="",Q={beforeEnter(e){v(e),f(e)},enter:e=>z(e),afterEnter(e){h(e),b(e)},beforeLeave(e){z(e),f(e)},leave:e=>v(e),afterLeave(e){h(e),b(e)}},R=["id"],U={class:"er-collapse-item__title"},W={class:"er-collapse-item__wapper"},ee=["id"],ae=x(E({name:"ZzCollapseItem",__name:"CollapseItem",props:{name:{},title:{},disabled:{type:Boolean}},setup(e){const o=e,l=L(B,void 0),n=O(()=>l==null?void 0:l.activeNames.value.includes(o.name));function i(){o.disabled||(l==null||l.handleItemClick(o.name))}return(t,a)=>(V(),w("div",{class:u(["er-collapse-item",{"is-disabled":t.disabled}])},[c("div",{class:u(["er-collapse-item__header",{"is-disabled":t.disabled,"is-active":n.value}]),id:`item-header-${t.name}`,onClick:i},[c("span",U,[r(t.$slots,"title",{},()=>[X(q(t.title),1)],!0)]),p($,{icon:"angle-right",class:"header-angle"})],10,R),p(K,A({name:"slide"},H(P(Q))),{default:j(()=>[Y(c("div",W,[c("div",{class:"er-collapse-item__content",id:`item-content-${t.name}`},[r(t.$slots,"default",{},void 0,!0)],8,ee)],512),[[F,n.value]])]),_:3},16)],2))}}),[["__scopeId","data-v-c00a684d"]]),I=y(M),Z=y(ae),ie={title:"Example/Collapse",component:I,subcomponents:{ZzCollapseItem:Z},tags:["autodocs"]},te=e=>`
<div style="margin: 5px">
  ${e}
</div>
`,d={args:{accordion:!0,modelValue:["a"]},render:e=>({components:{ZzCollapse:I,ZzCollapseItem:Z},setup(){return{args:e}},template:te(`
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
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const oe=["Default"];export{d as Default,oe as __namedExportsOrder,ie as default};
