import Link from 'next/link'
import cn from 'classnames'

type Props = {
  tags: string[]
  className?: string
}

const TagsList = ({ tags, className }: Props) => {
  return (
    <ul className={
      cn(className,
        'flex justify-start'
      )}>
      {tags.map((tag) => (
        <li key={tag}>
          {/* <li key={tag} className="hover:font-bold ml-2"> */}
          <Link
            as={`/tags/${tag}`}
            href="/tags/[tag]"
            aria-label={tag}
            className="rounded-full px-6 py-3 bg-blue text-base font-bold mr-4"
          >
            {`#${tag}`}
          </Link>
        </li>
      ))}
    </ul>

  )
}

export default TagsList
