import Table from '../lib/components/content/table';

// TODO: Use express to fetch json
import { promises as fs } from 'fs';
import { DeviceSize } from '../lib/components/content/types';
let file = await fs.readFile(process.cwd() + '/public/portfolio.json', 'utf8');
let data = JSON.parse(file);

const getContentComponents = () => {
    let len = data.sections.length;
    for (let index = 0; index < len; index++) {
        let section = data.sections[index];
        if (section.header == "Blog") {
            console.log(section.contentComponents);
            return section.contentComponents;
        }
    }
}

export default function Blog() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className='lg:py-24'>
                <a className='group mb-2 inline-flex items-center font-semibold leading-tight text-od-400' href='/'>{"<- "}Rob Salas</a>
                <h1 className='text-4xl font-bold tracking-tight text-stone-200 sm:text-5xl'>Life as it occurs to me</h1>
                <Table columnLabels={[{label:"Post date"}, 
                                      {label:"Title"},
                                      {label:"Tag", showOnDeviceSize: {size: DeviceSize.Large}},
                                      {label:"Link", showOnDeviceSize: {size: DeviceSize.Large}}]} contentComponents={getContentComponents()} />
            </div>
        </div>
    )
}
