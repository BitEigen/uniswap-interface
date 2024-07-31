"use strict";(self.webpackChunk_darkflorist_horswap=self.webpackChunk_darkflorist_horswap||[]).push([[1457],{6053:function(e,t,n){n.d(t,{G:function(){return r}});var i=n(80815),o=n(48141);function r(){const{chainId:e}=(0,i.useWeb3React)();return e&&o.Ep.includes(e)}},6362:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ee}});var i,o,r,s=n(42893),d=n(12204),a=n(80815),l=n(24405),c=n(38517),p=n(60476),u=n(13712),f=n(41440),x=n(87253),m=n(93589);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},h.apply(this,arguments)}function g(e,t){let{title:n,titleId:s,...d}=e;return u.createElement("svg",h({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},d),n?u.createElement("title",{id:s},n):null,i||(i=u.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=u.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=u.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const j=u.forwardRef(g);n.p;var y,w=n(55338),v=n(56564),b=n(13120);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(y||(y={}));const C=(0,x.default)(j).withConfig({displayName:"Menu__StyledMenuIcon",componentId:"sc-ac391358-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,k=x.default.div.withConfig({displayName:"Menu__StyledMenu",componentId:"sc-ac391358-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,_=x.default.span.withConfig({displayName:"Menu__MenuFlyout",componentId:"sc-ac391358-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface1};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=y.RIGHT})=>e===y.RIGHT?x.css`
          right: 0rem;
        `:x.css`
          left: 0rem;
        `};
`,I=(0,x.default)(m.dL).withConfig({displayName:"Menu__MenuItem",componentId:"sc-ac391358-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,O=(0,x.default)(f.rU).withConfig({displayName:"Menu__InternalMenuItem",componentId:"sc-ac391358-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,T=(0,x.default)(I).withConfig({displayName:"Menu__ExternalMenuItem",componentId:"sc-ac391358-5"})`
  width: max-content;
  text-decoration: none;
`;var P=n(22230),L=n(43108);const $=x.default.div.withConfig({displayName:"PositionList__DesktopHeader",componentId:"sc-dcaf7249-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${L.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,N=x.default.div.withConfig({displayName:"PositionList__MobileHeader",componentId:"sc-dcaf7249-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${L.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${L.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,z=x.default.div.withConfig({displayName:"PositionList__ToggleWrap",componentId:"sc-dcaf7249-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,E=x.default.button.withConfig({displayName:"PositionList__ToggleLabel",componentId:"sc-dcaf7249-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function M({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)($,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(d.cC,{id:"LcLwJZ"}),e&&" ("+e.length+")"]}),(0,s.jsx)(E,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,s.jsx)(d.cC,{id:"GOctE4"}):(0,s.jsx)(d.cC,{id:"l+HNUa"})})]}),(0,s.jsxs)(N,{children:[(0,s.jsx)(d.cC,{id:"LcLwJZ"}),(0,s.jsx)(z,{children:(0,s.jsx)(E,{onClick:()=>{t(!n)},children:n?(0,s.jsx)(d.cC,{id:"GOctE4"}):(0,s.jsx)(d.cC,{id:"l+HNUa"})})})]}),e.map((e=>(0,s.jsx)(P.Z,{...e},e.tokenId.toString())))]})}var W=n(2304),R=n(85729),S=n(48141);function A(e){if(!e)return!1;return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(e)}var H=n(96456),Z=n(45433),B=n(11744),F=n(61646);const U=new Z.vU(B);function G(e){const{chainId:t}=(0,a.useWeb3React)(),n=(0,H.uR)(t),i=(0,u.useMemo)((()=>function(e){return Array.from(new Set(e.reduce(((e,t)=>e.concat(t.token0,t.token1)),[])))}(e).filter((e=>!n[e]))),[e,n]),o=(r=i,s="symbol",(0,F._Y)(r,U,s,void 0,F.DB));var r,s;const d=(0,u.useMemo)((()=>{const e={};for(let t=0;t<i.length;t++){const n=o[t].result;if(!n)continue;e[i[t]]=n}return e}),[i,o]);return(0,u.useMemo)((()=>e.filter((e=>{let t=0;const i=n[e.token0],o=n[e.token1];if(i&&t++,o&&t++,2===t)return!0;let r=0;return A(i?.symbol??d[e.token0])&&r++,A(o?.symbol??d[e.token1])&&r++,1===t&&r<2||0===r}))),[d,e,n])}var D=n(6053),Y=n(59991),J=n(34578),Q=n(41432),V=n.n(Q);function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},q.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var X=(0,u.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=K(e,["color","size"]);return u.createElement("svg",q({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),u.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));X.propTypes={color:V().string,size:V().oneOfType([V().string,V().number])},X.displayName="Inbox";var ee=X,te=n(47212);function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ne.apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var oe=(0,u.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=ie(e,["color","size"]);return u.createElement("svg",ne({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),u.createElement("polyline",{points:"2 17 12 22 22 17"}),u.createElement("polyline",{points:"2 12 12 17 22 12"}))}));oe.propTypes={color:V().string,size:V().oneOfType([V().string,V().number])},oe.displayName="Layers";var re=oe;function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},se.apply(this,arguments)}function de(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ae=(0,u.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=de(e,["color","size"]);return u.createElement("svg",se({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),u.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),u.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));ae.propTypes={color:V().string,size:V().oneOfType([V().string,V().number])},ae.displayName="BookOpen";var le=ae,ce=n(83931),pe=n(20955),ue=n(52553);const fe=x.default.section.withConfig({displayName:"CTACards__CTASection",componentId:"sc-d54cea6f-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,xe=(0,x.default)(m.dL).withConfig({displayName:"CTACards__CTA",componentId:"sc-d54cea6f-1"})`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    text-decoration: none;
    * {
      text-decoration: none !important;
    }
  }
`,me=(0,x.default)(m.Tv.DeprecatedLabel).withConfig({displayName:"CTACards__HeaderText",componentId:"sc-d54cea6f-2"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,he=(0,x.default)(p.Tz).withConfig({displayName:"CTACards__ResponsiveColumn",componentId:"sc-d54cea6f-3"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function ge(){const{chainId:e}=(0,a.useWeb3React)(),{infoLink:t}=(0,ue.o7)(e);return(0,s.jsxs)(fe,{children:[(0,s.jsx)(xe,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,s.jsxs)(he,{children:[(0,s.jsxs)(me,{children:[(0,s.jsx)(d.cC,{id:"4xl+7r"})," \u2197"]}),(0,s.jsx)(m.Tv.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,s.jsx)(d.cC,{id:"xTN8Uu"})})]})}),(0,s.jsx)(xe,{"data-testid":"cta-infolink",href:t+"pools",children:(0,s.jsxs)(he,{children:[(0,s.jsxs)(me,{style:{alignSelf:"flex-start"},children:[(0,s.jsx)(d.cC,{id:"T6amNF"})," \u2197"]}),(0,s.jsx)(m.Tv.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,s.jsx)(d.cC,{id:"sX+nNt"})})]})})]})}var je=n(55494);const ye=(0,x.default)(p.Tz).withConfig({displayName:"Pool__PageWrapper",componentId:"sc-382ed0f4-0"})`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,we=(0,x.default)(W.m0).withConfig({displayName:"Pool__TitleRow",componentId:"sc-382ed0f4-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,ve=(0,x.default)(W.DA).withConfig({displayName:"Pool__ButtonRow",componentId:"sc-382ed0f4-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,be=(0,x.default)((({flyoutAlignment:e=y.RIGHT,ToggleUI:t,menuItems:n,...i})=>{const o=(0,u.useRef)(),r=(0,v.Wt)(b.Lk.POOL_OVERVIEW_OPTIONS),d=(0,v.xk)(b.Lk.POOL_OVERVIEW_OPTIONS);(0,w.t)(o,r?d:void 0);const a=t||C;return(0,s.jsxs)(k,{ref:o,...i,children:[(0,s.jsx)(a,{onClick:d}),r&&(0,s.jsx)(_,{flyoutAlignment:e,children:n.map((({content:e,link:t,external:n},i)=>n?(0,s.jsx)(T,{href:t,children:e},i):(0,s.jsx)(O,{to:t,children:e},i)))})]})})).withConfig({displayName:"Pool__PoolMenu",componentId:"sc-382ed0f4-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,Ce=x.default.div.withConfig({displayName:"Pool__PoolMenuItem",componentId:"sc-382ed0f4-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,ke=(0,x.default)(c.Ux).withConfig({displayName:"Pool__MoreOptionsButton",componentId:"sc-382ed0f4-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,_e=(0,x.default)(m.Tv.BodyPrimary).withConfig({displayName:"Pool__MoreOptionsText",componentId:"sc-382ed0f4-6"})`
  align-items: center;
  display: flex;
`,Ie=x.default.div.withConfig({displayName:"Pool__ErrorContainer",componentId:"sc-382ed0f4-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,Oe=x.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,Te=(0,x.default)(J.Z).withConfig({displayName:"Pool__NetworkIcon",componentId:"sc-382ed0f4-8"})`
  ${Oe}
`,Pe=(0,x.default)(ee).withConfig({displayName:"Pool__InboxIcon",componentId:"sc-382ed0f4-9"})`
  ${Oe}
`,Le=(0,x.default)(c.DF).withConfig({displayName:"Pool__ResponsiveButtonPrimary",componentId:"sc-382ed0f4-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,$e=x.default.main.withConfig({displayName:"Pool__MainContentWrapper",componentId:"sc-382ed0f4-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function Ne(){return(0,s.jsxs)(je.pr,{children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})}function ze(){const e=(0,x.useTheme)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ye,{children:(0,s.jsx)(p.Tz,{gap:"lg",justify:"center",children:(0,s.jsxs)(p.Tz,{gap:"lg",style:{width:"100%"},children:[(0,s.jsx)(we,{padding:"0",children:(0,s.jsx)(m.Tv.LargeHeader,{children:(0,s.jsx)(d.cC,{id:"lQfOr9"})})}),(0,s.jsx)($e,{children:(0,s.jsx)(Ie,{children:(0,s.jsxs)(m.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,s.jsx)(Te,{strokeWidth:1.2}),(0,s.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,s.jsx)(d.cC,{id:"nFZR3H"})})]})})})]})})}),(0,s.jsx)(R.c,{})]})}function Ee(){const{account:e,chainId:t}=(0,a.useWeb3React)(),n=(0,D.G)(),i=(0,l.LK)(),o=(0,x.useTheme)(),[r,h]=(0,pe.QP)(),{positions:g,loading:j}=(0,Y.W)(e),[w,v]=g?.reduce(((e,t)=>(e[t.liquidity?.isZero()?1:0].push(t),e)),[[],[]])??[[],[]],b=G((0,u.useMemo)((()=>[...w,...r?[]:v]),[v,w,r]));if(!(0,S.EC)(t))return(0,s.jsx)(ze,{});const C=Boolean(!e),k=[{content:(0,s.jsxs)(Ce,{children:[(0,s.jsx)(d.cC,{id:"y5rS9U"}),(0,s.jsx)(te.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,s.jsxs)(Ce,{children:[(0,s.jsx)(d.cC,{id:"F+Ocff"}),(0,s.jsx)(re,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,s.jsxs)(Ce,{children:[(0,s.jsx)(d.cC,{id:"rjZpLn"}),(0,s.jsx)(le,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ye,{children:(0,s.jsx)(p.Tz,{gap:"lg",justify:"center",children:(0,s.jsxs)(p.Tz,{gap:"lg",style:{width:"100%"},children:[(0,s.jsxs)(we,{padding:"0",children:[(0,s.jsx)(m.Tv.LargeHeader,{children:(0,s.jsx)(d.cC,{id:"lQfOr9"})}),(0,s.jsxs)(ve,{children:[n&&(0,s.jsx)(be,{menuItems:k,flyoutAlignment:y.LEFT,ToggleUI:e=>(0,s.jsx)(ke,{...e,children:(0,s.jsxs)(_e,{children:[(0,s.jsx)(d.cC,{id:"2FYpfJ"}),(0,s.jsx)(ce.Z,{size:15})]})})}),(0,s.jsxs)(Le,{"data-cy":"join-pool-button",id:"join-pool-button",as:f.rU,to:"/add/ETH",children:["+ ",(0,s.jsx)(d.cC,{id:"1k0YWs"})]})]})]}),(0,s.jsx)($e,{children:j?(0,s.jsx)(Ne,{}):b&&v&&b.length>0?(0,s.jsx)(M,{positions:b,setUserHideClosedPositions:h,userHideClosedPositions:r}):(0,s.jsxs)(Ie,{children:[(0,s.jsxs)(m.Tv.BodyPrimary,{color:o.neutral3,textAlign:"center",children:[(0,s.jsx)(Pe,{strokeWidth:1,style:{marginTop:"2em"}}),(0,s.jsx)("div",{children:(0,s.jsx)(d.cC,{id:"YgSnQ0"})})]}),!C&&v.length>0&&(0,s.jsx)(c.oD,{style:{marginTop:".5rem"},onClick:()=>h(!r),children:(0,s.jsx)(d.cC,{id:"GOctE4"})}),C&&(0,s.jsx)(c.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:i,children:(0,s.jsx)(d.cC,{id:"GdzYJ9"})})]})}),(0,s.jsx)(m.Pw,{children:(0,s.jsx)(ge,{})})]})})}),(0,s.jsx)(R.c,{})]})}}}]);
//# sourceMappingURL=1457.094ae640.chunk.js.map