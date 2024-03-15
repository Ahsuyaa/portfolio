import Image from 'next/image'
import Intro from "../components/intro/Intro"
import SectionDivider from "../components/divider/SectionDivider"
import About from "../components/about/About"
import Skills from "../components/skills/Skills"
import Contact from "../components/contact/Contact"
import Education from "../components/education/Education"
import Footer from "../components/footer/Footer"
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
    
      <Intro/>
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Skills/>
      <SectionDivider/>
      <Contact/>
      <SectionDivider/>
      <Education/>
      <Footer/>
    </main>
  )
}
