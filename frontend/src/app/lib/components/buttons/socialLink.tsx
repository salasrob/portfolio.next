import { SocialProps } from "./types";

const SocialLink: React.FC<SocialProps> = ({ title, href, viewBox, src }) => {
    return (
        <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href={href}>
                <span className="sr-only">
                    {title}
                </span>
                <svg xmlns="xmlns=http://www.w3.org/2000/svg" viewBox={viewBox} fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d={src}>
                    </path>
                </svg>
            </a>
        </li>
    );
};

export default SocialLink;