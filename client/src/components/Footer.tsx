import { footLogo, members, figmaLogo, neonLogo } from '../constants/footer'
import { FaGithub, FaLinkedin, FaDocker, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'



const Footer = () => {
    return (
        <footer
            className="w-full flex flex-col bg-[#BFFFD1] text-[#104C35] px-4 py-12 md:py-20 bg-cover 
            bg-[url('/mobile-wm.png')] sm:bg-[url('/tablet-wm.png')] md:bg-[url('/desktop-wm.png')]" 
            
        >
            <div className="flex justify-center items-center gap-4 pb-6 md:pb-10">
                <img src={footLogo} className="h-15 w-auto" />
                <span className='font-bold text-[1.5rem]'>Little Paws</span>
            </div>
            <div className='sm:flex flex-1 flex-wrap justify-between pb-6'>
                {members.map(member => (
                    <div className='group flex justify-between items-center sm:w-[49%] border border-[#104C35]/60 py-3 px-5 rounded-xl mb-4 hover:bg-[#5FED83]/15 hover:border-[#5FED83]'>
                        <div className='flex flex-col'>
                            <span className='font-bold group-hover:text-[#08872B]'>{member.name}</span>
                            <span className='text-sm font-semibold pr-7 md:pr-4'>{member.role}</span>
                        </div>
                        <div className='flex text-4xl gap-3 sm:pt-10 md:pt-7 lg:pt-0'>
                            <a href={member.linkedin}><FaLinkedin className='text-[#0A66C2] hover:scale-120 transition-all duration-300'/></a>
                            <a href={member.github}><FaGithub className='text-black hover:scale-120 transition-all duration-300'/></a>
                        </div>
                    </div>
                ))}
            </div>
            <div className='group flex justify-center mt-4 mb-6'>
                <a href="https://github.com/chingu-voyages/V57-tier3-team-40" className='flex items-center gap-4'>
                    <div className='text-5xl'>
                        <FaGithub className='text-black hover:scale-120 transition-all duration-300'/>
                    </div>
                    <p className='group-hover:text-[#08872B]'>Github Project Link - September 2025</p>
                </a>
            </div>
            <div className='flex flex-col mb-8 items-center'>
                <div>
                    <span className='text-sm font-bold'>Technologies</span>
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
            <div className='text-xs text-center'>
                <p>Disclaimer: This website and its associated services are provided for demonstrative and educational purposes only.</p>
            </div>
        </footer>
    )
}


export default Footer