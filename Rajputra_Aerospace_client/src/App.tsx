import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Nav } from './components/Nav'
import { Applications, Contact, Drawings, Economics, Footer, Overview, Scenes, Specs, Takeoff, Team } from './components/Sections'

export default function App() {
  return (
    <Lightbox>
      <Nav />
      <main id="top">
        <Hero />
        <Overview />
        <Applications />
        <Scenes />
        <Takeoff />
        <Specs />
        <Drawings />
        <Economics />
        <Team />
        <Contact />
      </main>
      <Footer />
    </Lightbox>
  )
}
