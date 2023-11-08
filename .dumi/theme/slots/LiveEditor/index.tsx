import { LiveContext } from 'dumi';
import { highlight, languages } from 'prismjs';
import React, { useContext } from 'react';
import Editor from 'react-simple-code-editor';

const LiveEditor = () => {
  const { code, onCodeChange } = useContext(LiveContext);
  return (
    <Editor
      value={code ? code.replace('antd', 'csces-antd') : code}
      readOnly={true}
      onValueChange={onCodeChange}
      highlight={(code) => highlight(code, languages.js, 'tsx')}
      padding={20}
      style={{
        position: 'relative',
        textAlign: 'left',
        boxSizing: 'border-box',
        padding: '0px',
        overflow: 'hidden',
        fontSize: '13px',
        lineHeight: 2,
        fontFamily: '"Lucida Console", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      }}
    />
  );
};
// `    position: relative;
// text-align: left;
// box-sizing: border-box;
// padding: 0px;
// overflow: hidden;
// font-size: 13px;
// line-height: 2;
// font-family: ;`
export default LiveEditor;
