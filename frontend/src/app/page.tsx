import InsidePageNavigation from "./lib/components/buttons/insidePageNavigation";
import SocialLink from "./lib/components/buttons/socialLink";
import Section from "./lib/components/content/section";

// TODO: Use express to fetch json
import { promises as fs } from 'fs';
import DefaultFooter from "./lib/components/footers/defaultFooter";
let file = await fs.readFile(process.cwd() + '/public/portfolio.json', 'utf8');
let data = JSON.parse(file);

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">{data.name}</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              {data.jobTitle} at {data.company}
            </h2>
            <p className="mt-4 max-w-xs leading-normal">I build accessible, performant, and engaging experiences for desktop and the web.</p>
            <nav>
              <ul className="mt-16 w-max">
                {data.internalNavigationLinks.map((element: any, index: any) => <InsidePageNavigation key={index} title={element.title} href={element.href} download={element.download} />)}
              </ul>
            </nav>
          </div>
          <ul className="ml-1 mt-8 flex items-center">
            {data.socialLinks.map((element: any, index: any) => <SocialLink key={index} title={element.title} href={element.href} viewBox={element.viewBox} src={element.src} download={element.download} />)}
          </ul>
        </header>
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
              <p>Shortly after leaving the U.S. Army I decided to go back to college. Four years later I was completing an MBA program and decided to jump into coding and never looked back. Today, I design and build accessible, performant, and engaging experiences for Windows Shell.
              </p>
              <p>I value building things that are useful and that can be used by everyone. Data privacy, safe and responsible use of Artificial Intelligence, and contributing to empowering humans is important to me.
              </p>
              <p>
                When I'm not working, I'm usually practicing Brazilian Jiu Jitsu, hiking, playing with legos with my kids, or playing computer games.
              </p>
            </div>
          </section>
          {data.sections.map((element: any, index: any) => <Section key={index} header={element.header} contentComponents={element.contentComponents} externalLink={element.externalLink} />)}
          <DefaultFooter/>
        </main>
      </div>
    </div>
  )
}
