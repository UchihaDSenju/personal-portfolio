import profile from './media/profile.jpeg'
import { SiReact, SiExpress, SiGit, SiMongodb, SiNodedotjs, SiSolidity, SiEthereum, SiGithub, SiMysql, SiRedux, SiSpring, SiSpringboot, SiSpringsecurity, SiFirebase, SiFigma } from "react-icons/si";
import projectCover from './media/project.png'
import { insultPage, Blockchain, simplyRecipes } from './media/projects';
export const data = 
    {
        'contactLinks': {
            'github': 'https://github.com/UchihaDSenju',
            'linkedIn': 'https://www.linkedin.com/in/mohamed-tariq-315549202/',
            'instagram': 'https://www.instagram.com/a.k.a_dark_ghost/',
            'whatsapp': ''
        },
        'aboutDesc': {
            'desc': 'I have experience in building web and mobile applications using ReactJs using cool libraries and frameworks',
            'resumeLink': 'https://drive.google.com/file/d/1D1Kltj5zAn68R4-wVGQbgX4LWMZhRkzD/view?usp=sharing',
            'profile': profile
        },
        techStacks: [
            {
                'logo': SiReact,
                'techName': 'ReactJs'
            },
            {
                'logo': SiMongodb,
                'techName': 'MongoDb'
            },
            {
                'logo': SiExpress,
                'techName': 'ExpressJs'
            },
            {
                'logo': SiRedux,
                'techName': 'Redux'
            },
            {
                'logo': SiNodedotjs,
                'techName': 'NodeJs'
            },
            {
                'logo': SiSolidity,
                'techName': 'Solidity'
            },
            {
                'logo': SiGit,
                'techName': 'Git'
            },
            {
                'logo': SiGithub,
                'techName': 'Github'
            },
            {
                'logo': SiEthereum,
                'techName': 'Ethereum'
            },
            {
                'logo': SiMysql,
                'techName': 'MySql'
            },
            {
                'logo': SiFirebase,
                'techName': 'FireBase'
            },
            {
                'logo': SiFigma,
                'techName': 'Figma'
            },
            // {
            //     'logo': SiSpring,
            //     'techName': 'MySql'
            // },
            // {
            //     'logo': SiSpringboot,
            //     'techName': 'MySql'
            // },
            // {
            //     'logo': SiSpringsecurity,
            //     'techName': 'MySql'
            // },
        ],
        'projects': [
            {
                'coverImage': Blockchain,
                'name': 'Web3 Polling System',
                'link': 'https://uchihadsenju.github.io/web3_polling_system/'
            },
            {
                'coverImage': insultPage,
                'name': 'Insult Page',
                'link': 'https://uchihadsenju.github.io/insult-page-2/'
            },
            {
                'coverImage': simplyRecipes,
                'name': 'SimplyRecipes',
                'link': 'https://uchihadsenju.github.io/Flypat-Internship-2/'
            },
            // {
            //     'coverImage': projectCover,
            //     'name': 'Project Name'
            // },
        ]
    }
