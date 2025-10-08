import { footLogo, members, figmaLogo, neonLogo } from '../constants/footer'
import { FaGithub, FaLinkedin, FaDocker, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'



const Footer = () => {
    
    return (
       <footer
            className="w-full flex flex-col bg-white text-[#104C35] px-4 py-12 md:py-20 bg-cover bg-top
            bg-[url('/footer/mobile-wm.png')] sm:bg-[url('/footer/tablet-wm.png')] md:bg-[url('/footer/desktop-wm.png')]">
            <div className="flex justify-center items-center mb-6 md:mb-10">
                <img src={footLogo} className="h-18 md:h-22 w-auto" alt="little paws logo" />
            </div>
            <div className='container mx-auto grid sm:grid-cols-2 gap-4 mb-6 md:mb-10 xl:px-20'>
                {members.map((member, index) => (
                    <div
                        key={index} 
                        className='group flex sm:flex-col lg:flex-row justify-between items-center sm:items-start border border-[#104C35]/60 
                        py-5 px-5 rounded-xl hover:bg-[#5FED83]/15 hover:border-[#5FED83]'>
                        <div className='flex flex-col sm:mb-3 lg:mb-0'>
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
            <div className='container mx-auto grid lg:grid-cols-2 lg:items-center gap-4 xl:px-20'>
                <div className='group flex justify-center lg:justify-start mb-6 lg:mb-0'>
                    <a href="https://github.com/chingu-voyages/V57-tier3-team-40" className='flex items-center gap-4'>
                        <FaGithub className='text-5xl lg:text-6xl text-black hover:scale-120 transition-all duration-300'/>
                        <p className='group-hover:text-[#08872B] lg:text-lg'>Github Project Link - September 2025</p>
                    </a>
                </div>
                <div className='flex flex-col mb-10 items-center lg:items-start gap-1'>
                    <div>
                        <span className='text-sm lg:text-lg font-bold'>Technologies</span>
                    </div>
                    <div className='flex items-center gap-4 flex-wrap justify-center lg:flex-nowrap'>
                        <SiTypescript className='text-5xl lg:text-6xl text-[#007ACC]'/> 
                        <FaReact className='text-[#61DAFB] text-6xl lg:text-7xl'/> 
                        <SiTailwindcss className='text-6xl lg:text-7xl text-[#2298BD]'/> 
                        <img src={figmaLogo} alt="figma logo" className='h-[3rem] lg:h-[3.5rem] w-auto'/>
                        <FaNodeJs className='text-6xl lg:text-7xl text-[#83CD29]'/> 
                        <img src={neonLogo} alt="neon logo" className='h-[3rem] lg:h-[3.5rem] w-auto'/>
                        <FaDocker className='text-6xl lg:text-7xl text-[#0288D1]'/> 
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