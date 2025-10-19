import About from '@/components/About'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div className="bg-[radial-gradient(circle_at_center,_var(--color-brandRed)_60%,_color-mix(in_lab,_var(--color-brandRed)_80%,_white_20%)_100%)] text-white px-4 md:px-8 pb-8 pt-[80px]">
      <div className="flex flex-col justify-center text-center py-8 max-w-[1150px] mx-auto">
        <h2 className="text-5xl pt-8 pb-8">Hello 👋</h2>
        <p className="text-2xl pb-4">
          I'm Shadae, a Full Stack Web Developer based in Pōneke, Aoteroa.
        </p>
      </div>
      <Projects />
      <About />
      <Contact />
    </div>
  )
}
