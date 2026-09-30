import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Nav } from './components/Nav'
import { Angles, Applications, Contact, Drawings, Economics, Engineering, Footer, Overview, Scenes, Specs, Takeoff, Team } from './components/Sections'

export default function App() {
  return (
    <Lightbox>
      <Nav />
      <main id="top">
        <Hero />
        <Overview />
        <Angles />
        <Applications />
        <Scenes />
        <Takeoff />
        <Engineering />
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
