import { LinkProps } from "./types";

const Attachment: React.FC<LinkProps> = ({ title, href, download }) => {
    return (
        <li className="mr-4">
            <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" href={href} download={download}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" clipRule="evenodd" />
                </svg>
                <span>{title}</span>
            </a>
        </li>
    );
};

export default Attachment;