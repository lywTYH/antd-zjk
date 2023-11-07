(self.webpackChunkcsces_antd=self.webpackChunkcsces_antd||[]).push([[52624],{193045:function(z,f,a){"use strict";a.d(f,{Z:function(){return c}});var e=a(487462),n=a(667294),t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"},v=t,s=a(713401),w=function(A,i){return n.createElement(s.Z,(0,e.Z)({},A,{ref:i,icon:v}))},c=n.forwardRef(w)},352624:function(z,f,a){"use strict";a.r(f),a.d(f,{scopes:function(){return s}});var e=a(636047),n=a(667294),t=a(797005),v=a(193045),s={"docs-components-alert-demo-basic":{Alert:e.bZ,React:n},"docs-components-alert-demo-style":{Alert:e.bZ,Space:e.T,React:n},"docs-components-alert-demo-closable":{Alert:e.bZ,Space:e.T,React:n},"docs-components-alert-demo-description":{Alert:e.bZ,Space:e.T,React:n},"docs-components-alert-demo-icon":{Alert:e.bZ,Space:e.T,React:n},"docs-components-alert-demo-banner":{Alert:e.bZ,Space:e.T,React:n},"docs-components-alert-demo-loop-banner":{Alert:e.bZ,React:n,Marquee:t.Z},"docs-components-alert-demo-smooth-closed":{Alert:e.bZ,Space:e.T,Switch:e.rs,React:n,useState:n.useState},"docs-components-alert-demo-error-boundary":{Alert:e.bZ,Button:e.zx,React:n,useState:n.useState},"docs-components-alert-demo-custom-icon":{SmileOutlined:v.Z,Alert:e.bZ,Space:e.T,React:n},"docs-components-alert-demo-action":{Alert:e.bZ,Button:e.zx,Space:e.T,React:n},"docs-components-alert-demo-component-token":{SmileOutlined:v.Z,Alert:e.bZ,ConfigProvider:e.iV,React:n}}},797005:function(z,f,a){var e;function n(c){if(!c||typeof window=="undefined")return;const l=document.createElement("style");return l.setAttribute("type","text/css"),l.innerHTML=c,document.head.appendChild(l),c}e={value:!0};var t=a(667294);function v(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var s=v(t);n(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), transparent);
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const w=t.forwardRef(function({style:l={},className:A="",autoFill:i=!1,play:h=!0,pauseOnHover:M=!1,pauseOnClick:Z=!1,direction:r="left",speed:b=50,delay:q=0,loop:C=0,gradient:L=!1,gradientColor:B="white",gradientWidth:g=200,onFinish:k,onCycleComplete:$,onMount:D,children:S},K){const[_,U]=t.useState(0),[R,j]=t.useState(0),[E,P]=t.useState(1),[x,X]=t.useState(!1),V=t.useRef(null),u=K||V,p=t.useRef(null),y=t.useCallback(()=>{if(p.current&&u.current){const o=u.current.getBoundingClientRect(),T=p.current.getBoundingClientRect();let d=o.width,m=T.width;(r==="up"||r==="down")&&(d=o.height,m=T.height),P(i&&d&&m&&m<d?Math.ceil(d/m):1),U(d),j(m)}},[i,u,r]);t.useEffect(()=>{if(x&&(y(),p.current&&u.current)){const o=new ResizeObserver(()=>y());return o.observe(u.current),o.observe(p.current),()=>{o&&o.disconnect()}}},[y,u,x]),t.useEffect(()=>{y()},[y,S]),t.useEffect(()=>{X(!0)},[]),t.useEffect(()=>{typeof D=="function"&&D()},[]);const N=t.useMemo(()=>i?R*E/b:R<_?_/b:R/b,[i,_,R,E,b]),G=t.useMemo(()=>Object.assign(Object.assign({},l),{["--pause-on-hover"]:!h||M?"paused":"running",["--pause-on-click"]:!h||M&&!Z||Z?"paused":"running",["--width"]:r==="up"||r==="down"?"100vh":"100%",["--transform"]:r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[l,h,M,Z,r]),H=t.useMemo(()=>({["--gradient-color"]:B,["--gradient-width"]:typeof g=="number"?`${g}px`:g}),[B,g]),W=t.useMemo(()=>({["--play"]:h?"running":"paused",["--direction"]:r==="left"?"normal":"reverse",["--duration"]:`${N}s`,["--delay"]:`${q}s`,["--iteration-count"]:C?`${C}`:"infinite",["--min-width"]:i?"auto":"100%"}),[h,r,N,q,C,i]),O=t.useMemo(()=>({["--transform"]:r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),I=t.useCallback(o=>[...Array(Number.isFinite(o)&&o>=0?o:0)].map((T,d)=>s.default.createElement(t.Fragment,{key:d},t.Children.map(S,m=>s.default.createElement("div",{style:O,className:"rfm-child"},m)))),[O,S]);return x?s.default.createElement("div",{ref:u,style:G,className:"rfm-marquee-container "+A},L&&s.default.createElement("div",{style:H,className:"rfm-overlay"}),s.default.createElement("div",{className:"rfm-marquee",style:W,onAnimationIteration:$,onAnimationEnd:k},s.default.createElement("div",{className:"rfm-initial-child-container",ref:p},t.Children.map(S,o=>s.default.createElement("div",{style:O,className:"rfm-child"},o))),I(E-1)),s.default.createElement("div",{className:"rfm-marquee",style:W},I(E))):null});f.Z=w}}]);
