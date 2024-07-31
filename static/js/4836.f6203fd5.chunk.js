"use strict";(self.webpackChunk_darkflorist_horswap=self.webpackChunk_darkflorist_horswap||[]).push([[4836],{51745:function(e,i,n){n.d(i,{Z:function(){return a}});var t=n(42893),r=n(12204),s=n(87253);const o=s.default.button.withConfig({displayName:"MultiToggle__ToggleWrapper",componentId:"sc-6dfd833b-0"})`
  display: flex;
  align-items: center;
  width: ${({width:e})=>e??"100%"};
  padding: 1px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 8px;
  border: ${({theme:e})=>"1px solid "+e.surface3};
  cursor: pointer;
  outline: none;
`,d=s.default.span.withConfig({displayName:"MultiToggle__ToggleElement",componentId:"sc-6dfd833b-1"})`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 0.5rem;
  border-radius: 6px;
  justify-content: center;
  height: 100%;
  background: ${({theme:e,isActive:i})=>i?e.surface1:"none"};
  color: ${({theme:e,isActive:i})=>i?e.neutral1:e.neutral3};
  font-size: ${({fontSize:e})=>e??"1rem"};
  font-weight: 535;
  white-space: nowrap;
  :hover {
    user-select: initial;
    color: ${({theme:e,isActive:i})=>i?e.neutral2:e.neutral3};
  }
`;function a({currencyA:e,currencyB:i,handleRateToggle:n}){const s=e?.wrapped,a=i?.wrapped,c=s&&a&&s.sortsBefore(a);return s&&a?(0,t.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:n,children:(0,t.jsxs)(o,{width:"fit-content",children:[(0,t.jsx)(d,{isActive:c,fontSize:"12px",children:(0,t.jsx)(r.cC,{id:"J/hVSQ",values:{0:c?e.symbol:i.symbol}})}),(0,t.jsx)(d,{isActive:!c,fontSize:"12px",children:(0,t.jsx)(r.cC,{id:"J/hVSQ",values:{0:c?i.symbol:e.symbol}})})]})}):null}},46443:function(e,i,n){n.d(i,{t:function(){return x}});var t=n(86003),r=n(15387),s=n(61646),o=n(92796),d=n(13712),a=n(49111),c=n(600);const l=t.O$.from(2).pow(128).sub(1);function x(e,i,n=!1){const t=(0,c.GL)(!1),x=(0,s.Wk)(i?t:null,"ownerOf",[i]).result?.[0],u=i?.toHexString(),h=(0,o.ZP)(),[p,m]=(0,d.useState)();return(0,d.useEffect)((()=>{!async function(){if(t&&u&&x)try{const e=await t.callStatic.collect({tokenId:u,recipient:x,amount0Max:l,amount1Max:l},{from:x});m([e.amount0,e.amount1])}catch{}}()}),[t,u,x,h]),e&&p?[r.CurrencyAmount.fromRawAmount(n?e.token0:(0,a.B)(e.token0),p[0].toString()),r.CurrencyAmount.fromRawAmount(n?e.token1:(0,a.B)(e.token1),p[1].toString())]:[void 0,void 0]}},4836:function(e,i,n){n.r(i),n.d(i,{PositionPageUnsupportedContent:function(){return je},default:function(){return ye}});var t=n(42893),r=n(86003),s=n(12204),o=n(15387),d=n(35206),a=n(80815),c=n(80485),l=n(38517),x=n(42246),u=n(60476),h=n(45533),p=n(13119),m=n(56823),g=n(2304),f=n(20095),j=n(36772),y=n(96962),v=n(48141);const w=[o.ChainId.MAINNET,o.ChainId.OPTIMISM,o.ChainId.POLYGON,o.ChainId.ARBITRUM_ONE,o.ChainId.CELO];var b=n(96456),C=n(600),T=n(58127),D=n(88380),S=n(95202),P=n(46443),I=n(59991),k=n(61646),R=n(46217),M=n(13712),A=n(41440),z=n(80657),_=n(4292),$=n(97905),L=n(87253),N=n(93589),Z=n(21103),F=n(75808),W=n(15993),O=n(56053),B=n(49111),E=n(56588),q=n(22230),U=n(51745),H=n(85729);const G="data:application/json;base64,";var J=n(843),Q=n(54479),Y=n(34120),V=n(55494);const X=(0,L.default)(l.DF).withConfig({displayName:"PositionPage__PositionPageButtonPrimary",componentId:"sc-7d9f8b43-0"})`
  width: 228px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
`,K=L.default.div.withConfig({displayName:"PositionPage__PageWrapper",componentId:"sc-7d9f8b43-1"})`
  padding: 68px 16px 16px 16px;

  min-width: 800px;
  max-width: 960px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    min-width: 100%;
    padding: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    min-width: 100%;
    padding: 16px;
  }
`,ee=L.default.div.withConfig({displayName:"PositionPage__BadgeText",componentId:"sc-7d9f8b43-2"})`
  font-weight: 535;
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,ie=(0,L.default)((({end:e,...i})=>(0,t.jsx)(N.Tv.DeprecatedLabel,{...i}))).withConfig({displayName:"PositionPage__Label",componentId:"sc-7d9f8b43-3"})`
  display: flex;
  font-size: 16px;
  justify-content: ${({end:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,ne=L.default.span.withConfig({displayName:"PositionPage__ExtentsText",componentId:"sc-7d9f8b43-4"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  text-align: center;
  margin-right: 4px;
  font-weight: 535;
`,te=(0,L.default)(N.Tv.DeprecatedMain).withConfig({displayName:"PositionPage__HoverText",componentId:"sc-7d9f8b43-5"})`
  text-decoration: none;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none;
  }
`,re=L.default.span.withConfig({displayName:"PositionPage__DoubleArrow",componentId:"sc-7d9f8b43-6"})`
  color: ${({theme:e})=>e.neutral3};
  margin: 0 1rem;
`,se=(0,L.default)(g.m0).withConfig({displayName:"PositionPage__ResponsiveRow",componentId:"sc-7d9f8b43-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 16px;
    width: 100%;
  }
`,oe=(0,L.default)(se).withConfig({displayName:"PositionPage__ActionButtonResponsiveRow",componentId:"sc-7d9f8b43-8"})`
  width: 50%;
  justify-content: flex-end;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    * {
      width: 100%;
    }
  }
`,de=(0,L.default)(l.gn).withConfig({displayName:"PositionPage__ResponsiveButtonConfirmed",componentId:"sc-7d9f8b43-9"})`
  border-radius: 12px;
  padding: 6px 8px;
  width: fit-content;
  font-size: 16px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: fit-content;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: fit-content;
  }
`,ae=L.default.div.withConfig({displayName:"PositionPage__NFTGrid",componentId:"sc-7d9f8b43-10"})`
  display: grid;
  grid-template: 'overlap';
  min-height: 400px;
`,ce=L.default.canvas.withConfig({displayName:"PositionPage__NFTCanvas",componentId:"sc-7d9f8b43-11"})`
  grid-area: overlap;
`,le=L.default.img.withConfig({displayName:"PositionPage__NFTImage",componentId:"sc-7d9f8b43-12"})`
  grid-area: overlap;
  height: 400px;
  /* Ensures SVG appears on top of canvas. */
  z-index: 1;
`;function xe({inverted:e,pool:i,currencyQuote:n,currencyBase:r}){const{formatPrice:o}=(0,O.Gb)();return i&&n&&r?(0,t.jsx)(x.hl,{padding:"12px",children:(0,t.jsxs)(u.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(ne,{children:(0,t.jsx)(s.cC,{id:"DWd30U"})}),(0,t.jsx)(N.Tv.DeprecatedMediumHeader,{textAlign:"center",children:o({price:e?i.token1Price:i.token0Price,type:O.sw.TokenTx})}),(0,t.jsx)(ne,{children:(0,t.jsx)(s.cC,{id:"7Z4WfS",values:{0:n?.symbol,1:r?.symbol}})})]})}):null}const ue=({children:e,chainId:i,address:n})=>{const r=v.Iy[i];return(0,t.jsx)(N.bm,{to:`/tokens/${r}/${n}`,children:e})},he=({children:e,chainId:i,address:n})=>(0,t.jsx)(N.dL,{href:(0,Y.E)(i,n,Y.r.TOKEN),children:e});function pe({chainId:e,currency:i}){const n=i?.address;if("number"===typeof e&&n){const r=function(e){return!!e&&w.includes(e)}(e)?ue:he;return(0,t.jsx)(r,{chainId:e,address:n,children:(0,t.jsxs)(g.DA,{children:[(0,t.jsx)(m.Z,{currency:i,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsxs)(N.Tv.DeprecatedMain,{children:[i?.symbol," \u2197"]})]})})}return(0,t.jsxs)(g.DA,{children:[(0,t.jsx)(m.Z,{currency:i,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(N.Tv.DeprecatedMain,{children:i?.symbol})]})}function me(e,i,n){const t=i.getContext("2d");if(t){let{width:r,height:s}=e;const o=r/s;s=n,r=Math.round(o*n),i.width=r*devicePixelRatio,i.height=s*devicePixelRatio,i.style.width=r+"px",i.style.height=s+"px",t.scale(devicePixelRatio,devicePixelRatio),t.clearRect(0,0,r,s),t.drawImage(e,0,0,r,s)}}function ge({image:e,height:i}){const[n,r]=(0,M.useState)(!1),s=(0,M.useRef)(null),o=(0,M.useRef)(null);return(0,t.jsxs)(ae,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{o.current&&s.current&&me(o.current,s.current,i),r(!1)},children:[(0,t.jsx)(ce,{ref:s}),(0,t.jsx)(le,{ref:o,src:e,hidden:!n,onLoad:()=>{o.current&&s.current&&me(o.current,s.current,i)}})]})}const fe=({priceLower:e,priceUpper:i,quote:n,base:t,invert:r})=>({priceUpper:r?e?.invert():i,priceLower:r?i?.invert():e,quote:r?t:n,base:r?n:t});function je(){return(0,t.jsx)(K,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,t.jsx)(N.Tv.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,t.jsx)(s.cC,{id:"Ij/sE3"})}),(0,t.jsx)(N.Tv.BodyPrimary,{style:{marginBottom:"32px"},children:(0,t.jsx)(s.cC,{id:"Jbim1e"})}),(0,t.jsx)(X,{as:A.rU,to:"/pools",width:"fit-content",children:(0,t.jsx)(s.cC,{id:"7IwSeQ"})})]})})}function ye(){const{chainId:e}=(0,a.useWeb3React)();return(0,v.EC)(e)?(0,t.jsx)(we,{}):(0,t.jsx)(je,{})}const ve=(0,L.default)(g.DA).withConfig({displayName:"PositionPage__PositionLabelRow",componentId:"sc-7d9f8b43-13"})({flexWrap:"wrap",gap:8});function we(){const{tokenId:e}=(0,z.UO)(),{chainId:i,account:n,provider:v}=(0,a.useWeb3React)(),w=(0,L.useTheme)(),{formatTickPrice:X}=(0,O.Gb)(),ae=function(e){if(e)try{return r.O$.from(e)}catch(i){return}}(e),{loading:ce,position:le}=(0,I.n)(ae),{token0:ue,token1:he,fee:me,liquidity:ye,tickLower:we,tickUpper:be,tokenId:Ce}=le||{},Te=ye?.eq(0),De=function(e){const i=(0,C.GL)(),n=(0,M.useMemo)((()=>[e instanceof r.O$?e.toHexString():e?.toString(16)]),[e]),{result:t,error:s,loading:o,valid:d}=(0,k.Wk)(i,"tokenURI",n,{...k.DB,gasRequired:3e6});return(0,M.useMemo)((()=>{if(s||!d||!e)return{valid:!1,loading:!1};if(o)return{valid:!0,loading:!0};if(!t)return{valid:!1,loading:!1};const[i]=t;if(!i||!i.startsWith(G))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(i.slice(G.length)))}}catch(s){return{valid:!1,loading:!1}}}),[s,o,t,e,d])}(ae),Se=(0,b.dQ)(ue),Pe=(0,b.dQ)(he),Ie=Se?(0,B.B)(Se):void 0,ke=Pe?(0,B.B)(Pe):void 0,[Re,Me]=(0,M.useState)(!1),Ae=(0,R.Z)(i).wrapped.symbol,[ze,_e]=(0,D.A)(Se??void 0,Pe??void 0,me),$e=(0,M.useMemo)((()=>{if(_e&&ye&&"number"===typeof we&&"number"===typeof be)return new d.Position({pool:_e,liquidity:ye.toString(),tickLower:we,tickUpper:be})}),[ye,_e,we,be]),Le=(0,T.Z)(me,we,be),Ne=(0,q.N)($e),[Ze,Fe]=(0,M.useState)(!1),{priceLower:We,priceUpper:Oe,base:Be}=fe({priceLower:Ne.priceLower,priceUpper:Ne.priceUpper,quote:Ne.quote,base:Ne.base,invert:Ze}),Ee=Pe?Be?.equals(Pe):void 0,qe=Ee?Ie:ke,Ue=Ee?ke:Ie,He=(0,M.useMemo)((()=>We&&_e&&Oe?function(e,i,n){try{if(!i.greaterThan(e))return 100;if(!i.lessThan(n))return 0;const t=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(n.toSignificant(15)),s=Number.parseFloat(i.toSignificant(15)),o=Math.floor(1/((Math.sqrt(t*r)-Math.sqrt(r*s))/(s-Math.sqrt(r*s))+1)*100);if(o<0||o>100)throw Error("Out of range");return o}catch{return}}(Ee?Oe.invert():We,_e.token0Price,Ee?We.invert():Oe):void 0),[Ee,_e,We,Oe]),[Ge,Je]=(0,P.t)(_e??void 0,le?.tokenId,Re),Qe=_e?Re?_e.token0:(0,B.B)(_e.token0):void 0,Ye=_e?Re?_e.token1:(0,B.B)(_e.token1):void 0,[Ve,Xe]=(0,M.useState)(!1),[Ke,ei]=(0,M.useState)(null),ii=(0,$.ub)(Ke??void 0),[ni,ti]=(0,M.useState)(!1),ri=(0,S.ZP)(Se??void 0),si=(0,S.ZP)(Pe??void 0),oi=(0,M.useMemo)((()=>{if(!ri||!si||!Ge||!Je)return null;const e=Ge?.wrapped,i=Je?.wrapped;if(!e||!i)return null;const n=ri.quote(e),t=si.quote(i);return n.add(t)}),[ri,si,Ge,Je]),di=(0,M.useMemo)((()=>{if(!ri||!si||!$e)return null;const e=ri.quote($e.amount0),i=si.quote($e.amount1);return e.add(i)}),[ri,si,$e]),ai=(0,$.h7)(),ci=(0,C.GL)(),li=(0,M.useCallback)((async()=>{if(!Qe||!Ye||!i||!ci||!n||!Ce||!v)return;Xe(!0);const{calldata:e,value:t}=d.NonfungiblePositionManager.collectCallParameters({tokenId:Ce.toString(),expectedCurrencyOwed0:Ge??o.CurrencyAmount.fromRawAmount(Qe,0),expectedCurrencyOwed1:Je??o.CurrencyAmount.fromRawAmount(Ye,0),recipient:n}),r={to:ci.address,data:e,value:t},s=await v.getSigner().getChainId();if(i!==s)throw new F.CJ;v.getSigner().estimateGas(r).then((e=>{const i={...r,gasLimit:(0,Q.y)(e)};return v.getSigner().sendTransaction(i).then((e=>{ei(e.hash),Xe(!1),ai(e,{type:J.i.COLLECT_FEES,currencyId0:(0,Z.H)(Qe),currencyId1:(0,Z.H)(Ye),expectedCurrencyOwed0:Ge?.quotient.toString()??o.CurrencyAmount.fromRawAmount(Qe,0).toExact(),expectedCurrencyOwed1:Je?.quotient.toString()??o.CurrencyAmount.fromRawAmount(Ye,0).toExact()})}))})).catch((e=>{Xe(!1),console.error(e)}))}),[i,Ge,Je,Qe,Ye,ci,n,Ce,ai,v]),xi=(0,k.Wk)(Ce?ci:null,"ownerOf",[Ce]).result?.[0],ui=xi===n||le?.operator===n,hi=Ee?Ge:Je,pi=Ee?Je:Ge,mi=_e&&"number"===typeof we?_e.tickCurrent<we:void 0,gi=_e&&"number"===typeof be?_e.tickCurrent>=be:void 0,fi="boolean"===typeof mi&&"boolean"===typeof gi&&(!mi&&!gi);function ji(){return(0,t.jsxs)(u.Tz,{gap:"md",style:{marginTop:"20px"},children:[(0,t.jsx)(x.hl,{padding:"12px 16px",children:(0,t.jsxs)(u.Tz,{gap:"md",children:[(0,t.jsxs)(g.m0,{children:[(0,t.jsxs)(g.DA,{children:[(0,t.jsx)(m.Z,{currency:hi?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(N.Tv.DeprecatedMain,{children:hi?(0,W.Z)(hi,4):"-"})]}),(0,t.jsx)(N.Tv.DeprecatedMain,{children:hi?.currency?.symbol})]}),(0,t.jsxs)(g.m0,{children:[(0,t.jsxs)(g.DA,{children:[(0,t.jsx)(m.Z,{currency:pi?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(N.Tv.DeprecatedMain,{children:pi?(0,W.Z)(pi,4):"-"})]}),(0,t.jsx)(N.Tv.DeprecatedMain,{children:pi?.currency?.symbol})]})]})}),(0,t.jsx)(N.Tv.DeprecatedItalic,{children:(0,t.jsx)(s.cC,{id:"R8aNfS"})}),(0,t.jsx)(l.DF,{"data-testid":"modal-collect-fees-button",onClick:li,children:(0,t.jsx)(s.cC,{id:"vR1m9d"})})]})}const yi=Boolean(ui&&(Ge?.greaterThan(0)||Je?.greaterThan(0))&&Ie&&ke&&(Ie.isNative||ke.isNative)&&!Ke);return le||ce?ce||ze===D.t.LOADING||!me?(0,t.jsxs)(V.pr,{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(K,{children:[(0,t.jsx)(y.Z,{isOpen:ni,onDismiss:()=>ti(!1),attemptingTxn:Ve,hash:Ke??"",reviewContent:()=>(0,t.jsx)(y.p,{title:(0,t.jsx)(s.cC,{id:"tu/fxg"}),onDismiss:()=>ti(!1),topContent:ji}),pendingText:(0,t.jsx)(s.cC,{id:"SGG5Oz"})}),(0,t.jsxs)(u.Tz,{gap:"md",children:[(0,t.jsxs)(u.Tz,{gap:"sm",children:[(0,t.jsx)(A.rU,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pools",children:(0,t.jsx)(te,{children:(0,t.jsx)(s.cC,{id:"sYYMH3"})})}),(0,t.jsxs)(se,{children:[(0,t.jsxs)(ve,{children:[(0,t.jsx)(h.Z,{currency0:Ue,currency1:qe,size:24,margin:!0}),(0,t.jsxs)(N.Tv.DeprecatedLabel,{fontSize:"24px",mr:"10px",children:["\xa0",qe?.symbol,"\xa0/\xa0",Ue?.symbol]}),(0,t.jsx)(c.Z,{style:{marginRight:"8px"},children:(0,t.jsx)(ee,{children:(0,t.jsx)(s.cC,{id:"hbO8db",values:{0:new o.Percent(me,1e6).toSignificant()}})})}),(0,t.jsx)(E.Z,{removed:Te,inRange:fi})]}),ui&&(0,t.jsxs)(oe,{children:[Ie&&ke&&me&&Ce?(0,t.jsx)(l.Ux,{as:A.rU,to:`/increase/${(0,Z.H)(Ie)}/${(0,Z.H)(ke)}/${me}/${Ce}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,t.jsx)(s.cC,{id:"3pgmAj"})}):null,Ce&&!Te?(0,t.jsx)(l.Hm,{as:A.rU,to:`/remove/${Ce}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,t.jsx)(s.cC,{id:"cJtosk"})}):null]})]})]}),(0,t.jsxs)(se,{align:"flex-start",children:[(0,t.jsx)(N.Pw,{style:{height:"100%",marginRight:12},children:"result"in De?(0,t.jsxs)(x.Wm,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,t.jsx)(ge,{image:De.result.image,height:400}),"number"===typeof i&&xi&&!ui?(0,t.jsx)(N.dL,{href:(0,Y.E)(i,xi,Y.r.ADDRESS),children:(0,t.jsx)(s.cC,{id:"LtI9AS"})}):null]}):(0,t.jsx)(x.Wm,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,t.jsx)(p.tG,{})})}),(0,t.jsxs)(u.Tz,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,t.jsx)(x.Wm,{children:(0,t.jsxs)(u.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsxs)(u.Tz,{gap:"md",children:[(0,t.jsx)(ie,{children:(0,t.jsx)(s.cC,{id:"6y2TB3"})}),di?.greaterThan(new o.Fraction(1,100))?(0,t.jsx)(N.Tv.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:(0,t.jsx)(s.cC,{id:"8F8jpm",values:{0:di.toFixed(2,{groupSeparator:","})}})}):(0,t.jsx)(N.Tv.DeprecatedLargeHeader,{color:w.neutral1,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(s.cC,{id:"5qs2w+"})})]}),(0,t.jsx)(x.hl,{padding:"12px 16px",children:(0,t.jsxs)(u.Tz,{gap:"md",children:[(0,t.jsxs)(g.m0,{children:[(0,t.jsx)(pe,{chainId:i,currency:qe}),(0,t.jsxs)(g.DA,{children:[(0,t.jsx)(N.Tv.DeprecatedMain,{children:Ee?$e?.amount0.toSignificant(4):$e?.amount1.toSignificant(4)}),"number"!==typeof He||Te?null:(0,t.jsx)(c.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(ee,{children:(0,t.jsx)(s.cC,{id:"hbO8db",values:{0:Ee?He:100-He}})})})]})]}),(0,t.jsxs)(g.m0,{children:[(0,t.jsx)(pe,{chainId:i,currency:Ue}),(0,t.jsxs)(g.DA,{children:[(0,t.jsx)(N.Tv.DeprecatedMain,{children:Ee?$e?.amount1.toSignificant(4):$e?.amount0.toSignificant(4)}),"number"!==typeof He||Te?null:(0,t.jsx)(c.Z,{style:{marginLeft:"10px"},children:(0,t.jsx)(ee,{children:(0,t.jsx)(s.cC,{id:"hbO8db",values:{0:Ee?100-He:He}})})})]})]})]})})]})}),(0,t.jsx)(x.Wm,{children:(0,t.jsxs)(u.Tz,{gap:"md",style:{width:"100%"},children:[(0,t.jsx)(u.Tz,{gap:"md",children:(0,t.jsxs)(g.m0,{style:{alignItems:"flex-start"},children:[(0,t.jsxs)(u.Tz,{gap:"md",children:[(0,t.jsx)(ie,{children:(0,t.jsx)(s.cC,{id:"XCqY8/"})}),oi?.greaterThan(new o.Fraction(1,100))?(0,t.jsx)(N.Tv.DeprecatedLargeHeader,{color:w.success,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(s.cC,{id:"8F8jpm",values:{0:oi.toFixed(2,{groupSeparator:","})}})}):(0,t.jsx)(N.Tv.DeprecatedLargeHeader,{color:w.neutral1,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(s.cC,{id:"5qs2w+"})})]}),ui&&(Ge?.greaterThan(0)||Je?.greaterThan(0)||Ke)?(0,t.jsx)(de,{"data-testid":"collect-fees-button",disabled:Ve||!!Ke,confirmed:!!Ke&&!ii,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>ti(!0),children:Ke&&!ii?(0,t.jsx)(N.Tv.DeprecatedMain,{color:w.neutral1,children:(0,t.jsx)(s.cC,{id:"Jpq3gO"})}):ii||Ve?(0,t.jsxs)(N.Tv.DeprecatedMain,{color:w.neutral1,children:[" ",(0,t.jsx)(f.bb,{children:(0,t.jsx)(s.cC,{id:"1RB9kv"})})]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(N.Tv.DeprecatedMain,{color:w.white,children:(0,t.jsx)(s.cC,{id:"h5pjuM"})})})}):null]})}),(0,t.jsx)(x.hl,{padding:"12px 16px",children:(0,t.jsxs)(u.Tz,{gap:"md",children:[(0,t.jsxs)(g.m0,{children:[(0,t.jsxs)(g.DA,{children:[(0,t.jsx)(m.Z,{currency:hi?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(N.Tv.DeprecatedMain,{children:hi?.currency?.symbol})]}),(0,t.jsx)(g.DA,{children:(0,t.jsx)(N.Tv.DeprecatedMain,{children:hi?(0,W.Z)(hi,4):"-"})})]}),(0,t.jsxs)(g.m0,{children:[(0,t.jsxs)(g.DA,{children:[(0,t.jsx)(m.Z,{currency:pi?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(N.Tv.DeprecatedMain,{children:pi?.currency?.symbol})]}),(0,t.jsx)(g.DA,{children:(0,t.jsx)(N.Tv.DeprecatedMain,{children:pi?(0,W.Z)(pi,4):"-"})})]})]})}),yi&&(0,t.jsx)(u.Tz,{gap:"md",children:(0,t.jsxs)(g.m0,{children:[(0,t.jsx)(N.Tv.DeprecatedMain,{children:(0,t.jsx)(s.cC,{id:"oCijuv",values:{nativeWrappedSymbol:Ae}})}),(0,t.jsx)(j.Z,{id:"receive-as-weth",isActive:Re,toggle:()=>Me((e=>!e))})]})})]})})]})]}),(0,t.jsx)(x.Wm,{children:(0,t.jsxs)(u.Tz,{gap:"md",children:[(0,t.jsxs)(g.m0,{children:[(0,t.jsxs)(g.DA,{children:[(0,t.jsx)(ie,{display:"flex",style:{marginRight:"12px"},children:(0,t.jsx)(s.cC,{id:"7Bu2+f"})}),(0,t.jsx)(N.v_,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E.Z,{removed:Te,inRange:fi}),(0,t.jsx)("span",{style:{width:"8px"}})]})})]}),(0,t.jsx)(g.DA,{children:Ue&&qe&&(0,t.jsx)(U.Z,{currencyA:Ue,currencyB:qe,handleRateToggle:()=>Fe(!Ze)})})]}),(0,t.jsxs)(g.m0,{children:[(0,t.jsx)(x.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(u.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(ne,{children:(0,t.jsx)(s.cC,{id:"EQs1sJ"})}),(0,t.jsx)(N.Tv.DeprecatedMediumHeader,{textAlign:"center",children:X({price:We,atLimit:Le,direction:_.Mb.LOWER,numberType:O.sw.TokenTx})}),(0,t.jsxs)(ne,{children:[" ",(0,t.jsx)(s.cC,{id:"7Z4WfS",values:{0:qe?.symbol,1:Ue?.symbol}})]}),fi&&(0,t.jsx)(N.Tv.DeprecatedSmall,{color:w.neutral3,children:(0,t.jsx)(s.cC,{id:"NxMldE",values:{0:Ue?.symbol}})})]})}),(0,t.jsx)(re,{children:"\u27f7"}),(0,t.jsx)(x.hl,{padding:"12px",width:"100%",children:(0,t.jsxs)(u.Tz,{gap:"sm",justify:"center",children:[(0,t.jsx)(ne,{children:(0,t.jsx)(s.cC,{id:"5etEUX"})}),(0,t.jsx)(N.Tv.DeprecatedMediumHeader,{textAlign:"center",children:X({price:Oe,atLimit:Le,direction:_.Mb.UPPER,numberType:O.sw.TokenTx})}),(0,t.jsxs)(ne,{children:[" ",(0,t.jsx)(s.cC,{id:"7Z4WfS",values:{0:qe?.symbol,1:Ue?.symbol}})]}),fi&&(0,t.jsx)(N.Tv.DeprecatedSmall,{color:w.neutral3,children:(0,t.jsx)(s.cC,{id:"NxMldE",values:{0:qe?.symbol}})})]})})]}),(0,t.jsx)(xe,{inverted:Ee,pool:_e,currencyQuote:qe,currencyBase:Ue})]})})]})]}),(0,t.jsx)(H.c,{})]}):(0,t.jsx)(je,{})}},15993:function(e,i,n){n.d(i,{Z:function(){return a}});var t=n(15387),r=n(29198),s=n(44998),o=n.n(s);function d({number:e,locale:i,sigFigs:n,fixedDecimals:t,options:s={}}){let o,d;if(o=!i||i&&!r.RF.includes(i)?r.ZW:[i,r.ZW],s.minimumFractionDigits=s.minimumFractionDigits||t,s.maximumFractionDigits=s.maximumFractionDigits||t,s.maximumSignificantDigits=s.maximumSignificantDigits||t?void 0:n,"number"===typeof e)d=t?parseFloat(e.toFixed(t)):e;else{const i=parseFloat(e.toSignificant(n));d=t?parseFloat(i.toFixed(t)):i}return d.toLocaleString(o,s)}function a(e,i,n=r.ZW,s){return e?o().equal(e.quotient,o().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new t.Fraction(1,1e5))?`<${d({number:1e-5,locale:n})}`:d({number:e,locale:n,sigFigs:i,fixedDecimals:s}):"-"}}}]);
//# sourceMappingURL=4836.f6203fd5.chunk.js.map