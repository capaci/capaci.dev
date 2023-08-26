import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SOCIAL_NETWORKS } from '../lib/constants'



const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="row justify-between items-center py-10">
          <div className="mb-8 text-center lg:mb-0 lg:text-left">
            <a className="navbar-brand inline-block text-2xl" href="/">
              capaci.dev
            </a>
          </div>
          <div className="mb-8 text-center lg:mb-0">
            <ul>
              <li className="m-3 inline-block">
                <a href="/about/">About</a>
              </li>
              <li className="m-3 inline-block">
                <a href="/elements/">Elements</a>
              </li>
              <li className="m-3 inline-block">
                <a href="/privacy-policy/">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="mb-8 text-center lg:mb-0 lg:mt-0 lg:text-right row">
            <ul className="social-icons">
              {SOCIAL_NETWORKS.map((network, idx) => (
                <li key={network.name} className={`inline ${idx === 0 ? ' ml-0' : 'ml-4'}`}>
                  <a href={network.href} aria-label={network.name} target="_blank" rel="nofollow noopener noreferrer" >
                    <FontAwesomeIcon icon={network.icon} size="2xl" style={{ color: "#ff890f", }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-border dark:border-darkmode-border border-t py-7">
          <div className="text-light dark:text-darkmode-light container text-center">
            <p>Designed &amp; Developed by <a href="https://zeon.studio" target="_blank">Rafael Capaci</a> based on <a href="https://next-blog-starter.vercel.app/" target="_blank" rel="noreferrer noopener nofollow">Next.js blog starter kit</a> and <a href="https://hugoplate.netlify.app/" target="_blank" rel="noreferrer noopener nofollow">Hugoplate</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
