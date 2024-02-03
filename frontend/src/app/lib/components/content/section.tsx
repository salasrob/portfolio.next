import ExternalPageNavigation from "../buttons/externalPageNavigation";
import { LandingPageSectionProps } from "../content/types";
import Card from "./card";

const Section: React.FC<LandingPageSectionProps> = ({ header, contentComponents, externalLink }) => {
  return (
    <section id={header.toLowerCase()} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {header}
        </h2>
      </div>
      <div>
        <ol>

              {contentComponents?.map((element, index) =>
                <Card key={index}
                  title={element.title}
                  href={element.href}
                  company={element.company}
                  date={element.date}
                  subtitle={element.subtitle}
                  description={element.description}
                  attachments={element.attachments}
                  badges={element.badges}
                  image={element.image} />)}
        </ol>
        {externalLink ?
          <ExternalPageNavigation title={externalLink.title} href={externalLink.href} />
          : null}
      </div>
    </section>
  );
};

export default Section;