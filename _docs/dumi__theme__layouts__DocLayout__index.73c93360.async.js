(self.webpackChunkcsces_antd=self.webpackChunkcsces_antd||[]).push([[40367],{217187:function(b,M,a){"use strict";var B=a(627424),h=a.n(B),P=a(667294),z=function(){var T=P.useState.apply(void 0,arguments),N=h()(T,2),m=N[0],g=N[1],Y=function(){for(var U=arguments.length,Z=new Array(U),V=0;V<U;V++)Z[V]=arguments[V];(0,P.startTransition)(function(){g.apply(void 0,Z)})};return[m,Y]};M.Z=z},438746:function(b,M,a){"use strict";a.d(M,{Z:function(){return nn}});var B=a(242122),h=a.n(B),P=a(918698),z=a.n(P),y=a(627424),T=a.n(y),N=a(346103),m=a(667294),g=a(302559);function Y(U){return U.replace("-en","").replace(/\/$/,"")}function nn(){var U=(0,N.TH)(),Z=U.search,V=(0,g.Z)(),x=T()(V,2),l=x[1],k=m.useCallback(function(o,X){var K=Y(o);if(l==="en"&&(K="".concat(K,"-en")),Z&&(K="".concat(K).concat(Z)),X){var Q;z()(X)==="object"?Q=X[l]:Q=X,K="".concat(K,"#").concat(Q)}return K},[l,Z]);return h()(h()({},U),{},{pathname:Y(U.pathname),getLink:k})}},749310:function(b,M,a){"use strict";a.r(M),a.d(M,{default:function(){return De}});var B=a(627424),h=a.n(B),P=a(294184),z=a.n(P),y=a(727484),T=a.n(y),N=a(533852),m=a(346103),g=a(667294),Y=a(768022),nn=a(252069),U=a(302559),Z=a(438746),V=a(459400),x=a.n(V),l=a(370917),k=a(65630),o=a(785893),X,K={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},Q=function(){var n=(0,k.Fg)(),t=function i(d){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return s<=10?`
.palette-`.concat(d,"-").concat(s,` {
  background: `).concat(n["".concat(d,"-").concat(s)],`;
}
`).concat(i(d,s+1),`
    `):""},r=function i(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return d<=13?`
.palette-gray-`.concat(d,` {
  background: `).concat(K[d],`;
}
`).concat(i(d+1),`
    `):""};return(0,o.jsx)(l.xB,{styles:(0,l.iv)(X||(X=x()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-of-type {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),n.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),r())})},Nn=Q,sn,Yn=function(){return(0,o.jsx)(l.xB,{styles:(0,l.iv)(sn||(sn=x()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow:
          0 0 0 2px #f44,
          1.5em 0 0 2px #9b3,
          3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},cn,Rn=function(){var e=(0,k.Fg)(),n=e.anchorTop;return(0,o.jsx)(l.xB,{styles:(0,l.iv)(cn||(cn=x()([`
        body,
        div,
        dl,
        dt,
        dd,
        ul,
        ol,
        li,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        pre,
        code,
        form,
        fieldset,
        legend,
        input,
        textarea,
        p,
        blockquote,
        th,
        td,
        hr,
        button,
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          margin: 0;
          padding: 0;
        }

        ul,
        ol {
          list-style: none;
        }

        img {
          vertical-align: middle;
          border-style: none;
        }

        [id] {
          scroll-margin-top: `,`px;
        }

        [data-prefers-color='dark'] {
          color-scheme: dark;
        }

        [data-prefers-color='light'] {
          color-scheme: light;
        }
      `])),n)})},pn,$n=function(){var n=(0,k.Fg)(),t=n.antCls,r=n.iconCls;return(0,o.jsx)(l.xB,{styles:(0,l.iv)(pn||(pn=x()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-of-type) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),n.colorBgContainer,n.colorSplit,n.borderRadius,n.colorText,n.colorBgContainer,n.colorBgContainer,n.borderRadius,n.borderRadius,n.colorPrimary,n.colorBgContainer,n.borderRadius,n.borderRadius,t,n.borderRadius,n.borderRadius,n.colorText,n.fontSize,r,n.colorTextSecondary,n.colorText,t,t,n.colorText,n.colorSplit,n.fontSize,n.borderRadius,n.borderRadius,n.colorSplit,t,t,n.borderRadius,n.borderRadius,n.colorBgContainer,n.colorSplit,n.colorSplit,n.colorTextSecondary,n.colorText,r,n.colorBgContainer,r,n.green6,n.colorBgContainer,n.purple3,n.purple6,t)})},Hn=$n,mn,Wn=function(){return(0,o.jsx)(l.xB,{styles:(0,l.iv)(mn||(mn=x()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-of-type {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-of-type > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},un,Un=function(){var e=(0,k.Fg)();return(0,o.jsx)(l.xB,{styles:(0,l.iv)(un||(un=x()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),e.colorText,e.fontSize,e.borderRadius)})},gn,Zn=function(){var e=(0,k.Fg)(),n=e.antCls,t=e.iconCls;return(0,o.jsx)(l.xB,{styles:(0,l.iv)(gn||(gn=x()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition:
              color 0.3s ease-in-out,
              background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,n,e.colorPrimary,t,n)})},xn,Kn=function(){var e=(0,k.Fg)(),n=e.iconCls;return(0,o.jsx)(l.xB,{styles:(0,l.iv)(xn||(xn=x()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),e.colorIcon,e.colorIconHover,e.colorBorder,e.colorTextSecondary,n,e.colorLinkHover)})},en=a(510274),hn,Gn=function(){var n=(0,k.Fg)(),t=n.antCls,r=n.colorPrimary;return(0,o.jsx)(l.xB,{styles:(0,l.iv)(hn||(hn=x()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-of-type {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-of-type {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-of-type(2) {
                min-width: 160px;
              }

              &:nth-of-type(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-of-type(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-of-type(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-of-type(3):first-of-type {
                width: 38%;
              }

              &:nth-last-of-type(3):first-of-type ~ td:nth-last-of-type(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-of-type(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),n.colorText,n.colorTextHeading,n.fontFamily,n.colorTextHeading,n.fontFamily,n.colorSplit,t,t,n.siteMarkdownCodeBg,n.colorSplit,n.codeFamily,n.siteMarkdownCodeBg,n.borderRadius,n.colorText,Math.max(n.fontSize-1,12),n.siteMarkdownCodeBg,n.borderRadius,n.siteMarkdownCodeBg,n.borderRadius,n.colorTextSecondary,n.colorSplit,n.colorSplit,t,n.colorTextSecondary,n.colorText,n.colorSplit,n.colorSplit,n.colorSplit,n.colorSplit,Math.max(n.fontSize-1,12),n.codeFamily,n.lineHeight,n.colorSplit,n.colorText,n.magenta7,Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),Math.max(n.fontSize-1,12),t,t,t,r,new en.C(r).setAlpha(.75).toHex8String(),t,t,n.colorWhite,t,new en.C(r).setAlpha(.75).toHexString(),t,t,new en.C(r).setAlpha(.75).toHexString(),t,t,t,t,new en.C(r).setAlpha(.6).toHexString(),t,t,t)})},Vn=Gn,fn,Jn=function(){var e=(0,k.Fg)();return(0,o.jsx)(l.xB,{styles:(0,l.iv)(fn||(fn=x()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow:
              0 0 10px `,`,
              0 0 5px `,`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),e.colorPrimary,e.colorPrimary,e.colorPrimary,e.colorPrimary,e.colorPrimary)})},vn,Xn=function(){var e=(0,k.Fg)();return(0,o.jsx)(l.xB,{styles:(0,l.iv)(vn||(vn=x()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow:
            0 1px 0 0 #ddd,
            0 3px 0 0 `,`,
            0 4px 0 0 #ddd,
            0 6px 0 0 `,`,
            0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),e.colorPrimary,e.colorError,e.colorText,e.colorTextSecondary,e.colorBgContainer,e.borderRadius,e.colorBgContainer,e.colorBgContainer)})},bn,Qn=function(){var e=(0,k.Fg)();return(0,o.jsx)(l.xB,{styles:(0,l.iv)(bn||(bn=x()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src:
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src:
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src:
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),e.colorText,e.fontSize,e.fontFamily,e.lineHeight,e.colorBgContainer)})},wn,qn=function(){var e=(0,k.Fg)();return(0,o.jsx)(l.xB,{styles:(0,l.iv)(wn||(wn=x()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-of-type(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),e.screenLG,e.colorBgContainer,e.colorSplit,e.colorLink,e.colorBgContainer)})},yn,rn="dumi-default-",ne=function(){var e=(0,k.Fg)();return(0,o.jsx)(l.xB,{styles:(0,l.iv)(yn||(yn=x()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),rn,e.colorText,e.colorBgContainer,e.colorBgContainer,e.colorTextPlaceholder,rn,e.colorBgElevated,e.colorBgElevated,rn,e.controlItemBgActive,e.controlItemBgHover,e.colorText,e.colorText)})},kn,ee=function(){return(0,o.jsx)(l.xB,{styles:(0,l.iv)(kn||(kn=x()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},te=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Qn,{}),(0,o.jsx)(Rn,{}),(0,o.jsx)(Vn,{}),(0,o.jsx)(Un,{}),(0,o.jsx)(Hn,{}),(0,o.jsx)(Zn,{}),(0,o.jsx)(Kn,{}),(0,o.jsx)(Yn,{}),(0,o.jsx)(qn,{}),(0,o.jsx)(Jn,{}),(0,o.jsx)(Xn,{}),(0,o.jsx)(ee,{}),(0,o.jsx)(Nn,{}),(0,o.jsx)(Wn,{}),(0,o.jsx)(ne,{})]})},oe=te,re={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002",owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises",owner:"Ant Group and Ant Design Community"}},an=a(438199),ae=function(){var n=(0,m.eL)(),t=(0,g.useMemo)(function(){var s;if(!n.frontmatter.subtitle&&!n.frontmatter.title)s="404 Not Found - csces";else{var f;s="".concat(n.frontmatter.subtitle||""," ").concat(((f=n.frontmatter)===null||f===void 0?void 0:f.title)||""," - csces")}var w=n.frontmatter.description||"";return[s,w]},[n]),r=h()(t,2),i=r[0],d=r[1];return(0,o.jsxs)(m.ql,{children:[(0,o.jsx)("title",{children:i}),(0,o.jsx)("meta",{property:"og:title",content:i}),d&&(0,o.jsx)("meta",{name:"description",content:d})]})},ie=ae,le=a(242122),J=a.n(le),tn=a(636047),de=a(217187),Cn=a(618073),_n=a(206171),se=a(600861),q=a.n(se),ce=a(918698),pe=a.n(ce),me=a(670215),ue=a.n(me),ge=a(574865),jn=a.n(ge),xe=["to","children"],he=(0,g.forwardRef)(function(e,n){var t=e.to,r=e.children,i=ue()(e,xe),d=(0,g.useTransition)(),s=h()(d,2),f=s[0],w=s[1],$=(0,m.s0)(),F=(0,m.TH)(),v=F.pathname,j=(0,g.useMemo)(function(){return pe()(t)==="object"?"".concat(t.pathname||v).concat(t.search||"").concat(t.hash||""):t},[t]),L=function(u){var C;(C=e.onClick)===null||C===void 0||C.call(e,u),j!=null&&j.startsWith("http")||!u.metaKey&&!u.ctrlKey&&!u.shiftKey&&(u.preventDefault(),w(function(){j&&$(j)}))};return(0,g.useLayoutEffect)(function(){f?jn().start():jn().done()},[f]),(0,o.jsx)("a",J()(J()({ref:n,onClick:L},i),{},{href:j,children:r}))}),on=he,fe=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,m.yh)(),r=(0,Z.Z)(),i=r.pathname,d=r.search,s=(0,m.tx)(),f=n.before,w=n.after,$=(0,g.useMemo)(function(){var F,v=q()(s!=null?s:[]);if(i.startsWith("/docs/spec")){var j=v.splice(0,1);v.push.apply(v,q()(j))}if(i.startsWith("/docs/react")){var L,R=(L=Object.entries(t).find(function(A){var c=h()(A,1),D=c[0];return D.startsWith("/changelog")}))===null||L===void 0?void 0:L[1];R&&v.splice(1,0,R[0])}if(i.startsWith("/changelog")){var u,C=(u=Object.entries(t).find(function(A){var c=h()(A,1),D=c[0];return D.startsWith("/docs/react")}))===null||u===void 0?void 0:u[1];C&&(v.unshift(C[0]),v.push.apply(v,q()(C.slice(1))))}var H=function(c){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c&&D&&(0,o.jsx)(Y.Vp,{color:c==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:c.replace("VERSION",Y.i8)})};return(F=v==null?void 0:v.reduce(function(A,c){if(c!=null&&c.title)if(i.startsWith("/docs/spec")){var D,_,E=c.children.reduce(function(p,I){var O,W,G=(O=(W=I.frontmatter)===null||W===void 0?void 0:W.type)!==null&&O!==void 0?O:"default";return p[G]||(p[G]=[]),p[G].push(I),p},{}),S=[];S.push.apply(S,q()((D=(_=E.default)===null||_===void 0?void 0:_.map(function(p){return{label:(0,o.jsxs)(on,{to:"".concat(p.link).concat(d),children:[f,p==null?void 0:p.title,w]}),key:p.link.replace(/(-cn$)/g,"")}}))!==null&&D!==void 0?D:[])),Object.entries(E).forEach(function(p){var I=h()(p,2),O=I[0],W=I[1];O!=="default"&&S.push({type:"group",label:O,key:O,children:W==null?void 0:W.map(function(G){return{label:(0,o.jsxs)(on,{to:"".concat(G.link).concat(d),children:[f,G==null?void 0:G.title,w]}),key:G.link.replace(/(-cn$)/g,"")}})})}),A.push({label:c==null?void 0:c.title,key:c==null?void 0:c.title,children:S})}else{var ln;A.push({type:"group",label:c==null?void 0:c.title,key:c==null?void 0:c.title,children:(ln=c.children)===null||ln===void 0?void 0:ln.map(function(p){var I,O;return{label:(0,o.jsxs)(on,{to:"".concat(p.link).concat(d),style:{display:"flex",alignItems:"center"},children:[f,(0,o.jsx)("span",{children:p==null?void 0:p.title},"english"),(0,o.jsx)("span",{className:"chinese",children:(I=p.frontmatter)===null||I===void 0?void 0:I.subtitle},"chinese"),H((O=p.frontmatter)===null||O===void 0?void 0:O.tag,!f&&!w),w]}),key:p.link.replace(/(-cn$)/g,"")}})})}else{var dn=c.children||[];dn.every(function(p){var I;return p==null||(I=p.frontmatter)===null||I===void 0?void 0:I.date})&&dn.sort(function(p,I){var O,W;return((O=p.frontmatter)===null||O===void 0?void 0:O.date)>((W=I.frontmatter)===null||W===void 0?void 0:W.date)?-1:1}),A.push.apply(A,q()(dn.map(function(p){return{label:(0,o.jsxs)(on,{to:"".concat(p.link).concat(d),style:{display:"flex",alignItems:"center"},children:[f,p==null?void 0:p.title,H(p.frontmatter.tag,!f&&!w),w]}),key:p.link.replace(/(-cn$)/g,"")}})))}return A},[]))!==null&&F!==void 0?F:[]},[s,t,i,d,n]);return[$,i]},Sn=fe,Mn,zn,Tn,En,ve=(0,k.kc)(function(e){var n=e.token,t=e.css,r=n.colorSplit,i=n.iconCls,d=n.fontSizeIcon;return{prevNextNav:t(Mn||(Mn=x()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),r),pageNav:t(zn||(zn=x()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),i,d),prevNav:t(Tn||(Tn=x()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(En||(En=x()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),be=function e(n){return Array.isArray(n)?n.reduce(function(t,r){if(!r)return t;if("children"in r&&r.children){var i;return t.concat((i=e(r.children))!==null&&i!==void 0?i:[])}return t.concat(r)},[]):null},we=function(n){var t=n.rtl,r=ve(),i=r.styles,d={className:"footer-nav-icon-before"},s={className:"footer-nav-icon-after"},f=t?(0,o.jsx)(Cn.Z,J()({},d)):(0,o.jsx)(_n.Z,J()({},d)),w=t?(0,o.jsx)(_n.Z,J()({},s)):(0,o.jsx)(Cn.Z,J()({},s)),$=Sn({before:f,after:w}),F=h()($,2),v=F[0],j=F[1],L=(0,g.useContext)(an.Z),R=L.isMobile,u=(0,g.useMemo)(function(){var c=be(v);if(!c)return[null,null];var D=-1;return c.forEach(function(_,E){_&&_.key===j&&(D=E)}),[c[D-1],c[D+1]]},[v,j]),C=h()(u,2),H=C[0],A=C[1];return R?null:(0,o.jsxs)("section",{className:i.prevNextNav,children:[H&&g.cloneElement(H.label,{className:z()(i.pageNav,i.prevNav,H.className)}),A&&g.cloneElement(A.label,{className:z()(i.pageNav,i.nextNav,A.className)})]})},ye=we,ke=(0,g.createContext)({}),Ce=ke,Bn,Pn,An,Ln,Dn,_e=(0,k.kc)(function(e){var n=e.token,t=e.css,r=n.antCls;return{contributorsList:t(Bn||(Bn=x()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),r,r,n.motionDurationSlow,r),listMobile:t(Pn||(Pn=x()([`
      margin: 1em 0 !important;
    `]))),toc:t(An||(An=x()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),r,r),tocWrapper:t(Ln||(Ln=x()([`
      position: fixed;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),n.borderRadius,n.purple6,n.purple5,n.screenLG),articleWrapper:t(Dn||(Dn=x()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),n.screenLG)}}),je=function(n){var t,r,i,d=n.children,s=(0,m.eL)(),f=(0,m.zh)(),w=(0,Z.Z)(),$=w.hash,F=_e(),v=F.styles,j=(0,k.Fg)(),L=(0,de.Z)(!1),R=h()(L,2),u=R[0],C=R[1],H=(0,g.useMemo)(function(){var _;return((_=s.toc)===null||_===void 0?void 0:_.filter(function(E){return E._debug_demo}).map(function(E){return E.id}))||[]},[s]),A=H.includes($.slice(1));(0,g.useLayoutEffect)(function(){C(A)},[]);var c=(0,g.useMemo)(function(){return{showDebug:u,setShowDebug:C}},[u,H]),D=(0,g.useMemo)(function(){return((f==null?void 0:f.toc)||s.toc).reduce(function(_,E){if(E.depth===2)_.push(J()({},E));else if(E.depth===3){var S=_[_.length-1];S&&(S.children=S.children||[],S.children.push(J()({},E)))}return _},[])},[f==null?void 0:f.toc,s.toc]);return(0,o.jsx)(Ce.Provider,{value:c,children:(0,o.jsxs)(tn.JX,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!s.frontmatter.toc&&(0,o.jsx)("section",{className:v.tocWrapper,children:(0,o.jsx)(tn.ee,{className:v.toc,affix:!1,targetOffset:j.anchorTop,showInkInFixed:!0,items:D.map(function(_){var E;return{href:"#".concat(_.id),title:_.title,key:_.id,children:(E=_.children)===null||E===void 0?void 0:E.filter(function(S){return u||!H.includes(S.id)}).map(function(S){return{key:S.id,href:"#".concat(S.id),title:(0,o.jsx)("span",{className:z()(H.includes(S.id)&&"toc-debug"),children:S==null?void 0:S.title})}})}})})}),(0,o.jsxs)("article",{className:z()(v.articleWrapper,{rtl:!1}),children:[(t=s.frontmatter)!==null&&t!==void 0&&t.title?(0,o.jsx)(tn.ZT.Title,{style:{fontSize:30,position:"relative"},children:(0,o.jsxs)(tn.T,{size:"small",children:[(r=s.frontmatter)===null||r===void 0?void 0:r.title,(i=s.frontmatter)===null||i===void 0?void 0:i.subtitle]})}):null,(0,o.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:d})]}),(0,o.jsx)(ye,{})]})})},Se=je,Me=a(650010),In,On,ze=(0,k.kc)(function(e){var n=e.token,t=e.css,r=n.antCls,i=n.fontFamily,d=n.colorSplit;return{asideContainer:t(In||(In=x()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
          > `,`-menu-submenu
          > `,`-menu-submenu-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-title,
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item,
          &`,`-menu-inline
          > `,`-menu-item-group
          > `,`-menu-item-group-list
          > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-of-type {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),i,r,r,r,r,r,r,d,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),mainMenu:t(On||(On=x()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: 10px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - 10px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])))}}),Te=function(){var n=(0,m.tx)(),t=(0,g.useContext)(an.Z),r=t.isMobile,i=ze(),d=i.styles,s=Sn(),f=h()(s,2),w=f[0],$=f[1],F=(0,k.Fg)(),v=F.colorBgContainer,j=(0,o.jsx)(Y.iV,{theme:{components:{Menu:{itemBg:v,darkItemBg:v}}},children:(0,o.jsx)(Y.v2,{items:w,inlineIndent:30,className:d.asideContainer,mode:"inline",theme:"light",selectedKeys:[$],defaultOpenKeys:n==null?void 0:n.map(function(L){var R=L.title;return R}).filter(function(L){return L})})});return r?(0,o.jsx)(Me.Z,{children:j},"Mobile-menu"):(0,o.jsx)(Y.JX,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:d.mainMenu,children:(0,o.jsx)("section",{className:"main-menu-inner",children:j})})},Ee=Te,Fn,Be=(0,k.kc)(function(e){var n=e.css,t=e.token;return{main:n(Fn||(Fn=x()([`
    display: flex;
    margin-top: 20px;
  `])))}}),Pe=function(n){var t=n.children,r=Be(),i=r.styles;return(0,o.jsxs)("main",{className:i.main,children:[(0,o.jsx)(ie,{}),(0,o.jsx)(Ee,{}),(0,o.jsx)(Se,{children:t})]})},Ae=Pe;function Le(){var e=(0,m.pC)(),n=(0,Z.Z)(),t=(0,m.s0)(),r=n.pathname,i=n.hash,d=(0,U.Z)(re),s=h()(d,2),f=s[0],w=s[1],$=(0,g.useRef)(null),F=(0,g.useContext)(an.Z),v=F.direction,j=(0,m.WF)(),L=j.loading;(0,g.useLayoutEffect)(function(){w==="cn"?T().locale("zh-cn"):T().locale("en")},[]),(0,g.useEffect)(function(){var u=document.getElementById("nprogress-style");u&&($.current=setTimeout(function(){var C;(C=u.parentNode)===null||C===void 0||C.removeChild(u)},0))},[]),(0,g.useEffect)(function(){(["","/"].some(function(u){return u===r})||["/index"].some(function(u){return r.startsWith(u)}))&&t("/components/overview")},[r]),(0,g.useEffect)(function(){var u,C=i.replace("#","");C&&((u=document.getElementById(decodeURIComponent(C)))===null||u===void 0||u.scrollIntoView())},[L,i]);var R=(0,g.useMemo)(function(){if(!(["","/"].some(function(u){return u===r})||["/index"].some(function(u){return r.startsWith(u)})))return r.startsWith("/theme-editor")?e:(0,o.jsx)(Ae,{children:e})},[r,e]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(m.ql,{encodeSpecialCharacters:!1,children:[(0,o.jsx)("html",{lang:w==="cn"?"zh-CN":w,"data-direction":v,className:z()({rtl:v==="rtl"})}),(0,o.jsx)("meta",{property:"og:description",content:f.description}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,o.jsxs)(Y.iV,{direction:v,locale:w==="cn"?nn.Z:void 0,children:[(0,o.jsx)(oe,{}),R]})]})}var De=Le},438199:function(b,M,a){"use strict";var B=a(667294),h=B.createContext({isMobile:!1,direction:"ltr",updateSiteConfig:function(){}});M.Z=h},533852:function(b,M,a){(function(B,h){b.exports=h(a(727484))})(this,function(B){"use strict";function h(y){return y&&typeof y=="object"&&"default"in y?y:{default:y}}var P=h(B),z={name:"zh-cn",weekdays:"\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),weekdaysShort:"\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),weekdaysMin:"\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),months:"\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),ordinal:function(y,T){return T==="W"?y+"\u5468":y+"\u65E5"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5E74M\u6708D\u65E5",LLL:"YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",LLLL:"YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",l:"YYYY/M/D",ll:"YYYY\u5E74M\u6708D\u65E5",lll:"YYYY\u5E74M\u6708D\u65E5 HH:mm",llll:"YYYY\u5E74M\u6708D\u65E5dddd HH:mm"},relativeTime:{future:"%s\u5185",past:"%s\u524D",s:"\u51E0\u79D2",m:"1 \u5206\u949F",mm:"%d \u5206\u949F",h:"1 \u5C0F\u65F6",hh:"%d \u5C0F\u65F6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4E2A\u6708",MM:"%d \u4E2A\u6708",y:"1 \u5E74",yy:"%d \u5E74"},meridiem:function(y,T){var N=100*y+T;return N<600?"\u51CC\u6668":N<900?"\u65E9\u4E0A":N<1100?"\u4E0A\u5348":N<1300?"\u4E2D\u5348":N<1800?"\u4E0B\u5348":"\u665A\u4E0A"}};return P.default.locale(z,null,!0),z})},342969:function(b,M){"use strict";var a={locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"};M.Z=a},163405:function(b,M,a){var B=a(373897);function h(P){if(Array.isArray(P))return B(P)}b.exports=h,b.exports.__esModule=!0,b.exports.default=b.exports},742281:function(b){function M(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}b.exports=M,b.exports.__esModule=!0,b.exports.default=b.exports},600861:function(b,M,a){var B=a(163405),h=a(379498),P=a(386116),z=a(742281);function y(T){return B(T)||h(T)||P(T)||z()}b.exports=y,b.exports.__esModule=!0,b.exports.default=b.exports},252069:function(b,M,a){"use strict";a.d(M,{Z:function(){return Y}});var B=a(281626),h=a(342969),P={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},z=P,y={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},h.Z),timePickerLocale:Object.assign({},z)};y.lang.ok="\u786E\u5B9A";var T=y,N=T,m="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",g={locale:"zh-cn",Pagination:B.Z,DatePicker:T,TimePicker:z,Calendar:N,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:m,method:m,array:m,object:m,number:m,date:m,boolean:m,integer:m,float:m,regexp:m,email:m,url:m,hex:m},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},Y=g}}]);
