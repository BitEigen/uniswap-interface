"use strict";(self.webpackChunk_darkflorist_horswap=self.webpackChunk_darkflorist_horswap||[]).push([[398],{86299:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(42893),r=t(15387),c=t(44998),o=t.n(c);const s=new r.Fraction(o().BigInt(1),o().BigInt(1e6));function a({currencyAmount:e,significantDigits:n=4}){return(0,i.jsx)(i.Fragment,{children:e.equalTo(o().BigInt(0))?"0":e.greaterThan(s)?e.toSignificant(n):`<${s.toSignificant(1)}`})}},4987:function(e,n,t){t.d(n,{q:function(){return C},w:function(){return k}});var i=t(42893),r=t(12204),c=t(80815),o=t(94372),s=t(46591),a=t(41440),d=t(80657),u=t(47096),l=t(63498),x=t(40740),p=t(4292),h=t(87253),m=t(93589),g=t(47371),f=t(2304);const y=h.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-ee271e70-0"})`
  ${g.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,j=(0,h.default)(a.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-ee271e70-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,h.default)(m.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-ee271e70-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,v=(0,h.default)(s.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-ee271e70-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function C({origin:e}){return(0,i.jsx)(y,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(a.rU,{to:e,children:(0,i.jsx)(v,{})}),(0,i.jsx)(b,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const w=(0,h.default)(m.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-ee271e70-4"})`
  flex: 1;
  margin: auto;
`;function k({adding:e,creating:n,autoSlippage:t,positionID:s,children:a}){const{chainId:m}=(0,c.useWeb3React)(),g=(0,h.useTheme)(),b=(0,l.T)(),C=(0,d.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(s?`/${s.toString()}`:"");return(0,i.jsx)(y,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(j,{to:C,onClick:()=>{e&&(b((0,x.dA)()),b((0,p.dA)()))},flex:a?"1":void 0,children:(0,i.jsx)(v,{stroke:g.neutral2})}),(0,i.jsx)(w,{textAlign:a?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),a&&(0,i.jsx)(u.xu,{style:{marginRight:".5rem"},children:a}),(0,i.jsx)(o.Z,{autoSlippage:t,chainId:m})]})})}},22827:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(42893),r=t(13712);const c=t(87253).default.input.withConfig({displayName:"Slider__StyledRangeInput",componentId:"sc-2b24fd52-0"})`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function o({value:e,onChange:n,min:t=0,step:o=1,max:s=100,size:a=28,...d}){const u=(0,r.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,i.jsx)(c,{size:a,...d,type:"range",value:e,style:{padding:"15px 0"},onChange:u,"aria-labelledby":"input slider",step:o,min:t,max:s})}},12703:function(e,n,t){t.d(n,{SS:function(){return l},sq:function(){return a},RF:function(){return d},uO:function(){return u},I8:function(){return s}});var i=t(87253),r=t.p+"static/media/big_unicorn.90ddcbf00b3ff1ad4495.png",c=t.p+"static/media/noise.3c7efafc83614205bd1a.png",o=t(60476);const s=(0,i.default)(o.Tz).withConfig({displayName:"styled__DataCard",componentId:"sc-3de63375-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #000000 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,a=i.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-3de63375-1"})`
  background: url(${r});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,d=i.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-3de63375-2"})`
  background: url(${c});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,u=(0,i.default)(o.Tz).withConfig({displayName:"styled__CardSection",componentId:"sc-3de63375-3"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,l=i.default.div.withConfig({displayName:"styled__Break",componentId:"sc-3de63375-4"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},80558:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(13712);function r(e,n,t=100){const[r,c]=(0,i.useState)((()=>e)),o=(0,i.useRef)(),s=(0,i.useCallback)((e=>{c(e),o.current&&clearTimeout(o.current),o.current=setTimeout((()=>{n(e),o.current=void 0}),t)}),[t,n]);return(0,i.useEffect)((()=>{o.current&&(clearTimeout(o.current),o.current=void 0),c(e)}),[e]),[r,s]}},72714:function(e,n,t){t.d(n,{Z:function(){return s},e:function(){return o}});var i=t(42893),r=t(87253),c=t(437);const o=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-bb0fd59b-0"})`
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
  z-index: ${c.k.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function s(e){return(0,i.jsx)(o,{...e})}},62247:function(e,n,t){t.r(n),t.d(n,{default:function(){return ne}});var i=t(42893),r=t(86003),c=t(12204),o=t(15387),s=t(35206),a=t(80815),d=t(56588),u=t(38517),l=t(42246),x=t(60476),p=t(45533),h=t(12703),m=t(86299),g=t(25575),f=t(56823),y=t(4987),j=t(2304),b=t(22827),v=t(36772),C=t(48141),w=t(600),k=t(80558),S=t(57282),z=t(59991),T=t(46217),I=t(4836),_=t(13712),$=t(80657),A=t(47096),L=t(96456),Z=t(88380),q=t(46443),W=t(63498),N=t(49111),D=t(19918);function R(){return(0,W.C)((e=>e.burnV3))}var V=t(97905),F=t(20955),B=t(87253),O=t(93589),P=t(75808),M=t(96962),E=t(58025),H=t(843),J=t(54479),U=t(21103),G=t(72714),K=t(55494);const Q=B.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-53ad7253-0"})`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,Y=(0,B.default)(K.ER).withConfig({displayName:"styled__SmallMaxButton",componentId:"sc-53ad7253-1"})`
  font-size: 12px;
`,X=(0,B.default)(A.xv).withConfig({displayName:"styled__ResponsiveHeaderText",componentId:"sc-53ad7253-2"})`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`,ee=new o.Percent(5,100);function ne(){const{chainId:e}=(0,a.useWeb3React)(),{tokenId:n}=(0,$.UO)(),t=(0,$.TH)(),c=(0,_.useMemo)((()=>{try{return r.O$.from(n)}catch{return null}}),[n]),{position:o,loading:s}=(0,z.n)(c??void 0);return null===c||c.eq(0)?(0,i.jsx)($.Fg,{to:{...t,pathname:"/pools"},replace:!0}):(0,C.EC)(e)&&(s||o)?(0,i.jsx)(te,{tokenId:c}):(0,i.jsx)(I.PositionPageUnsupportedContent,{})}function te({tokenId:e}){const{position:n}=(0,z.n)(e),t=(0,B.useTheme)(),{account:r,chainId:C,provider:I}=(0,a.useWeb3React)(),[$,K]=(0,_.useState)(!1),ne=(0,T.Z)(C).wrapped.symbol,{percent:te}=R(),{position:ie,liquidityPercentage:re,liquidityValue0:ce,liquidityValue1:oe,feeValue0:se,feeValue1:ae,outOfRange:de,error:ue}=function(e,n=!1){const{account:t}=(0,a.useWeb3React)(),{percent:r}=R(),d=(0,L.dQ)(e?.token0),u=(0,L.dQ)(e?.token1),[,l]=(0,Z.A)(d??void 0,u??void 0,e?.fee),x=(0,_.useMemo)((()=>l&&e?.liquidity&&"number"===typeof e?.tickLower&&"number"===typeof e?.tickUpper?new s.Position({pool:l,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0),[l,e]),p=new o.Percent(r,100),h=x?p.multiply(x.amount0.quotient).quotient:void 0,m=x?p.multiply(x.amount1.quotient).quotient:void 0,g=d&&h?o.CurrencyAmount.fromRawAmount(n?d:(0,N.B)(d),h):void 0,f=u&&m?o.CurrencyAmount.fromRawAmount(n?u:(0,N.B)(u),m):void 0,[y,j]=(0,q.t)(l??void 0,e?.tokenId,n),b=!(!l||!e)&&(l.tickCurrent<e.tickLower||l.tickCurrent>e.tickUpper);let v;return t||(v=(0,i.jsx)(c.cC,{id:"VHOVEJ"})),0===r&&(v=v??(0,i.jsx)(c.cC,{id:"Sta9CR"})),{position:x,liquidityPercentage:p,liquidityValue0:g,liquidityValue1:f,feeValue0:y,feeValue1:j,outOfRange:b,error:v}}(n,$),{onPercentSelect:le}=function(){const e=(0,W.T)();return{onPercentSelect:(0,_.useCallback)((n=>{e((0,D.o)({percent:n}))}),[e])}}(),xe=n?.liquidity?.eq(0),[pe,he]=(0,k.Z)(te,le),me=(0,S.Z)(),ge=(0,F.eq)(ee),[fe,ye]=(0,_.useState)(!1),[je,be]=(0,_.useState)(!1),[ve,Ce]=(0,_.useState)(),we=(0,V.h7)(),ke=(0,w.GL)(),Se=(0,_.useCallback)((async()=>{if(be(!0),!ke||!ce||!oe||!me||!r||!C||!ie||!re||!I)return;const{calldata:n,value:t}=s.NonfungiblePositionManager.removeCallParameters(ie,{tokenId:e.toString(),liquidityPercentage:re,slippageTolerance:ge,deadline:me.toString(),collectOptions:{expectedCurrencyOwed0:se??o.CurrencyAmount.fromRawAmount(ce.currency,0),expectedCurrencyOwed1:ae??o.CurrencyAmount.fromRawAmount(oe.currency,0),recipient:r}}),i={to:ke.address,data:n,value:t},c=await I.getSigner().getChainId();if(C!==c)throw new P.CJ;I.getSigner().estimateGas(i).then((e=>{const n={...i,gasLimit:(0,J.y)(e)};return I.getSigner().sendTransaction(n).then((e=>{Ce(e.hash),be(!1),we(e,{type:H.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,U.H)(ce.currency),quoteCurrencyId:(0,U.H)(oe.currency),expectedAmountBaseRaw:ce.quotient.toString(),expectedAmountQuoteRaw:oe.quotient.toString()})}))})).catch((e=>{be(!1),console.error(e)}))}),[ke,ce,oe,me,r,C,ie,re,I,e,ge,se,ae,we]),ze=(0,_.useCallback)((()=>{ye(!1),ve&&he(0),be(!1),Ce("")}),[he,ve]),Te=(0,i.jsx)(c.cC,{id:"F8SmOj",values:{0:ce?.toSignificant(6),1:ce?.currency?.symbol,2:oe?.toSignificant(6),3:oe?.currency?.symbol}});function Ie(){return(0,i.jsxs)(x.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,i.jsxs)(j.m0,{align:"flex-end",children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(c.cC,{id:"I4bzgz",values:{0:ce?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ce&&(0,i.jsx)(m.Z,{currencyAmount:ce})}),(0,i.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:ce?.currency})]})]}),(0,i.jsxs)(j.m0,{align:"flex-end",children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(c.cC,{id:"I4bzgz",values:{0:oe?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:oe&&(0,i.jsx)(m.Z,{currencyAmount:oe})}),(0,i.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:oe?.currency})]})]}),se?.greaterThan(0)||ae?.greaterThan(0)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(O.Tv.DeprecatedItalic,{fontSize:12,color:t.neutral2,textAlign:"left",padding:"8px 0 0 0",children:(0,i.jsx)(c.cC,{id:"QwTcLK"})}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(c.cC,{id:"Vn8uJL",values:{0:se?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:se&&(0,i.jsx)(m.Z,{currencyAmount:se})}),(0,i.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:se?.currency})]})]}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(c.cC,{id:"Vn8uJL",values:{0:ae?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ae&&(0,i.jsx)(m.Z,{currencyAmount:ae})}),(0,i.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:ae?.currency})]})]})]}):null,(0,i.jsx)(u.DF,{mt:"16px",onClick:Se,children:(0,i.jsx)(c.cC,{id:"t/YqKh"})})]})}const _e=Boolean(ce?.currency&&oe?.currency&&(ce.currency.isNative||oe.currency.isNative||E.Fl[ce.currency.chainId]?.equals(ce.currency.wrapped)||E.Fl[oe.currency.chainId]?.equals(oe.currency.wrapped)));return(0,i.jsxs)(x.Tz,{children:[(0,i.jsx)(M.Z,{isOpen:fe,onDismiss:ze,attemptingTxn:je,hash:ve??"",reviewContent:()=>(0,i.jsx)(M.p,{title:(0,i.jsx)(c.cC,{id:"cJtosk"}),onDismiss:ze,topContent:Ie}),pendingText:Te}),(0,i.jsxs)(G.Z,{$maxWidth:"unset",children:[(0,i.jsx)(y.w,{creating:!1,adding:!1,positionID:e.toString(),autoSlippage:ee}),(0,i.jsx)(Q,{children:n?(0,i.jsxs)(x.Tz,{gap:"lg",children:[(0,i.jsxs)(j.m0,{children:[(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(p.Z,{currency0:ce?.currency,currency1:oe?.currency,size:20,margin:!0}),(0,i.jsx)(O.Tv.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${ce?.currency?.symbol}/${oe?.currency?.symbol}`})]}),(0,i.jsx)(d.Z,{removed:xe,inRange:!de})]}),(0,i.jsx)(l.hl,{children:(0,i.jsxs)(x.Tz,{gap:"md",children:[(0,i.jsx)(O.Tv.DeprecatedMain,{fontWeight:485,children:(0,i.jsx)(c.cC,{id:"hehnjM"})}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(X,{children:(0,i.jsx)(c.cC,{id:"AGSFTV",values:{percentForSlider:pe}})}),(0,i.jsxs)(j.BA,{gap:"4px",justify:"flex-end",children:[(0,i.jsx)(Y,{onClick:()=>le(25),width:"20%",children:(0,i.jsx)(c.cC,{id:"Xeb0wM"})}),(0,i.jsx)(Y,{onClick:()=>le(50),width:"20%",children:(0,i.jsx)(c.cC,{id:"wW+u6Y"})}),(0,i.jsx)(Y,{onClick:()=>le(75),width:"20%",children:(0,i.jsx)(c.cC,{id:"N+aNR1"})}),(0,i.jsx)(Y,{onClick:()=>le(100),width:"20%",children:(0,i.jsx)(c.cC,{id:"CK1KXz"})})]})]}),(0,i.jsx)(b.Z,{value:pe,onChange:he})]})}),(0,i.jsx)(l.hl,{children:(0,i.jsxs)(x.Tz,{gap:"md",children:[(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,id:"remove-pooled-tokena-symbol",children:(0,i.jsx)(c.cC,{id:"I4bzgz",values:{0:ce?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ce&&(0,i.jsx)(m.Z,{currencyAmount:ce})}),(0,i.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:ce?.currency})]})]}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,id:"remove-pooled-tokenb-symbol",children:(0,i.jsx)(c.cC,{id:"I4bzgz",values:{0:oe?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:oe&&(0,i.jsx)(m.Z,{currencyAmount:oe})}),(0,i.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:oe?.currency})]})]}),se?.greaterThan(0)||ae?.greaterThan(0)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.SS,{}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(c.cC,{id:"Vn8uJL",values:{0:se?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:se&&(0,i.jsx)(m.Z,{currencyAmount:se})}),(0,i.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:se?.currency})]})]}),(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,children:(0,i.jsx)(c.cC,{id:"Vn8uJL",values:{0:ae?.currency?.symbol}})}),(0,i.jsxs)(j.DA,{children:[(0,i.jsx)(A.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:ae&&(0,i.jsx)(m.Z,{currencyAmount:ae})}),(0,i.jsx)(f.Z,{size:"20px",style:{marginLeft:"8px"},currency:ae?.currency})]})]})]}):null]})}),_e&&(0,i.jsxs)(j.m0,{children:[(0,i.jsx)(O.Tv.DeprecatedMain,{children:(0,i.jsx)(c.cC,{id:"oCijuv",values:{nativeWrappedSymbol:ne}})}),(0,i.jsx)(v.Z,{id:"receive-as-weth",isActive:$,toggle:()=>K((e=>!e))})]}),(0,i.jsx)("div",{style:{display:"flex"},children:(0,i.jsx)(x.Tz,{gap:"md",style:{flex:"1"},children:(0,i.jsx)(u.gn,{confirmed:!1,disabled:xe||0===te||!ce,onClick:()=>ye(!0),children:xe?(0,i.jsx)(c.cC,{id:"D87pha"}):ue??(0,i.jsx)(c.cC,{id:"t/YqKh"})})})})]}):(0,i.jsx)(g.Z,{})})]})]})}}}]);
//# sourceMappingURL=398.780d504a.chunk.js.map