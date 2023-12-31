import Article from "../lib/components/articles/articles"
import NavButton from "../lib/components/buttons/navButton"
import DefaultFooter from "../lib/components/footers/defaultFooter"
import Header from "../lib/components/headers/header"
import Navbar from "../lib/components/navigationBars/navigationBar"

const navItems = [<NavButton title="Nav" url="/about"/>, <NavButton title="Logo" url="/home"/>, <NavButton title="Settings" url="/home"/>]

export default function Page() {
    return (
      <>
      <div className="pt-20">
        <Header elements={navItems} />
        <Navbar elements={navItems} isExpanded={true} />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Article
            title="My Blog Post"
            subtitle="This is my first blog post"
            author="Rob Salas"
            date="Today"
            sections={[
              { title: 'Section 1', subtitle: 'Subtitle 1', content: 'This is the content for section 1' },
              { title: 'Section 2', subtitle: 'Subtitle 2', content: 'This is the content for section 2' },
            ]}
          />
        </div>
        <div>
          <DefaultFooter/>
        </div>
      </main>
      </>
    )
  }