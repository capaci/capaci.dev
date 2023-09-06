import { faCopy } from "@fortawesome/free-regular-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { TIME_TO_SHOW_CLIPBOARD_COPIED } from '../lib/constants'
import cn from "classnames"


type Props = {
  content: string
}

const CopyToClipboard = ({ content }: Props) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(content)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, TIME_TO_SHOW_CLIPBOARD_COPIED)
  }

  return (
    <button
      className={cn('absolute flex place-content-center top-0 right-0 z-10 m-2 border-solid border-2 rounded-lg', {
        'border-green text-green': isCopied,
        'border-base text-base': !isCopied,
      })}
      aria-label={isCopied ? 'Copied!' : 'Copy'}
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={isCopied ? faCheck : faCopy}
        className={cn('relative center', {
          'my-[9px] mx-[10px]': !isCopied,
          'my-[8px] mx-[9px]': isCopied,
        })}
      />
    </button>
  )
}

export default CopyToClipboard
