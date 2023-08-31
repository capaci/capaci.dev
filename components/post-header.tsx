import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import TagsList from './tags-list'

type Props = {
  title: string
  coverImage: string
  date: string
  tags: string[]
  author: Author
}

const PostHeader = ({ title, coverImage, date, author, tags }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:mb-12 flex justify-between">
        <Avatar name={author.name} picture={author.picture} />
        <DateFormatter dateString={date} />
      </div>

      {/* haven't decided if posts will have a cover image. If so, name will probably appear below for mobile */}
      {/* {coverImage ?
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} />
        </div>
        :
        <></>
      }

      <div className="max-w-2xl mx-auto md:hidden flex md:mb-12 flex justify-between">
        <Avatar name={author.name} picture={author.picture} />
        <DateFormatter dateString={date} />
      </div> */}
    </>
  )
}

export default PostHeader
