(self.webpackChunkcsces_antd=self.webpackChunkcsces_antd||[]).push([[36640],{936640:function(o,i,n){"use strict";n.r(i),n.d(i,{scopes:function(){return a}});var t=n(636047),e=n(667294),u=n(23279),c=n.n(u),a={"docs-components-mentions-demo-basic":{Mentions:t.oj,React:e},"docs-components-mentions-demo-async":{Mentions:t.oj,debounce:c(),React:e,useCallback:e.useCallback,useRef:e.useRef,useState:e.useState},"docs-components-mentions-demo-form":{Button:t.zx,Form:t.l0,Mentions:t.oj,Space:t.T,React:e},"docs-components-mentions-demo-prefix":{Mentions:t.oj,React:e,useState:e.useState},"docs-components-mentions-demo-readonly":{Mentions:t.oj,React:e},"docs-components-mentions-demo-placement":{Mentions:t.oj,React:e},"docs-components-mentions-demo-autosize":{Mentions:t.oj,React:e},"docs-components-mentions-demo-status":{Mentions:t.oj,Space:t.T,React:e}}},562705:function(o,i,n){var t=n(555639),e=t.Symbol;o.exports=e},644239:function(o,i,n){var t=n(562705),e=n(789607),u=n(902333),c="[object Null]",a="[object Undefined]",g=t?t.toStringTag:void 0;function f(d){return d==null?d===void 0?a:c:g&&g in Object(d)?e(d):u(d)}o.exports=f},727561:function(o,i,n){var t=n(567990),e=/^\s+/;function u(c){return c&&c.slice(0,t(c)+1).replace(e,"")}o.exports=u},431957:function(o,i,n){var t=typeof n.g=="object"&&n.g&&n.g.Object===Object&&n.g;o.exports=t},789607:function(o,i,n){var t=n(562705),e=Object.prototype,u=e.hasOwnProperty,c=e.toString,a=t?t.toStringTag:void 0;function g(f){var d=u.call(f,a),m=f[a];try{f[a]=void 0;var r=!0}catch(b){}var l=c.call(f);return r&&(d?f[a]=m:delete f[a]),l}o.exports=g},902333:function(o){var i=Object.prototype,n=i.toString;function t(e){return n.call(e)}o.exports=t},555639:function(o,i,n){var t=n(431957),e=typeof self=="object"&&self&&self.Object===Object&&self,u=t||e||Function("return this")();o.exports=u},567990:function(o){var i=/\s/;function n(t){for(var e=t.length;e--&&i.test(t.charAt(e)););return e}o.exports=n},23279:function(o,i,n){var t=n(513218),e=n(707771),u=n(14841),c="Expected a function",a=Math.max,g=Math.min;function f(d,m,r){var l,b,S,j,p,T,y=0,I=!1,v=!1,h=!0;if(typeof d!="function")throw new TypeError(c);m=u(m)||0,t(r)&&(I=!!r.leading,v="maxWait"in r,S=v?a(u(r.maxWait)||0,m):S,h="trailing"in r?!!r.trailing:h);function M(s){var x=l,O=b;return l=b=void 0,y=s,j=d.apply(O,x),j}function W(s){return y=s,p=setTimeout(E,m),I?M(s):j}function k(s){var x=s-T,O=s-y,L=m-x;return v?g(L,S-O):L}function P(s){var x=s-T,O=s-y;return T===void 0||x>=m||x<0||v&&O>=S}function E(){var s=e();if(P(s))return C(s);p=setTimeout(E,k(s))}function C(s){return p=void 0,h&&l?M(s):(l=b=void 0,j)}function D(){p!==void 0&&clearTimeout(p),y=0,l=T=b=p=void 0}function A(){return p===void 0?j:C(e())}function R(){var s=e(),x=P(s);if(l=arguments,b=this,T=s,x){if(p===void 0)return W(T);if(v)return clearTimeout(p),p=setTimeout(E,m),M(T)}return p===void 0&&(p=setTimeout(E,m)),j}return R.cancel=D,R.flush=A,R}o.exports=f},513218:function(o){function i(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}o.exports=i},637005:function(o){function i(n){return n!=null&&typeof n=="object"}o.exports=i},733448:function(o,i,n){var t=n(644239),e=n(637005),u="[object Symbol]";function c(a){return typeof a=="symbol"||e(a)&&t(a)==u}o.exports=c},707771:function(o,i,n){var t=n(555639),e=function(){return t.Date.now()};o.exports=e},14841:function(o,i,n){var t=n(727561),e=n(513218),u=n(733448),c=0/0,a=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,f=/^0o[0-7]+$/i,d=parseInt;function m(r){if(typeof r=="number")return r;if(u(r))return c;if(e(r)){var l=typeof r.valueOf=="function"?r.valueOf():r;r=e(l)?l+"":l}if(typeof r!="string")return r===0?r:+r;r=t(r);var b=g.test(r);return b||f.test(r)?d(r.slice(2),b?2:8):a.test(r)?c:+r}o.exports=m}}]);
