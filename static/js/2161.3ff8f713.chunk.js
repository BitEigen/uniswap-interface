"use strict";(self.webpackChunk_darkflorist_horswap=self.webpackChunk_darkflorist_horswap||[]).push([[2161],{26989:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(42893),i=t(12204),o=t(80815),a=t(13119),s=t(48141),c=t(40508),l=t(13712),d=t(87253),u=t(93589),p=t(47371),m=t(15993),h=t(44326),f=t(89504),g=t(38517),y=t(45533),x=t(56823),b=t(48972),v=t(2304),w=t(21457),C=t(869);const I=d.default.div.withConfig({displayName:"CurrencyInputPanel__InputPanel",componentId:"sc-66e4a6bf-0"})`
  ${p.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,j=d.default.div.withConfig({displayName:"CurrencyInputPanel__Container",componentId:"sc-66e4a6bf-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,N=(0,d.default)(g.Ux).withConfig({displayName:"CurrencyInputPanel__CurrencySelect",componentId:"sc-66e4a6bf-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,c._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,k=d.default.div.withConfig({displayName:"CurrencyInputPanel__InputRow",componentId:"sc-66e4a6bf-3"})`
  ${p.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,_=d.default.div.withConfig({displayName:"CurrencyInputPanel__LabelRow",componentId:"sc-66e4a6bf-4"})`
  ${p.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,c._j)(.2,e.neutral2)};
  }
`,$=(0,d.default)(_).withConfig({displayName:"CurrencyInputPanel__FiatRow",componentId:"sc-66e4a6bf-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,P=d.default.span.withConfig({displayName:"CurrencyInputPanel__Aligner",componentId:"sc-66e4a6bf-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,T=(0,d.default)(h.r).withConfig({displayName:"CurrencyInputPanel__StyledDropDown",componentId:"sc-66e4a6bf-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,O=d.default.span.withConfig({displayName:"CurrencyInputPanel__StyledTokenName",componentId:"sc-66e4a6bf-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,A=d.default.button.withConfig({displayName:"CurrencyInputPanel__StyledBalanceMax",componentId:"sc-66e4a6bf-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,S=(0,d.default)(b.I).withConfig({displayName:"CurrencyInputPanel__StyledNumericalInput",componentId:"sc-66e4a6bf-10"})`
  ${a._Q};
  text-align: left;
`;function R({value:e,onUserInput:n,onMax:t,showMaxButton:c,onCurrencySelect:p,currency:h,otherCurrency:g,id:b,showCommonBases:_,showCurrencyAmount:R,disableNonToken:E,renderBalance:D,fiatValue:B,hideBalance:z=!1,pair:W=null,hideInput:V=!1,locked:G=!1,loading:L=!1,...U}){const[M,Z]=(0,l.useState)(!1),{account:F,chainId:q}=(0,o.useWeb3React)(),H=(0,f._h)(F??void 0,h??void 0),K=(0,d.useTheme)(),J=(0,l.useCallback)((()=>{Z(!1)}),[Z]),Q=(0,s.EC)(q);return(0,r.jsxs)(I,{id:b,hideInput:V,...U,children:[!G&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(j,{hideInput:V,disabled:!Q,children:[(0,r.jsxs)(k,{style:V?{padding:"0",borderRadius:"8px"}:{},selected:!p,children:[!V&&(0,r.jsx)(S,{className:"token-amount-input",value:e,onUserInput:n,disabled:!Q,$loading:L}),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(N,{disabled:!Q,visible:void 0!==h,selected:!!h,hideInput:V,className:"open-currency-select-button",onClick:()=>{p&&Z(!0)},pointerEvents:p?void 0:"none",children:(0,r.jsxs)(P,{children:[(0,r.jsxs)(v.DA,{children:[W?(0,r.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,r.jsx)(y.Z,{currency0:W.token0,currency1:W.token1,size:24,margin:!0})}):h&&(0,r.jsx)(x.Z,{style:{marginRight:"0.5rem"},currency:h,size:"24px"}),W?(0,r.jsxs)(O,{className:"pair-name-container",children:[W?.token0.symbol,":",W?.token1.symbol]}):(0,r.jsx)(O,{className:"token-symbol-container",active:Boolean(h&&h.symbol),children:(h&&h.symbol&&h.symbol.length>20?h.symbol.slice(0,4)+"..."+h.symbol.slice(h.symbol.length-5,h.symbol.length):h?.symbol)||(0,r.jsx)(i.cC,{id:"T0Y2+3"})})]}),p&&(0,r.jsx)(T,{selected:!!h})]})})})]}),Boolean(!V&&!z&&h)&&(0,r.jsx)($,{children:(0,r.jsxs)(v.m0,{children:[(0,r.jsx)(a.EG,{$loading:L,children:B&&(0,r.jsx)(C.x,{fiatValue:B})}),F&&(0,r.jsxs)(v.DA,{style:{height:"17px"},children:[(0,r.jsx)(u.Tv.DeprecatedBody,{onClick:t,color:K.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!z&&h&&H)&&(D?.(H)||(0,r.jsx)(i.cC,{id:"VuFd5C",values:{0:(0,m.Z)(H,4)}}))}),Boolean(c&&H)&&(0,r.jsx)(A,{onClick:t,children:(0,r.jsx)(i.cC,{id:"4HtGBb"})})]})]})})]})}),p&&(0,r.jsx)(w.Z,{isOpen:M,onDismiss:J,onCurrencySelect:p,selectedCurrency:h,otherSelectedCurrency:g,showCommonBases:_,showCurrencyAmount:R,disableNonToken:E})]})}},4987:function(e,n,t){t.d(n,{q:function(){return C},w:function(){return j}});var r=t(42893),i=t(12204),o=t(80815),a=t(94372),s=t(46591),c=t(41440),l=t(80657),d=t(47096),u=t(63498),p=t(40740),m=t(4292),h=t(87253),f=t(93589),g=t(47371),y=t(2304);const x=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-ee271e70-0"})`
  ${g.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,h.default)(c.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-ee271e70-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,h.default)(f.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-ee271e70-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,w=(0,h.default)(s.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-ee271e70-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,r.jsx)(x,{children:(0,r.jsxs)(y.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(c.rU,{to:e,children:(0,r.jsx)(w,{})}),(0,r.jsx)(v,{children:(0,r.jsx)(i.cC,{id:"LCFvJr"})})]})})}const I=(0,h.default)(f.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-ee271e70-4"})`
  flex: 1;
  margin: auto;
`;function j({adding:e,creating:n,autoSlippage:t,positionID:s,children:c}){const{chainId:f}=(0,o.useWeb3React)(),g=(0,h.useTheme)(),v=(0,u.T)(),C=(0,l.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(s?`/${s.toString()}`:"");return(0,r.jsx)(x,{children:(0,r.jsxs)(y.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(b,{to:C,onClick:()=>{e&&(v((0,p.dA)()),v((0,m.dA)()))},flex:c?"1":void 0,children:(0,r.jsx)(w,{stroke:g.neutral2})}),(0,r.jsx)(I,{textAlign:c?"start":"center",children:n?(0,r.jsx)(i.cC,{id:"ma87bD"}):e?(0,r.jsx)(i.cC,{id:"E6MqGy"}):(0,r.jsx)(i.cC,{id:"cJtosk"})}),c&&(0,r.jsx)(d.xu,{style:{marginRight:".5rem"},children:c}),(0,r.jsx)(a.Z,{autoSlippage:t,chainId:f})]})})}},48244:function(e,n,t){t.d(n,{U:function(){return r},q:function(){return h}});var r,i=t(75255),o=t(80815),a=t(600),s=t(5976),c=t(13712),l=t(54479);function d(e,n,t){const{chainId:d}=(0,o.useWeb3React)(),u=e?.currency?.isToken?e.currency:void 0,p=function(e,n,t){const{account:i}=(0,o.useWeb3React)(),a=e?.currency?.isToken?e.currency:void 0,{tokenAllowance:l}=(0,s.Fx)(a,i??void 0,n),d=t(a,n);return(0,c.useMemo)((()=>e&&n?e.currency.isNative?r.APPROVED:l?l.lessThan(e)?d?r.PENDING:r.NOT_APPROVED:r.APPROVED:r.UNKNOWN:r.UNKNOWN),[e,d,n,l])}(e,n,t),m=(0,a.Ib)(u?.address),h=(0,c.useCallback)((async()=>{function t(e){console.warn(`${u?.symbol||"Token"} approval failed:`,e)}if(p!==r.NOT_APPROVED)return t("approve was called unnecessarily");if(!d)return t("no chainId");if(!u)return t("no token");if(!m)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let o=!1;const a=await m.estimateGas.approve(n,i.Bz).catch((()=>(o=!0,m.estimateGas.approve(n,e.quotient.toString()))));return m.approve(n,o?e.quotient.toString():i.Bz,{gasLimit:(0,l.y)(a)}).then((t=>({response:t,tokenAddress:u.address,spenderAddress:n,amount:e}))).catch((e=>{throw t(e),e}))}),[p,u,m,e,n,d]);return[p,h]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(r||(r={}));var u=t(97905),p=t(843);function m(e){const n=(0,u.h7)();return(0,c.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:r,spenderAddress:i,amount:o}=e;n(t,{type:p.i.APPROVAL,tokenAddress:r,spender:i,amount:o.quotient.toString()})}}))),[n,e])}function h(e,n){const[t,r]=d(e,n,u.wB);return[t,m(r)]}},72714:function(e,n,t){t.d(n,{Z:function(){return s},e:function(){return a}});var r=t(42893),i=t(87253),o=t(437);const a=i.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-bb0fd59b-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function s(e){return(0,r.jsx)(a,{...e})}},49287:function(e,n,t){var r=t(13712),i=t(41432),o=t.n(i);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=(0,r.forwardRef)((function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return r.createElement("svg",a({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="Plus",n.Z=c}}]);
//# sourceMappingURL=2161.3ff8f713.chunk.js.map