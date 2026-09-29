import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Footer, Reserve } from './components/Reserve'
import { Aircraft, Engineering, Idea, Missions, Overview, Specs, Takeoff, Team } from './components/Sections'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Idea />
        <Overview />
        <Aircraft />
        <Takeoff />
        <Engineering />
        <Missions />
        <Specs />
        <Team />
        <Reserve />
      </main>
      <Footer />
    </>
  )
}
