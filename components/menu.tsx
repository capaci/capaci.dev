import { useContext } from "react";
import { ThemeContext } from "../lib/contexts";
import { faMoon, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as faLightbulbSolid } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as faLightbulbRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type Props = {
  preview?: boolean
}

const Menu = ({ preview }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header sticky top-0 z-30 border-b border-overlay0 bg-mantle">
      <nav className="navbar container">
        {/* <div className="order-0"> */}
          <a className="navbar-brand block" href="/">
            <span className="logo text-peach">capaci.dev</span>
            {/* <img fetchPriority="high" decoding="async" className="img logo-dark" width="160" height="32" src="/images/logo_hud3822dc52499c854acb9b180fed4f736_3648_320x0_resize_q90_h2_lanczos_3.webp" alt="Hugoplate" /> */}
          </a>
        {/* </div> */}
        {/* MOBILE NAV */}
        {/* <input id="nav-toggle" type="checkbox" className="hidden" /> */}
        {/* <label htmlFor="nav-toggle" className="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1"> */}
        {/* <svg id="show-button" className="h-6 fill-current block" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V0z">
              </path>
            </svg> */}
        {/* <svg id="hide-button" className="h-6 fill-current hidden" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)">
              </polygon>
            </svg> */}
        {/* </label> */}
        <ul id="nav-menu" className="navbar-nav order-3 hidden lg:flex w-full text-xl pb-6 lg:order-1 lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8 items-center">
          {/* <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="/blog/">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/talks/">Talks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about/">Sobre</a>
          </li>
          <li className="nav-item">

            <button className="nav-link" onClick={toggleTheme}>
              {/* {`Tema ${theme}`} */}
              {/* <FontAwesomeIcon icon={theme == 'light' ? faSun : faMoon} size="lg" aria-label="Switch theme" className="text-yellow"/> */}
              <FontAwesomeIcon
                // icon={theme == 'light' ? faLightbulbSolid : faLightbulbRegular}
                icon={theme == 'light' ? faToggleOn : faToggleOff}
                size="lg"
                aria-label="Switch theme"
                className='text-yellow'
              />
            </button>
          </li>
          {/* <li className="nav-item nav-dropdown group relative">
            <span className="nav-link inline-flex items-center">Pages
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z">
                </path>
              </svg>
            </span>
            <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
              <li className="nav-dropdown-item">
                <a className="nav-dropdown-link" href="/404/">404 Page</a>
              </li>
              <li className="nav-dropdown-item">
                <a className="nav-dropdown-link" href="/authors/">Authors</a>
              </li>
              <li className="nav-dropdown-item">
                <a className="nav-dropdown-link" href="/blog/">Blog</a>
              </li>
              <li className="nav-dropdown-item">
                <a className="nav-dropdown-link" href="/categories/">Categories</a>
              </li>
              <li className="nav-dropdown-item">
                <a className="nav-dropdown-link" href="/contact/">Contact</a>
              </li>
            </ul>
          </li> */}
          <li className="mt-4 inline-block lg:hidden">
            <a className="btn btn-outline-primary btn-sm" href="/contact">get a quote</a>
          </li>
        </ul>
        {/* <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          <button aria-label="search" className="border-border text-dark hover:text-primary dark:border-darkmode-border mr-5 inline-block border-r pr-5 text-xl dark:text-white" data-target="search-modal">
            <i className="fa-solid fa-search">
            </i>
          </button> */}
        {/* <div className="theme-switcher mr-5">
              <input id="theme-switcher" data-theme-switcher="" type="checkbox" />
                <label htmlFor="theme-switcher">
                  <span className="sr-only">theme switcher</span>
                  <span>
                    <svg className="absolute left-[4px] top-[4px] z-10 opacity-100 dark:opacity-0" viewBox="0 0 56 56" fill="#fff" height="16" width="16">
                      <path d="M30 4.6c0-1-.9-2-2-2a2 2 0 00-2 2v5c0 1 .9 2 2 2s2-1 2-2zm9.6 9a2 2 0 000 2.8c.8.8 2 .8 2.9.0L46 13a2 2 0 000-2.9 2 2 0 00-3 0zm-26 2.8c.7.8 2 .8 2.8.0.8-.7.8-2 0-2.9L13 10c-.7-.7-2-.8-2.9.0-.7.8-.7 2.1.0 3zM28 16A12 12 0 0016 28a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0028 16zm23.3 14c1.1.0 2-.9 2-2s-.9-2-2-2h-4.9a2 2 0 00-2 2c0 1.1 1 2 2 2zM4.7 26a2 2 0 00-2 2c0 1.1.9 2 2 2h4.9c1 0 2-.9 2-2s-1-2-2-2zm37.8 13.6a2 2 0 00-3 0 2 2 0 000 2.9l3.6 3.5a2 2 0 002.9.0c.8-.8.8-2.1.0-3zM10 43.1a2 2 0 000 2.9c.8.7 2.1.8 3 0l3.4-3.5c.8-.8.8-2.1.0-2.9s-2-.8-2.9.0zm20 3.4c0-1.1-.9-2-2-2a2 2 0 00-2 2v4.9c0 1 .9 2 2 2s2-1 2-2z">
                      </path>
                    </svg>
                    <svg className="absolute left-[4px] top-[4px] z-10 opacity-0 dark:opacity-100" viewBox="0 0 24 24" fill="none" height="16" width="16">
                      <path fill="#000" fill-rule="evenodd" clip-rule="evenodd" d="M8.2 2.2c1-.4 2 .6 1.6 1.5-1 3-.4 6.4 1.8 8.7a8.4 8.4.0 008.7 1.8c1-.3 2 .5 1.5 1.5v.1A10.3 10.3.0 0112.4 22 10.3 10.3.0 013.2 6.7c1-2 2.9-3.5 4.9-4.4z">
                      </path>
                    </svg>
                  </span>
                </label>
            </div> */}
        {/* <script>var darkMode=!0,themeSwitch;localStorage.getItem("theme")==="dark"?darkMode=!0:localStorage.getItem("theme")==="light"&&(darkMode=!1),darkMode&&document.documentElement.classList.toggle("dark"),themeSwitch=document.querySelectorAll("[data-theme-switcher]"),document.addEventListener("DOMContentLoaded",()=>{[].forEach.call(themeSwitch, function (e) { e.checked = !!darkMode, e.addEventListener("click", () => { document.documentElement.classList.toggle("dark"), localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light") }) })})</script> */}
        {/* <a href="/contact" className="btn btn-outline-primary btn-sm hidden lg:inline-block">get a quote</a> */}
        {/* </div> */}
      </nav>
      {/* <Container> */}
      {/* <div className="py-2 text-center text-sm"> */}
      {/* <nav className="navbar container">
              fqklsdfjThe source code for this blog is{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </nav> */}
      {/* </Container> */}
    </header>
    // </div>
  )
}

export default Menu
