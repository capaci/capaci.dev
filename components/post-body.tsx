import Markdown from 'markdown-to-jsx'
import React from 'react'
import markdownStyles from './markdown-styles.module.css'
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import CodeBlock from './code-block'


type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <Markdown
      className={markdownStyles['markdown']}
      options={{
        createElement(type, props, children) {
          if (type === 'pre') {
            return <pre>
              {React.createElement(CodeBlock, { block: true, ...children.props })}
            </pre>
          }

          return (
            React.createElement(type, props, children)
          )
        },
        overrides: {
          code: CodeBlock,
        }
      }}
    >
      {content}
    </Markdown>
  )
}

export default PostBody
