import Link from "next/link";
import { LinkProps } from "./types";

const InsidePageNavigation: React.FC<LinkProps> = ({ title, href }) => {
  const isHashLink = href?.startsWith('#');
  const Tag = isHashLink ? 'a' : Link;

  return (
    <li>
      <Tag className="group flex items-center py-3" href={href!}>
        <span className="nav-indicator mr-4 h-px w-8 bg-stone-600 transition-all group-hover:w-16 group-hover:bg-stone-200 group-focus-visible:w-16 group-focus-visible:bg-stone-200 motion-reduce:transition-none">
        </span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-stone-500 group-hover:text-stone-200 group-focus-visible:text-stone-200">
          {title}
        </span>
      </Tag>
    </li>
  );
};

export default InsidePageNavigation;