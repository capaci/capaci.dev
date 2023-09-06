import Markdown from 'markdown-to-jsx'
import React from 'react'
import markdownStyles from './markdown-styles.module.css'

import CodeBlock from './code-block'


type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <Markdown
      className={markdownStyles['markdown']}
      options={{
        createElement(type, props, children: any) {  // TODO: fix typing
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
