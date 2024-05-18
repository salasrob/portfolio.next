import Attachment from "../buttons/attachment";
import ExternalPageNavigation from "../buttons/externalPageNavigation";
import Badge from "./badge";
import { CardProps } from "./types";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ title, href, download, company, subtitle, description, date, image, badges, attachments }) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
        </div>
        {date ? <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="July to December 2015">{date}</header> : null}
        <div className="z-10 sm:col-span-6"><h3 className="font-medium leading-snug text-slate-200">
          <div>
            <ExternalPageNavigation title={title + " - " + company} href={href ?? "/"} download={download} />
          </div>
          {subtitle ?
            <div>
              <div className="text-slate-500" aria-hidden="true">
                {subtitle}
              </div>
            </div>
            : null}
        </h3>
          {description ? <p className="mt-2 text-sm leading-normal">{description}</p> : null}

          {(attachments != null || attachments != undefined) && attachments.length > 0 ?
            <ul className="mt-2 flex flex-wrap" aria-label="Related links">
              {attachments?.map((element, index) => <Attachment key={index} title={element.title} href={element.href} download={element.download}/>)}
            </ul>
            : null}

          {badges != undefined && badges.length > 0 ?
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {badges?.map((element, index) => <Badge key={index} label={element.label} />)}
            </ul>
            : null}
        </div>
        {image?.src ? <Image className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"  src={image.src} alt="" data-nimg="1" decoding="async" loading="lazy" width="200" height="48" /> : null}
      </div>
    </li>
  );
};

export default Card;