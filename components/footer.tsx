import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SOCIAL_NETWORKS } from '../lib/constants'



const Footer = () => {
  return (
    <footer className="text-text border-t border-overlay0">
      <Container className='divide-y'>
        <div className="row justify-between items-center py-6">
          {/* <div className="text-center lg:mb-0 lg:text-left">
            <a className="navbar-brand inline-block text-2xl" href="/">
              capaci.dev
            </a>
          </div> */}
          {/* <div className="text-center lg:mb-0">
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
          </div> */}
          <div className="text-center lg:mb-0 lg:mt-0 lg:text-right">
            <ul className="social-icons">
              {SOCIAL_NETWORKS.map((network, idx) => (
                <li key={network.name} className={`inline ${idx === 0 ? ' ml-0' : 'ml-4'}`}>
                  <a href={network.href} aria-label={network.name} target="_blank" rel="nofollow noopener noreferrer" >
                    <FontAwesomeIcon icon={network.icon} size="2xl" className='text-yellow' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-light text-center">
            &copy; {new Date().getFullYear()} Rafael Capaci
            {/* <p>Designed &amp; Developed by <a href="https://zeon.studio" target="_blank">Rafael Capaci</a> based on <a href="https://next-blog-starter.vercel.app/" target="_blank" rel="noreferrer noopener nofollow">Next.js blog starter kit</a> and <a href="https://hugoplate.netlify.app/" target="_blank" rel="noreferrer noopener nofollow">Hugoplate</a> */}
            {/* </p> */}
          </div>
        </div>
        {/* <div className="border-border py-7">
        </div> */}
      </Container>
    </footer>
  )
}

export default Footer
