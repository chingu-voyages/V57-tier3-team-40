import { footLogo, waterMarkMobile, members } from '../constants/footer'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer 
            className='w-full flex flex-col bg-[#0b5a33] px-4 py-8 bg-cover' 
            style={{backgroundImage: `url(${waterMarkMobile})`}}
        >
            <div className="flex justify-center items-center gap-[1.5rem] pb-6">
                <img src={footLogo} className="h-15 w-auto" />
                <span className='text-[white] font-bold text-[1.25rem]'>Little Paws</span>
            </div>
            {members.map(member => (
                <div className='flex justify-between items-center border border-white/60 py-3 px-5 rounded-xl mb-4'>
                    <div className='flex flex-col text-white'>
                        <span className='font-bold'>{member.name}</span>
                        <span className='text-[.875rem] font-semibold'>{member.role}</span>
                    </div>
                    <div className='flex text-white text-4xl gap-4'>
                        <a href={member.linkedin}><FaLinkedin/></a>
                        <a href={member.github}><FaGithub/></a>
                    </div>
                </div>
            ))}
            <div className='flex justify-center items-center gap-4 text-white mt-4'>
                <div className='text-5xl'>
                    <a href="https://github.com/chingu-voyages/V57-tier3-team-40"><FaGithub/></a>
                </div>
                <p>Github Project Link - September 2025</p>
            </div>
        </footer>
    )
}


export default Footer