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
        description: 'Portfolio webpage I made to display experiences and to begin learning React',
    },
    {
        name: 'Assembler',
        url: 'https://github.com/deddye/MIPSAssembler',
        image: Assembler,
        skills: 'C, Assembly, Pointers, Git, CentOS8, MIPS32 Instruction set',
        private: true,
        description: 'Program to read input file of Assembly instructions and convert to binary representation for MIPS32.',
    },
    {
        name: 'GIS Data System',
        url: 'https://github.com/deddye/J4-CS3114SPRING22',
        image: GISPicture,
        skills: 'Java, Quadtree, Hash Table, Buffer pool, I/O',
        private: true,
        description: 'Program that reads DB file of features and uses Quadtree and Hash Table to find them based on different commands.',
    },
    {
        name: 'Dijkstra\'s Shortest Path',
        url: 'https://github.com/deddye/DijkstraSSAD',
        image: Dijkstra,
        skills: 'Java, Adjacency List, Min Heap, I/O',
        private: true,
        description: 'Algorithm to find the shortest path from a source vertex to every other vertex in a graph.',
    }
]