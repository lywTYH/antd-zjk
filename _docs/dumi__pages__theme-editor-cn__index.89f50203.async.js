"use strict";(self.webpackChunkcsces_antd=self.webpackChunkcsces_antd||[]).push([[19482,94646],{400695:function(E,s,e){e.r(s);var a=e(657977);s.default=a.default},657977:function(E,s,e){e.r(s);var a=e(627424),l=e.n(a),i=e(636047),m=e(346103),n=e(667294),h=e(302559),t=e(785893),v={cn:{title:"\u4E3B\u9898\u7F16\u8F91\u5668",save:"\u4FDD\u5B58",edit:"\u7F16\u8F91",export:"\u5BFC\u51FA",editModelTitle:"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E",editJsonContentTypeError:"\u4E3B\u9898 JSON \u683C\u5F0F\u9519\u8BEF",editSuccessfully:"\u7F16\u8F91\u6210\u529F",saveSuccessfully:"\u4FDD\u5B58\u6210\u529F",initialEditor:"\u6B63\u5728\u521D\u59CB\u5316\u7F16\u8F91\u5668..."},en:{title:"Theme Editor",save:"Save",edit:"Edit",export:"Export",editModelTitle:"edit Theme Config",editJsonContentTypeError:"The theme of the JSON format is incorrect",editSuccessfully:"Edited successfully",saveSuccessfully:"Saved successfully",initialEditor:"Initializing Editor..."}},c="ant-design-v5-theme-editor-theme",f=function(){var T=i.yw.useMessage(),d=l()(T,2),M=d[0],O=d[1],D=(0,h.Z)(v),r=l()(D,2),o=r[0],A=r[1],S=n.useState({}),u=l()(S,2),g=u[0],y=u[1];(0,n.useEffect)(function(){var _=localStorage.getItem(c);if(_){var C=JSON.parse(_);y(C)}},[]);var I=function(){localStorage.setItem(c,JSON.stringify(g)),M.success(o.saveSuccessfully)};return(0,t.jsxs)("div",{children:[(0,t.jsxs)(m.ql,{children:[(0,t.jsx)("title",{children:"".concat(o.title," - Ant Design")}),(0,t.jsx)("meta",{property:"og:title",content:"".concat(o.title," - Ant Design")})]}),O,(0,t.jsx)(n.Suspense,{fallback:(0,t.jsx)(i.Od,{style:{margin:24}}),children:"theme editor has some error"})]})};s.default=f}}]);
