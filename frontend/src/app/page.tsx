import InsidePageNavigation from "./lib/components/buttons/insidePageNavigation";
import ExternalPageNavigation from "./lib/components/buttons/externalPageNavigation";
import Card from "./lib/components/content/card";
import SocialLink from "./lib/components/buttons/socialLink";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">Robert Salas</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Software Engineer at Microsoft
            </h2>
            <p className="mt-4 max-w-xs leading-normal">I build accessible, performant, and engaging experiences for desktop and the web.</p>
            <nav>
              <ul className="mt-16 w-max">
                <InsidePageNavigation title="About" href="#about" />
                <InsidePageNavigation title="Experience" href="#experience" />
                <InsidePageNavigation title="Projects" href="#projects" />
              </ul>
            </nav>
          </div>
          <ul className="ml-1 mt-8 flex items-center">
            <SocialLink title="Github" href="https://github.com/salasrob" viewBox="0 0 16 16" src="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            <SocialLink title="LinkedIn" href="https://www.linkedin.com/in/robertsalas/" viewBox="0 0 24 24" src="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
          </ul>
        </header>
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section id="about">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
              <p>Shortly after leaving the U.S. Army I decided to go back to college. Four years later I was completing an MBA program and decided to jump into coding and never looked back. Today, I design and build accessible, performant, and engaging experiences for Windows Shell.
              </p>
              <p>I value building things that are useful and that can be used by everyone. Data privacy, Safe and responsible use of Artificial Intelligence, and contributing to empowering humans is important to me.
              </p>
              <p>
                When I'm not working, I'm usually practicing Brazilian Jiu Jitsu, hiking, playing with legos with my kids, or playing computer games.
              </p>
            </div>
          </section>
          <section id="experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Experience
              </h2>
            </div>
            <div>
              <ol>
                <li className="mb-12">
                  <div>
                    <Card title="Test"/>
                  </div>
                </li>
              </ol>
                <ExternalPageNavigation title="View Full Résumé" href="/"/>
            </div>
          </section>
          <section id="projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Projects
              </h2>
            </div>
            <div>
              <ol>
                <li className="mb-12">
                  <div>
                    <Card title="Test"/>
                  </div>
                </li>
              </ol>
                <ExternalPageNavigation title="View Full Project Archive" href="/archive"/>
            </div>
          </section>
          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>Inspired by Brittany Chiang's portfolio</p>
          </footer>
        </main>
      </div>
    </div>
  )
}
