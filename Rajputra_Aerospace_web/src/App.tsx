import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Footer, Reserve } from './components/Reserve'
import { Aircraft, Design, Engineering, Landing, Missions, Safety, Specs } from './components/Sections'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Safety />
        <Design />
        <Aircraft />
        <Engineering />
        <Specs />
        <Landing />
        <Missions />
        <Reserve />
      </main>
      <Footer />
    </>
  )
}
