import Assembler from '../assets/assembler.png'
import Website from '../assets/personalwebsite.JPG'
import GISPicture from '../assets/gis.JPG'
import Dijkstra from '../assets/dijkstra.JPG'

export const ProjectList = [
    {
        name: 'Personal Website',
        url: 'https://github.com/deddye/PersonalSite',
        image: Website,
        skills: 'ReactJS, JavaScript, CSS, Research',
        private: false,
    },
    {
        name: 'Assembler',
        url: 'https://github.com/deddye/MIPSAssembler',
        image: Assembler,
        skills: 'C, Assembly, Pointers, Git, CentOS8, MIPS32 Instruction set',
        private: true,
    },
    {
        name: 'GIS Data System',
        url: 'https://github.com/deddye/J4-CS3114SPRING22',
        image: GISPicture,
        skills: 'Java, Quadtree, Hash Table, Buffer pool, I/O',
        private: true,
    },
    {
        name: 'Dijkstra\'s Shortest Path',
        url: 'https://github.com/deddye/DijkstraSSAD',
        image: Dijkstra,
        skills: 'Java, Min Heap, I/O',
        private: true,
    }
]