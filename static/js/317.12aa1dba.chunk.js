"use strict";(self.webpackChunk_darkflorist_horswap=self.webpackChunk_darkflorist_horswap||[]).push([[317],{56588:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(42893),o=n(12204),r=n(84071),s=n(34578),a=n(87253),d=n(62700);const l=a.default.div.withConfig({displayName:"RangeBadge__BadgeWrapper",componentId:"sc-5538a536-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,c=a.default.div.withConfig({displayName:"RangeBadge__BadgeText",componentId:"sc-5538a536-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,u=a.default.span.withConfig({displayName:"RangeBadge__ActiveDot",componentId:"sc-5538a536-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,p=a.default.div.withConfig({displayName:"RangeBadge__LabelText",componentId:"sc-5538a536-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function m({removed:e,inRange:t}){const n=(0,a.useTheme)();return(0,i.jsx)(l,{children:e?(0,i.jsx)(d.ud,{text:(0,i.jsx)(o.cC,{id:"MZPP7t"}),children:(0,i.jsxs)(p,{color:n.neutral2,children:[(0,i.jsx)(c,{children:(0,i.jsx)(o.cC,{id:"D87pha"})}),(0,i.jsx)(r.Z,{width:12,height:12})]})}):t?(0,i.jsx)(d.ud,{text:(0,i.jsx)(o.cC,{id:"aIvv/z"}),children:(0,i.jsxs)(p,{color:n.success,children:[(0,i.jsx)(c,{children:(0,i.jsx)(o.cC,{id:"vOyUlD"})}),(0,i.jsx)(u,{})]})}):(0,i.jsx)(d.ud,{text:(0,i.jsx)(o.cC,{id:"IwiTcw"}),children:(0,i.jsxs)(p,{color:n.deprecated_accentWarning,children:[(0,i.jsx)(c,{children:(0,i.jsx)(o.cC,{id:"i3Z+/Z"})}),(0,i.jsx)(s.Z,{width:12,height:12})]})})})}},94160:function(e,t,n){var i=n(42893),o=n(62700),r=n(13712);const s=n(87253).default.span.withConfig({displayName:"HoverInlineText__TextWrapper",componentId:"sc-707bc6e1-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`;t.Z=({text:e,maxCharacters:t=20,margin:n=!1,adjustSize:a=!1,fontSize:d,textColor:l,link:c,...u})=>{const[p,m]=(0,r.useState)(!1);return e?e.length>t?(0,i.jsx)(o.ZP,{text:e,show:p,children:(0,i.jsx)(s,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),margin:n,adjustSize:a,textColor:l,link:c,fontSize:d,...u,children:" "+e.slice(0,t-1)+"..."})}):(0,i.jsx)(s,{margin:n,adjustSize:a,link:c,fontSize:d,textColor:l,...u,children:e}):(0,i.jsx)("span",{})}},22230:function(e,t,n){n.d(t,{N:function(){return M},Z:function(){return A}});var i=n(42893),o=n(12204),r=n(15387),s=n(35206),a=n(56588),d=n(45533),l=n(94160),c=n(25575),u=n(2304),p=n(96456),m=n(58127),f=n(88380),y=n(13712),h=n(41440),x=n(4292),g=n(87253),w=n(43108),b=n(93589),T=n(56053),I=n(49111),k=n(58025);const v=(0,g.default)(h.rU).withConfig({displayName:"PositionListItem__LinkRow",componentId:"sc-26239f77-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${w.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,_=g.default.div.withConfig({displayName:"PositionListItem__DataLineItem",componentId:"sc-26239f77-1"})`
  font-size: 14px;
`,j=(0,g.default)(_).withConfig({displayName:"PositionListItem__RangeLineItem",componentId:"sc-26239f77-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,C=g.default.span.withConfig({displayName:"PositionListItem__DoubleArrow",componentId:"sc-26239f77-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,L=(0,g.default)(b.Tv.BodySmall).withConfig({displayName:"PositionListItem__RangeText",componentId:"sc-26239f77-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,N=(0,g.default)(b.Tv.UtilityBadge).withConfig({displayName:"PositionListItem__FeeTierText",componentId:"sc-26239f77-5"})`
  font-size: 16px !important;
  margin-left: 8px !important;
  color: ${({theme:e})=>e.neutral3};
`,P=(0,g.default)(b.Tv.BodySmall).withConfig({displayName:"PositionListItem__ExtentsText",componentId:"sc-26239f77-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,S=g.default.div.withConfig({displayName:"PositionListItem__PrimaryPositionIdData",componentId:"sc-26239f77-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function M(e){if(!e)return{};const t=e.amount0.currency,n=e.amount1.currency;if([k.h1,k.Hz,k.AA].some((e=>e.equals(t))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n};return[...Object.values(k.Fl),k.ML].some((e=>e&&e.equals(n)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:n,base:t}}function A({token0:e,token1:t,tokenId:n,fee:h,liquidity:g,tickLower:w,tickUpper:k}){const{formatTickPrice:_}=(0,T.Gb)(),A=(0,p.dQ)(e),X=(0,p.dQ)(t),O=A?(0,I.B)(A):void 0,E=X?(0,I.B)(X):void 0,[,q]=(0,f.A)(O??void 0,E??void 0,h),z=(0,y.useMemo)((()=>{if(q)return new s.Position({pool:q,liquidity:g.toString(),tickLower:w,tickUpper:k})}),[g,q,w,k]),$=(0,m.Z)(h,w,k),{priceLower:B,priceUpper:D,quote:G,base:R}=M(z),U=G&&(0,I.B)(G),Z=R&&(0,I.B)(R),W=!!q&&(q.tickCurrent<w||q.tickCurrent>=k),V="/pools/"+n,Y=g?.eq(0);return(0,i.jsxs)(v,{to:V,children:[(0,i.jsxs)(u.m0,{children:[(0,i.jsxs)(S,{children:[(0,i.jsx)(d.Z,{currency0:Z,currency1:U,size:18,margin:!0}),(0,i.jsxs)(b.Tv.SubHeader,{children:["\xa0",U?.symbol,"\xa0/\xa0",Z?.symbol]}),(0,i.jsx)(N,{children:(0,i.jsx)(o.cC,{id:"hbO8db",values:{0:new r.Percent(h,1e6).toSignificant()}})})]}),(0,i.jsx)(a.Z,{removed:Y,inRange:!W})]}),B&&D?(0,i.jsxs)(j,{children:[(0,i.jsxs)(L,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(o.cC,{id:"0uYsLP"})}),(0,i.jsx)(o.cC,{id:"YAzUzD",values:{0:_({price:B,atLimit:$,direction:x.Mb.LOWER})},components:{0:(0,i.jsx)("span",{}),1:(0,i.jsx)(l.Z,{text:U?.symbol}),2:(0,i.jsx)(l.Z,{text:Z?.symbol??""})}})]})," ",(0,i.jsxs)(b.Pw,{children:[(0,i.jsx)(C,{children:"\u2194"})," "]}),(0,i.jsxs)(b.Z,{children:[(0,i.jsx)(C,{children:"\u2194"})," "]}),(0,i.jsxs)(L,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(o.cC,{id:"BniuBY"})}),(0,i.jsx)(o.cC,{id:"YAzUzD",values:{0:_({price:D,atLimit:$,direction:x.Mb.UPPER})},components:{0:(0,i.jsx)("span",{}),1:(0,i.jsx)(l.Z,{text:U?.symbol}),2:(0,i.jsx)(l.Z,{maxCharacters:10,text:Z?.symbol})}})]})]}):(0,i.jsx)(c.Z,{})]})}},58127:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(35206),o=n(13712),r=n(4292);function s(e,t,n){return(0,o.useMemo)((()=>({[r.Mb.LOWER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[r.Mb.UPPER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0})),[e,t,n])}},88380:function(e,t,n){n.d(t,{t:function(){return f},A:function(){return y}});var i=n(45433),o=JSON.parse('{"Mt":[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]}'),r=n(35206),s=n(80815),a=n(44998),d=n.n(a),l=n(61646),c=n(13712);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=new i.vU(o.Mt);let m=class{static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=t,{address:s}=n,a=`${e}:${o}:${s}:${i.toString()}`,d=this.addresses.find((e=>e.key===a));if(d)return d.address;const l={key:a,address:(0,r.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i})};return this.addresses.unshift(l),l.address}static getPool(e,t,n,i,o,s){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const a=this.pools.find((r=>r.token0===e&&r.token1===t&&r.fee===n&&d().EQ(r.sqrtRatioX96,i)&&d().EQ(r.liquidity,o)&&r.tickCurrent===s));if(a)return a;const l=new r.Pool(e,t,n,i,o,s);return this.pools.unshift(l),l}};var f;function y(e,t,n){return function(e){const{chainId:t}=(0,s.useWeb3React)(),n=(0,c.useMemo)((()=>t?e.map((([e,t,n])=>{if(e&&t&&n){const i=e.wrapped,o=t.wrapped;if(i.equals(o))return;return i.sortsBefore(o)?[i,o,n]:[o,i,n]}})):new Array(e.length)),[t,e]),i=(0,c.useMemo)((()=>{const e=t&&"0x137bcB1e99681cF823D2fDE9B90cf97C3b18fA3C";return e?n.map((t=>t&&m.getPoolAddress(e,...t))):new Array(n.length)}),[t,n]),o=(0,l._Y)(i,p,"slot0"),r=(0,l._Y)(i,p,"liquidity");return(0,c.useMemo)((()=>e.map(((e,t)=>{const i=n[t];if(!i)return[f.INVALID,null];const[s,a,d]=i;if(!o[t])return[f.INVALID,null];const{result:l,loading:c,valid:u}=o[t];if(!r[t])return[f.INVALID,null];const{result:p,loading:y,valid:h}=r[t];if(!i||!u||!h)return[f.INVALID,null];if(c||y)return[f.LOADING,null];if(!l||!p)return[f.NOT_EXISTS,null];if(!l.sqrtPriceX96||l.sqrtPriceX96.eq(0))return[f.NOT_EXISTS,null];try{const e=m.getPool(s,a,d,l.sqrtPriceX96,p[0],l.tick);return[f.EXISTS,e]}catch(x){return console.error("Error when constructing the pool",x),[f.NOT_EXISTS,null]}}))),[r,e,o,n])}((0,c.useMemo)((()=>[[e,t,n]]),[e,t,n]))[0]}u(m,"MAX_ENTRIES",128),u(m,"pools",[]),u(m,"addresses",[]),function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(f||(f={}))},59991:function(e,t,n){n.d(t,{W:function(){return l},n:function(){return d}});var i=n(86003),o=n(61646),r=n(13712),s=n(600);function a(e){const t=(0,s.GL)(),n=(0,r.useMemo)((()=>e?e.map((e=>[i.O$.from(e)])):[]),[e]),a=(0,o.es)(t,"positions",n),d=(0,r.useMemo)((()=>a.some((({loading:e})=>e))),[a]),l=(0,r.useMemo)((()=>a.some((({error:e})=>e))),[a]),c=(0,r.useMemo)((()=>{if(!d&&!l&&e)return a.map(((t,n)=>{const i=e[n],o=t.result;return{tokenId:i,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[d,l,a,e]);return{loading:d,positions:c?.map(((e,t)=>({...e,tokenId:n[t][0]})))}}function d(e){const t=a(e?[e]:void 0);return{loading:t.loading,position:t.positions?.[0]}}function l(e){const t=(0,s.GL)(),{loading:n,result:d}=(0,o.Wk)(t,"balanceOf",[e??void 0]),l=d?.[0]?.toNumber(),c=(0,r.useMemo)((()=>{if(l&&e){const t=[];for(let n=0;n<l;n++)t.push([e,n]);return t}return[]}),[e,l]),u=(0,o.es)(t,"tokenOfOwnerByIndex",c),p=(0,r.useMemo)((()=>u.some((({loading:e})=>e))),[u]),m=(0,r.useMemo)((()=>e?u.map((({result:e})=>e)).filter((e=>!!e)).map((e=>i.O$.from(e[0]))):[]),[e,u]),{positions:f,loading:y}=a(m);return{loading:p||n||y,positions:f}}},55494:function(e,t,n){n.d(t,{DC:function(){return a},ER:function(){return d},bb:function(){return l},im:function(){return s},pr:function(){return c}});var i=n(13119),o=n(47096),r=n(87253);const s=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,a=(0,r.default)(o.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=r.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,l=r.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,c=(0,r.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},49111:function(e,t,n){n.d(t,{B:function(){return r}});var i=n(48141),o=n(58025);function r(e){if(e.isNative)return e;const t=(0,i.oG)(e.chainId);return t&&o.Fl[t]?.equals(e)?(0,o.gX)(e.chainId):e}}}]);
//# sourceMappingURL=317.12aa1dba.chunk.js.map