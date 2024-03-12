import profile from './media/profile.jpg'
import { SiReact, SiExpress, SiGit, SiMongodb, SiNodedotjs, SiSolidity, SiEthereum, SiGithub, SiMysql, SiRedux, SiSpring, SiSpringboot, SiSpringsecurity, SiFirebase } from "react-icons/si";
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
            'resumeLink': 'https://drive.google.com/file/d/1dWOSmNsmRyWEDZ3yUTAC_24tVHotDnh-/view?usp=sharing',
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
                'name': 'Web3 Polling System'
            },
            {
                'coverImage': insultPage,
                'name': 'Insult Page'
            },
            {
                'coverImage': simplyRecipes,
                'name': 'SimplyRecipes'
            },
            {
                'coverImage': projectCover,
                'name': 'Project Name'
            },
        ]
    }
