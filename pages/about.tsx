import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{`Hello, I'm Rafael Capaci`}</title>
        </Head>
        <Container>
          <section className="section-sm">
            <div className="container">
              <div className="row justify-center">
                <div className="md:col-10 lg:col-7 text-center lg:w-8/12">
                  <img src="/assets/profile.jpg" alt="" className='h-48 mx-auto mb-6 rounded-full' />
                  {/* {{ partial "image"(dict "Src" .Params.image "Alt" .Title "Class" "mx-auto mb-6" "Size" "200x200") }} */}
                  <h2 className="h3 mb-6">Ola, eu sou o Rafael!</h2>
                  <div
                    className="
                      content
                      md:text-lg
                      lg:text-xl
                      text-center
                    "
                  >
                    <p>
                      Bacharel em Ciência da Computação pela UFPR e MBA em ciência de dados pela USP. Possui conhecimento e experiência multidisciplinar,
                      tendo atuado em diversos projetos que reuniam tecnologias como desenvolvimento web, banco de dados relacionais e não-relacionais,
                      sistemas distribuídos, blockchain Ethereum e metodologias ágeis. Atuou como co-organizador dos meetups Blockchain Curitiba e Curitiba JS.
                      Tem interesse em tópicos como arquitetura e engenharia de software, computação em nuvem, ciência de dados, inteligência artificial,
                      segurança e infraestrutura.
                    </p>
                    {/* <p>
                      Sou um desenvolvedor backend apaixonado por arquitetura e engenharia de software.
                      Neste blog eu compartilho um pouco do que sei e o que venho estudando
                    </p>
                    <p>
                      Caso queira saber um pouco mais do meu histórico, dê uma olhada no meu currículo.
                    </p>
                    <p>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container >
      </Layout >
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
