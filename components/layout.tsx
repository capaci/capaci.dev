import Menu from './menu'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col justify-between min-h-screen">
        <Menu preview={preview} />
        <main className='flex-auto min-h-64'>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
