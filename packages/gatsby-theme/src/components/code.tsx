import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import DraculaTheme from "prism-react-renderer/themes/dracula";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Prism from "prismjs/components/prism-core";
import * as CopyToClipboard from "react-copy-to-clipboard";

Prism.languages.graphql = {
  comment: /#.*/,
  string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:true|false)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
  "attr-name": /[a-z_]\w*(?=\s*(?:\([^()]*\))?:)/i,
  keyword: [
    { pattern: /(fragment\s+(?!on)[a-z_]\w*\s+|\.{3}\s*)on\b/, lookbehind: !0 },
    /\b(?:query|fragment|mutation)\b/
  ],
  operator: /!|=|\.{3}/,
  punctuation: /[!(){}\[\]:=,]/
};

export const Code = props => {
  return (
    <div style={{ position: "relative" }}>
      <CodeRenderer {...props} />
      <CopyToClipboard
        text={props.codeString}
        onCopy={() => console.log("copied!")}
      >
        <button style={{ position: "absolute", top: 10, right: 10 }}>
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

const CodeRenderer = ({ codeString, language, ...props }) => {
  console.log(codeString, language);
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Highlight
        {...defaultProps}
        theme={DraculaTheme}
        Prism={Prism}
        code={codeString}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  }
};
