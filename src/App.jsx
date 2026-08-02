import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import { useTheme } from './hooks'

// Below-the-fold sections load as separate chunks after the hero paints.
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Skills = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

/** Reserves vertical space so lazy chunks do not shift the page as they arrive. */
function Placeholder() {
  return <div className="min-h-[70vh]" aria-hidden="true" />
}

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <About />
        <Suspense fallback={<Placeholder />}>
          <Experience />
          <Projects />
          <Certifications />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
