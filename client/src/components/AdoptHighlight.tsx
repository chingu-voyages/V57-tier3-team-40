import adoptImg from "../assets/homepage/adoptHighlight.avif"

const AdoptHighlight = () => {
    return (
        <section className="max-w-[1440px] mx-auto lg:flex lg:flex-row-reverse items-center lg:mb-38 xl:mb-50">
            <div className="px-5 mb-10 lg:mb-0 lg:w-[48%] lg:px-20 xl:px-28">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#104C35] font-semibold xl:font-medium text-center mb-5 xl:mb-8">Adopt a pet,<br/>don't shop.</h2>
                <p className="lg:text-[1.25rem] xl:text-[1.5rem]">If you are an animal lover and looking to get a pet for your home, consider adopting one. There are many wonderful pets waiting for you to take them to their forever home.</p>
            </div>
            <div className="lg:px-0 lg:w-[52%]">
                <img src={adoptImg} alt='dogs playing in puddle' className="md:h-[90%]"/>
            </div>
        </section>
    )
}

export default AdoptHighlight