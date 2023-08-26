import CopyToClipboard from "./copy-to-clipboard"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'


type Props = {
    className: string,
    children?: React.ReactNode,
  }
  
  const CodeBlock = ({ className, children}: Props) => {
    const language = className.replace('lang-', '')

    return (
      <div style={{ position: 'relative' }}>
        <CopyToClipboard content={String(children)} />
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          language={language}
          PreTag="div"
        />
      </div>
    )
  }
  
  export default CodeBlock
  