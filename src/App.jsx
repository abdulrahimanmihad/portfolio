import { Suspense, lazy } from 'react'
import { MotionConfig } from 'framer-motion'
import MobileBar from './components/MobileBar'
import Panel from './components/Panel'
import About from './components/About'

// Below-the-fold sections load as separate chunks after the panel paints.
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Background = lazy(() => import('./components/Background'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

/** Reserves vertical space so lazy chunks do not shift the page as they arrive. */
function Placeholder() {
  return <div className="min-h-[70vh]" aria-hidden="true" />
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-paper"
      >
        Skip to content
      </a>

      <MobileBar />

      {/* Two columns from lg: the identity panel stays put, the dossier scrolls. */}
      <div className="lg:grid lg:grid-cols-[minmax(22rem,38%)_minmax(0,1fr)] lg:items-start">
        <Panel />

        <main id="main" className="bg-paper">
          <About />
          <Suspense fallback={<Placeholder />}>
            <Experience />
            <Projects />
            <Skills />
            <Background />
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </main>
      </div>
    </MotionConfig>
  )
}
