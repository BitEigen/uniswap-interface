"use strict";(self.webpackChunk_darkflorist_horswap=self.webpackChunk_darkflorist_horswap||[]).push([[2635],{4987:function(e,n,t){t.d(n,{q:function(){return T},w:function(){return w}});var i=t(42893),r=t(12204),o=t(80815),s=t(94372),c=t(46591),d=t(41440),a=t(80657),l=t(47096),x=t(63498),u=t(40740),p=t(4292),h=t(87253),f=t(93589),m=t(47371),g=t(2304);const j=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-ee271e70-0"})`
  ${m.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,h.default)(d.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-ee271e70-1"})`
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
`,y=(0,h.default)(c.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-ee271e70-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function T({origin:e}){return(0,i.jsx)(j,{children:(0,i.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(d.rU,{to:e,children:(0,i.jsx)(y,{})}),(0,i.jsx)(v,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const C=(0,h.default)(f.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-ee271e70-4"})`
  flex: 1;
  margin: auto;
`;function w({adding:e,creating:n,autoSlippage:t,positionID:c,children:d}){const{chainId:f}=(0,o.useWeb3React)(),m=(0,h.useTheme)(),v=(0,x.T)(),T=(0,a.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(c?`/${c.toString()}`:"");return(0,i.jsx)(j,{children:(0,i.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(b,{to:T,onClick:()=>{e&&(v((0,u.dA)()),v((0,p.dA)()))},flex:d?"1":void 0,children:(0,i.jsx)(y,{stroke:m.neutral2})}),(0,i.jsx)(C,{textAlign:d?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),d&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:d}),(0,i.jsx)(s.Z,{autoSlippage:t,chainId:f})]})})}},72714:function(e,n,t){t.d(n,{Z:function(){return c},e:function(){return s}});var i=t(42893),r=t(87253),o=t(437);const s=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-bb0fd59b-0"})`
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
`;function c(e){return(0,i.jsx)(s,{...e})}},55494:function(e,n,t){t.d(n,{DC:function(){return c},ER:function(){return d},bb:function(){return a},im:function(){return s},pr:function(){return l}});var i=t(13119),r=t(47096),o=t(87253);const s=o.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,c=(0,o.default)(r.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=o.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,a=o.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,o.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},90958:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var i,r=t(42893),o=t(12204),s=t(80815),c=t(22875),d=t(6053),a=t(44998),l=t.n(a),x=t(13712),u=t(49287),p=t(80657),h=t(47096),f=t(93589),m=t(38517),g=t(42246),j=t(60476),b=t(56823),v=t(4987),y=t(16403),T=t(2304),C=t(21457),w=t(85729),_=t(58025),I=t(97761),N=t(89504),k=t(20955),O=t(21103),S=t(72714),E=t(55494);function $(){const e=new URLSearchParams((0,p.TH)().search),{account:n,chainId:t}=(0,s.useWeb3React)(),[a,$]=(0,x.useState)(!1),[A,z]=(0,x.useState)(i.TOKEN1),[L,W]=(0,x.useState)((()=>t?(0,_.gX)(t):null)),[B,K]=(0,x.useState)(null),[q,D]=(0,I.Oo)(L??void 0,B??void 0),G=(0,k.uB)();(0,x.useEffect)((()=>{D&&G(D)}),[D,G]);const Z=q===I._G.NOT_EXISTS||Boolean(q===I._G.EXISTS&&D&&l().equal(D.reserve0.quotient,l().BigInt(0))&&l().equal(D.reserve1.quotient,l().BigInt(0))),P=(0,N.mM)(n??void 0,D?.liquidityToken),R=Boolean(P&&l().greaterThan(P.quotient,l().BigInt(0))),H=(0,x.useCallback)((e=>{A===i.TOKEN0?W(e):K(e)}),[A]),F=(0,x.useCallback)((()=>{$(!1)}),[$]),X=(0,r.jsx)(g.hl,{padding:"45px 10px",children:(0,r.jsx)(h.xv,{textAlign:"center",children:n?(0,r.jsx)(o.cC,{id:"pKO91W"}):(0,r.jsx)(o.cC,{id:"4YB3Bt"})})});return(0,d.G)()?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(S.Z,{children:[(0,r.jsx)(v.q,{origin:e.get("origin")??"/pools/v2"}),(0,r.jsxs)(j.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,r.jsx)(g.Pj,{children:(0,r.jsx)(j.Tz,{gap:"10px",children:(0,r.jsx)(f.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,r.jsx)(o.cC,{id:"qtO+b3",components:{0:(0,r.jsx)("b",{})}})})})}),(0,r.jsx)(m.KA,{onClick:()=>{$(!0),z(i.TOKEN0)},children:L?(0,r.jsxs)(T.ZP,{children:[(0,r.jsx)(b.Z,{currency:L}),(0,r.jsx)(h.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:L.symbol})]}):(0,r.jsx)(h.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(o.cC,{id:"T0Y2+3"})})}),(0,r.jsx)(j.lg,{children:(0,r.jsx)(u.Z,{size:"16",color:"#888D9B"})}),(0,r.jsx)(m.KA,{onClick:()=>{$(!0),z(i.TOKEN1)},children:B?(0,r.jsxs)(T.ZP,{children:[(0,r.jsx)(b.Z,{currency:B}),(0,r.jsx)(h.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:B.symbol})]}):(0,r.jsx)(h.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(o.cC,{id:"T0Y2+3"})})}),R&&(0,r.jsxs)(j.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,r.jsx)(h.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(o.cC,{id:"lYF0uv"})}),(0,r.jsx)(f.m_,{to:"pools/v2",children:(0,r.jsx)(h.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"/4YRTg"})})})]}),L&&B?q===I._G.EXISTS?R&&D?(0,r.jsx)(y.WP,{pair:D,border:"1px solid #CED0D9"}):(0,r.jsx)(g.hl,{padding:"45px 10px",children:(0,r.jsxs)(j.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(h.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"Lu0Uod"})}),(0,r.jsx)(f.m_,{to:`/add/${(0,O.H)(L)}/${(0,O.H)(B)}`,children:(0,r.jsx)(h.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"xJEVlK"})})})]})}):Z?(0,r.jsx)(g.hl,{padding:"45px 10px",children:(0,r.jsxs)(j.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(h.xv,{textAlign:"center",children:(0,r.jsx)(o.cC,{id:"+8rnEI"})}),(0,r.jsx)(f.m_,{to:`/add/${(0,O.H)(L)}/${(0,O.H)(B)}`,children:(0,r.jsx)(o.cC,{id:"I1gztT"})})]})}):q===I._G.INVALID?(0,r.jsx)(g.hl,{padding:"45px 10px",children:(0,r.jsx)(j.Tz,{gap:"sm",justify:"center",children:(0,r.jsx)(h.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(o.cC,{id:"ovVGFw"})})})}):q===I._G.LOADING?(0,r.jsx)(g.hl,{padding:"45px 10px",children:(0,r.jsx)(j.Tz,{gap:"sm",justify:"center",children:(0,r.jsxs)(h.xv,{textAlign:"center",children:[(0,r.jsx)(o.cC,{id:"yQE2r9"}),(0,r.jsx)(E.bb,{})]})})}):null:X]}),(0,r.jsx)(C.Z,{isOpen:a,onCurrencySelect:H,onDismiss:F,showCommonBases:!0,selectedCurrency:(A===i.TOKEN0?B:L)??void 0})]}),(0,r.jsx)(w.c,{})]}):(0,r.jsx)(c.A,{})}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}))},49111:function(e,n,t){t.d(n,{B:function(){return o}});var i=t(48141),r=t(58025);function o(e){if(e.isNative)return e;const n=(0,i.oG)(e.chainId);return n&&r.Fl[n]?.equals(e)?(0,r.gX)(e.chainId):e}},49287:function(e,n,t){var i=t(13712),r=t(41432),o=t.n(r);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,o=e.size,d=void 0===o?24:o,a=c(e,["color","size"]);return i.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Plus",n.Z=d}}]);
//# sourceMappingURL=2635.68549299.chunk.js.map