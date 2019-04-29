import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export const Code = (props) => {
  return <div style={{ position: "relative" }}>
    <CodeRenderer {...props} />
    <button
      style={{ position: "absolute", top: 10, right: 10 }}
      onClick={() => {
        // Copying code here!
      }}
    >
      Copy
    </button>
  </div>
}

const CodeRenderer = ({ codeString, language, ...props }) => {
  console.log(codeString, language);
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight {...defaultProps} code={codeString} language={language}>
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
    )
  }
}