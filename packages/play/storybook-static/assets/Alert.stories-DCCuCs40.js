import{d as C,u as I,b as B,e as u,o as i,f as d,g as R,T as S,j as D,v as Z,k as l,l as m,n as v,m as $,p as g,q as _,t as y,s as N,x as T,y as V,w as E}from"./vue.esm-bundler-DLBXQljg.js";import{f as j}from"./index-B9uFzlPP.js";import{o as q,s as M,B as h,e as O}from"./index-Y-HwIfvd.js";const F={class:"er-alert__content"},G={class:"er-alert__description"},H={key:0,class:"er-alert__close"},k=q(M(C({name:"ZzAlert",__name:"Alert",props:{title:{},type:{default:"info"},description:{},effect:{default:"light"},closable:{type:Boolean,default:!0},center:{type:Boolean},showIcon:{type:Boolean}},emits:["close"],setup(s,{expose:t,emit:o}){const a=s,r=o,x=I(),c=B(!0),A=u(()=>O.get(a.type)??"circle-info"),f=u(()=>a.description||x.default);function p(){c.value=!1,r("close")}return t({close:p,open:function(){c.value=!0}}),(e,J)=>(i(),d(S,{name:"er-alert-fade"},{default:R(()=>[D(l("div",{class:v(["er-alert",{[`er-alert__${e.type}`]:e.type,[`er-alert__${e.effect}`]:e.effect,"text-center":e.center}]),role:"alert"},[e.showIcon?(i(),d(h,{key:0,class:"er-alert__icon",clas:{"big-icon":f.value},icon:A.value},null,8,["clas","icon"])):m("",!0),l("div",F,[l("span",{class:v(["er-alert__title",{"with-desc":f.value}]),style:$({display:e.center&&!e.showIcon?"flow":"inline"})},[g(e.$slots,"title",{},()=>[_(y(e.title),1)],!0)],6),l("p",G,[g(e.$slots,"default",{},()=>[_(y(e.description),1)],!0)]),e.closable?(i(),N("div",H,[T(h,{onClick:V(p,["stop"]),icon:"xmark"})])):m("",!0)])],2),[[Z,c.value]])]),_:3}))}}),[["__scopeId","data-v-01ecf210"]])),Q={title:"Example/Alert",component:k,tags:["autodocs"],argTypes:{type:{control:"select",options:["success","info","warning","danger"]},effect:{control:"select",options:["light","dark"]},center:{control:"boolean"}},args:{onClose:j()}},n={args:{title:"标题",description:"这是一段描述",type:"success",effect:"light",closable:!0,showIcon:!0,visible:!0,center:!1},render:s=>({components:{ZzAlert:k},setup(){const t=B();return E(()=>s.visible,o=>{var a,r;o?(a=t.value)==null||a.open():(r=t.value)==null||r.close()}),{args:s,alertRef:t}},template:`
    <zz-alert ref="alertRef" v-bind="args"></zz-alert>
    `})};var b,w,z;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: "标题",
    description: "这是一段描述",
    type: "success",
    effect: "light",
    closable: true,
    showIcon: true,
    visible: true,
    center: false
  },
  render: args => ({
    components: {
      ZzAlert
    },
    setup() {
      const alertRef = ref<AlerInterface>();
      watch(() => (args as any).visible, (val: boolean) => {
        if (val) {
          alertRef.value?.open();
        } else {
          alertRef.value?.close();
        }
      });
      return {
        args,
        alertRef
      };
    },
    template: \`
    <zz-alert ref="alertRef" v-bind="args"></zz-alert>
    \`
  })
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const U=["Default"];export{n as Default,U as __namedExportsOrder,Q as default};
