import CopyToClipboard from "./copy-to-clipboard"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  className: string,
  children?: React.ReactNode,
  block?: boolean
}

const CodeBlock = ({ className, children, block, ...props }: Props) => {
  const language = className?.replace('lang-', '')
  if (!block) {
    return <code
      className="code-inline"
    >
      {children}
    </code >
  }

  return (
    <div style={{ position: 'relative' }}>
      <CopyToClipboard content={String(children)} />
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        showLineNumbers
        language={language}
        PreTag="div"
        style={oneDark}
      />
    </div>
  )
}

export default CodeBlock
