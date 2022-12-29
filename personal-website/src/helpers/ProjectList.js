import Assembler from '../assets/assembler.png'
import Website from '../assets/personalwebsite.JPG'
import GISPicture from '../assets/gis.JPG'
import Dijkstra from '../assets/dijkstra.JPG'
import CS3214 from '../assets/fairlockOutput.JPG'
import Cush from '../assets/cush.JPG'
import Threadpool from '../assets/threadpool.JPG'

export const ProjectList = [
    {
        name: 'Personal Website',
        url: 'https://github.com/deddye/PersonalSite',
        image: Website,
        skills: 'ReactJS, CSS, Research',
        private: false,
        description: 'Portfolio webpage I made to display experiences and to begin learning React',
    },
    {
        name:'Cush',
        url: 'https://github.com/deddye/Cush',
        image: Cush,
        skills: 'C, Basic OS functionality, POSIX library, Linux (CentOS8)',
        private: true,
        description: 'Program to run a custom shell which can handle a few builtins, processes, pipes, and I/O'
    },
    {
        name:'Threadpool',
        url: 'https://github.com/deddye/Threadpool',
        image: Threadpool,
        skills: 'C, Understanding of threads, Linux (CentOS8)',
        private: true,
        description: 'Threadpool which accepts tasks and completes them, implements work stealing for performance'
    },
    {
        name:'CS3214 / Systems exercises',
        url: 'https://github.com/deddye/My-Favorite-Exercises-from-CS3214',
        image: CS3214,
        skills: 'C, Pthread library',
        private: true,
        description: 'Some of my favorite exercises from CS3214 / Systems at VT (Fall 2022)'
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