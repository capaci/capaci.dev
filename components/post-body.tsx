// import markdownStyles from './markdown-styles.module.css'
import Markdown from 'markdown-to-jsx'
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import CodeBlock from './code-block'


type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <Markdown
        options={{
          overrides: {
            code: CodeBlock,
          }
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}

export default PostBody
