
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Story from './components/Story'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-hidden'>
      <Navbar />
      <Hero/>
      <About />
      <Feature/>
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
