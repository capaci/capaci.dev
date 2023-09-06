import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'


export default function Index() {
  const linkClasses = 'rounded-full px-6 py-2 bg-blue text-base font-bold mr-4'
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <section className="flex row items-center h-full justify-center px-8">
            <div className='
                mb-6
                lg:mb-0
                lg:pl-6
                lg:pr-24
                lg:w-6/12
                xl:w-4/12
                '>
              <img src="/assets/profile.jpg" alt="" className='max-w-lg w-full mx-auto mb-6 rounded-full' />
            </div>
            <div className="
                lg:w-6/12
                text-left
                ">
              <div>
                <label className="h5 text-subtext0 mb-6">Backend Developer!</label>
                <h1 className="h1 mb-6">Rafael Capaci</h1>
                <div
                  className="
                      content
                      leading-7
                      text-lg
                    "
                >
                  {/* <p className='mb-4'>Sou um Desenvolvedor Backend</p> */}
                  <p className="mb-2">
                    Desenvolvedor backend com experiência em diversas frentes do desenvolvimento de software, de sysadmin até o frontend.
                    Atualmente tenho interesse muito grande em arquitetura e engenharia de software.
                  </p>
                  <p className="mb-2">
                    Essa página foi criada para que eu possa compartilhar um pouco do meu conhecimento, além de também documentar meus aprendizados. Essa parte ainda está em construção =D
                  </p>

                </div>
              </div>
              <div className='flex justify-start mt-8'>
                {/* <Link
                  as={`/blog/`}
                  href="/blog/"
                  aria-label='Blog'
                  className={linkClasses}
                >
                  Posts
                </Link>
                <Link
                  as={`/about/`}
                  href="/about/"
                  aria-label='Sobre'
                  className={linkClasses}
                >
                  Sobre
                </Link> */}
              </div>
            </div>
            {/* </div> */}
          </section>
        </Container >
      </Layout >
    </>
  )
}
