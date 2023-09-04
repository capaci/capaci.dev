import cn from 'classnames'
import { useContext } from 'react'
import { THEME_CSS_CLASSES } from '../lib/constants'
import { ThemeContext } from '../lib/contexts'
import Footer from './footer'
import Menu from './menu'
import Meta from './meta'


type Props = {
  preview?: boolean
  showMenu?: boolean
  showFooter?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, showMenu=true, showFooter=true, children }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Meta />
      <div className={cn(
        "flex flex-col justify-between min-h-screen bg-base text-text",
        THEME_CSS_CLASSES[theme])
      }>
        {showMenu && <Menu preview={preview} />}
        <main className='min-h-64 py-20'>{children}</main>
        {showFooter && <Footer />}
      </div>
    </>
  )
}

export default Layout
