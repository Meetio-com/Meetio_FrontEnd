
import Button from './Button'

const Hero = () => {
  return (
    <section className='relative '>
        <div className="container grid grid-cols-2 max-lg:grid-cols-1 justify-center gap-10 pt-36 max-lg:pt-16">
            <div className='flex  flex-col items-start max-lg:items-center '>
                <h1 className='text-[38px] max-lg:text-[30px] text-[#000000] mt-10 font-bold max-lg:text-center'>Your ultimate platform for virtual and hybrid events.</h1>
                <p className='text-[25px] max-lg:text[20px] max-lg:text-center font-normal mt-5'>Host. Connect. Engage Seamlessly</p>
                <div className='mt-5'>
                    <img src="/people.png" alt="people" />
                </div>
                <div className='flex items-center mt-10 gap-3 '>
                    <Button containerClass='btn_primary' to='/create'>Create event</Button>
                    <Button containerClass='btn_secondary' to='/join'>Join event</Button>
                </div>
            </div>
            {/* hero images */}
            <div className="relative w-[450px] max-lg:w-full h-[350px] max-sm:h-[250px]">
                    <img 
                        src="/hero1.png" 
                        alt="hero1"  
                        className="absolute top-0 right-0 w-full h-auto max-sm:h-[200px]" 
                    />
                    <img 
                        src="/hero2.png" 
                        alt="hero2"  
                        className="absolute top-[150px] max-sm:top-[80px] right-6 w-full h-auto rounded-lg shadow-lg z-10" 
                    />
</div>
        </div>
    </section>
  )
}

export default Hero