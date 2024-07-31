"use strict";(self.webpackChunk_darkflorist_horswap=self.webpackChunk_darkflorist_horswap||[]).push([[2476],{17015:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var i=n(42893),d=n(12204),r=n(80815),o=n(22875),a=n(6053),s=n(44998),c=n.n(s),l=n(13712),p=n(47212),u=n(41440),h=n(47096),m=n(87253),x=n(93589),f=n(38517),g=n(42246),j=n(60476),w=n(12703),v=n(16403),k=n(2304),y=n(20095),A=n(85729),T=n(91101),C=n(97761),_=n(89504),R=n(45433),b=n(57916),I=n(15387),B=n(30112),N=n(63362),F=n(61646),S=n(58025);const D=new R.vU(b.Mt),q={1:[{tokens:[S.Fl[I.ChainId.MAINNET],S.h1],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[S.Fl[I.ChainId.MAINNET],S.Hz],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[S.Fl[I.ChainId.MAINNET],S.AA],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[S.Fl[I.ChainId.MAINNET],S.ML],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};var E=n(20955);const M=(0,m.default)(j.Tz).withConfig({displayName:"v2__PageWrapper",componentId:"sc-55c62c67-0"})`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,W=(0,m.default)(w.I8).withConfig({displayName:"v2__LPFeeExplainer",componentId:"sc-55c62c67-1"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,z=(0,m.default)(k.m0).withConfig({displayName:"v2__TitleRow",componentId:"sc-55c62c67-2"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`,P=(0,m.default)(k.DA).withConfig({displayName:"v2__ButtonRow",componentId:"sc-55c62c67-3"})`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,U=(0,m.default)(f.DF).withConfig({displayName:"v2__ResponsiveButtonPrimary",componentId:"sc-55c62c67-4"})`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,L=(0,m.default)(f.PL).withConfig({displayName:"v2__ResponsiveButtonSecondary",componentId:"sc-55c62c67-5"})`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,Y=m.default.div.withConfig({displayName:"v2__EmptyProposals",componentId:"sc-55c62c67-6"})`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function H(){const e=(0,m.useTheme)(),{account:t}=(0,r.useWeb3React)(),n=(0,a.G)();let s=(0,E.B3)();n||(s=[]);const R=(0,l.useMemo)((()=>s.map((e=>({liquidityToken:(0,E.Ce)(e),tokens:e})))),[s]),b=(0,l.useMemo)((()=>R.map((e=>e.liquidityToken))),[R]),[H,$]=(0,_.v2)(t??void 0,b),Z=(0,l.useMemo)((()=>R.filter((({liquidityToken:e})=>H[e.address]?.greaterThan("0")))),[R,H]),O=(0,C.OY)(Z.map((({tokens:e})=>e))),G=$||O?.length<Z.length||O?.some((e=>!e)),V=O.map((([,e])=>e)).filter((e=>Boolean(e))),J=function(e){const{chainId:t,account:n}=(0,r.useWeb3React)(),i=(0,N.Z)(),d=(0,l.useMemo)((()=>t?q[t]?.filter((t=>void 0===e||null!==e&&e.involvesToken(t.tokens[0])&&e.involvesToken(t.tokens[1])))??[]:[]),[t,e]),o=t?S.yg[t]:void 0,a=(0,l.useMemo)((()=>d.map((({stakingRewardAddress:e})=>e))),[d]),s=(0,l.useMemo)((()=>[n??void 0]),[n]),p=(0,F._Y)(a,D,"balanceOf",s),u=(0,F._Y)(a,D,"earned",s),h=(0,F._Y)(a,D,"totalSupply"),m=(0,F._Y)(a,D,"rewardRate",void 0,F.DB),x=(0,F._Y)(a,D,"periodFinish",void 0,F.DB);return(0,l.useMemo)((()=>t&&o?a.reduce(((e,t,n)=>{const r=p[n],a=u[n],s=h[n],l=m[n],f=x[n];if(!r?.loading&&!a?.loading&&s&&!s.loading&&l&&!l.loading&&f&&!f.loading){if(r?.error||a?.error||s.error||l.error||f.error)return console.error("Failed to load staking rewards info"),e;const p=d[n].tokens,u=new B.Pair(I.CurrencyAmount.fromRawAmount(p[0],"0"),I.CurrencyAmount.fromRawAmount(p[1],"0")),h=I.CurrencyAmount.fromRawAmount(u.liquidityToken,c().BigInt(r?.result?.[0]??0)),m=I.CurrencyAmount.fromRawAmount(u.liquidityToken,c().BigInt(s.result?.[0])),x=I.CurrencyAmount.fromRawAmount(o,c().BigInt(l.result?.[0])),g=(e,t,n)=>I.CurrencyAmount.fromRawAmount(o,c().greaterThan(t.quotient,c().BigInt(0))?c().divide(c().multiply(n.quotient,e.quotient),t.quotient):c().BigInt(0)),j=g(h,m,x),w=f.result?.[0]?.toNumber(),v=1e3*w,k=!w||!i||w>i.toNumber();e.push({stakingRewardAddress:t,tokens:d[n].tokens,periodFinish:v>0?new Date(v):void 0,earnedAmount:I.CurrencyAmount.fromRawAmount(o,c().BigInt(a?.result?.[0]??0)),rewardRate:j,totalRewardRate:x,stakedAmount:h,totalStakedAmount:m,getHypotheticalRewardRate:g,active:k})}return e}),[]):[]),[p,t,i,u,d,x,m,a,h,o])}(),Q=J?.filter((e=>c().greaterThan(e.stakedAmount.quotient,T.iV))),X=(0,C.OY)(Q?.map((e=>e.tokens))),K=V.filter((e=>0===X?.map((e=>e[1])).filter((t=>t?.liquidityToken.address===e.liquidityToken.address)).length));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(M,{children:[(0,i.jsxs)(W,{children:[(0,i.jsx)(w.sq,{}),(0,i.jsx)(w.RF,{}),(0,i.jsx)(w.uO,{children:(0,i.jsxs)(j.Tz,{gap:"md",children:[(0,i.jsx)(k.m0,{children:(0,i.jsx)(x.Tv.DeprecatedWhite,{fontWeight:535,children:(0,i.jsx)(d.cC,{id:"Vsr1yC"})})}),(0,i.jsx)(k.m0,{children:(0,i.jsx)(x.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(d.cC,{id:"vRS32S"})})}),(0,i.jsx)(x.dL,{style:{color:e.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,i.jsx)(x.Tv.DeprecatedWhite,{fontSize:14,children:(0,i.jsx)(d.cC,{id:"7bNFf2"})})})]})}),(0,i.jsx)(w.sq,{}),(0,i.jsx)(w.RF,{})]}),n?(0,i.jsx)(j.Tz,{gap:"lg",justify:"center",children:(0,i.jsxs)(j.Tz,{gap:"md",style:{width:"100%"},children:[(0,i.jsxs)(z,{style:{marginTop:"1rem"},padding:"0",children:[(0,i.jsx)(x.Pw,{children:(0,i.jsx)(x.Tv.DeprecatedMediumHeader,{style:{marginTop:"0.5rem",justifySelf:"flex-start"},children:(0,i.jsx)(d.cC,{id:"MbHgIE"})})}),(0,i.jsxs)(P,{children:[(0,i.jsx)(L,{as:u.rU,padding:"6px 8px",to:"/add/v2/ETH",children:(0,i.jsx)(d.cC,{id:"ma87bD"})}),(0,i.jsx)(U,{id:"find-pool-button",as:u.rU,to:"/pools/v2/find",padding:"6px 8px",children:(0,i.jsx)(h.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(d.cC,{id:"SkceS7"})})}),(0,i.jsx)(U,{id:"join-pool-button",as:u.rU,to:"/add/v2/ETH",padding:"6px 8px",children:(0,i.jsx)(h.xv,{fontWeight:535,fontSize:16,children:(0,i.jsx)(d.cC,{id:"knGjuL"})})})]})]}),t?G?(0,i.jsx)(Y,{children:(0,i.jsx)(x.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(y.bb,{children:(0,i.jsx)(d.cC,{id:"yQE2r9"})})})}):V?.length>0||X?.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.PL,{children:(0,i.jsx)(k.m0,{children:(0,i.jsx)(d.cC,{id:"vAuUUB",components:{0:(0,i.jsx)(x.dL,{href:"https://v2.info.uniswap.org/account/"+t}),1:(0,i.jsx)("span",{})}})})}),K.map((e=>(0,i.jsx)(v.ZP,{pair:e},e.liquidityToken.address))),X.map(((e,t)=>e[1]&&(0,i.jsx)(v.ZP,{pair:e[1],stakedBalance:Q[t].stakedAmount},Q[t].stakingRewardAddress))),(0,i.jsx)(k.DA,{justify:"center",style:{width:"100%"},children:(0,i.jsxs)(f.JU,{as:u.rU,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,i.jsx)(p.Z,{size:16,style:{marginRight:"8px"}}),(0,i.jsx)(d.cC,{id:"kBAezW"})]})})]}):(0,i.jsx)(Y,{children:(0,i.jsx)(x.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(d.cC,{id:"erwMRf"})})}):(0,i.jsx)(g.ZP,{padding:"40px",children:(0,i.jsx)(x.Tv.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,i.jsx)(d.cC,{id:"jWRT4F"})})})]})}):(0,i.jsx)(o.A,{})]}),(0,i.jsx)(A.c,{})]})}},49111:function(e,t,n){n.d(t,{B:function(){return r}});var i=n(48141),d=n(58025);function r(e){if(e.isNative)return e;const t=(0,i.oG)(e.chainId);return t&&d.Fl[t]?.equals(e)?(0,d.gX)(e.chainId):e}}}]);
//# sourceMappingURL=2476.c8c759e4.chunk.js.map