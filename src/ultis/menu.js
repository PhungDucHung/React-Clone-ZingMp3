import icons from "./icons"

const { MdOutlineLibraryMusic,HiOutlineChartPie ,TbChartArcs,MdOutlineFeed } = icons
export const sidebarMenu = [
    {
        path: 'personal',
        text: 'cá nhân',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'khám phá',
        end: true,
        icons: <HiOutlineChartPie size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zing-chart',
        icons: <TbChartArcs size={24} />
    },
    {
        path: 'follow',
        text: 'theo dõi',
        icons: <MdOutlineFeed size={24} />
    },
]