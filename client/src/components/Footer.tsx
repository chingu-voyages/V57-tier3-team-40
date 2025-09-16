import { footLogo, members, figmaLogo, neonLogo } from '../constants/footer'
import { FaGithub, FaLinkedin, FaDocker, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'



const Footer = () => {
    
    return (
        <footer
            className="w-full flex flex-col bg-[#BFFFD1] text-[#104C35] px-4 py-12 md:py-20 bg-cover bg-top
            bg-[url('/mobile-wm.png')] sm:bg-[url('/tablet-wm.png')] md:bg-[url('/desktop-wm.png')]">
            <div className="flex justify-center items-center gap-4 mb-6 md:mb-10">
                <img src={footLogo} className="h-18 md:h-22 w-auto" />
            </div>
            <div className='container grid sm:grid-cols-2 mx-auto gap-4 mb-6 md:mb-10 xl:px-16'>
                {members.map((member, index) => (
                    <div className='group flex sm:flex-col lg:flex-row justify-between items-center sm:items-start border border-[#104C35]/60 
                    py-4 px-4 rounded-xl hover:bg-[#5FED83]/15 hover:border-[#5FED83]'>
                        <div className='flex flex-col sm:mb-4 lg:mb-0'>
                            <span className='md:text-lg font-bold group-hover:text-[#08872B]'>{member.name}</span>
                            <span className='text-sm md:text-base font-semibold'>{member.role}</span>
                        </div>
                        <div className='flex text-4xl sm:self-end lg:self-center gap-3'>
                            <a href={member.linkedin}><FaLinkedin className='text-[#0A66C2] hover:scale-120 transition-all duration-300'/></a>
                            <a href={member.github}><FaGithub className='text-black hover:scale-120 transition-all duration-300'/></a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='container mx-auto lg:grid lg:grid-cols-2'>
                <a 
                    href="https://github.com/chingu-voyages/V57-tier3-team-40" 
                    className='group flex justify-center items-center gap-4'
                >
                    <div className='flex items-center mb-6 gap-4'>
                        <FaGithub className='text-5xl text-black hover:scale-120 transition-all duration-300'/>
                        <p className='md:text-lg group-hover:text-[#08872B]'>Github Project Link - September 2025</p>
                    </div> 
                </a>
            
                <div className='flex flex-col mb-6 md:mb-10 items-center'>
                    <div>
                        <span className='text-sm md:text-base font-bold'>Technologies</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <SiTypescript className='text-5xl text-[#007ACC]'/> 
                        <FaReact className='text-[#61DAFB] text-6xl'/> 
                        <SiTailwindcss className='text-6xl text-[#2298BD]'/> 
                        <img src={figmaLogo} alt="figma logo" className='h-[3rem] w-auto'/>
                        <FaNodeJs className='text-6xl text-[#83CD29]'/> 
                        <img src={neonLogo} alt="neon logo" className='h-[3rem] w-auto'/>
                        <FaDocker className='text-6xl text-[#0288D1]'/> 
                    </div>
                </div>
            </div>
            <div className='text-xs text-center'>
                <p>Disclaimer: This website and its associated services are provided for demonstrative and educational purposes only.</p>
            </div>
            
        </footer>
    )
}


export default Footer