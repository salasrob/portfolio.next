
"use client";

import Link from "next/link";
import { TableProps, LabelProps, DeviceSize } from "../content/types";

function mapColumnLabels(columnLabel:LabelProps, index:number) {
    const baseLabelStyle = "py-4 pr-8 text-sm font-semibold text-slate-200";
    var appliedClass = "";

    if (columnLabel.showOnDeviceSize?.size == DeviceSize.Small){
        appliedClass = `hidden ${baseLabelStyle} sm:table-cell`;
    }
    else if(columnLabel.showOnDeviceSize?.size == DeviceSize.Medium)
    {
        appliedClass = `hidden ${baseLabelStyle} md:table-cell`;
    }
    else if(columnLabel.showOnDeviceSize?.size == DeviceSize.Large)
    {
        appliedClass = `hidden ${baseLabelStyle} lg:table-cell`;
    }
    else{
        appliedClass = baseLabelStyle;
    }

    return (
        <th key={index} className={appliedClass}>
          {columnLabel.label}
        </th>
    );
  }
  

const Table: React.FC<TableProps> = ({ columnLabels, contentComponents }) => {
    return (
        <table className="mt-12 w-full border-collapse text-left table-fixed">
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                <tr>
                    {columnLabels.map(mapColumnLabels)}
                </tr>
            </thead>
            <tbody>
                {contentComponents.map((element, index) =>
                    <tr key={index} className="py-4 pr-8 text-sm font-semibold text-slate-200">
                        { element.date ? <td className="py-4 pr-4 align-top text-sm">
                                            <div className="translate-y-px">{element.date}</div>
                                         </td> : null }
                        { element.title ? <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                            <div>
                                                <div className="block lg:hidden">
                                                  <Link
                                                    href={element.href!}
                                                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                                                    <span className="inline-block">{element.title}</span>
                                                  </Link>
                                                </div>
                                                <div className="hidden lg:block">{element.title}</div>
                                            </div>
                                          </td> : null }

                        { element.company ? <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                                                <div className="translate-y-px whitespace-nowrap">{element.company}</div>
                                            </td>
                                            : null }
                        { element.badges ? <td className="hidden py-4 pr-4 align-top whitespace-normal min-w-0 lg:table-cell">
                                                <ul className="flex -translate-y-1.5 flex-wrap">{element.badges?.map((element, index) =>
                                                    <li key={index} className="my-1 mr-1.5">
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{element.label}</div>
                                                    </li>)}
                                                </ul>
                                            </td> : null }
                        { element.attachments ? <td className="hidden py-4 align-top lg:table-cell">
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
                                                </td> : null }
                    </tr>)}
            </tbody>
        </table>
    );
};

export default Table;