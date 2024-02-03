
import { TableProps } from "../content/types";



const Table: React.FC<TableProps> = ({ columnLabels, contentComponents }) => {
    return (
        <table className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                <tr>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
                </tr>
            </thead>
            <tbody>
                {contentComponents.map((element, index) =>
                    <tr key={index} className="py-4 pr-8 text-sm font-semibold text-slate-200">
                        <td className="py-4 pr-4 align-top text-sm">
                            <div className="translate-y-px">{element.date}</div>
                        </td>
                        <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                            <div>
                                <div className="block sm:hidden">
                                    <a href={element.href} className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 hover:text-slate-200 focus-visible:text-teal-300 sm:hidden group/link text-base" target="_blank">
                                        <span className="inline-block">{element.title}</span>
                                    </a>
                                </div>
                                <div className="hidden sm:block">{element.title}</div>
                            </div>
                        </td>
                        <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                            <div className="translate-y-px whitespace-nowrap">{element.company}</div>
                        </td>
                        <td className="hidden py-4 pr-4 align-top lg:table-cell">
                            <ul className="flex -translate-y-1.5 flex-wrap">{element.badges?.map((element, index) =>
                                <li key={index} className="my-1 mr-1.5">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{element.label}</div>
                                </li>)}
                            </ul>
                        </td>
                        <td className="hidden py-4 align-top sm:table-cell">
                            <ul className="translate-y-1">{element.attachments?.map((element, index) =>
                                <li key={index} className="mb-1 flex items-center">
                                    <a href={element.href} className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm" target="_blank">
                                        <span>
                                            <span className="inline-block">
                                                {element.title}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            )}</ul>
                        </td>
                    </tr>)}
            </tbody>

        </table>
    );
};

export default Table;