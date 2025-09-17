import footerLogo from '../assets/footer/footerLogo.png'
import figmaIcon from '../assets/footer/figma.svg'
import neonIcon from '../assets/footer/neon-logo.svg'


export const footLogo = footerLogo
export const figmaLogo = figmaIcon
export const neonLogo = neonIcon

export interface Member {
    name: string
    role: string
    github: string
    linkedin: string
}

export const members: Member[] = [
    {
        name: "Valeriy Lysenko",
        role: "Scrum Master / Web Developer",
        github: "https://github.com/Valeriusdev",
        linkedin: "https://www.linkedin.com/in/valeriylysenko"
    },
    {
        name: "Ekaterina Kushnir",
        role: "Web Developer",
        github: "https://github.com/katiaku",
        linkedin: "https://www.linkedin.com/in/ekaterina-kushnir-mikhaylova"
    },
    
    {
        name: "Aigul Yermagambetova",
        role: "Web Developer",
        github: "https://github.com/aigul-ermak",
        linkedin: "https://www.linkedin.com/in/aigul-ermak"
    },
    {
        name: "Mingshi Hui",
        role: "UX / UI Designer",
        github: "https://github.com/mingshi0821",
        linkedin: "https://www.linkedin.com/in/mingshi-hui"
    },
    {
        name: "Rigo L",
        role: "Web Developer",
        github: "https://github.com/r1g023",
        linkedin: "https://www.linkedin.com/in/rigo0101"
    },
    {
        name: "Rika Miyata",
        role: "Web Developer",
        github: "https://github.com/Tayrika",
        linkedin: "https://www.linkedin.com/in/rika-miyata-4bab99243"
    },
    {
        name: "Alyssia Tavares",
        role: "Web Developer",
        github: "https://github.com/alyssiatavares",
        linkedin: "https://www.linkedin.com/in/alyssia-tavares"
    },
    {
        name: "Ruben Aguilar",
        role: "Web Developer / UI Designer",
        github: "https://github.com/rubenaguilardev",
        linkedin: "https://www.linkedin.com/in/rubenaguilar-"
    },
]

